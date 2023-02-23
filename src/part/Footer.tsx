import React, { FC } from "react";
import BackgroundMainFooter from "../assets/images/footer/bg-footer.png";
import BackgroundFooterSecond from "../assets/images/footer/bg-footer3.png";
import TwitterIcon from "../assets/images/footer/twitter.png";
import MediumIcon from "../assets/images/footer/medium.png";
import DiscordIcon from "../assets/images/footer/discord.png";
import TelegramIcon from "../assets/images/footer/telegram.png";
import GeckoterminalIcon from "../assets/images/footer/geckoterminal.png";
import launchAppArrow from "../assets/images/home/launch-app-arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMainPage = pathname === "/";
  return (
    <>
      {isMainPage && (
        <div className="mx-auto container-2">
          <div className="start-img-item">
            <div className="start-img-item-body f-f-fg">
              <div className="left-part">
                <div className="gradient-text left-title f-f-fg">Start Now</div>
                <div className="left-para">
                  <p>Start build your passive income streams right away.</p>
                  <p>No registration required.</p>
                </div>
              </div>
              <div className="right-part">
                <div className="first">
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
        </div>
      )}

      <div className="footer-wrap pt-[200px] lg:[150px] xl:pt-[303px] xxxl:pt-[20%] relative block lg:block">
        <img
          alt="Background Footer"
          src={BackgroundMainFooter}
          className="w-full bg-index desktop-1 absolute bottom-0"
        />
        <img
          alt="Background Footer Second"
          src={BackgroundFooterSecond}
          className="bg-index mobile-1 absolute bottom-0 w-full"
        />
        <div className="mx-auto container-1 w-full relative lg:block">
          <div className="w-full content-wrapper-footer">
            <div className="links-wrapper">
              <p>Copyright © 2023 Thena. All rights reserved.</p>
              <div className="flex items-center space-x-[14px]">
                <a
                  href="https://twitter.com/ThenaFi_"
                  rel="noreferrer"
                  target="_blank">
                  <img
                    alt="Twitter Icon"
                    className="max-w-[44px]"
                    src={TwitterIcon}
                  />
                </a>
                <a
                  href="https://medium.com/@ThenaFi"
                  rel="noreferrer"
                  target="_blank">
                  <img
                    alt="MediumIcon"
                    className="max-w-[44px]"
                    src={MediumIcon}
                  />
                </a>
                <a
                  href="https://discord.gg/VMShQt73Ez"
                  rel="noreferrer"
                  target="_blank">
                  <img
                    alt="DiscordIcon"
                    className="max-w-[44px]"
                    src={DiscordIcon}
                  />
                </a>
                <a
                  href="https://t.me/+Lr-8OJpzxBo4Yjg0"
                  rel="noreferrer"
                  target="_blank">
                  <img
                    alt="TelegramIcon"
                    className="max-w-[44px]"
                    src={TelegramIcon}
                  />
                </a>
                <a
                  href="https://www.geckoterminal.com/bsc/thena/pools"
                  rel="noreferrer"
                  target="_blank">
                  <img
                    alt="GeckoterminalIcon"
                    className="max-w-[44px]"
                    src={GeckoterminalIcon}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
