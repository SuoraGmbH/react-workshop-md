import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  test("it renders without crashing", () => {
    render(<Greeting name="Philipp" />);
  });
  test("it greets the given person", () => {
    render(<Greeting name="Philipp" />);
    screen.getByText("philipp", { exact: false });

    // const greetingElement = screen.getByTestId("greeting");
    // expect(greetingElement).toHaveTextContent("Hello, Philipp!");
  });
  test("it renders according to snapshot", () => {
    const { container } = render(<Greeting name="Philipp" />);

    expect(container).toMatchSnapshot();
  });
});
