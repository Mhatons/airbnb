import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import IconNav from "./iconNav";
import Navigation from "./nav";
import Footer from "./footer";

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

  let lastScrollPosition = 0;
  const footer = document.querySelector('.footer');

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
      footer?.classList?.remove('show');
    } else {
      footer?.classList?.add('show');
    }

    lastScrollPosition = currentScrollPosition;
  });



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
          <div id="footer" className="footer fixed bottom-0 bg-white z-10 w-full border-t">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
