import React from "react";
import styled from "styled-components";

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

// type Props = { placeholder: string };

const SearchBar = ({ ...props }) => {
  return (
    <Box>
      <input type="text" {...props} />
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
