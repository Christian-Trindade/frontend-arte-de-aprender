import styled from "styled-components";

interface PlayerContainerProps {
  image: string;
}

export const PlayerContainer = styled.div<PlayerContainerProps>`
  display: flex;
  justify-content: center;
  width: 90vw;
  align-items: flex-end;
  height: 90vw;
  padding-bottom: 2vh;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: 100% 100%;
`;
