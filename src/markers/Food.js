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
      <h1>Food menus</h1>
    </>
  );
  return (
    <div className="popup">
      <h1>Food Menus</h1>
      <p>
        This is a link to show the food menus from the food trucks located at
        the entrance to the college
      </p>
      <p>
        {" "}
        This is where you can get some food, all allergens/dietary requirements
        catered for.
      </p>
      <button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        Trigger Modal
      </button>
    </div>
  );
}

export default Food;
