/**
 * ENTITY => Representa un objeto del negocio o en mi tabla de BD
 * DTO => Representa el objeto de transferencia para obtener,
 *        procesar o enviar información.
 * MODEL => Representa un parte de la entidad,
 *        que mayormente es utilizado para la UI, Backend
 */
export function mapOfertasDtoToModel(dto) {
  return {
    name: dto.name,
    category: dto.group,
    price: dto.price,
    priceOld: dto.price_old,
    id: dto.id,
    image: `https://ec-qbo.herokuapp.com/products/${dto.imagen}`,
  };
}

export function collectionOfertasDtoToModel(dto) {
  return dto.map(item => mapOfertasDtoToModel(item));
}
