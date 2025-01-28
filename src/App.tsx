import React, { useEffect, useMemo } from "react";
import { useStore } from "./services/zustand/store";
import { TYears } from "./services/types";
import { useState } from "react";
import { ButtonsBlock } from "./components/buttons-block/buttons-block";
import { Karousel } from "./components/karousel/karousel";
import "./app.scss";
import { Sections } from "./components/sections/sections";

function App() {
  const yearsData = useStore((state) => state.years);
  const [years, setYears] = useState<TYears>(yearsData[0]);
  const [activeSection, setActiveSection] = useState<number>(
    yearsData.indexOf(years)
  );
  const [beginning, setBeginning] = useState<number>(years.beginning);
  const [ending, setEnding] = useState<number>(years.ending);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const radius = 265;
  const startAngle = -Math.PI / 3;

  const items = useMemo(() => {
    const totalSections = yearsData.length;
    return yearsData.map((_, index) => {
      const angle = startAngle + (index / totalSections) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { id: index, x, y, angle };
    });
  }, [yearsData, startAngle, radius]);

  const handlePreviousYears = () => {
    const currentYearsIndex = yearsData.indexOf(years);
    const nextIndex =
      currentYearsIndex === 0 ? yearsData.length - 1 : currentYearsIndex - 1;

    const targetAngle = items[nextIndex]?.angle || 0;
    const offsetAngle = startAngle;
    const newRotationAngle = offsetAngle - targetAngle;

    setRotationAngle(newRotationAngle);
    setYears(yearsData[nextIndex]);
    setActiveSection(nextIndex);
  };

  const handleNextYears = () => {
    const currentYearsIndex = yearsData.indexOf(years);
    const nextIndex =
      currentYearsIndex === yearsData.length - 1 ? 0 : currentYearsIndex + 1;

    const targetAngle = items[nextIndex]?.angle || 0;
    const offsetAngle = startAngle;
    const newRotationAngle = offsetAngle - targetAngle;

    setRotationAngle(newRotationAngle);
    setYears(yearsData[nextIndex]);
    setActiveSection(nextIndex);
  };

  const handleSectionClick = (index: number) => {
    const targetAngle = items[index]?.angle || 0;
    const offsetAngle = startAngle;
    const newRotationAngle = offsetAngle - targetAngle;

    setRotationAngle(newRotationAngle);
    setYears(yearsData[index]);
    setActiveSection(index);
  };
  const yearIndex = yearsData.indexOf(years);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return; // Пропускаем анимацию при первом рендере
    }
    const nextYears = yearsData[activeSection] || yearsData[0];

    const duration = 1000;
    let currentBeginning = beginning;
    let currentEnding = ending;

    const step = (
      start: number,
      end: number,
      callback: (newValue: number) => void
    ) => {
      const stepTime = duration / Math.abs(end - start);
      let interval = setInterval(() => {
        if (start < end) {
          start++;
        } else {
          start--;
        }

        callback(start);
        if (start === end) {
          clearInterval(interval);
        }
      }, stepTime);
    };

    step(currentBeginning, nextYears.beginning, setBeginning);
    step(currentEnding, nextYears.ending, setEnding);
  }, [years]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h1 className="title">
        Исторические <br />
        даты
      </h1>
      {/* <Sections
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        items={items}
        rotationAngle={rotationAngle}
      />
      <h2 className="years">
        {beginning}
        <span className="years_accent"> {ending}</span>
      </h2> */}
      {isMobile ? (
        <>
          <h2 className="years">
            {beginning}
            <span className="years_accent"> {ending}</span>
          </h2>
          <Karousel yearsData={years} isMobile={isMobile} />
          <ButtonsBlock
            yearsData={yearsData}
            yearIndex={yearIndex}
            handlePreviousClick={handlePreviousYears}
            handleNextClick={handleNextYears}
          />
          <Sections
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
            items={items}
            rotationAngle={rotationAngle}
            isMobile={isMobile}
          />
        </>
      ) : (
        <>
          <Sections
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
            items={items}
            rotationAngle={rotationAngle}
          />
          <h2 className="years">
            {beginning}
            <span className="years_accent"> {ending}</span>
          </h2>
          <ButtonsBlock
            yearsData={yearsData}
            yearIndex={yearIndex}
            handlePreviousClick={handlePreviousYears}
            handleNextClick={handleNextYears}
          />
          <Karousel yearsData={years} isMobile={isMobile} />
        </>
      )}
    </>
  );
}

export default App;
