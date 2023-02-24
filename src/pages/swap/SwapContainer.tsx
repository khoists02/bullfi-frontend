import React, { FC, useEffect, useMemo, useState } from "react";
import CryptoConvert from "crypto-convert";
import Bar from "../../assets/images/swap/bar.svg";
import Reverse from "../../assets/images/swap/reverse-icon.svg";
import BWNB from "../../assets/images/token/WBNB.png";
import ETH from "../../assets/images/token/ETH.png";
import ArrowDown from "../../assets/images/swap/dropdown-arrow.png";
import { IToken, SelectTokenModal } from "../../components/SelectTokenModal";
// import DataJson from "../../assets/data.json";
import ReverseIcon from "../../assets/images/reverse-small-icon.png";
import RouteArrowRight from "../../assets/images/route-arrow.svg";

const options = {
  cryptoInterval: 5000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
  fiatInterval: 1 * 60 * 60, //Fiat prices update interval (default every 1 hour)
  calculateAverage: true, //Calculate the average crypto price from exchanges
  binance: true, //Use binance rates
  bitfinex: true, //Use bitfinex rates
  coinbase: true, //Use coinbase rates
  kraken: true, //Use kraken rates
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onUpdate: (tickers: any, isFiatUpdate?: any) => {
    // eslint-disable-next-line no-console
    console.log({ tickers });
  }, //Callback on every crypto update
  HTTPAgent: null, //HTTP Agent for server-side proxies (Node.js only)
};

