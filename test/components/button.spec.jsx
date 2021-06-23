import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Button } from "../../src/components/Button";

describe("Component Button", () => {
  it("Render correctly", () => {
    const value = "Mi primer button";

    const { container } = render(<Button>{value}</Button>);

    expect(container).toBeInTheDocument();
  });

  it("Fire click event", () => {
    const value = "Hola Mundo";
    const fn = jest.fn();

    render(<Button onClick={fn}>{value}</Button>);

    userEvent.click(screen.getByText(value));
    userEvent.click(screen.getByText(value));

    expect(screen.getByText(value)).toHaveTextContent(value);
    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(2);
  });

  it("Fire click event using data-testid", () => {
    const value = "Hola Mundo";
    const testId = "myTestId";
    const fn = jest.fn();

    render(
      <Button testId={testId} onClick={fn}>
        {value}
      </Button>
    );

    userEvent.click(screen.getByTestId(testId));

    expect(screen.getByText(value)).toHaveTextContent(value);
    expect(fn).toBeCalled();
  });
});
