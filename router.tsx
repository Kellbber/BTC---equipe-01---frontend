import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./src/types/routes";
import StartPage from "./src/pages/StartPage";
import Login from "./src/pages/login/index";
import AdminConfig from "./src/pages/AdminInstitution";
import Create from "./src/pages/CreateUser/index";
import Student from './src/pages/AdminStudent/index';
import Users from './src/pages/AdminUsers/index'
import Admin from './src/pages/AdminPage/index'
import FormInstitution from "./src/components/FormInstitution/index";
import CreateUser from './src/pages/CreateUser/index'
import DetailsInstitution from "./src/pages/DetailsInstitution";
const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<StartPage />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.ADMINST} element={<AdminConfig />} />
      <Route path={RoutePath.FORMUSER} element={<Create />} />
      <Route path={RoutePath.STUDENT} element={<Student />} />
      <Route path={RoutePath.USERS} element={<Users/>} />
      <Route path={RoutePath.DASHBOARD} element={<Admin/>} />
      <Route path={RoutePath.FORMINST} element={<FormInstitution/>} />
      <Route path={RoutePath.CREATEUSER} element={<CreateUser/>} />
      <Route path={RoutePath.DETAILSINST} element={<DetailsInstitution/>} />
    </Routes>
  );
};

export default Router;
