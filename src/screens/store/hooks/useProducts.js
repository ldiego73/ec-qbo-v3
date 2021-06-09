import { useApi } from "../../../hooks";
import { mapProductsDtoToModel } from "../core/mappers";

export function useProducts(categoryId, name) {
  const { response } = useApi("/products");

  if (!response) return null;

  const products = response.map((product) => mapProductsDtoToModel(product));

  let filterProducts;

  if (categoryId)
    filterProducts = products.filter((p) => p.categoryId === categoryId);
  else filterProducts = [...products];

  if (name) {
    filterProducts = filterProducts.filter(
      (p) => p.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }

  let data = [];
  let i = 0;

  filterProducts.forEach((product, index) => {
    if (index % 3 === 0) {
      data[i] = [];
    }

    data[i].push({
      key: `product-${index}`,
      product,
    });

    if (index % 3 === 2) i += 1;
  });
  
  return data;
}
