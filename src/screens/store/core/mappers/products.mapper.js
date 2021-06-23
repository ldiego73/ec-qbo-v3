/**
 * ENTITY => Representa un objeto del negocio o en mi tabla de BD
 * DTO => Representa el objeto de transferencia para obtener,
 *        procesar o enviar información.
 * MODEL => Representa un parte de la entidad,
 *        que mayormente es utilizado para la UI, Backend
 */
export function mapProductsDtoToModel(dto) {
  return {
    name: dto.name,
    categoryId: dto.category_id,
    category: dto.group,
    price: dto.price,
    priceOld: dto.price_old,
    id: dto.id,
    image: `https://ec-qbo.herokuapp.com/products/${dto.image}`,
  };
}

export function collectionProductsDtoToModels(dto) {
  return dto.map(item => mapProductsDtoToModel(item));
}
