import React from "react";
import { useStore } from "../../services/zustand/store";
import { SectionUI } from "../section-ui/section-ui";

import styles from "./sections.module.scss";

type TItem = {
  id: number;
  x: number;
  y: number;
  angle: number;
};

type SectionsProps = {
  activeSection?: number;
  onSectionClick: (index: number) => void;
  items: TItem[];
  rotationAngle: number;
  isMobile?: boolean;
};

export const Sections: React.FC<SectionsProps> = ({
  activeSection,
  onSectionClick,
  items,
  rotationAngle,
  isMobile,
}) => {
  const sections = useStore((state) => state.sections);
  const radius = 265;

  const handleClick = (index: number) => {
    onSectionClick(index);
  };

  return (
    <>
      {!isMobile ? (
        <div
          className={styles.container}
          style={{
            transform: `rotate(${rotationAngle}rad)`,
          }}
        >
          {sections.map((section, index) => {
            const { x, y } = items[index];
            const isActive = activeSection === index;
            return (
              <div
                key={section.id}
                className={`${styles.wrapper} ${
                  activeSection === index ? styles.wrapper_active : ""
                }`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${-rotationAngle}rad)`,
                  left: `${x + radius}px`,
                  top: `${y + radius}px`,
                }}
                onClick={() => handleClick(index)}
              >
                <SectionUI
                  section={section}
                  isActive={isActive}
                  onClick={() => handleClick(index)}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.container_mobile}>
          {sections.map((section) => {
            return (
              <SectionUI
                key={section.id}
                section={section}
                isActive={activeSection === sections.indexOf(section)}
                onClick={() => handleClick(sections.indexOf(section))}
                index={sections.indexOf(section)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
