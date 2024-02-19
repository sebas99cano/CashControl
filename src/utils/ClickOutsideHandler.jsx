import React, { useEffect, useRef } from "react";

const ClickOutsideHandler = ({ isOpen, onClose, children }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return <div ref={ref}>{children}</div>;
};

export default ClickOutsideHandler;
