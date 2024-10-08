import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./components/Store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
    <Body />
    </Provider>
  );
}

export default App;
