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

function Merch({ onClickFunc, closeModal }) {
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
          <ModalTitle>Merch Price List</ModalTitle>
        </ModalHeader>
      </ModalContainer>
    </>
  );
  return (
    <div className="popup">
      <h1>Goodricke Merch</h1>
      <p>
        The Goodricke Merch stand is back with all of your favorite designs. See
        below for the full inventory and price list. Card and Cash payments
        accepted
      </p>
      {
        <button
          onClick={() => {
            onClickFunc(modalContent);
          }}
        >
          View Price List
        </button>
      }
    </div>
  );
}

export default Merch;
