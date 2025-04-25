import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import MerchRow from "../components/MerchRow";

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

const TableHeader = styled.th`
  color: #d5dde5;
  background: #1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 16px;
  font-weight: 100;
  padding: 8px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  &:first-child {
    border-top-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }
`;
const TableRow = styled.tr`
  border-top: 1px solid #c1c3d1;
  border-bottom-: 1px solid #c1c3d1;
  color: #666b85;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const TableContainer = styled.table`
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  width: 95%;
  overflow-x: scroll;
  min-width: 400px;
`;

const ModalMainContent = styled.div`
  min-width: 95%;
  overflow-x: auto;
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
          <ModalTitle>Merch Stand Price List</ModalTitle>
        </ModalHeader>
      </ModalContainer>
      <ModalMainContent>
        <TableContainer>
          <tbody>
            <TableRow>
              <TableHeader>Item</TableHeader>
              <TableHeader>Price</TableHeader>
            </TableRow>

            <MerchRow itemName="College Fleeces" price="Varying" />
            <MerchRow itemName="College Hoodies" price="Varying" />
          </tbody>
        </TableContainer>
      </ModalMainContent>
    </>
  );
  return (
    <div className="popup">
      <h1>College Merch</h1>
      <p>
        The Goodricke Merch stand is back with all of your favorite designs. See
        below for the full inventory and price list. <b>Card payments only.</b>
      </p>
      <p>
        Merch will also be available to rep Langwith and Alcuin colleges!
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
