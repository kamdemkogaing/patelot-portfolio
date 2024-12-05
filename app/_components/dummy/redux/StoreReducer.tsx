/* eslint-disable @typescript-eslint/no-unused-vars */
import { legacy_createStore as createStore } from "redux";

// Initialer Zustand
/* 1. Setup des Redux-Stores
Zuerst definieren wir einen Store und einen Reducer, der angibt, wie sich der Zustand ändert. */

const insitialSate = {
  count: 0,
};

const StoreReducer = (state = insitialSate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store erstellen
export const store = createStore(StoreReducer);

export type RootState = ReturnType<typeof StoreReducer>;
