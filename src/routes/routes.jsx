import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterScreen, LoginScreen } from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
