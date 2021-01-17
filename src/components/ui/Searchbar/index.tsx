import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

interface SearchBarProps {
  onChange: any;
  placeHolder: string;
}

const Box = styled.span`
  display: flex;

  input {
    background: var(--ion-color-content-background-light);
    border-radius: 0.5rem 0px 0px 0.5rem;
    width: 100%;
    height: 4rem;
    border: 0;
    padding-left: 1.5rem;
    box-sizing: border-box;
    outline: 0;

    font-size: 2vh;

    &::placeholder {
      font-size: 1.4rem;
    }
  }

  button {
    background: var(--ion-color-primarias-rosa);
    width: 4rem;
    height: 4rem;
    border-radius: 0px 0.5rem 0.5rem 0px;
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ onChange, ...rest }) => {
  return (
    <Box>
      <input onChange={onChange} type="text" {...rest} />
      <button>
        <img
          src="assets/vectors/icon_searchbar.svg"
          alt="um icone branco para pesquisar"
          height="20"
          width="20"
        />
      </button>
    </Box>
  );
};
export default SearchBar;
