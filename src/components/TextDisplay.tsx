import React from "react";

interface Props {}
const TextDisplay: React.FunctionComponent<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default TextDisplay;
// export default React.memo(TextDisplay); // this is a premature optimization
