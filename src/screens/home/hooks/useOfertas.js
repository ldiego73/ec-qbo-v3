import { useApi } from "../../../hooks";
import { mapOfertasDtoToModel } from "../core/mappers";

export function useOfertas() {
  const { response } = useApi("/oferts");

  return response && response.map(product => mapOfertasDtoToModel(product));
}
