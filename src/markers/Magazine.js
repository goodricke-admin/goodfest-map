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

function Magazine({ onClickFunc, closeModal }) {
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
      <h1>Circulation Magazine</h1>
      <p>
        Grab issue #4 and meet the team
      </p>
      {/*<button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        Trigger Modal
      </button>*/}
      <a
        href="https://www.instagram.com/circulationmag/"
        target="_blank"
        rel="noreferrer"
      >
        Find out more about Circulation Magazine here
      </a>
      <br />

    </div>
  );
}

export default Magazine;
