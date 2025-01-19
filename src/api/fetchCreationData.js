import axios from 'axios';

const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=Bb_jsoM05mKHABrX9bI8dUQ2nDqeBNbbT2l4WkUUXak09szBJJ4pbzxboExnz2s-2HFEfwI9jHs1KI6fJjC4RJ-o4fCULZCOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDbihY82xnJe0NdFNnY0smpxeXN2bNBCzGfudfyRn-ZDjHSq9s5v3T-PMqU5044INp4iv2wY1P_iHCrsUV_pIZ8Ll4MCicDn9w&lib=Mw35HKvdgOIi33gGbGG6As6ecXaZMlLdi';

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
