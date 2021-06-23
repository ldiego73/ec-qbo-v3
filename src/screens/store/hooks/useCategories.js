import { useApi } from "../../../hooks";
import { mapCategoryDtoToModel } from "../core/mappers";

export function useCategories() {
  const { response } = useApi("/categories");

  return response && response.map(category => mapCategoryDtoToModel(category));
}
