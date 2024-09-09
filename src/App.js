import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Loginpage";
import { Provider } from "react-redux";
import store from "./components/Store";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/LoggedIn",
      element: <Body />,
    },
  ]);
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
