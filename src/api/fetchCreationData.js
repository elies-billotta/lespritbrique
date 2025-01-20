import axios from 'axios';

const url = 'https://script.google.com/macros/s/AKfycbwZ7Y533-5n8V8R6IEL7WMUrV9NJ8XJZ5RHO-WMcSL-36rJWcMxL_AJfa7At4FUjKDQ/exec';

export const fetchCreationData = async () => {
  try {
    const response = await axios.get(url);
    const creationData = response.data.map(creation => {
      return {
        ...creation,
        id: parseInt(creation.id, 10),
        title: creation.title,
        slug : creation.slug,
        subtitle : creation.subtitle,
        cover : creation.cover,
        coverImage : creation.coverImage,
        mainImage: creation.mainImage,
        description: creation.description,
        images: creation.images,
      };
    });
    return creationData;
  } catch (error) {
    console.error('Error fetching creations data:', error);
    return [];
  }
};

export default fetchCreationData;
