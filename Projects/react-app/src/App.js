import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeRoute from "./routes/HomeRoute";
import NotFoundRoute from "./routes/NotFoundRoute";
import RootRoute from "./routes/RootRoute";
import ErrorRoute from "./routes/ErrorRoute";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootRoute/>,
    errorElement: <NotFoundRoute/>, // Handle 404 errors
    children:[
      {
       index: true,
       element: <HomeRoute/>,
       errorElement: <NotFoundRoute/>
      },
      {
        path:"signin",
        element: <SignInRoute/>,
        errorElement: <NotFoundRoute/>

       },
       {
        path:"signup",
        element: <SignUpRoute/>,
        errorElement: <NotFoundRoute/>
       },
       {
        path:"*",
        element: <ErrorRoute/>, // Catch-all route for displaying custom error
       },
    ]

  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
