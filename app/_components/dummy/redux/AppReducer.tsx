"use client";

import { Provider } from "react-redux";
import Section from "../../helpers/Section";
import CounterReducer from "./CountReducer";
import { store } from "./StoreReducer";

/* 2. Provider hinzufügen
Um Redux in React zu nutzen, wird der Provider von react-redux verwendet, um den Store der App bereitzustellen. */

const AppReducer = () => {
  return (
    <Provider store={store}>
      <Section>
        <CounterReducer />
      </Section>
    </Provider>
  );
};

export default AppReducer;
