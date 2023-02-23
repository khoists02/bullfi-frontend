import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import launchAppArrow from "../assets/images/home/launch-app-arrow.svg";

export const Banner: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative hero-wrapper">
      <div className="video-wrapper">
        <video
          className="bg-index"
          playsInline
          autoPlay
          src="https://ipfs.io/ipfs/QmPjbfZKBCk4HpYnkuLsKkoexg5SjpRaLzuiHZaGv3pPrN"
          data-src="https://ipfs.io/ipfs/QmPjbfZKBCk4HpYnkuLsKkoexg5SjpRaLzuiHZaGv3pPrN"></video>
      </div>
      <div className="container-1 mx-auto hero-box">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        <div className="why-img-item">
          <div className="why-img-item-body f-f-fg">
            <h2 className="heading">The Native Liquidity Layer On BNB.</h2>
            <div
              role="button"
              onClick={() => navigate("/swap")}
              className="sc-bcXHqe dqfLRD  f-f-fg ">
              SWAP NOW
              <img src={launchAppArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
