import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { AddSingleUser } from "../api/Request";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/router";
import { useGlobalContext } from "../stores/GlobalContext";

const initialState = {
  fullName: "",
  age: 0,
  email: "",
  position: "",
};

const AddUser = () => {
  const [newUser, setNewUser] = useState(initialState);
  const navigate = useNavigate();
  const { inputRef, setFocus, loading, setLoading } = useGlobalContext();
  const resetForm = () => {
    setNewUser(initialState);
  };
  const handleAdduser = async () => {
    setLoading(true);
    await AddSingleUser(newUser);
    setNewUser(initialState);
    resetForm();
    toast.success("User added successfully", { autoClose: 1000 });
    setTimeout(() => {
      setLoading(false);
      navigate(ROUTER.Home);
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (

    <Layout>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-white my-4">Add User</h1> 
        <div className="bg-dark-subtle w-50 text-center rounded  border border-primary pt-4 pb-3">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 w-75 my-2 border border-primary rounded"
              name="fullName"
              value={newUser.fullName}
              onChange={handleInputChange}
              ref={inputRef}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Position"
              name="position"
              value={newUser.position}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={newUser.age}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>

          <Button className="my-3 px-5 py-2 fs-5 w-75" onClick={handleAdduser}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </div>
     </Layout>
  );
};

export default AddUser;