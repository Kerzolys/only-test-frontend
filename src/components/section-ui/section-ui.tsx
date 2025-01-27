import React from "react";
import { TSection } from "../../services/types";
import classNames from "classnames";

import styles from "./section-ui.module.scss";

type SectionUIProps = {
  section: TSection;
  onClick?: () => void;
  isActive?: boolean;
  index: number;
};

export const SectionUI: React.FC<SectionUIProps> = ({
  section,
  onClick,
  isActive,
  index,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.circle, {
        [styles.circle_active]: isActive,
      })}
    >
      <span
        className={classNames(styles.index, {
          [styles.index_active]: isActive,
        })}
      >
        {index + 1}
      </span>
      <h2
        onClick={onClick}
        className={classNames(styles.title, {
          [styles.title_active]: isActive,
        })}
      >
        {section.title}
      </h2>
    </div>
  );
};
