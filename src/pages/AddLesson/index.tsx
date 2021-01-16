import * as React from "react";

import { TitleSection, ComboBox } from "../../components/ui";

import { Container } from "./components/ui";

const AddLesson: React.FC = () => {
  return (
    <Container>
      <TitleSection color="var(--ion-color-texto-preto)">
        Adicionar
      </TitleSection>

      <ComboBox name="material-select">
        <option value="biologia">Biologia</option>
        <option value="quimica">Química</option>
        <option value="fisica">Física</option>
        <option value="historia">História</option>
        <option value="geografia">Geografia</option>
        <option value="filosofia">Filosofia</option>
        <option value="sociologia">Sociologia</option>
        <option value="portugues">Português</option>
        <option value="literatura">Literatura</option>
        <option value="ingles">Inglês</option>
        <option value="artes">Artes</option>
        <option value="educaçãofisica">Educação Física</option>
        <option value="tecnologiasinformacao">Tecnologias da Informação</option>
        <option value="comunicacao">Comunicação</option>
        <option value="matematica">Matemática e suas tecnologias</option>
      </ComboBox>
    </Container>
  );
};

export default AddLesson;

// Ciências da Natureza: Biologia, Química e Física;
// Ciências Humanas: História, Geografia, Filosofia e Sociologia;
// Linguagens, Códigos e suas Tecnologias: Português, Literatura, Língua Estrangeira, Artes, Educação Física e Tecnologias da Informação e Comunicação;
// Matemática e suas tecnologias;
