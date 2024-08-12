import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { GetSingleUser, EditSingleUser } from "../api/Request";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTER } from "../constant/router";

const initialState = {
  fullName: "",
  age: 0,
  email: "",
  position: "",
};

const UpdateUser = () => {
  const [newUser, setNewUser] = useState(initialState);
  const navigate = useNavigate();
  const { userId } = useParams();

  const fetchUser = async () => {
    const response = await GetSingleUser(userId);
    setNewUser(response);
  };

  const handleEditUser = async () => {
      await EditSingleUser(userId, newUser);
      setNewUser(initialState);
      toast.success("User edited successfully", { autoClose: 1000 });
      setTimeout(() => {
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
    fetchUser();
  }, []);

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-white my-4">Update User</h1>
        <div className="bg-dark-subtle w-50 text-center rounded border border-primary pt-4 pb-3">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="p-2 w-75 my-2 border border-primary rounded"
              value={newUser.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="p-2 w-75 my-1 border border-primary rounded"
              value={newUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Position"
              name="position"
              className="p-2 w-75 my-1 border border-primary rounded"
              value={newUser.position}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              name="age"
              className="p-2 w-75 my-1 border border-primary rounded"
              value={newUser.age}
              onChange={handleInputChange}
            />
          </div>

          <Button className="my-3 px-5 py-2 fs-5 w-75" onClick={handleEditUser}>
            Submit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateUser;
