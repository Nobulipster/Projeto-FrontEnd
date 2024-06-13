import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterScreen, LoginScreen, ForgotScreen, AdmScreen, IndexScreen } from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/forgot" element={<ForgotScreen />} />
          <Route path="/admin" element={<AdmScreen />} />
          <Route path="/index" element={<IndexScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
