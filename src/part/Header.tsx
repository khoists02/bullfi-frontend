import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import hamburger from "..//assets/images/hamburger-menu.png";
import closeButton from "..//assets/images/close-button.svg";

export const Header: FC<{ isScroll: boolean }> = ({ isScroll }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={`${
          !isScroll
            ? "header-wrap bg-transparent transition-all duration-300 ease-in-out  fixed w-full z-[120]"
            : "header-wrap bg-[#090333] transition-all duration-300 ease-in-out  fixed w-full z-[120]"
        }`}>
        <div className="header px-4 2xl:px-12 py-6">
          <Link to="/">
            <img className="logo relative z-10" src={logo} alt="Header Logo" />
          </Link>
          <ul className="navigation absolute z-20 justify-center hidden xl:flex items-center w-full">
            <li className="links">
              <Link
                to="/swap"
                className={`${
                  pathname === "/swap" ? "text-sky" : "font-light"
                }`}>
                SWAP
              </Link>
            </li>
            <li className="links">
              <Link
                to="/swap"
                className={`${
                  pathname === "/vote" ? "text-sky" : "font-light"
                }`}>
                VOTE
              </Link>
            </li>
            <li className="links">
              <Link
                to="/"
                className={`${
                  pathname === "/another" ? "text-sky" : "font-light"
                }`}>
                GAUGES
              </Link>
            </li>
            <li className="links">
              <Link
                to="/"
                className={`${
                  pathname === "/another" ? "text-sky" : "font-light"
                }`}>
                theNFT
              </Link>
            </li>
            <li className="links">
              <Link
                to="/"
                className={`${
                  pathname === "/another" ? "text-sky" : "font-light"
                }`}>
                REFERRAL
              </Link>
            </li>
            <li className="links">
              <Link
                to="/"
                className={`${
                  pathname === "/another" ? "text-sky" : "font-light"
                }`}>
                MORE
              </Link>
            </li>
          </ul>
          <div>
            <div className="px-3.5 text-xs tracking-[2px] xl:px-[25px] xl:tracking-[2px] bg-[#bd00ed1a] h-[46.85px] items-center font-semibold text-white  text-sm md:text-sm relative z-20  xl:text-base leading-7  connect-wallet f-f-fg hidden xl:flex">
              CONNECT WALLET
            </div>
          </div>

          <button
            className="bg-transparent w-8 xl:hidden"
            onClick={() => setOpen(!open)}>
            <img src={hamburger} alt="Hamburger" />
          </button>
        </div>
      </div>

      <div className={`top-bg !z-[1000] xl:hidden top-${open ? "0" : "minus"}`}>
        <div className="inner-tab">
          <div className="top-navigation">
            <a href="">
              <img src={logo} alt="Logo 2" />
            </a>
            <div
              className="close-button"
              role="button"
              onClick={() => setOpen(false)}>
              <img src={closeButton} alt="" />
            </div>
          </div>
          <div className="bottom-navigation w-full">
            <ul className="flex flex-col items-center justify-center">
              <li className="links">
                <Link
                  to="/swap"
                  className={`no-link text-white ${
                    pathname === "/swap" ? "text-sky" : ""
                  }`}>
                  SWAP
                </Link>
              </li>
              <li className="links">
                <Link
                  to="/swap"
                  className={`no-link text-white ${
                    pathname === "/vote" ? "text-sky" : ""
                  }`}>
                  VOTE
                </Link>
              </li>
            </ul>
            <button className="mobile-btn f-f-fg">
              <div className="line1"></div>
              <div className="line2"></div>CONNECT WALLET
            </button>
          </div>
        </div>
      </div>

      <div className="fixed z-0 invisible opacity-0 inset-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-[0.88] bg-body"></div>
      <div className="z-0 invisible opacity-0  w-full inset-0 fixed transition-all duration-300 ease-in-out flex items-center min-h-screen justify-center flex-col paraent">
        <div>
          <div className="max-w-[92%]   md:w-[540px] px-3 md:px-6  mx-auto w-full py-3 md:py-5 bg-[#101645] rounded-lg border border-blue">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-lg md:text-[22px] f-f-fg text-white font-semibold"></p>
              </div>
            </div>
            <div className="bg-[#0D1238] px-6 py-[18px] rounded-[3px] mt-4 sm:min-w-[450px] lg:max-w-[540px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
