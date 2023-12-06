import './style.css';
import { useNavigate } from 'react-router-dom';

export const ModalWin = ({ close }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    close(false);
    navigate('/fieldPick');
  };

  const closeModalEnd = () => {
    close(false);
    navigate('/');
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content-again-win">
          <div className="win"> Vyhrál jsi!</div>
          <div className="close-again">
            <div className="again-btn" onClick={closeModal}>
              Hrát znovu
            </div>
            <div className="again-btn" onClick={closeModalEnd}>
              Konec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
