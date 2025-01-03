import React from "react";
import style from "./FancyCheckbox.module.scss";

interface FancyCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  color?: "blue" | "green" | "purple" | "red";
}

export const FancyCheckbox: React.FC<FancyCheckboxProps> = ({
  checked,
  disabled = false,
  onChange,
  color = "blue", // Default color
}) => {
  return (
    <label
      className={`${style["ios-checkbox"]} ${style[color]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <div className={style["checkbox-wrapper"]}>
        <div className={style["checkbox-bg"]}></div>
        <svg fill="none" viewBox="0 0 24 24" className={style["checkbox-icon"]}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            stroke="currentColor"
            d="M4 12L10 18L20 6"
            className={style["check-path"]}
          ></path>
        </svg>
      </div>
    </label>
  );
};
