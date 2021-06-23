import { useApi } from "../../../hooks";
import { mapPopularesDtoToModel } from "../core/mappers";

export function usePopulares() {
  const { response } = useApi("/populars");

  return response && response.map(product => mapPopularesDtoToModel(product));
}
