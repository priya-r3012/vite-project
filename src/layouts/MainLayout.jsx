//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//import { Link, Outlet } from "react-router";

//function MainLayout() {
  //  return (
    //    <div className="app-layout">

//            <div className="sidebar">

  //              <Link to="/">
    //                Home Page
      //          </Link>

        //        <Link to="/static">
          //          Static Component
            //    </Link>

              //  <Link to="/dynamic">
                //    Dynamic Component
                //</Link>

            //    <Link to="/counter">
                //    Counters
              //  </Link>

       //         <Link to="/todo">
           //         TodoList
         //       </Link>

            //</div>

        //    <div className="content-area">
          //      <Outlet />
        //    </div>
          //  <ToastContainer
            //    position="top-right"
              //  autoClose={2000}
                //hideProgressBar={false}
             //   newestOnTop={false}
  //             // closeOnClick
    //            pauseOnHover
      //      />

  //      </div>
    //);
//}

//export default MainLayout;




import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  const [openSection, setOpenSection] = useState(null);

  const handleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };

  return (
    <div className="app-layout">

      {/* ================= SIDEBAR ================= */}
      <div className="sidebar">

        <h3 className="sidebar-title">
          Menu
        </h3>


        {/* ================= ASSIGNMENTS ================= */}

        <div className="sidebar-section">

          <div
            className="section-header"
            onClick={() => handleSection("assignment")}
          >
            <span>Assignments</span>

            <i
              className={
                openSection === "assignment"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>


          {openSection === "assignment" && (
            <div className="section-items">

              <Link to="/">
                <i className="bi bi-house"></i>
                Home Page
              </Link>


              <Link to="/static-profile">
                <i className="bi bi-person"></i>
                Static Component
              </Link>


              <Link to="/dynamic-profile">
                <i className="bi bi-people"></i>
                Dynamic Component
              </Link>


              <Link to="/counter">
                <i className="bi bi-plus-slash-minus"></i>
                Counter
              </Link>


              <Link to="/todo">
                <i className="bi bi-list-check"></i>
                Todo List
              </Link>

            </div>
          )}

        </div>


        {/* ================= NON INTERACTIVE ================= */}

        <div className="sidebar-section">

          <div
            className="section-header"
            onClick={() => handleSection("nonInteractive")}
          >

            <span>
              Non Interactive Comp.
            </span>

            <i
              className={
                openSection === "nonInteractive"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>

          </div>


          {openSection === "nonInteractive" && (
            <div className="section-items">


              <Link to="/badges">
                
                Badges
              </Link>


              <Link to="/breadcrumbs">
                
                Breadcrumbs
              </Link>


              <Link to="/buttons">
                
                Buttons
              </Link>


              <Link to="/button-groups">
                
                Button Group
              </Link>


              <Link to="/cards">
               
                Cards
              </Link>


              <Link to="/images">
               
                Images
              </Link>


              <Link to="/list-group">
                
                List Group
              </Link>


              <Link to="/figure">
                
                Figures
              </Link>


              <Link to="/pagination">
                
                Pagination
              </Link>


              <Link to="/progress-bars">
                
                Progress Bars
              </Link>


              <Link to="/spinners">
                
                Spinners
              </Link>


              <Link to="/tables">
                
                Tables
              </Link>


                        </div>
          )}

        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="content-area">

        <Outlet />

      </div>


      {/* ================= TOASTIFY ================= */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />

    </div>
  );
}

export default MainLayout;