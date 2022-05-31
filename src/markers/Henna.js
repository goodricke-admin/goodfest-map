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

function Henna({ onClickFunc, closeModal }) {
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
      <h1>Henna</h1>
      <p>
        Join the Henna Society in the Clarbour room to get some beautiful and
        intricate designs on hands, ankles.... any part of the body that you
        fancy your art on!
      </p>
      {/*<button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        Trigger Modal
      </button>*/}
      <a
        href="https://www.instagram.com/uoyhennasociety/"
        target="_blank"
        rel="noreferrer"
      >
        Find out more about the Henna Society here
      </a>
      <br />
      <Attribute
        href="https://www.flaticon.com/free-icons/henna"
        title="henna icons"
        target="_blank"
        rel="noreferrer"
      >
        Henna icons created by Eucalyp - Flaticon
      </Attribute>
    </div>
  );
}

export default Henna;
