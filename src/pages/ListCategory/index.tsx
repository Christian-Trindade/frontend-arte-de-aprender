import React, {
  useCallback,
  useState,
  useEffect,
  ChangeEventHandler,
} from "react";
import { IonFooter, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import * as S from "./styles";
import { SearchBar, TopicContainer } from "../../components/ui";
import _ from "lodash";
import { Keyable } from "../../types/Keyable";
import { api } from "../../services/api";
import FooterClose from "../../components/ui/FooterCloseButton";
import { useHistory } from "react-router";

interface Props {
  setShowModal: Function;
  idCategory?: number | string;
}
const ListCategory: React.FC<Props> = ({ setShowModal, idCategory }) => {
  const [list, setList] = useState([]);
  const [isRead, setRead] = useState(false);
  const history = useHistory();

  const getTopic = async () => {
    let response: Keyable = await api.get(`/topic/list/${idCategory}`);

    console.warn("topic", response);
    setList(response.data);
  };

  useEffect(() => {
    getTopic();
  }, []);

  return (
    <IonPage>
      <S.StyledContent
        color="content-background-light"
        className="ion-padding ion-text-center"
      >
        <div>
          {list.length > 0 ? (
            list.map((el: Keyable) => (
              <div
                key={el.id}
                onClick={() => {
                  history.push({
                    pathname: "/ListLesson",
                    state: {
                      id: el.title,
                      data: el,
                    },
                  });
                }}
              >
                <TopicContainer
                  setSelectedTopic={() => false}
                  data={el}
                  isSelected
                />
              </div>
            ))
          ) : isRead ? (
            <h5>Nenhuma material encontrado</h5>
          ) : (
            <h5>Carregando...</h5>
          )}
        </div>
      </S.StyledContent>

      <FooterClose setShowModal={setShowModal} />
    </IonPage>
  );
};

export default ListCategory;
