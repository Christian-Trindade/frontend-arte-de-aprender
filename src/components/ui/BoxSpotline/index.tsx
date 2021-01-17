import { IonCol } from "@ionic/react";
import React from "react";

import styled, { keyframes } from "styled-components";
import { Keyable } from "../../../types/Keyable";
import { useHistory } from "react-router";

interface Props {
  title?: string;
  tumbnail?: string;
  action?: () => void;
  skeleton?: boolean;
  data?: Keyable;
}

const Box = styled.div<Props>`
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
  margin-right: 1.5rem;

  background-color: #123;
  background-image: url(${(props) => props.tumbnail});
  background-size: cover;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
`;

const SkeletonAnimation = keyframes`
 0% { background: linear-gradient(120deg, #C4C4C4 48.2%, #B7B4B4 94.86%); }
 50% { background: linear-gradient(110deg, #C4C4C4 48.2%, #B7B4B4 94.86%); }
 100% {background: linear-gradient(100deg, #C4C4C4 56.54%, #B7B4B4 80.37%);}
`;

const BoxSkeleton = styled(Box)`
  animation-name: ${SkeletonAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const BoxSpotline: React.FC<Props> = ({
  title,
  action,
  tumbnail,
  skeleton = false,
  data,
}) => {
  const history = useHistory();

  if (skeleton) {
    return (
      <BoxSkeleton>
        <Icon
          src="assets/vectors/play-circle.svg"
          alt="Imagem de um icone de okay"
        />
      </BoxSkeleton>
    );
  }
  return (
    <Box
      tumbnail={tumbnail}
      onClick={() => {
        history.push({
          pathname: "/ListLesson",
          state: {
            id: title,
            data: data,
          },
        });
      }}
    >
      <Icon
        src="assets/vectors/play-circle.svg"
        alt="Imagem de um icone de okay"
      />
    </Box>
  );
};

export default BoxSpotline;
