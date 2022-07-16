import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useAuth } from "../../hooks/useAuth";

export default function Layout({ children }) {
  const { startLogout } = useAuth();

  const handleLogut = () => {
    startLogout();
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <Navbar handleClick={handleClick} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLogout={handleLogut}
      />
      <div className="container">{children}</div>
    </>
  );
}
