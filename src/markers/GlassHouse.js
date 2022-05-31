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

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  align-items: center;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const ModalTitle = styled.h1`
  text-align: center;
  width: 100%;
`;

function Food({ onClickFunc, closeModal }) {
  const modalContent = (
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalCloseButton
            onClick={() => {
              closeModal();
            }}
          >
            <AiOutlineClose size={32} />
          </ModalCloseButton>
          <ModalTitle>GlassHouse Bar</ModalTitle>
        </ModalHeader>
      </ModalContainer>
    </>
  );
  return (
    <div className="popup">
      <h1>GlassHouse Bar</h1>
      <p>
        GlassHouse are providing drinks for the event and have 2 bars. They are
        bringing a variety of beers and cocktails find out more bellow.
      </p>
      <button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        View Menu
      </button>
    </div>
  );
}

export default Food;
