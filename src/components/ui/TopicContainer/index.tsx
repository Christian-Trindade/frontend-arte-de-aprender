import * as React from "react";

import { TopicContainerDiv, TopicImage, BoxImage } from "./ui";

interface Keyable {
  [key: string]: any;
}

interface TopicContainerProps {
  data: Keyable;
  isSelected: boolean;
  setSelectedTopic: Function;
}

const baseImageUrl =
  "https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/";

const TopicContainer: React.FC<TopicContainerProps> = ({
  data,
  isSelected,
  setSelectedTopic,
}) => {
  return (
    <TopicContainerDiv
      color="background-light"
      lines="none"
      isSelected={isSelected}
      onClick={() => setSelectedTopic(data)}
    >
      <BoxImage>
        <TopicImage src={`${baseImageUrl}${data.subject_id}/${data.image}`} />
      </BoxImage>
      <div>
        <div className="title">{data.name}</div>
        <div className="qnt">{data.qty_audio} Aulas</div>
      </div>
    </TopicContainerDiv>
  );
};

export default TopicContainer;
