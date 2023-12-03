import './style.css';

export const ModalWin = ({ close }) => {
  const closeModal = () => {
    close(false);
  };

  return (
    <div>
      <div className="modal"></div>
      <div className="modal-content">
        <div className="close">
          <div className="close-btn" onClick={closeModal}></div>
        </div>

        <div className="main-win"></div>
      </div>

      <footer>
        <div className="ok-button" onClick={closeModal}>
          Další
        </div>
      </footer>
    </div>
  );
};
