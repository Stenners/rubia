import StoryblokClient from 'storyblok-js-client'
 
const Storyblok = new StoryblokClient({
    accessToken: 'xtnXUMZqfHuT1dq6dcac7gtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export const getData = async (slug, context) => {
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  };

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft";
    // appends the cache version to get the latest content
    params.cv = Date.now();
  }

  // loads the story from the Storyblok API
  const { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  return data;
}
 
export default Storyblok