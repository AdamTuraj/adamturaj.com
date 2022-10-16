import { createContext } from "react";
import Wakatimedata from "../types/WakatimeData";

export const WakatimeContext = createContext<Wakatimedata[] | null>(null);
