import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
import { Home, AddUser, UpdateUser, Error,Info } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} exact element={<Home />} />
        <Route path={ROUTER.AddUser} element={<AddUser />} />
        <Route path={ROUTER.UpdateUser + "/:userId"} element={<UpdateUser />} />
        <Route path={ROUTER.Info +"/:userId"} element={<Info/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;