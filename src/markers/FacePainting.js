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

const Attribute = styled.a`
  font-size: 0.4rem;
`;

function FacePainting({ onClickFunc, closeModal }) {
  const modalContent = (
    <>
      <ModalCloseButton
        onClick={() => {
          closeModal();
        }}
      >
        <AiOutlineClose size={32} />
      </ModalCloseButton>
    </>
  );
  return (
    <div className="popup">
      <h1>Face Painting
      </h1>
      <p>
        Come and get your Festival Face paint - Glitter and Glow-up time! 
      </p>
      <br />
      <Attribute
        href="https://www.flaticon.com/free-icons/face-painting"
        title="face painting icons"
        target="_blank"
        rel="noreferrer"
      >
        Face painting icons created by cah nggunung - Flaticon
      </Attribute>
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

export default FacePainting;
