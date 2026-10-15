// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
//import React from "react";
//import { Header } from "./components/static_task/Header";
//import ProfileCard from "./components/static_task/ProfileCard";
//import { Footer } from "./components/static_task/Footer";
//import { DynHeader } from "./components/dynamic_task/DynHeader";
//import { DynFooter } from "./components/dynamic_task/DynFooter";
//import DynProfileCard from "./components/dynamic_task/DynProfileCard";
//import students from "./components/dynamic_task/student";

//function App() {
  //function showCards() {
    //document.getElementById("clickText").style.display = "none";
    //document.getElementById("cards").style.display = "block";
 // }

  //return (
    //<div className="min-vh-100 bg-light">
      //<Header />

      //<div className="d-flex justify-content-center mt-4">
        //<ProfileCard />
      //</div>

     // <Footer />

      //<div className="container bg-light mt-5 text-center">
        //<button
          //id="clickText"
          //className="btn btn-danger px-4 py-2 shadow"
          //onClick={showCards}
        //>
          //Click Here to see Output...
        //</button>

        //<div
          //id="cards"
          //style={{ display: "none" }}
        //>
          //<DynHeader />

          //<div className="row justify-content-center g-4">
            //{students.map((student, index) => (
              //<div
                //className="col-md-4 d-flex justify-content-center"
                //key={index}
              //>
                //<DynProfileCard student={student} />
              //</div>
            //))}
            //<DynProfileCard />
          //</div>
          //<DynFooter />
        //</div>
      //</div>
   // </div>
  //);
//}

//export default App;


//import UseStateCounter from "./components/UseStateCounter";
//import UseReducerCounter from "./components/UseReducerCounter";

//function App() {
  //return (
    //<div className="container mt-5">

      //<h1 className="text-center mb-5">
        //Counter Exercise
      //</h1>

      //<UseStateCounter />

      //<hr />

      //<UseReducerCounter />

    //</div>
  //);
//}

//export default App;



{/*import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import StaticPage from "./pages/Static";
import CounterPage from "./pages/Counter";
import DynamicPage from "./pages/Dynamic";
import TodoList from "./pages/TodoList";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "static",
                element: <StaticPage />
            },
            {
                path: "dynamic",
                element: <DynamicPage />
            },
            {
                path: "counter",
                element: <CounterPage />
            },
            {
                path: "todo",
                element: <TodoList />
            }
        ]
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;*/}




// import { Routes, Route } from "react-router";

// import MainLayout from "./layouts/MainLayout";

// import StaticPage from "./pages/assignments/Static";
// import DynamicPage from "./pages/assignments/Dynamic";
// //import CounterPage from "./pages/assignments/Counter";
// import TodoList from "./pages/assignments/TodoList";

// import RBBadges from "./pages/NonInteractiveComponents/RBBadges";
// import RBBreadcrumbs from "./pages/NonInteractiveComponents/RBBreadcrumbs";
// import RBButtons from "./pages/NonInteractiveComponents/RBButtons";
// import RBButtonGroups from "./pages/NonInteractiveComponents/RBButtonGroups";
// import RBCards from "./pages/NonInteractiveComponents/RBCards";
// import RBImages from "./pages/NonInteractiveComponents/RBImages";
// import RBListGroup from "./pages/NonInteractiveComponents/RBListGroup";
// import RBFigure from "./pages/NonInteractiveComponents/RBFigure";
// import RBPagination from "./pages/NonInteractiveComponents/RBPagination";
// import RBProgressBars from "./pages/NonInteractiveComponents/RBProgressBars";
// import RBSpinners from "./pages/NonInteractiveComponents/RBSpinners";
// import RBTables from "./pages/NonInteractiveComponents/RBTables";

// import RBAccordion from "./pages/InteractiveComponents/RBAccordions";


// const App = () => {
//   return (
//     <Routes>

//       <Route path="/" element={<MainLayout />}>

//         <Route index element={<StaticPage />} />

//         <Route
//           path="static-profile"
//           element={<StaticPage />}
//         />

//         <Route
//           path="dynamic-profile"
//           element={<DynamicPage />}
//         />

//          {/* <Route
//           path="counter"
          
//           element={<CounterPage />}
//         />  */}

//         <Route
//           path="todo"
//           element={<TodoList />}
//         />

//         <Route
//           path="badges"
//           element={<RBBadges />}
//         />

