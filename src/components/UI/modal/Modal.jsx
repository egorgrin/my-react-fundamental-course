import s from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
  return (
      <div className={`${s.modal} ${s.active}`}>
        <div className={s.content}>
          {children}
        </div>
      </div>
  );
};

export default Modal;