import axios from 'axios';

const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=lVC2gLy1AHHUD8UlzNJPv54QlIjYzg4fAnYwsocLMISFgLA4c8Pawg_0MHzHhxS970Xiw4X_jAoz51N2Y1BuJzN2DiPlFR4Sm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLfkSTs8CkWSxieg72p3vLhjI3vlWgQeiiqEdpUXLakzSdA37m4Arbrw45CSAxk8QTMrx5NKez3zpY5wR4QnFuomm3vrl0AQZg&lib=Mw35HKvdgOIi33gGbGG6As6ecXaZMlLdi';

export const fetchCardsData = async () => {
  try {
    const response = await axios.get(url);
    const cardsData = response.data.map(card => {
      return {
        ...card,
        sizeX: parseInt(card.sizeX, 10),
        title: card.title.toUpperCase(),
      };
    });
    return cardsData;
  } catch (error) {
    console.error('Error fetching cards data:', error);
    return [];
  }
};

export default fetchCardsData;
