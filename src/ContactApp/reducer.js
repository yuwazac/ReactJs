export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'toggleFavorite':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, favorite: !todo.favorite }
          : todo
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
          
      );
      case 'save':
        return [{...state, text: action.payload}];
    default:
      return state;
  }
};
