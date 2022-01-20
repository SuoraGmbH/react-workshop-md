import React from "react";

interface Props {
  element?: React.ElementType;
}

const HeadlineComponent: React.FunctionComponent<Props> = ({
  element: Element = "div",
  children,
}) => {
  return <Element>{children}</Element>;
};

export default HeadlineComponent;
