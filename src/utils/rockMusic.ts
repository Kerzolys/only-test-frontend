import { TEvent, TSection } from "../services/types";

export const rockMusic: TEvent[] = [
  {
    year: 1954,
    description:
      "Элвис записывает свой первый сингл на студии Sun Records. Этот момент считается началом рок-н-ролла.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1955,
    description:
      "Хит “Rock Around the Clock” Билла Хейли: песня становится мировым хитом, популяризируя рок-н-ролл и приводя жанр в мейнстрим.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1963,
    description:
      "Взлёт The Beatles: группа выпустила сингл “Please Please Me” и стала феноменом, положив начало британскому вторжению на мировую сцену.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1965,
    description:
      "Песня “Like a Rolling Stone” Боба Дилана: рок обретает литературное измерение благодаря сложным текстам. Этот момент также символизирует переход Дилана от фолка к электрическому звучанию.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1967,
    description:
      "Лето любви и альбом “Sgt. Pepper’s Lonely Hearts Club Band”: The Beatles выпускают новаторский альбом, который становится символом психоделической эры. Лето любви отмечает пик хиппи-культуры.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1969,
    description:
      "Вудсток: легендарный музыкальный фестиваль собрал более 400 000 человек. Выступления Джими Хендрикса, Дженис Джоплин и других стали иконой эпохи мира, любви и рок-музыки.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1971,
    description:
      "Выход “Led Zeppelin IV”: альбом с культовой песней “Stairway to Heaven” закрепляет за Led Zeppelin статус легенд рок-музыки и определяет жанр хард-рока.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1977,
    description:
      "Взлёт панк-рока: группы Sex Pistols (альбом “Never Mind the Bollocks”) и The Clash становятся символами панк-движения, бросая вызов мейнстриму и социальным устоям.",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    year: 1981,
    description:
      "Музыкальный телеканал начинает вещание, впервые показывая клип “Video Killed the Radio Star”. Видео становится важной частью рок-культуры.",
    id: Math.floor(Math.random() * 1000000),
  },
];

export const rockMusicSection: TSection = {
  title: "Рок-музыка",
  events: rockMusic,
  id: Math.floor(Math.random() * 1000000),
};
