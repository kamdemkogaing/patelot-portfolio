"use client";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";

const FunctionUseCallback = () => {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("SIDE EFFECT"), []);

  // useCallback mémorise la fonction pour éviter qu'elle ne soit recréée à chaque rendu.
  const handleClick = useCallback(() => {
    console.log("Mounted");
    setCount((prevCount) => prevCount + 1);
  }, []); // Dépendances vides, la fonction ne sera recréée qu'une fois.

  return (
    <div className="my-4">
      <p>Compteur : {count}</p>
      <Button onClick={handleClick}>Incrémenter</Button>
    </div>
  );
};

export default FunctionUseCallback;
