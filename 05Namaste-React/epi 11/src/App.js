import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
//{Header} beacause it is named import
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an API CAll and send username and password
    const data = {
      name: "Kartik Shingde",
    };
    setUserName(data.name);
  }, []);

  return (
    // overriding default value in context in Context.Provider a
    <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    // whole app is inside context.Provider So eveywhere the updates value or new value can be used

    //If we only Wrap Header Component in Context.Provider-
    // then updated value only updated in that component and other thw default value is Used..
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        //resId will be extracted by useParams() Hook
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
