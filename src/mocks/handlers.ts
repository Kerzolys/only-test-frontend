import { http, HttpResponse } from "msw";
import { useStore } from "../services/zustand/store";

export const handlers = [
  http.get("https://fake.com/years", () => {
    const years = useStore.getState().years;
    return HttpResponse.json({ years });
  }),
];
