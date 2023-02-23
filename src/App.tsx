import React, { useRef, useEffect, useState } from "react";
import { Header } from "./part/Header";
import { Footer } from "./part/Footer";
import "./style.scss";
import "./App.scss";
import "./main.scss";
import { AppRoutes } from "./routes";
import { Banner } from "./part/Banner";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const isShowBanner = pathname === "/";
  const [isScroll, setIsScroll] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const headerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const scrollBar = (e: any) => {
    if (headerRef.current) {
      setIsScroll(headerRef.current.getBoundingClientRect().y < -100);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollBar);
    return () => document.removeEventListener("scroll", scrollBar);
  }, []);
  return (
    <div className="main" ref={headerRef}>
      <Header isScroll={isScroll} />
      {isShowBanner && <Banner />}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
