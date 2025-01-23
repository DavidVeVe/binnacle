import Backdrop from "./Backdrop";
import "./modal.scss";

export default function Modal({ children, isModalVisible, showModalHandler }) {
  return (
    <>
      {isModalVisible && (
        <>
          <Backdrop onClick={showModalHandler} />
          <section className="modal__container">{children}</section>
        </>
      )}
    </>
  );
}
