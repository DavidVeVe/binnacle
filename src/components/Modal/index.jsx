import Backdrop from "./Backdrop";
import "./modal.scss";

export default function Modal({ children, isVisible, showModalHandler }) {
  return (
    <>
      {isVisible && (
        <section className="modal__container">
          <Backdrop onClick={showModalHandler} isVisible={isVisible} />
          <section className="modal__container-content">{children}</section>
        </section>
      )}
    </>
  );
}
