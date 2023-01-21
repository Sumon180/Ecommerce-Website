import React from "react";
import Title from "./utils/Title";

const Stories = ({ story }: any) => {
  const { title, news } = story;
  // console.log(title);
  return (
    <div>
      <Title title={title} />
    </div>
  );
};

export default Stories;
