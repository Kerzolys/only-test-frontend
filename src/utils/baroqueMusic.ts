import { TEvent, TSection } from "../services/types";

export const baroqueMusic: TEvent[] = [
  {
    year: 1600,
    description:
      "Появление первой оперы – «Эвридика» Якопо Пери, созданной во Флоренции.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1607,
    description:
      "Премьера оперы «Орфей» Клаудио Монтеверди – считается шедевром раннего Барокко и одной из первых полноценных опер.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1610,
    description:
      "Монтеверди публикует «Вечернюю службу Богоматери» (Vespro della Beata Vergine) – величественное церковное произведение.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1637,
    description:
      "Открытие первого публичного оперного театра в Венеции – Teatro San Cassiano.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1685,
    description:
      "Рождение трёх музыкальных гениев Барокко: Иоганн Себастьян Бах (Германия), Георг Фридрих Гендель (Германия, позднее работал в Англии),Доменико Скарлатти (Италия).",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1692,
    description:
      "Премьера «Дидона и Эней» Генри Перселла – одной из первых великих английских опер.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1721,
    description:
      "Бах завершает «Бранденбургские концерты» – вершина барочной инструментальной музыки.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1725,
    description:
      "Антонио Вивальди публикует «Времена года» (Le Quattro Stagioni), четыре виртуозных скрипичных концерта.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1733,
    description:
      "Гендель создаёт оперу «Юлий Цезарь» – шедевр итальянской оперы в английской традиции.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1741,
    description:
      "Гендель завершает «Мессию» – одно из самых известных ораториальных произведений.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1750,
    description:
      "Смерть Иоганна Себастьяна Баха – считается символическим концом эпохи Барокко.",
    id: Math.floor(Math.random() * 1000000),
  },
];

export const baroqueMusicSection: TSection = {
  title: "Барокко",
  events: baroqueMusic,
  id: Math.floor(Math.random() * 1000000),
};
