import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";
describe("<TimeEntryForm />", () => {
  it("renders without a event handler", () => {
    render(<TimeEntryForm />);
  });

  test("it renders a textbox", () => {
    render(<TimeEntryForm />);
    screen.getByRole("textbox");
  });

  test("clicking the button submits the form", () => {
    const handleAddTimeEntryMock = jest.fn();

    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);

    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });

    userEvent.click(submitButton);

    expect(handleAddTimeEntryMock).toHaveBeenCalledTimes(1);
  });

  test("typing into the textbox and clicking the button submits the form with the entered text", () => {
    const handleAddTimeEntryMock = jest.fn();

    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);

    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    const textbox = screen.getByRole("textbox");

    userEvent.type(textbox, "Hallo André");
    userEvent.click(submitButton);

    expect(handleAddTimeEntryMock).toHaveBeenCalledTimes(1);
    expect(handleAddTimeEntryMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "Hallo André",
      })
    );
  });
  test("typing into the textbox and pressing enter submits the form with the entered text", () => {
    const handleAddTimeEntryMock = jest.fn();

    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);

    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    const textbox = screen.getByRole("textbox");

    userEvent.type(textbox, "Hallo André{enter}");

    expect(handleAddTimeEntryMock).toHaveBeenCalledTimes(1);
    expect(handleAddTimeEntryMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "Hallo André",
      })
    );
  });

  test("that after submitting the form is empty again", () => {
    const handleAddTimeEntryMock = jest.fn();

    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);
    const textbox = screen.getByRole("textbox");

    userEvent.type(textbox, "Hallo André");
    expect(textbox).toHaveValue("Hallo André");
    userEvent.type(textbox, "{enter}");
    expect(textbox).toHaveValue("");
  });

  test("submitting without content does not work", () => {
    const handleAddTimeEntryMock = jest.fn();

    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);
    const textbox = screen.getByRole("textbox");

    userEvent.type(textbox, "{enter}");
    expect(handleAddTimeEntryMock).not.toHaveBeenCalled();
  });
});
