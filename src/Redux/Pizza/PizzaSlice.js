// Import necessary functions from the Redux Toolkit library
import { createSlice, current } from "@reduxjs/toolkit";

// Create a Redux slice for managing pizza data
export const pizzaSlice = createSlice({
  name: "pizza", // Name of the slice
  initialState: [
    // Initial state containing an array of pizza objects
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
    // Define a reducer function named 'addTopping' to add toppings to a pizza
    addTopping: (state, action) => {
      console.log(action.payload); // Log the payload for debugging
      const { id, topping } = action.payload; // Destructure id and topping from the action payload
      const addTopping = state.find((element) => element.id === parseInt(id)); // Find the pizza by id
      if (addTopping) {
        addTopping.topping.push(topping); // Add the topping to the selected pizza
      } else {
        alert('not found'); // Show an alert if the pizza with the given id is not found
      }
    },
  },
});

// Export the 'addTopping' action from the pizza slice
export const { addTopping } = pizzaSlice.actions;

// Export the pizza reducer, which handles state updates
export default pizzaSlice.reducer;
