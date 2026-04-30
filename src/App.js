
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store"; // adjust path if needed
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import Demo from "./Components/Demo";
import Context from "./Components/Context";
import TodoList from "./Components/TodoList";
// import { useState } from 'react';

function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
            {
        path:"demo",
        element:<Demo/>
      },
       {
        path:"context",
        element:<Context/>
      },
             {
        path:"todolist",
        element:<TodoList/>
      }
    ]
  }])
  // const [show,setshow]=useState(true);
  return (
    <Provider store={store}>
    <div className="App">
     
     {/* <Head show={show} setShow={setshow}/>
     <Body show={show} /> */}
      <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
