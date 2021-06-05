//константаларды чон тамга менен жонотобуз
export const ADD_ORDER = "ADD_ORDER";
export const ADD_DELETE = "ADD_DELETE"

//action creators деген функцияларды жазып чыгабыз
export const add_order = (item) => ({
  type: ADD_ORDER,
  payload: item
});

export const add_delete = (item) => ({
  //объектин ичинде ключтарын жазып кетебиз
  type: ADD_DELETE,
  payload: item //item деген объкт келет
});