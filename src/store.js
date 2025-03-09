import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    },
    updateCard: (state, action) => {
      return state.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );
    },
  },
});

export const { addCard, deleteCard, updateCard } = cardsSlice.actions;
export const store = configureStore({ reducer: { cards: cardsSlice.reducer } });