import axios from 'axios';

const url = 'https://script.google.com/macros/s/AKfycbzHz9nPHotft8y6E2zIWiweeUj5JDmzBibJpcEVuQcRcDiwv6qGrssiGmlGORn3fFXI/exec';

export const fetchImageGallery = async () => {
    try {
      const response = await axios.get(url);
      const cardsData = response.data.map(ImageGallery => {
        return {
          ...card,
          card_id: parseInt(card.card_id, 10),
          title: card.title.toUpperCase(),
        };
      });
      return cardsData;
    } catch (error) {
      console.error('Error fetching cards data:', error);
      return [];
    }
  };
  
  export default fetchImageGallery;