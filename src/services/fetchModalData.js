import axios from 'axios';

const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=Fyo0U--ItsYDnNgEVWqfwmN87kI0PKkqknlQd-ekrT8Efu_332fcuOXjYS5ZfYtA4lvuKTGqUlYZ1rlYUM3qOKMgxb23pCGGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCOiRlOSIVEURWqx2OGFt_mNdMKUy_-c18hlJf001-iII_NGsovg_gfUZhbaHld_uBshofxqmLWsybD3HWHKg0LRPnXZTiPJ-g&lib=Mw35HKvdgOIi33gGbGG6As6ecXaZMlLdi';

export const fetchModalData = async () => {
    try {
      const response = await axios.get(url);
      const modalsData = response.data.map(modal => {
        return {
          ...modal,
          modal_id: parseInt(modal.modal_id, 10),
          modal_title: modal.modal_title.toUpperCase(),
          gallery_id: parseInt(modal.gallery_id, 10),
        };
      });
      return modalsData;
    } catch (error) {
      console.error('Error fetching modals data:', error);
      return [];
    }
  };
  
  export default fetchModalData;