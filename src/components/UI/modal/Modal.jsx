import s from './Modal.module.css';

const Modal = ({children, visibility, setVisibility}) => {

  return (
      <div className={`
      ${s.modal}
      ${visibility ? s.visible : ''}
      `}
      onClick={() => setVisibility(false)}
      >
        <div
            className={s.content}
            onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
  );
};

export default Modal;