import React from "react";

const Modal: React.FC = ({ children }) => <div>{children}</div>;

const Close: React.FC<{ onClick?: () => void; className?: string }> = ({
  onClick,
  className,
  children,
}) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

Modal.Close = Close;

export default Modal;
