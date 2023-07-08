import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import IconNav from "./iconNav";
import Nav from "./nav/Nav"
import Navigation from "./nav";

export default function MainLayout() {

  const [navPos, setNavPos] = useState(false)


  window.onscroll = function () { myFunction() };
  function myFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      setNavPos(true)
    }
    else {
      // prompt("below 350")
      setNavPos(false)
    }
  }

  return (
    <div className="">
      <section className="">
        {/* Nav With Content */}
        <div id="NavWithContent" className="pt-0 ">
          {/* navBar */}
          <div id="navBar" className=" border-b fixed w-full bg-white z-20 pt-3">
            <Navigation />
          </div>
          <div id="iconNav" className={` ${navPos ? "transition ease-in-out delay-150 duration-300 shadow-md w-full fixed pt-20" : "pt-24"} bg-white z-10`}>
            <IconNav />
          </div>
          {/* main content */}
          <div className={`${navPos ? " pt-44":null} pb-16`} id="">
            <Outlet />
          </div>
          {/* Footer */}
          <div id="footer" className="fixed bottom-0 bg-white w-full border-t">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
