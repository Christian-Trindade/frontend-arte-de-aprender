import { IonFooter } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const BoxShadow = styled.div`
  background: linear-gradient(
    -180deg,
    var(--ion-color-content-background-light) 2.33%,
    #dddde0 65.5%
  );
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
`;

export const ButtonClose = styled.div`
  background-color: var(--ion-color-primarias-rosa-fraco);
  color: var(--ion-color-texto-branco);
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 4px 4px rgba(235, 122, 142, 0.5);
  border-radius: 100%;
  margin-top: -4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }
`;

interface Props {
  setShowModal: Function;
}

const FooterClose: React.FC<Props> = ({ setShowModal }) => {
  return (
    <div>
      <BoxShadow>
        <ButtonClose onClick={() => setShowModal(false)}>
          <h1 style={{ marginBottom: "15px" }}>X</h1>
        </ButtonClose>
      </BoxShadow>
    </div>
  );
};
export default FooterClose;
