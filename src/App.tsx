import React from "react";
import { Hero, Sales, FlexContent } from "./components";

import {
  heroapi,
  highlight,
  popularsales,
  sneaker,
  toprateslaes,
} from "./data/data";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
};

export default App;
