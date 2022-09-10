import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { shownModal } from "../../store/modal";

const Backdrop = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(shownModal(false));
  };

  return <BackdropDiv onClick={handleModal} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <ModalOverlayDiv>
      <div>{children}</div>
    </ModalOverlayDiv>
  );
};

const portalElement = document.getElementById("shipping-modal");
const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

const ModalOverlayDiv = styled.div`
  position: fixed;
  top: 100px;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 16px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
