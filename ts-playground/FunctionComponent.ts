import React from "react";

type MediaDialogFunctionComponent<T> = (props: T) => JSX.Element;
type MediaDialogFunctionComponentWithChildren<TProps> = (
  props: TProps & { children: React.ReactNode }
) => JSX.Element;
type MediaDialogFunctionComponentWithOptionalChildren<TProps> = (
  props: TProps & { children?: React.ReactNode }
) => JSX.Element;
