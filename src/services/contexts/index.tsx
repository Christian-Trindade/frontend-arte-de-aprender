import { createContext } from "react";

interface contextParams {
  [key: string]: any;
}

const contextVal: contextParams = {};

const GlobalContesxt = createContext(contextVal);

export { GlobalContesxt };
