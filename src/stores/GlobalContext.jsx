import { createContext, useContext, useState, useRef } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Delete Modal
  const [show, setShow] = useState(false);
  const [deletedUser, setDeletedUser] = useState(null);

  const openDeleteModal = (user) => {
    setShow(true);
    setDeletedUser(user);
  };
  

  const closeDeleteModal = () => {
    setShow(false);
    setDeletedUser(null);
  };

  const inputRef = useRef();
  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const contextValue = {
    inputRef,
    setFocus,
    users,
    setUsers,
    show,
    setShow,
    deletedUser,
    setDeletedUser,
    openDeleteModal,
    closeDeleteModal,
    loading,
    setLoading,
  };
  const Component = GlobalContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useGlobalContext = () => useContext(GlobalContext);
export { GlobalContextProvider, useGlobalContext };