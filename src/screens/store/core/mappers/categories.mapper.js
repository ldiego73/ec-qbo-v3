export function mapCategoryDtoToModel(dto) {
  return {
    id: dto.id,
    name: dto.name,
    image: `${process.env.REACT_APP_API_URL}/categories/${dto.imagen}`,
  };
}

export function collectionCategoriesDtoToModels(dto) {
  return dto.map((item) => mapCategoryDtoToModel(item));
}
