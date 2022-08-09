
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./src/types/routes";
import StartPage from "./src/pages/StartPage";
import Login from "./src/pages/login/index";
import AdminConfig from "./src/pages/AdminConfig";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<StartPage />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.ADMCONFIG} element={<AdminConfig/>}/>
    </Routes>
  );
};

export default Router;
