import { UserItemPropsWithContext } from "../../../components/user-item/types";

export const items: Array<UserItemPropsWithContext> = [
  {
    id: 1,
    name: "Лера",
    temperature: { title: "Температура", status: "good", params: "37" },
    onHead: { title: "Давление", status: "malaise", params: "90" },
    pressure: { title: "Наклон", status: "badly", params: "130" },
  },
  {
    id: 2,
    name: "Лиза",
    temperature: { title: "Температура", status: "good", params: "37" },
    onHead: { title: "Давление", status: "malaise", params: "90" },
    pressure: { title: "Наклон", status: "badly", params: "130" },
  },
];
