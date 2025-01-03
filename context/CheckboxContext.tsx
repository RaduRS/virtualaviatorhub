"use client";
import { createContext, useContext, useState, useEffect } from "react";

type CheckboxContextType = {
  checkedItems: Record<string, boolean>;
  toggleItem: (id: string) => void;
};

const CheckboxContext = createContext<CheckboxContextType | undefined>(
  undefined
);

export const CheckboxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    () => {
      if (typeof window !== "undefined") {
        const savedState = localStorage.getItem("checkedItems");
        return savedState ? JSON.parse(savedState) : {};
      }
      return {};
    }
  );

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <CheckboxContext.Provider value={{ checkedItems, toggleItem }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error("useCheckbox must be used within a CheckboxProvider");
  }
  return context;
};
