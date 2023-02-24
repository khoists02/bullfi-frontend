import React, { FC } from "react";
import { ISetting } from "../pages/swap/SwapContainer";

interface ITransactionSetting {
  show: boolean;
  settings?: ISetting;
  selectSlippageTolerance: (val: string) => void;
  selectMinutes: (val: string) => void;
}

export const TransactionSetting: FC<ITransactionSetting> = ({
  show,
  settings,
  selectSlippageTolerance,
  selectMinutes,
}) => {
  return show ? (
    <div className="md:max-w-[540px] absolute z-20 w-full px-3 md:px-[30px] pt-[17px] pb-[24px] md:py-5 bg-[#101645] rounded-lg -ml-3 md:-ml-6 lg:ml-0 border top-14 border-blue">
      <p className="text-dimGray f-f-fg text-[13px] md:text-sm">
        TRANSACTION SETTINGS
      </p>
      <div className="flex items-center space-x-1.5 mt-[17px] md:mt-[18px]"></div>
      <div className="md:flex items-center mt-[13px] w-full">
        <p className="text-base md:text-[19px] !font-normal text-[#DEDBF2]">
          Slippage Tolerance
        </p>
      </div>
      <div className="md:flex items-center mt-[13px] w-full">
        <div className="flex items-center space-x-[11px] z-10 w-full">
          <button
            onClick={() => {
              selectSlippageTolerance("0.1");
            }}
            className={`${
              settings?.slippageTolerance === "0.1" ? "bg-blue" : "bg-body"
            } focus:bg-blue max-w-[84px] md:max-w-[100px] flex-shrink-0 hover:bg-blue w-full rounded-full flex flex-col items-center justify-center text-base md:text-lg text-white h-10 md:h-[42px] cursor-pointer`}>
            0.1%
          </button>
          <button
            onClick={() => {
              selectSlippageTolerance("0.5");
            }}
            className={`${
              settings?.slippageTolerance === "0.5" ? "bg-blue" : "bg-body"
            } focus:bg-blue max-w-[84px] md:max-w-[100px] flex-shrink-0 hover:bg-blue w-full rounded-full flex flex-col items-center justify-center text-base md:text-lg text-white h-10 md:h-[42px] cursor-pointer`}>
            0.5%
          </button>
          <button
            onClick={() => {
              selectSlippageTolerance("1");
            }}
            className={`${
              settings?.slippageTolerance === "1" ? "bg-blue" : "bg-body"
            } focus:bg-blue max-w-[84px] md:max-w-[100px] flex-shrink-0 hover:bg-blue w-full rounded-full flex flex-col items-center justify-center text-base md:text-lg text-white h-10 md:h-[42px] cursor-pointer`}>
            1.00%
          </button>
        </div>
        <div className="flex items-center space-x-[9px] w-full mt-[11px] md:mt-0 md:justify-end">
          <input
            className="placeholder-dimGray max-w-[106.47px] bg-body w-full h-[52px] rounded-full text-white pl-5 pr-2 text-lg !border !border-blue focus:!border-[2px] block focus-visible:!outline-none"
            type="number"
            min="0"
            max="50"
            value={settings?.slippageTolerance}
            onChange={(e) => {
              selectSlippageTolerance(e.target.value);
            }}
          />
          <span className="text-lg text-white">%</span>
        </div>
      </div>
      <div className="w-full mt-2 text-warn">Your transaction may fail</div>
      <div className="w-full mt-6 md:mt-5">
        <div className="flex items-center space-x-1.5">
          <p className="text-[#DEDBF2] text-base md:text-[19px] leading-5 !font-normal">
            Transaction Deadline
          </p>
          <img
            alt=""
            data-tip="true"
            data-for="registerTip1"
            src="https://thena.fi/images/swap/question-mark.png"
          />
        </div>
        <div className="flex items-center space-x-[9px] mt-[9px]">
          <input
            type="number"
            min={0}
            max={20}
            className="placeholder-dimGray max-w-[106.47px] h-[52px] w-full rounded-full bg-body text-white pl-5 pr-2 text-lg !border !border-blue focus:!border-[2px] block focus-visible:!outline-none"
            name=""
            id=""
            value={settings?.minutes}
            onChange={(e) => {
              selectMinutes(e.target.value);
            }}
          />
          <span className="text-base md:text-lg text-white">minutes</span>
        </div>
      </div>
    </div>
  ) : null;
};
