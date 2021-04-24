import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("When SummaryForm is displayed", () => {
  render(<SummaryForm />);

  const checkBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  const buttonToConfirmOrder = screen.getByRole("button", {
    name: "Confirm order",
  });

  test("when checkbox is not checked", () => {
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();

    expect(buttonToConfirmOrder).toBeInTheDocument();
    expect(buttonToConfirmOrder).toBeDisabled();
  });

  test("when checkbox is checked", () => {
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
    expect(buttonToConfirmOrder).toBeDisabled();
  });
});
