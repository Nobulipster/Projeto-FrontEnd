import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterScreen, LoginScreen, ForgotScreen, AdmScreen } from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/forgot" element={<ForgotScreen />} />
          <Route path="/admin" element={<AdmScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
