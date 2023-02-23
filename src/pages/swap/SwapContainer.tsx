import React, { FC } from "react";
import Bar from "../../assets/images/swap/bar.svg";
import Reverse from "../../assets/images/swap/reverse-icon.svg";
import WBNB from "../../assets/images/token/WBNB.png";
import ArrowDown from "../../assets/images/swap/dropdown-arrow.png";
import ETH from "../../assets//images/token/ETH.png";

const SwapContainer: FC = () => {
  return (
    <div className="w-full max-w-[588px] px-5 xl:px-0 mx-auto relative  pt-[140px] pb-28 xl:pb-0 2xl:pb-[150px]">
      <div>
        <div className="gradient-bg shadow-[0_0_50px_#48003d] p-px relative z-[10] rounded-[5px]">
          <div className="solid-bg rounded-[5px] px-3 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              <p className="f-f-fg text-[23px] md:text-[27px] leading-10 text-white font-semibold">
                Swap
              </p>
              <button className="">
                <img alt="" src={Bar} />
              </button>
            </div>
            <div className="mt-3 md:mt-[26px]">
              <div className="flex flex-col w-full items-center justify-center">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-dimGray text-sm md:text-base leading-10">
                      From
                    </p>
                  </div>
                  <div className="gradient-bg mt-1.5 md:mt-2.5 p-px w-full rounded-[3px]">
                    <div className="bg-body pr-3 rounded-[3px] flex items-center">
                      <input
                        type="text"
                        className="bg-transparent !border-0 w-4/5 py-[8px] lg:py-[15px] pl-2.5 lg:pl-4 text-xl lg:text-2xl leading-10 placeholder-[#757384] text-white"
                      />
                      <div className="flex items-center ml-2 space-x-5 f-f-fg lg:space-x-8 cursor-pointer">
                        <div className="flex items-center space-x-[3.5px] lg:space-x-2 ">
                          <img
                            src={WBNB}
                            className="w-[28px] h-[28px]"
                            alt="WBNB"
                          />
                          <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                            BNB
                          </p>
                        </div>
                        <img alt="" src={ArrowDown} />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="focus:outline-none mt-5 z-[8]">
                  <img src={Reverse} />
                </button>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-dimGray text-sm md:text-base leading-10">
                      To
                    </p>
                  </div>
                  <div className="gradient-bg mt-1.5 md:mt-2.5 p-px w-full rounded-[3px]">
                    <div className="bg-body pr-3 rounded-[3px] flex items-center">
                      <input
                        type="text"
                        className="bg-transparent !border-0 w-4/5 py-[8px] lg:py-[15px] pl-2.5 lg:pl-4 text-xl lg:text-2xl leading-10 placeholder-[#757384] text-white"
                      />
                      <div className="flex items-center ml-2 space-x-5 f-f-fg lg:space-x-8 cursor-pointer">
                        <div className="flex items-center space-x-[3.5px] lg:space-x-2 ">
                          <img
                            src={ETH}
                            className="w-[28px] h-[28px]"
                            alt="ETH"
                          />
                          <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                            ETH
                          </p>
                        </div>
                        <img alt="" src={ArrowDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-white text-sm md:text-base leading-5">
                  Slippage Tolerance
                </p>
                <p className="text-white text-sm md:text-base leading-5">
                  0.5%
                </p>
              </div>
            </div>
            <button className="connect-wallet-btn text-white w-full py-[13px] md:py-[14.53px] text-base md:text-lg leading-8 tracking-[1.44px] f-f-fg transition-all duration-300 ease-out mt-[8px] md:mt-5 font-semibold rounded-[3px]">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapContainer;
