import React, { FC, useEffect, useState } from "react";
import BWNB from "../assets/images/token/WBNB.png";
import THE from "../assets/icons/logo.png";
import BTCB from "../assets/images/token/BTCB.png";
import BUSD from "../assets/images/token/BUSD.png";
import ETH from "../assets/images/token/ETH.png";
// import FRAX from "../assets/images/token/FRAX.png";
import USDC from "../assets/images/token/USDC.png";
import USDT from "../assets/images/token/USDT.png";
import CloseBtn from "../assets/images/close-button1.svg";
// import ONEINCH from "../assets/images/token/1INCH.png";
// import ADA from "../assets/images/token/ADA.png";
// import ANKR from "../assets/images/token/ANKR.png";
// import APE from "../assets/images/token/APE.png";
import Datajson from "../assets/data.json";

export interface IToken {
  name: string;
  value: number;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

interface ISelectTokenModal {
  show?: boolean;
  selectedTokenFrom?: IToken;
  selectedTokenTo?: IToken;
  isTo?: boolean;
  selectToken?: (token: IToken, isTo?: boolean) => void;
  close: () => void;
}

const TOKENS_COMMON: Array<IToken> = [
  {
    name: "BNB",
    value: 0,
    description: "Binance Coin",
    icon: BWNB,
  },
  {
    name: "BTCB",
    value: 0,
    description: "BTCB Coin",
    icon: BTCB,
  },
  {
    name: "BUSD",
    value: 0,
    description: "BUSD Coin",
    icon: BUSD,
  },
  {
    name: "ETH",
    value: 0,
    description: "ETH Coin",
    icon: ETH,
  },
  {
    name: "THE",
    value: 0,
    description: "Thena Coin",
    icon: THE,
  },
  {
    name: "USDC",
    value: 0,
    description: "USDC Coin",
    icon: USDC,
  },
  {
    name: "USDT",
    value: 0,
    description: "USDT Coin",
    icon: USDT,
  },
];

const GENERAL_TOKENS: Array<IToken> = Datajson?.length
  ? Datajson.map((x) => {
      return {
        name: x.symbol,
        value: 0,
        description: x.name,
        icon: x.logoURI,
      };
    })
  : [];

export const SelectTokenModal: FC<ISelectTokenModal> = ({
  close,
  selectToken,
  selectedTokenFrom = {
    name: "BNB",
    value: "BNB",
    description: "Binance Coin",
    icon: BWNB,
  },
  selectedTokenTo = {
    name: "THE",
    value: "THE",
    description: "Thena Coin",
    icon: THE,
  },
  isTo = false,
  show = false,
}) => {
  const [searchKey, setSearchKey] = useState("");
  const [general, setGeneral] = useState<Array<IToken>>([]);
  useEffect(() => {
    setGeneral(
      GENERAL_TOKENS.filter(
        (x) => x.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
      )
    );
  }, [searchKey]);
  return show ? (
    <>
      <div className="z-[201] visible opacity-100  w-full inset-0 fixed transition-all duration-300 ease-in-out flex items-center min-h-screen justify-center flex-col paraent">
        <div>
          <div className="max-w-[92%]   md:w-[540px]   mx-auto w-full py-3 md:py-5 bg-[#101645] rounded-lg border border-blue">
            <div className="flex items-center justify-between px-3 md:px-6">
              <div className="flex items-center">
                <p className="text-lg md:text-[22px] f-f-fg text-white font-semibold">
                  Select a Token
                </p>
              </div>
              <button className="focus:outline-none" onClick={close}>
                <img alt="" src={CloseBtn} />
              </button>
            </div>
            <div className="w-full">
              <div className="px-3 md:px-6">
                <div className="border border-blue w-full mt-3 rounded-[3px]">
                  <input
                    placeholder="Search by name, symbol or address"
                    className="bg-body placeholder-[#757384] h-14 w-full text-white text-base md:text-lg px-4 py-[18px] rounded-[3px]"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full mt-3.5 md:mt-[18px] px-3 md:px-6">
                <p className="text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-dimGray mb-1">
                  COMMON TOKENS
                </p>
                <div className="flex flex-wrap md:-mx-3">
                  {TOKENS_COMMON.map((token) => {
                    return (
                      <div
                        onClick={() => {
                          if (
                            selectedTokenFrom?.name === token.name ||
                            selectedTokenTo?.name === token.name
                          )
                            return;
                          if (selectToken) {
                            selectToken(token, isTo);
                          }
                        }}
                        role="button"
                        key={token.name}
                        className={`px-2 md:px-3 cursor-pointer py-1 md:py-1.5 border m-[5px] flex items-center space-x-[5px] border-[#343434] rounded-xl hover:bg-body ${
                          selectedTokenFrom?.name === token.name ||
                          selectedTokenTo?.name === token.name
                            ? "cursor-not-allowed opacity-40"
                            : "cursor-pointer"
                        }`}>
                        <img
                          alt=""
                          src={token.icon}
                          width="28"
                          height="28"
                          loading="lazy"
                        />
                        <p className="text-sm md:text-base text-white f-f-fg">
                          {token.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="flex justify-between text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-dimGray mb-1 px-3 md:px-6">
                <span>TOKEN NAME</span>
              </div>
              <div className="w-full mt-3 md:mt-[13px] max-h-[340px] overflow-auto">
                {general.map((item) => {
                  return (
                    <div
                      className={`flex items-center justify-between py-[6px] px-3 md:px-6 hover:bg-body ${
                        selectedTokenFrom?.name === item.name ||
                        selectedTokenTo?.name === item.name
                          ? "cursor-not-allowed opacity-40"
                          : "cursor-pointer"
                      }`}
                      key={item.name}
                      role="button"
                      onClick={() => {
                        if (
                          selectedTokenFrom?.name === item.name ||
                          selectedTokenTo?.name === item.name
                        )
                          return;
                        if (selectToken) {
                          selectToken(item, isTo);
                        }
                      }}>
                      <div className="flex items-center space-x-2.5 md:space-x-3">
                        <img
                          alt=""
                          src={item.icon}
                          className="flex-shrink-0"
                          width="28"
                          height="28"
                          loading="lazy"
                        />
                        <div className="">
                          <p className="text-white text-sm md:text-base f-f-fg">
                            {item.name}
                          </p>
                          <p className="text-[13px] md:text-sm tracking-[0.52px] text-dimGray">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
