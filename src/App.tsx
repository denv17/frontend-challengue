import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";

import { Layout } from "@/layouts/Layout";
import { Login } from "@/pages/Login";
import { Plans } from "@/pages/Plans";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export const App = () => {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/planes"
              element={
                <ProtectedRoute>
                  <Plans />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};
