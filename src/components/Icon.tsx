import axios from "axios";
import React, { FC, useEffect, useState } from "react";

export const ICon: FC<{ name: string }> = ({ name }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [icon, setIcon] = useState<any | null>(null);

  useEffect(() => {
    const getIcon = async (symbol: string) => {
      try {
        const data = await axios.get(
          `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`
        );
        // eslint-disable-next-line no-console
        console.log({ data });
        return data;
      } catch (error) {
        return null;
      }
    };
    if (name) {
      setIcon(getIcon(name));
    }
  }, [name]);
  return icon ? (
    <>
      <img alt="" src={icon} width="28" height="28" loading="lazy" />
    </>
  ) : null;
};
