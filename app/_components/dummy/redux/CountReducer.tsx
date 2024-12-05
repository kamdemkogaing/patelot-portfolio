import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./StoreReducer";

/* 3. Zugriff auf den Zustand mit useSelector und Aktionen auslösen mit useDispatch */

const CounterReducer = () => {
  // Zustand aus dem Store abrufen
  const count = useSelector((state: RootState) => state.count);

  // Dispatch für Aktionen
  const dispatch = useDispatch();

  return (
    <div>
      <div className="text-xl mb-4">Count: {count}</div>
      <Button
        variant="destructive"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </Button>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </Button>
    </div>
  );
};

export default CounterReducer;
