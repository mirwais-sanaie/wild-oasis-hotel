import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import Bookings from "./pages/Bookings";
import AppLayout from "./ui/AppLayout";

const H1 = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 200px;
  padding: 20px;
  background: var(--color-yellow-700);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #ddd;
    color: #333;
  }
`;

const Input = styled.input`
  border: 1px solid gray;
  font-size: 16px;
  padding: 10px;
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand-200);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="Cabins" element={<Cabins />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
