import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./src/types/routes";
import StartPage from "./src/pages/StartPage";
import Login from "./src/pages/login/index";
import AdminConfig from "./src/pages/AdminInstitution";
import Create from "./src/pages/CreateUser/index";
import Student from './src/pages/AdminStudent/index';
import Users from './src/pages/AdminUsers/index'
const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<StartPage />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.ADMINST} element={<AdminConfig />} />
      <Route path={RoutePath.CREATE} element={<Create />} />
      <Route path={RoutePath.STUDENT} element={<Student />} />
      <Route path={RoutePath.USERS} element={<Users/>} />
    </Routes>
  );
};

export default Router;
