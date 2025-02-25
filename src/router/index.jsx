import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from '../store/AuthContext';

// Pages
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Profile from '../pages/Profile';
import Chatbot from '../pages/Chatbot';
import Chatbot2 from '../pages/Chatbot2';
import Pricing from '../pages/Pricing';
import Faq from '../pages/Faq';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Forgot from '../pages/Forgot';
import Voicechat from '../pages/Voicechat';
// Protected Route Component with loading state
const ProtectedRoute = ({ children }) => {
  const { sessionId, loading } = React.useContext(AuthContext);

  // Wait for AuthContext to initialize
  if (loading) {
    return <div>Loading...</div>; // Or a spinner/loading component
  }

  // Redirect to login if no sessionId after loading
  if (!sessionId) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chats",
    element: <Chatbot />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/chatbot",
    element: (
      <ProtectedRoute>
        <Chatbot />
      </ProtectedRoute>
    ),
  },
  {
    path: "/voicechat",
    element: (
      <ProtectedRoute>
        <Voicechat />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;