import { create } from "zustand";
import { TEvent, TSection, TYears } from "../types";
import { baroqueMusic, baroqueMusicSection } from "../../utils/baroqueMusic";
import { romanticMusic, romanticMusicSection } from "../../utils/romanticMusic";
import {
  contemporaryMusic,
  contemporaryMusicSection,
} from "../../utils/contemporaryMusic";
import { jazzMusic, jazzMusicSection } from "../../utils/jazzMusic";
import { rockMusic, rockMusicSection } from "../../utils/rockMusic";
import { popMusic, popMusicSection } from "../../utils/popMusic";

export interface IState {
  events: TEvent[];
  years: TYears[];
  sections: TSection[];
  error: string | null;
  isLoading: boolean;
}

export const useStore = create<IState>((set) => ({
  events: [
    ...baroqueMusic,
    ...romanticMusic,
    ...contemporaryMusic,
    ...jazzMusic,
    ...rockMusic,
    ...popMusic,
  ],
  years: [
    {
      beginning: 1600,
      ending: 1750,
      section: baroqueMusicSection,
      id: Math.floor(Math.random() * 1000000),
    },
    {
      beginning: 1805,
      ending: 1899,
      section: romanticMusicSection,
      id: Math.floor(Math.random() * 1000000),
    },
    {
      beginning: 1907,
      ending: 1957,
      section: contemporaryMusicSection,
      id: Math.floor(Math.random() * 1000000),
    },
    {
      beginning: 1917,
      ending: 1990,
      section: jazzMusicSection,
      id: Math.floor(Math.random() * 1000000),
    },
    {
      beginning: 1954,
      ending: 1981,
      section: rockMusicSection,
      id: Math.floor(Math.random() * 1000000),
    },
    {
      beginning: 1956,
      ending: 2016,
      section: popMusicSection,
      id: Math.floor(Math.random() * 1000000),
    },
  ],
  sections: [
    baroqueMusicSection,
    romanticMusicSection,
    contemporaryMusicSection,
    jazzMusicSection,
    rockMusicSection,
    popMusicSection,
  ],
  error: null,
  isLoading: false,
}));
