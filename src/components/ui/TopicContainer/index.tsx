import * as React from "react";

import { TopicContainerDiv, TopicImage } from "./ui";

interface Keyable {
  [key: string]: any;
}

interface TopicContainerProps {
  onClick: Function;
  data: Keyable;
  isSelected: boolean;
}

const baseImageUrl =
  "https://plataform-music.s3-sa-east-1.amazonaws.com/imagens/topics/category/";

const TopicContainer: React.FC<TopicContainerProps> = ({
  data,
  onClick,
  isSelected,
}) => {
  return (
    <TopicContainerDiv
      color="background-light"
      lines="none"
      onClick={() => {
        onClick();
      }}
      isSelected={isSelected}
    >
      <div>
        <TopicImage src={`${baseImageUrl}${data.subject_id}/${data.image}`} />
      </div>
      <div>
        <div className="title">{data.name}</div>
        <div className="qnt">{data.qty_audio} Aulas</div>
      </div>
    </TopicContainerDiv>
  );
};

export default TopicContainer;
