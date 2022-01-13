const ComponentWithChildren: React.FunctionComponent = (props) => {
  return <div style={{ border: "1px solid pink" }}>{props.children}</div>;
};

export default ComponentWithChildren;
