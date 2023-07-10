

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import List from "./pages/List/List";
import SinglePage from "./pages/Singlepage/SinglePage";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"


import { Routes, Route } from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Delivery from "./pages/Delivery/Delivery";
import Network from "./pages/Network/Network";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "./components/Profile/Profile";

function App() {

const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ?  "app dark" : "app"}>

      <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/">

        <Route path="delivery" element={<Delivery />}   />
        <Route path="network" element={<Network />}   />
        <Route path="profile" element={<Profile />}   />

            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<SinglePage />} />
            <Route path="new" element={<New  inputs={userInputs}  title="Add New User" />} />
          </Route>

          <Route path="products">
           <Route index element={<List />} />
            <Route path=":productId" element={<SinglePage /> } />
            <Route path="new" element={<New   inputs={productInputs}  title="Add New Product"/>} />
          

       

        </Route>
        </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
