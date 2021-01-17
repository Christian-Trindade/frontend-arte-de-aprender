import { IonCol } from "@ionic/react";
import React from "react";

import styled, { keyframes } from "styled-components";

interface Props {
  background?: string;
  shadow?: string;
  title?: string;
  action?: () => void;
  skeleton?: boolean;
}

const Button = styled.button<Props>`
  height: 6.6rem;
  width: 100%;
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
  border-radius: 1.5rem;

  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  outline: 0;
`;

const SkeletonAnimation = keyframes`
 0% { background: linear-gradient(120deg, #C4C4C4 48.2%, #B7B4B4 94.86%); }
 50% { background: linear-gradient(110deg, #C4C4C4 48.2%, #B7B4B4 94.86%); }
 100% {background: linear-gradient(100deg, #C4C4C4 56.54%, #B7B4B4 80.37%);}
`;

const ButtonSkeleton = styled(Button)`
  animation-name: ${SkeletonAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const RoundButtonHome: React.FC<Props> = ({
  background,
  shadow,
  title,
  action,
  skeleton,
}) => {
  return (
    <IonCol size="6">
      {skeleton ? (
        <ButtonSkeleton />
      ) : (
        <Button background={background} shadow={shadow} onClick={() => action}>
          {title}
        </Button>
      )}
    </IonCol>
  );
};

export default RoundButtonHome;
