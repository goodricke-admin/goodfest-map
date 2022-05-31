import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ModalCloseButton = styled.button`
  align-self: start;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: absolute;
  right: 20px;
`;

function Hornets({ onClickFunc, closeModal }) {
  const modalContent = (
    <>
      <ModalCloseButton
        onClick={() => {
          closeModal();
        }}
      >
        <AiOutlineClose size={32} />
      </ModalCloseButton>
      <h1>Dominos Pizza</h1>
    </>
  );
  return (
    <div className="popup">
      <h1>York Hornets</h1>
      <p>
        Come and watch The University of York's very own Cheerleading team The
        York Hornets! Between 15:00 and 15:45 The Hornets will be performing.
      </p>
      {/*<button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        Trigger Modal
      </button>*/}
    </div>
  );
}

export default Hornets;
