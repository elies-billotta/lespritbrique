import axios from 'axios';

const url = 'https://script.google.com/macros/s/AKfycbyh29PdGbd3rm_U_WO6xF8rwRPlnjYcrUjTnZI5U_9tw1Pk3QWSWWO2EILGUlQsjQD1/exec';

export const fetchModalData = async () => {
    try {
      const response = await axios.get(url);
      const modalsData = response.data.map(modal => {
        return {
          ...modal,
          modal_id: parseInt(modal.modal_id, 10),
          modal_title: modal.modal_title.toUpperCase(),
          id_gallery: parseInt(modal.id_gallery, 10),
        };
      });
      return modalsData;
    } catch (error) {
      console.error('Error fetching modals data:', error);
      return [];
    }
  };
  
  export default fetchModalData;