export function mapBannerDtoToModel(dto) {
  return {
    id: dto.id,
    url: `${process.env.REACT_APP_API_URL}/banners/${dto.imagen.replace(
      ".png",
      ".jpg"
    )}`,
  };
}

export function collectionBannersDtoToModels(dto) {
  return dto.map(item => mapBannerDtoToModel(item));
}
