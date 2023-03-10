const Modal = ({ children }) => {
  return children !== undefined ? (
    <section className="modal-overlay">{children}</section>
  ) : null;
};

export default Modal;
