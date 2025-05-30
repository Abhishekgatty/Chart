// import React from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";
// import { AuthContext } from '../store/AuthContext';

// // Pages
// import Home from '../pages/Home';
// import Contacts from '../pages/Contacts';
// import Profile from '../pages/Profile';
// import Chatbot from '../pages/Chatbot';
// import Chatbot2 from '../pages/Chatbot2';
// import Pricing from '../pages/Pricing';
// import Faq from '../pages/Faq';
// import NotFound from '../pages/NotFound';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Forgot from '../pages/Forgot';
// import Voicechat from '../pages/Voicechat';
// import Reset from '../pages/Reset';
// import Qa from '../pages/QA/Qa';
// import About from '../pages/About/About';
// import Services from '../pages/Services/Services';
// import Answer from '../pages/Answer/Answer';
// // Protected Route Component with loading state
// const ProtectedRoute = ({ children }) => {
//   const { sessionId, loading } = React.useContext(AuthContext);

//   // Wait for AuthContext to initialize
//   if (loading) {
//     return <div>Loading...</div>; // Or a spinner/loading component
//   }

//   // Redirect to login if no sessionId after loading
//   if (!sessionId) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/chats",
//     element: <Chatbot />,
//   },
//   {
// path:"/chatbot-s2",
// element:<Chatbot2/>,
//   },
//   {
//     path: "/contacts",
//     element: <Contacts />,
//   },
//   {
//     path: "/chatbot",
//     element: (
//       <ProtectedRoute>
//         <Chatbot />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/voicechat",
//     element: (
//       <ProtectedRoute>
//         <Voicechat />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/pricing",
//     element: <Pricing />,
//   },
//   {
//     path: "/faq",
//     element: <Faq />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/forgot",
//     element: <Forgot />,
//   },
//   {
//     path: "/reset",
//     element: <Reset />,
//   },
//   {
//     path: "/n",
//     element: <NotFound />,
//   },
//   {
//     path:"/qa",
//     element:<Qa/>,
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/services",
//     element:<Services/>
//   },
//   {
//     path:"/answer",
//     element:<Answer/>
//   }

// ]);

// function Router() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default Router;





// src/router/Router.js


// import React from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from 'react-router-dom';
// import { AuthContext } from '../store/AuthContext';

// // Pages
// import Home from '../pages/Home';
// import Contacts from '../pages/Contacts';
// import Profile from '../pages/Profile';
// import Chatbot from '../pages/Chatbot';
// import Chatbot2 from '../pages/Chatbot2';
// import Pricing from '../pages/Pricing';
// import Faq from '../pages/Faq';
// import NotFound from '../pages/NotFound';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Forgot from '../pages/Forgot';
// import Voicechat from '../pages/Voicechat';
// import Reset from '../pages/Reset';
// import About from '../pages/About/About';
// import Services from '../pages/Services/Services';
// import Answer from '../pages/Answer/Answer';
// import Qa from '../pages/QA/Qa';

// // Protected Route Wrapper
// const ProtectedRoute = ({ children }) => {
//   const { sessionId, loading } = React.useContext(AuthContext);

//   if (loading) return <div>Loading...</div>;
//   if (!sessionId) return <Navigate to="/login" replace />;
//   return children;
// };

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   {
//     path: '/chatbot',
//     element: (
//       <ProtectedRoute>
//         <Chatbot />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/voicechat',
//     element: (
//       <ProtectedRoute>
//         <Voicechat />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/qa',
//     element: (
//       <ProtectedRoute>
//         <Qa />
//       </ProtectedRoute>
//     ),
//   },
//   { path: '/chats', element: <Chatbot /> }, // Public access, optional
//   { path: '/chatbot-s2', element: <Chatbot2 /> },
//   { path: '/contacts', element: <Contacts /> },
//   { path: '/profile', element: <Profile /> },
//   { path: '/pricing', element: <Pricing /> },
//   { path: '/faq', element: <Faq /> },
//   { path: '/login', element: <Login /> },
//   { path: '/register', element: <Register /> },
//   { path: '/forgot', element: <Forgot /> },
//   { path: '/reset', element: <Reset /> },
//   { path: '/about', element: <About /> },
//   { path: '/services', element: <Services /> },
//   { path: '/answer', element: <Answer /> },
//   { path: '*', element: <NotFound /> }, // Catch-all route
// ]);

// function Router() {
//   return <RouterProvider router={router} />;
// }

// export default Router;


// import React from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";
// import { AuthContext } from '../store/AuthContext';

// // Pages
// import Home from '../pages/Home';
// import Contacts from '../pages/Contacts';
// import Profile from '../pages/Profile';
// import Chatbot from '../pages/Chatbot';
// import Chatbot2 from '../pages/Chatbot2';
// import Pricing from '../pages/Pricing';
// import Faq from '../pages/Faq';
// import NotFound from '../pages/NotFound';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Forgot from '../pages/Forgot';
// import Voicechat from '../pages/Voicechat';
// import Reset from '../pages/Reset';

// import About from '../pages/About/About';
// import Services from '../pages/Services/Services';
// import Answer from '../pages/Answer/Answer';
// import Qa from '../pages/QA/Qa';
// // Protected Route Component with loading state
// const ProtectedRoute = ({ children }) => {
//   const { sessionId, loading } = React.useContext(AuthContext);

//   // Wait for AuthContext to initialize
//   if (loading) {
//     return <div>Loading...</div>; // Or a spinner/loading component
//   }

//   // Redirect to login if no sessionId after loading
//   if (!sessionId) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/chats",
//     element: <Chatbot />,
//   },
//   {
// path:"/chatbot-s2",
// element:<Chatbot2/>,
//   },
//   {
//     path: "/contacts",
//     element: <Contacts />,
//   },
//   {
//     path: "/chatbot",
//     element: (
//       <ProtectedRoute>
//         <Chatbot />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/voicechat",
//     element: (
//       <ProtectedRoute>
//         <Voicechat />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/pricing",
//     element: <Pricing />,
//   },
//   {
//     path: "/faq",
//     element: <Faq />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/forgot",
//     element: <Forgot />,
//   },
//   {
//     path: "/reset",
//     element: <Reset />,
//   },
//   {
//     path: "/n",
//     element: <NotFound />,
//   },
//    {
//     path: "/qa",
//     element: (
//      <ProtectedRoute>
//       <Qa/>
//      </ProtectedRoute>
//     ),
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/services",
//     element:<Services/>
//   },
//   {
//     path:"/answer",
//     element:<Answer/>
//   }

// ]);

// function Router() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default Router;



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
import Reset from '../pages/Reset';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Answer from '../pages/Answer/Answer';
import Qa from '../pages/QA/Qa';

// ✅ Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { sessionId, loading } = React.useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Add your spinner if needed
  }

  if (!sessionId) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// ✅ Define router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/chatbot-s2",
    element: (
      <ProtectedRoute>
        <Chatbot2 />
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
    path: "/qa",
    element: (
      <ProtectedRoute>
        <Qa />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contacts",
    element: <Contacts />,
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
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/n",
    element: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/answer",
    element: <Answer />,
  },
]);

// ✅ Router Provider component
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
