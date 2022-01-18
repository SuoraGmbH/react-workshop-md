import React, { useContext } from "react";

export const BaseUrlContext = React.createContext<string | undefined>(
  undefined
);

type BaseUrlProviderProps = {
  baseUrl: string;
};

export const BaseUrlProvider: React.FunctionComponent<BaseUrlProviderProps> = ({
  baseUrl,
  children,
}) => {
  return (
    <BaseUrlContext.Provider value={baseUrl}>
      {children}
    </BaseUrlContext.Provider>
  );
};

const useBaseUrl = (): string => {
  const baseUrl = useContext(BaseUrlContext);

  if (typeof baseUrl === "undefined") {
    throw new Error(
      "Missing baseUrl in Context, did you maybe forget to wrap your App with <BaseUrlProvider />"
    );
  }

  return baseUrl;
};

export default useBaseUrl;
