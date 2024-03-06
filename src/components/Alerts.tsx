// children is a prop that works will all components.

// if you dont include the reactnode, then you can pass string with children,
// in order to pass html code, you need to include reactnode.
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alerts = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alerts-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      {/*this button code is copied from bootstrap documentation*/}
    </div>
  );
};

export default Alerts;
