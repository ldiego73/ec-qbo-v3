export const StoreActions = {
  SelectCategory: "SELECT_CATEGORY",
  SetName: "SET_NAME",
  SelectProduct: "SELECT_PRODUCT",
};

const getDefaultCategory = () => {
  const query = new URLSearchParams(window.location.search);

  if (query.has("category")) return parseInt(query.get("category"), 10);

  return 0;
};

export const initialState = {
  category: getDefaultCategory(),
  name: "",
  product: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case StoreActions.SelectCategory:
      return { ...state, category: action.category };
    case StoreActions.SetName:
      return { ...state, name: action.name };
    case StoreActions.SelectProduct:
      return { ...state, product: action.product };
    default:
      return { ...state };
  }
}
