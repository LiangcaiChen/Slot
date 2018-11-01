const slotReducerDefaultState = [];

export default (state = slotReducerDefaultState, action) => {
  switch (action.type) {
      case "ADD_SLOT":
          return [...state, action.slot];

      case "REMOVE_SLOT":
          return state.filter(({id})=> id !== action.id);

      case 'EDIT_SLOT':
          return state.map((slot) => {
              if(slot.id === action.id) {
                  return {
                      ...slot,
                      ...action.updates
                  };
              } else {
                  return slot;
              }
          });

      default:
          return state;
  }
};