import React, { createContext } from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Hours from "../components/hours";
import Contact from "../components/contact";
import GreyMap from "../components/map";
import { getData } from "../libs/storyblok";

export const StoryblokContext = createContext();

const Home = ({ story, preview }) => {
  
  return (
    <StoryblokContext.Provider value={story}>
      <Header nude />
      {/* <SEO title="Home" /> */}
      <Landing />
      <Hours />
      <Contact />
      <GreyMap />
    </StoryblokContext.Provider>
  );
};

export async function getStaticProps(context) {
  const { story } = await getData('home-page', context);
  
  return {
    props: {
      story: story || false,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
}

export default Home;
