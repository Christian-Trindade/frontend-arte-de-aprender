import * as React from "react";
import { useState } from "react";

import { TopicContainerDiv, TopicImage } from "./ui";

interface Keyable {
  [key: string]: any;
}

interface TopicContainerProps {
  setSelectedTopic: Function;
  data: Keyable;
  selectedTopic: Keyable;
}

const baseImageUrl =
  "https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/";

const TopicContainer: React.FC<TopicContainerProps> = ({
  data,
  setSelectedTopic,
  selectedTopic,
}) => {
  return (
    <TopicContainerDiv
      color="background-light"
      lines="none"
      onClick={() => {
        setSelectedTopic(data);
      }}
      isSelected={selectedTopic.id == data.id}
    >
      <div>
        <TopicImage src={`${baseImageUrl}${data.categoryId}/${data.image}`} />
      </div>
      <div>
        <div className="title">{data.name}</div>
        <div className="qnt">{data.qty_audio} Aulas</div>
      </div>
    </TopicContainerDiv>
  );
};

export default TopicContainer;
