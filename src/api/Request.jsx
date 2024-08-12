import axios from "axios";


export const Api = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const GetUsers = async()=>{
  try{
    const response = await Api.get("/")
    if(response.status !==200){
      throw new Error("Error")
    }
    else{
      return response.data;
    }
  }
  catch(error){
    console.log(error.message)
    throw error;
  }
}



export const GetSingleUser = async(userId) => {
  try {
    const response = await Api.get(`/${userId}`);
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const AddSingleUser = async (newUser) => {
  try {
    const response = await Api.post("/", newUser);
    if (response.status !== 201) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const EditSingleUser = async (userId, newUser) => {
  try {
    const response = await Api.put(`/${userId}`, newUser);
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const DeleteSingleUser = async (userId) => {
  try {
    const response = await Api.delete(`/${userId}`);
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};