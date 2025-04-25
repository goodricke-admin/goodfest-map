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

function FriendshipBracelets({ onClickFunc, closeModal }) {
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
      <h1>Friendship Bracelet making</h1>
      <p>
        Come together with your friends, or make new ones and share the experience of Goodfest 2025! 
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

export default FriendshipBracelets;