const convert = new CryptoConvert(options);
const SwapContainer: FC = () => {
  const [isTo, setIsTo] = useState(false);
  const [showModalToken, setShownModalToken] = useState(false);
  const [selectedTokenFrom, setSelectedTokenFrom] = useState<IToken>({
    name: "BNB",
    value: 0,
    description: "Binance Coin",
    icon: BWNB,
  });
  const [selectedTokenTo, setSelectedTokenTo] = useState<IToken>({
    name: "ETH",
    value: 0,
    description: "ETH Coin",
    icon: ETH,
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loaded, setLoaded] = useState(false);
  const [toValue, setToValue] = useState(0);

  const convertFunctions = (name: string, value: number) => {
    // @ts-ignore
    const nameConvertedValue = convert[name];
    const bnb = nameConvertedValue ? nameConvertedValue.BTC(value) : null;
    const bnbFloat = bnb ? Math.abs(bnb) : -1;
    return bnbFloat;
  };

  const convertFromToCurrency = async (from: IToken, to: IToken) => {
    if (!from.value || from.value <= 0) return;
    setErrorMessage(null);
    setLoaded(true);
    await convert.ready();
    setLoaded(false);
    // eslint-disable-next-line no-console
    console.log(convert.list);
    // @ts-ignore
    const fromVal = convertFunctions(from.name, from.value);
    const toVal = convertFunctions(to.name, from.value);
    if (fromVal && fromVal > 0 && toVal && toVal > 0) {
      const valueConverted = (fromVal / toVal) * from.value;
      setToValue(valueConverted);
      setErrorMessage(null);
    } else {
      setToValue(0);
      setErrorMessage("Unsupported");
    }
  };

  useEffect(() => {
    convertFromToCurrency(selectedTokenFrom, selectedTokenTo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTokenFrom, selectedTokenTo]);

  const [reserve, setReserve] = useState(false);

  const price = useMemo(() => {
    return reserve ? (
      <p className="text-white text-sm md:text-base leading-5">
        {" "}
        {Math.abs(
          parseFloat((toValue / selectedTokenFrom.value).toFixed(5))
        ).toPrecision()}{" "}
        {selectedTokenTo.name} per {selectedTokenFrom.name}
      </p>
    ) : (
      <p className="text-white text-sm md:text-base leading-5">
        {" "}
        {Math.abs(
          parseFloat((selectedTokenFrom.value / toValue).toFixed(5))
        ).toPrecision()}{" "}
        {selectedTokenFrom.name} per {selectedTokenTo.name}
      </p>
    );
  }, [selectedTokenFrom, toValue, selectedTokenTo, reserve]);

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
                        value={selectedTokenFrom.value}
                        type="number"
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10);
                          setSelectedTokenFrom({
                            ...selectedTokenFrom,
                            value: value,
                          });
                        }}
                        className="bg-transparent !border-0 w-4/5 py-[8px] lg:py-[15px] pl-2.5 lg:pl-4 text-xl lg:text-2xl leading-10 placeholder-[#757384] text-white"
                      />
                      <div
                        className="flex items-center ml-2 space-x-5 f-f-fg lg:space-x-8 cursor-pointer"
                        role="button"
                        onClick={() => {
                          setIsTo(false);
                          setShownModalToken(true);
                        }}>
                        <div className="flex items-center space-x-[3.5px] lg:space-x-2 ">
                          <img
                            src={selectedTokenFrom.icon}
                            className="w-[28px] h-[28px]"
                            alt={selectedTokenFrom.name}
                          />
                          <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                            {selectedTokenFrom.name}
                          </p>
                        </div>
                        <img alt="" src={ArrowDown} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      showModalToken
                        ? "fixed visible z-[200] opacity-100 inset-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-[0.88] bg-body"
                        : "fixed z-0 invisible opacity-0 inset-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-[0.88] bg-body"
                    }`}></div>
                  {showModalToken && (
                    <SelectTokenModal
                      close={() => setShownModalToken(false)}
                      selectedTokenFrom={selectedTokenFrom}
                      selectedTokenTo={selectedTokenTo}
                      show={showModalToken}
                      isTo={isTo}
                      selectToken={(token: IToken, isValue?: boolean) => {
                        if (isValue) {
                          setSelectedTokenTo(token);
                        } else {
                          setSelectedTokenFrom(token);
                        }
                        setShownModalToken(false);
                      }}
                    />
                  )}
                </div>
                <button
                  className="focus:outline-none mt-5 z-[8]"
                  onClick={() => {
                    setSelectedTokenFrom({
                      ...selectedTokenTo,
                      value: toValue,
                    });
                    setSelectedTokenTo(selectedTokenFrom);
                  }}>
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
                        disabled
                        defaultValue={toValue}
                        value={toValue}
                        type="number"
                        className="bg-transparent !border-0 w-4/5 py-[8px] lg:py-[15px] pl-2.5 lg:pl-4 text-xl lg:text-2xl leading-10 placeholder-[#757384] text-white"
                      />
                      <div
                        className="flex items-center ml-2 space-x-5 f-f-fg lg:space-x-8 cursor-pointer"
                        role="button"
                        onClick={() => {
                          setIsTo(true);
                          setShownModalToken(true);
                        }}>
                        <div className="flex items-center space-x-[3.5px] lg:space-x-2 ">
                          <img
                            src={selectedTokenTo.icon}
                            className="w-[28px] h-[28px]"
                            alt="ETH"
                          />
                          <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                            {selectedTokenTo.name}
                          </p>
                        </div>
                        <img alt="" src={ArrowDown} />
                      </div>
                    </div>
                  </div>
                  {errorMessage && (
                    <p className="text-danger mt-1">{errorMessage}</p>
                  )}
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
            {toValue > 0 && (
              <>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-white text-sm md:text-base leading-5">
                    Price:
                  </p>
                  <div className="flex items-center space-x-1.5">
                    {price}
                    <button onClick={() => setReserve(!reserve)}>
                      <img alt="" src={ReverseIcon} />
                    </button>
                  </div>
                </div>
                <div className="mt-[0.3rem]">
                  <div className="flex items-center justify-between">
                    <p className="text-white text-sm md:text-base leading-5">
                      Minimum received
                    </p>
                    <p className="text-white text-sm md:text-base leading-5">
                      0.185 ETH
                    </p>
                  </div>
                </div>
                <div className="mt-[0.3rem]">
                  <div className="flex items-center justify-between">
                    <p className="text-white text-sm md:text-base leading-5">
                      Price Impact
                    </p>
                    <p className="text-white text-sm md:text-base leading-5 text-success">
                      0.205%
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[0.3rem]">
                  <p className="text-white text-sm md:text-base leading-5">
                    Route:
                  </p>
                </div>
                <div className="flex relative items-center mt-7 justify-between">
                  <img
                    className="z-10 w-7 sm:w-[38px] -ml-0.5 sm:-ml-1"
                    alt=""
                    src={selectedTokenFrom.icon}
                  />
                  <div className="relative flex flex-col items-center">
                    <p className="text-[13px] md:text-sm text-white absolute -top-7">
                      Volatile
                    </p>
                    <img
                      className="z-10 w-[18px] sm:w-6"
                      alt=""
                      src={RouteArrowRight}
                    />
                  </div>
                  <img
                    className="z-10 w-7 sm:w-[38px] -mr-0.5 sm:-mr-1"
                    alt=""
                    src={selectedTokenTo.icon}
                  />
                  <div className="border-custom w-full h-0.5  absolute"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapContainer;
