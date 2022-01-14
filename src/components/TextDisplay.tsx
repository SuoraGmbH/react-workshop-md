import React from "react";

interface Props {
  value: string;
}
const TextDisplay: React.FunctionComponent<Props> = ({ value }) => {
  return <h1>{value}</h1>;
};

export default TextDisplay;
// export default React.memo(TextDisplay); // this is a premature optimization
