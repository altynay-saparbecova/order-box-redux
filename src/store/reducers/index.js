import { ADD_ORDER } from "../actions";
import { ADD_DELETE } from "../actions";
const defaultState = {
  //orders пустой массив
  orders: [],
  totalPrice: 0,
  totalCount: 0,
};
//reducer таза функция
//эки аргументти кутот (state,action)
export const rootReducer = (state = defaultState, action) => {
  //type -деген ключун текшеребиз
  switch (action.type) {
    case ADD_ORDER:
      // findIndex 
      let is_chosen = state.orders.findIndex(
        (item) => item.title === action.payload.title
      );
      //index 1 барабар болбосо indexси келет жана...
      if (is_chosen !== -1) {
        //стордун orders ключтун копиясын жасайбыз
        let arr = [...state.orders];
        // orders тен is_chosen индекс менен бизге керектуу элементтти таап count деген ключун перезапись кылабыз жана count+1 
        arr[is_chosen].count = arr[is_chosen].count + 1;
        //бул жакта sum деген ключун перезапись кылабыз
        arr[is_chosen].sum = arr[is_chosen].sum + action.payload.price;
        return {
          //объекти кайтарабыз
          ...state,
          //ordersке жаны озгорулгон массивти перезапись кылабыз
          orders: arr,
        };
      } else {
        return {
          ...state,
          orders: [
            ...state.orders,
            {
              title: action.payload.title,
              price: action.payload.price,
              //по умолчанию 1 штуктан кошобуз
              count: 1,
              //суммасын дагы чыгарабыз
              sum: action.payload.price
            },
          ],
        };
      }

    case ADD_DELETE:
      //стордун orders ключтун копиясын жасайбыз
      let arr1 = [...state.orders]
      //findindex
      let is_chosen1 = state.orders.findIndex(
        (item) => item.title === action.payload.title
      )
      if (is_chosen1 !== -1) {
        if (arr1[is_chosen1].count > 1) {
          // orders тен is_chosen1 индекс менен бизге керектуу элементтти таап count деген ключун перезапись кылабыз жана count-1 
          arr1[is_chosen1].count = arr1[is_chosen1].count - 1
          arr1[is_chosen1].sum = arr1[is_chosen1].sum - action.payload.price
          return {
            ...state,
            orders: arr1,
          }
        } else {
          return {
            ...state,
            orders: arr1.filter((el) => el.title !== action.payload.title),
          }
        }
      }
    //по defoult state ти кайтарыш керек
    default:
      return state;
  }
};
