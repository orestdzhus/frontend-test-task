import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

interface MovieModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, onRequestClose }) => {
  const videoId = 'cen0rBKLuYE'; 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 2,
          },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          backgroundColor: 'black'
        }
      }}
    >
         <button 
        onClick={onRequestClose} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '30px',
          cursor: 'pointer'
        }}
      >
        &times;
      </button>
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <YouTube videoId={videoId} opts={{ width: '100%', height: '100%' }} style={{ width: '100%', height: '100%' }} />
    </div>
    </Modal>
  );
};

export default MovieModal;
