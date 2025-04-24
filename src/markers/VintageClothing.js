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

function VintageClothing({ onClickFunc, closeModal }) {
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
      <h1>Notion's Vintage</h1>
      <p>
        Shop unique vintage fits
      </p>
      {/*<button
        onClick={() => {
          onClickFunc(modalContent);
        }}
      >
        Trigger Modal
      </button>*/}
      <a
        href="https://www.instagram.com/notionsvintageyork/"
        target="_blank"
        rel="noreferrer"
      >
        Find out more about Notions Vintage here
      </a>
      <br />
      <Attribute
        href="https://www.flaticon.com/free-icons/jacket"
        title="jacket icons"
        target="_blank"
        rel="noreferrer"
      >
        Jacket icons created by Freepik - Flaticon
      </Attribute>
    </div>
  );
}

export default VintageClothing;
