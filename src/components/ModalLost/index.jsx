import './style.css';

export const ModalLost = ({ close }) => {
  const closeModal = () => {
    close(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="close">
            <div className="close-btn" onClick={closeModal}></div>
          </div>
        </div>
        <div className="main-modal-body"></div>
        <footer>
          <div className="ok-button" onClick={closeModal}>
            Další
          </div>
        </footer>
      </div>
    </div>
  );
};
