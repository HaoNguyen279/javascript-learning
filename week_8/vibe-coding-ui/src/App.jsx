import { Navigate, Route, Routes } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import DashboardPage from "./DashboardPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}