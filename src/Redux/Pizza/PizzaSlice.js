import { createSlice, current } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: [
    {
      id: 1,
      name: "4 saisson",
      topping: ["tomate", "onion", "4 cheese", "olive"],
      price: 20,
    },
    {
      id: 2,
      name: "Thono",
      topping: ["tomate", "thon", "1cheese", "olive"],
      price: 12,
    },
    {
      id: 3,
      name: "Margaritta",
      topping: ["tomate", "1cheese", "olive"],
      price: 10,
    },
  ],
  reducers: {
    addTopping: (state, action) => {
      console.log(action.payload);
      const {id,topping} = action.payload
      const addTopping = state.find(elemnt=> elemnt.id ===parseInt(id) )
      if (addTopping) {
        addTopping.topping.push(topping)
      }else{
        alert('not found');
      }
    },
   
  },
});

export const { addTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
