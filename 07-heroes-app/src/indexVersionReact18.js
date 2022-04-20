import React from "react";
import { HeroesApp } from "./HeroesApp";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<HeroesApp />);
