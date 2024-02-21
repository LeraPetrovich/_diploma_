import lizaPhoto from "../assets/photo_2024-02-21 19.17.35.jpeg";
import leraPhoto from "../assets/photo_2024-02-21 19.17.50.jpeg";

export const items = [
  {
    id: "02695566",
    name: "Лера",
    image: leraPhoto,
    date: "15 февраля 2024",
    place: "Nepal",
    generalState: "80",
    ///
    licenseNumber: "ФИ78965423",
    categories: "A, B, C",
    dateBirth: "08.07.2001",
    ////
    temperature: { title: "Температура", status: "good", params: "37" },
    onHead: { title: "Давление", status: "malaise", params: "90/140" },
    pressure: { title: "Наклон", status: "badly", params: "130" },
    flightInformation: {
      carBrand: "Volvo FH", //марка машины
      carNumber: "AB321196", //номер машины
      startFlight: "14.09.2023 14:49", //начало рейса
      endFlight: "18.11.2023 15.00", //конец рейса
      dispatchPoint: "Мозырь", //отправка с
      destination: "Минск", // прибывает в
      coordinates: "52.5659898, 28.79556", //координаты на карте
      recordedTime: "15 ноября 2023 18:19", //зафиксировано в это время эти координаты
      distanceTraveled: "60",
    },
    weeklyStatus: [
      //состояние за последнюю рабочую неделю
      {
        day: "Понедельник",
        status: 80,
      },
      {
        day: "Вторник",
        status: 70,
      },
      {
        day: "Среда",
        status: 60,
      },
      {
        day: "Четверг",
        status: 80,
      },
      {
        day: "Пятница",
        status: 80,
      },
    ],
  },
  {
    id: "02695567",
    name: "Лиза",
    date: "16 февраля 2024",
    place: "Nepal",
    generalState: "30",
    licenseNumber: "ФИ78965423",
    categories: "A",
    dateBirth: "08.07.2001",
    image: lizaPhoto,
    temperature: { title: "Температура", status: "good", params: "37" },
    onHead: { title: "Давление", status: "malaise", params: "90/100" },
    pressure: { title: "Наклон", status: "badly", params: "130" },
    flightInformation: {
      carBrand: "Volvo FH",
      carNumber: "AB321196",
      startFlight: "14.09.2023 14:49",
      endFlight: "18.11.2023 15.00",
      dispatchPoint: "Минск",
      destination: "Витебск",
      coordinates: "52.5659898, 28.79556",
      recordedTime: "15 ноября 2023 18:19",
      distanceTraveled: "70",
    },
    weeklyStatus: [
      //состояние за последнюю рабочую неделю
      {
        day: "Понедельник",
        status: 80,
      },
      {
        day: "Вторник",
        status: 70,
      },
      {
        day: "Среда",
        status: 60,
      },
      {
        day: "Четверг",
        status: 80,
      },
      {
        day: "Пятница",
        status: 80,
      },
    ],
  },
  {
    id: "02695568",
    name: "Кристина",
    date: "13 февраля 2024",
    place: "Nepal",
    generalState: "20",
    licenseNumber: "ФИ78965423",
    categories: "A, B",
    dateBirth: "18.08.2003",
    // image,
    temperature: { title: "Температура", status: "good", params: "36,6" },
    onHead: { title: "Давление", status: "malaise", params: "90/100" },
    pressure: { title: "Наклон", status: "badly", params: "130" },
    flightInformation: {
      carBrand: "Volvo FH",
      carNumber: "AB321196",
      startFlight: "14.09.2023 14:49",
      endFlight: "18.11.2023 15.00",
      dispatchPoint: "Москва",
      destination: "Вена",
      coordinates: "52.5659898, 28.79556",
      recordedTime: "15 ноября 2023 18:19",
      distanceTraveled: "30",
    },
    weeklyStatus: [
      //состояние за последнюю рабочую неделю
      {
        day: "Понедельник",
        status: 80,
      },
      {
        day: "Вторник",
        status: 70,
      },
      {
        day: "Среда",
        status: 60,
      },
      {
        day: "Четверг",
        status: 80,
      },
      {
        day: "Пятница",
        status: 80,
      },
    ],
  },
];

export const constantsMonths = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
