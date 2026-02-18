import * as XLSX from 'xlsx';

const XLSX_URL = '/data.xlsx';

export const fetchCreationData = async () => {
  try {
    const response = await fetch(XLSX_URL);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    // Feuille Creation
    const creationSheet = workbook.Sheets['Creation'];
    if (!creationSheet) throw new Error('Feuille "Creation" introuvable');
    const creationRows = XLSX.utils.sheet_to_json(creationSheet);

    // Feuille ImageGallery
    const imageGallerySheet = workbook.Sheets['ImageGallery'];
    if (!imageGallerySheet) throw new Error('Feuille "ImageGallery" introuvable');
    const imageRows = XLSX.utils.sheet_to_json(imageGallerySheet);

    const creations = creationRows.map(creation => {
      const images = imageRows
        .filter(img => img.creation_id === creation.id)
        .map(img => img.image_link);

      return {
        ...creation,
        id: parseInt(creation.id, 10),
        title: creation.title,
        slug: creation.slug,
        subtitle: creation.subtitle,
        cover: creation.cover,
        coverImage: creation.coverImage,
        mainImage: creation.mainImage,
        description: creation.description,
        images,
      };
    });

    return creations;
  } catch (error) {
    console.error('Erreur lors du chargement du fichier XLSX :', error);
    return [];
  }
};

export default fetchCreationData;
