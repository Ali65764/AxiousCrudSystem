import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { DeleteSingleUser } from "../api/Request";
import { ROUTER } from "../constant/router";
import { useGlobalContext } from "../stores/GlobalContext";
import DeleteModal from "./Modals/DeleteModal";
import { toast } from "react-toastify";
import { GetUsers } from "../api/Request";
import EditModal from "./Modals/EditModal";
import Sort from "../components/Sort";
import "../index.css";

const Home = () => {
  const { openDeleteModal, closeDeleteModal,users,setUsers } = useGlobalContext();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortOrder, setSortOrder] = useState('A-Z Fullname');



   const fetchUsers = async () => {
    const response = await GetUsers();
    setUsers(response);
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  const openEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const removeUser = async (userId) => {
    await DeleteSingleUser(userId);
    toast.success("User deleted successfully", { autoClose: 1000 });
    fetchUsers();
    closeDeleteModal();
  };

  const handleSortChange = (sortType) => {
    setSortOrder(sortType);
  };

  const sortedUsers = [...users].sort((a, b) => {
    switch (sortOrder) {
      case 'A-Z Fullname':
        return a.fullName.localeCompare(b.fullName);
      case 'Z-A Fullname':
        return b.fullName.localeCompare(a.fullName);
      case 'Low To High Age':
        return a.age - b.age;
      case 'High To Low Age':
        return b.age - a.age;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-white my-3 fs-5">User List</h1>
        <Sort onSortChange={handleSortChange} />
        <table className="table table-striped w-75 fs-4">
          <thead>
            <tr>
              <th>S.No</th>
              <th>FullName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Position</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.position}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => openEditModal(user)}
                  >
                    Modal
                  </button>
                  <Link
                    className="btn btn-primary"
                    to={`${ROUTER.UpdateUser}/${user.id}`}
                  >
                    Page
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => openDeleteModal(user)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info text-white"
                    to={`${ROUTER.Info}/${user.id}`}
                  >
                    Info
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal removeUser={removeUser} />
      <EditModal
        show={showEditModal}
        onClose={closeEditModal}
        user={selectedUser}
        fetchUsers={fetchUsers}
      />
    </Layout>
  );
};

export default Home;
