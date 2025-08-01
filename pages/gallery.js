import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";

const Container = styled.section`
  padding: 70px 30px 0;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const InstagramPost = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PostCaption = styled.p`
  padding: 15px;
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  background: white;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #e74c3c;
  background: #fdf2f2;
  border-radius: 8px;
  margin: 20px 0;
`;

const SetupMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #2c3e50;
  background: #ecf0f1;
  border-radius: 8px;
  margin: 20px 0;
  line-height: 1.6;
`;

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);

        // Check if we have the Instagram access token
        const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

        if (!accessToken) {
          setPosts([]);
          setLoading(false);
          return;
        }

        // Fetch user's media from Instagram Basic Display API
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=12`
        );

        const data = await response.json();

        // Check if there's an error in the response
        if (data.error || !data.data) {
          setPosts([]);
          setLoading(false);
          return;
        }

        // Filter for image posts and format the data
        const imagePosts = data.data
          .filter(
            (post) =>
              post.media_type === "IMAGE" ||
              post.media_type === "CAROUSEL_ALBUM"
          )
          .map((post) => ({
            id: post.id,
            media_url: post.media_url || post.thumbnail_url,
            caption: post.caption || "Instagram post",
            permalink: post.permalink,
            timestamp: post.timestamp,
          }))
          .slice(0, 12); // Limit to 12 posts

        setPosts(imagePosts);
        setLoading(false);
      } catch (err) {
        console.error("Instagram API Error:", err);
        setPosts([]);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Container>
          <h2>Gallery</h2>
          <LoadingMessage>Loading gallery...</LoadingMessage>
        </Container>
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <Header />
        <Container>
          <h2>Gallery</h2>
          <SetupMessage>No content found.</SetupMessage>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Gallery</h2>
        <GalleryGrid>
          {posts.map((post) => (
            <InstagramPost key={post.id}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PostImage src={post.media_url} alt="Instagram post" />
              </a>
              <PostCaption>
                {post.caption && post.caption.length > 100
                  ? `${post.caption.substring(0, 100)}...`
                  : post.caption}
              </PostCaption>
            </InstagramPost>
          ))}
        </GalleryGrid>
      </Container>
    </>
  );
};

export default Gallery;
