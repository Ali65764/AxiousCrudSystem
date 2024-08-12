import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleUser } from "../api/Request";
import Layout from "../components/Layout";


const Info = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const fetchData = async (userId) => {
    try {
      const response = await GetSingleUser(userId);
      setUserInfo([response]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData(userId);
    }
  }, [userId]);

  if (!userInfo) {
    return <h2 className="text-green-300 text-4xl font-bold m-12">Not Found</h2>;
  }

  return (
    <Layout>
    <div className="maindiv">
      {userInfo.map((user, index) => (
        <div key={index}>
          <div className="maindiv2" >
            <h2 className="infoh2 text-secondary">{user.fullName}'s Datas</h2>
            <p className="infop "><span className="text-danger fw-bold">Fullname</span>:{user.fullName}</p>
            <p className="infop"><span className="text-danger fw-bold">Position</span>:{user.position}</p>
            <p className="infop"><span className="text-danger fw-bold">Email</span>: {user.email}</p>
            <p className="infop"><span className="text-danger fw-bold">Age</span>: {user.age}</p>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default Info;
