import styled from "styled-components";
import { IonContent } from "@ionic/react";
import { TitleSection } from "../../components/ui";

export const Header = styled.header`
  margin-bottom: 1.5rem;
`;

export const StyledContent = styled(IonContent)``;

export const ButtonPlayMain = styled.div`
  background-color: var(--ion-color-primarias-rosa-fraco);
  width: 5rem;
  height: 5rem;
  box-shadow: 0px 4px 4px rgba(235, 122, 142, 0.5);
  border-radius: 100%;
  margin-top: -3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
`;

export const ArrowImage = styled.img`
  margin: 0 2rem;
`;

export const BoxTop = styled.div`
  background-color: var(--ion-color-content-background);
  height: 20rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
  flex-direction: column;
  color: var(--ion-color-content-background-light);
  h1 {
    font-size: 1.4rem;
    margin: 0;
    margin-top: 1.5rem;
  }

  .container {
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
  }
`;

export const BoxTumbnails = styled.div`
  width: 10rem;
  height: 10rem;
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 0.6rem;
  overflow: hidden;
  margin-right: 1.5rem;
`;

export const BoxText = styled.div`
  text-align: left;

  h2 {
    font-size: 1.4rem;
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const TitleSectionUI = styled(TitleSection)`
  margin: 1.5rem 0;
`;

export const Container = styled.div`
  margin: 1.5rem;
`;

export const ListContainer = styled.section`
  height: 80vh;
  padding: 10px 20px;
  overflow-y: scroll;
  width: 100%;
  border-radius: 6px;
  padding: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;
    text-align: left;

    p {
      font-size: 1.4rem;
      color: var(--ion-color-texto-preto);
      font-weight: 600;
      padding: 0;
      margin: 0;
    }

    .description {
      color: var(--ion-color-texto-cinza-input);
      padding: 0;
      font-weight: 400;
    }

    img {
      width: 4rem;
      border-radius: 0.6rem;
      margin-right: 1.5rem;
    }

    border-bottom: 1px solid #d1d1d1;

    &:active {
      background: #d1d1d1;
    }
  }
`;
