import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Pages

import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Stories from '../pages/Stories';
import Profile from '../pages/Profile';
import Chatbot from '../pages/Chatbot';
import Chatbot2 from '../pages/Chatbot2';
import Pricing from '../pages/Pricing';
import Faq from '../pages/Faq';
import NotFound from '../pages/NotFound';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Forgot from '../pages/Forgot';

import UiElements from '../pages/UiElements';
import UiChatReplies from '../pages/UiChatReplies';
import UiUsecaseModals from '../pages/UiUsecaseModals';

import Landing from '../pages/Landing';

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
    element: <Chatbot />,
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
  )
}

export default Router;
