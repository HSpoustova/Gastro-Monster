import './style.css';
import { useNavigate } from 'react-router-dom';
import Lost from './img/lost.png';

export const ModalLost = ({ close }) => {
  const navigate = useNavigate();
  const closeModal = () => {
    close(false);
    navigate('/fieldPick');
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content-again-lost">
          <div className="lost"> Prohrál jsi</div>
          <div className="close-again">
            <div className="again-btn" onClick={closeModal}>
              Hrát znovu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
