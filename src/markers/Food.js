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

function Food({ onClickFunc, closeModal }) {
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
      <h1>Dominos Pizza</h1>
      <p>
        Dominos are bringing a food truck so be sure to get something to eat.
        <br />
        <b>Individual Pizza: £4</b>
        <br />
        Margarita or Peperoni
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

export default Food;