//         <Route
//           path="breadcrumbs"
//           element={<RBBreadcrumbs />}
//         />

//         <Route
//           path="buttons"
//           element={<RBButtons />}
//         />

//         <Route
//           path="button-groups"
//           element={<RBButtonGroups />}
//         />

//         <Route
//           path="cards"
//           element={<RBCards />}
//         />

//         <Route
//           path="images"
//           element={<RBImages />}
//         />

//         <Route
//           path="list-group"
//           element={<RBListGroup />}
//         />

//         <Route
//           path="figure"
//           element={<RBFigure />}
//         />

//         <Route
//           path="pagination"
//           element={<RBPagination />}
//         />

//         <Route
//           path="progress-bars"
//           element={<RBProgressBars />}
//         />

//         <Route
//           path="spinners"
//           element={<RBSpinners />}
//         />

//         <Route
//           path="tables"
//           element={<RBTables />}
//         />

//         <Route
//           path="accordion"
//           element={<RBAccordion />}
//         />


//       </Route>

//     </Routes>
//   );
// };

// export default App;






import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import StaticPage from "./pages/assignments/Static";
//import CounterPage from "./pages/assignments/Counter";
import DynamicPage from "./pages/assignments/Dynamic";
import TodoList from "./pages/assignments/TodoList";



//import RBBadges from "./pages/NonInteractiveComponents/RBBadges";
import RBBreadcrumbs from "./pages/NonInteractiveComponents/RBBreadcrumbs";
import RBButtons from "./pages/NonInteractiveComponents/RBButtons";
import RBButtonGroups from "./pages/NonInteractiveComponents/RBButtonGroups";
import RBCards from "./pages/NonInteractiveComponents/RBCards";
import RBImages from "./pages/NonInteractiveComponents/RBImages";
import RBListGroup from "./pages/NonInteractiveComponents/RBListGroup";
import RBFigure from "./pages/NonInteractiveComponents/RBFigure";
import RBPagination from "./pages/NonInteractiveComponents/RBPagination";
import RBProgressBars from "./pages/NonInteractiveComponents/RBProgressBars";
import RBSpinners from "./pages/NonInteractiveComponents/RBSpinners";
import RBTables from "./pages/NonInteractiveComponents/RBTables";


import RBAccordions from "./pages/InteractiveComponents/RBAccordions";
import RBCarousels from "./pages/InteractiveComponents/RBCarousels";
import RBDropdowns from "./pages/InteractiveComponents/RBDropdowns";
import RBModal from "./pages/InteractiveComponents/RBModal";
import RBNavbarOffcanvas from "./pages/InteractiveComponents/RBNavbarOffcanvas";
import RBNavsTabs from "./pages/InteractiveComponents/RBNavsTabs";
import RBOverlays from "./pages/InteractiveComponents/RBOverlays";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "static",
                element: <StaticPage />
            },
            {
                path: "dynamic",
                element: <DynamicPage />
            },
            // {
            //     path: "counter",
            //     element: <CounterPage />
            // },
            {
                path: "todo",
                element: <TodoList />
            },
            // {
            //     path: "badges",
            //     element: <Badges />
            // },
            {
                path: "breadcrumbs",
                element: <RBBreadcrumbs />
            },
            {
                path: "buttons",
                element: <RBButtons />
            },
            {
                path: "button-group",
                element: <RBButtonGroups />
            },
            {
                path: "cards",
                element: <RBCards />
            },
            {
                path: "images",
                element: <RBImages />
            },
            {
                path: "list-group",
                element: <RBListGroup />
            },
            {
                path: "figures",
                element: <RBFigure />
            },
            {
                path: "pagination",
                element: <RBPagination />
            },
            {
                path: "progress-bars",
                element: <RBProgressBars />
            },
            {
                path: "spinners",
                element: <RBSpinners />
            },
            {
                path: "tables",
                element: <RBTables />
            },
            {
                path: "accordions",
                element: <RBAccordions />
            },
            {
                path: "carousels",
                element: <RBCarousels />
            },
            {
                path: "dropdown",
                element: <RBDropdowns />
            },
            {
                path: "modals",
                element: <RBModal />
            },
            {
                path: "navbar-offcanvas",
                element: <RBNavbarOffcanvas />,
            },
            {
                path: "navs-tabs",
                element: <RBNavsTabs />,
            },
            {
                path: "overlays",
                element: <RBOverlays />,
            }
        ]
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;