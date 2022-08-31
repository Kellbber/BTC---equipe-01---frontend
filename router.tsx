import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./src/types/routes";
import StartPage from "./src/pages/StartPage";
import Login from "./src/pages/login/index";
import AdminConfig from "./src/pages/AdminInstitution";
import Student from "./src/pages/AdminStudent/index";
import Users from "./src/pages/AdminUsers/index";
import Admin from "./src/pages/AdminPage/index";
import ConfigInstitution from "./src/pages/ConfigInstitution";
import CreateUser from "./src/pages/CreateUser/index";
import DetailsInstitution from "./src/pages/DetailsInstitution";
import ConfigStudent from "./src/pages/ConfigStudent";
import DetailsStudent from "./src/pages/DetailsStudent";
import DetailsUser from "./src/pages/DetailsUser";
import ConfigUser from "./src/pages/ConfigUser";
import FormMailUser from "./src/components/FormMailUser/index";
import DetailsHistoric from "./src/pages/DetailsHistoric";
import ConfigHistoric from "./src/pages/ConfigHistoric";
const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<StartPage />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.ADMINST} element={<AdminConfig />} />
      <Route path={RoutePath.FORMUSER} element={<ConfigUser />} />
      <Route path={RoutePath.USERUP} element={<ConfigUser update={true} />} />
      <Route path={RoutePath.STUDENT} element={<Student />} />
      <Route path={RoutePath.USERS} element={<Users />} />
      <Route path={RoutePath.DASHBOARD} element={<Admin />} />
      <Route path={RoutePath.FORMINST} element={<ConfigInstitution />} />
      <Route path={RoutePath.INSTUP}element={<ConfigInstitution update={true} />}/>
      <Route path={RoutePath.FORMSTUD} element={<ConfigStudent />} />
      <Route path={RoutePath.STUDUP} element={<ConfigStudent update={true} />}/>
      <Route path={RoutePath.CREATEUSER} element={<CreateUser />} />
      <Route path={RoutePath.DETAILSINST} element={<DetailsInstitution />} />
      <Route path={RoutePath.DETAILSSTUD} element={<DetailsStudent />} />
      <Route path={RoutePath.DETAILSUSER} element={<DetailsUser />} />
      <Route path={RoutePath.MAILUSER} element={<FormMailUser />} />
      <Route path={RoutePath.DETAILSHIST} element={<DetailsHistoric/>} />
      <Route path={RoutePath.FOLLOWUPS} element={<ConfigHistoric/>} />
      <Route path={RoutePath.FOLLOWUPSUP} element={<ConfigHistoric update={true}/>} />
    </Routes>
  );
};

export default Router;
