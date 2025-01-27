import { TEvent, TSection } from "../services/types";

export const contemporaryMusic: TEvent[] = [
    {
        year: 1907,
        description: "Публикация «Пяти пьес для струнного квартета» Арнольда Шёнберга, которые стали переходом к атональной музыке.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1913,
        description: "Премьера балета «Весна священная» Игоря Стравинского в Париже вызвала скандал и считается революцией в музыке.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1921,
        description: "Арнольд Шёнберг разрабатывает 12-тоновую систему (додекафонию), ставшую основой для серийной музыки.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1923,
        description: "Премьера первой додекафонной пьесы — сюиты Шёнберга для фортепиано, Op. 25.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1936,
        description: "Премьера кантаты «Carmina Burana» Карла Орфа – яркий пример неоклассицизма.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1937,
        description: "Оливер Мессиан завершает работу над «Тайной Святой Троицы» и другими произведениями с элементами птичьего пения.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1944,
        description: "Премьера квартета для конца времени (1941) Оливье Мессиана, написанного в лагере для военнопленных.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1952,
        description: "Джон Кейдж представляет пьесу «4’33”», где ни одной ноты не играется, а музыка состоит из звуков окружения.",
        id: Math.floor(Math.random() * 1000000),
    },
    {
        year: 1957,
        description: "Премьера «Групп для трех оркестров» Карлхайнца Штокхаузена – знаковое произведение электроакустической музыки.",
        id: Math.floor(Math.random() * 1000000),
    },
]

export const contemporaryMusicSection: TSection = {
    title: "Современная музыка",
    events: contemporaryMusic,
    id: Math.floor(Math.random() * 1000000),
}