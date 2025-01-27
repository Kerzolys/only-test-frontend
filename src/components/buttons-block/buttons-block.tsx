import React, { useState } from "react";
import { ButtonUI } from "../button-ui/button-ui";
import styles from "./buttons-block.module.scss";
import { TYears } from "../../services/types";

type ButtonsBlockProps = {
  yearsData: TYears[];
  yearIndex: number
  handlePreviousClick: () => void;
  handleNextClick: () => void;
};

export const ButtonsBlock: React.FC<ButtonsBlockProps> = ({
  yearsData,
  yearIndex,
  handlePreviousClick,
  handleNextClick,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__counter}>
        0{yearIndex + 1} / 0{yearsData.length}
      </p>
      <div className={styles.container__buttons}>
        <ButtonUI onClick={handlePreviousClick} />
        <ButtonUI onClick={handleNextClick} isForward />
      </div>
    </div>
  );
};
