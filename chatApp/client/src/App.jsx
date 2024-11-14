import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth_pages/signUp";
import SignIn from "./pages/auth_pages/signIn";
import PrivateRoute from "./component/privateRoute";
import Dashboard from "./pages/dashboard/dashboard";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration:true
    },
  },
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
