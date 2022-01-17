import React from "react";
interface Props {
  name: string;
}
const Greeting: React.FunctionComponent<Props> = ({ name }) => (
  <p data-testid="greeting">Hello, {name.toUpperCase()}!</p>
);

export default Greeting;
