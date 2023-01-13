import { fireEvent, render, screen } from "@testing-library/react";

import Button from "../components/Button";

describe("Button tests", () => {
  it("Should render a button", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeDefined();
  });

  it("Should render texts passed as children", () => {
    const buttonText = "I'm a button";

    render(<Button>{buttonText}</Button>);

    expect(screen.getByRole("button")).toHaveTextContent(buttonText);
  });

  it("Should render JSX Element passed as children", () => {
    const buttonText = "I'm a button";

    render(
      <Button>
        <span>{buttonText}</span>
      </Button>
    );

    expect(screen.getByRole("button").firstElementChild?.tagName).toBe("SPAN");
    expect(screen.getByRole("button").firstElementChild).toHaveTextContent(
      buttonText
    );
  });

  it("Should contain the text 'Carregando...' when given a 'loading' property with the value true", () => {
    const loadingText = "Carregando...";

    render(<Button loading={true}>{"I'm a button with loading"}</Button>);

    expect(screen.getByRole("button")).toHaveTextContent(loadingText);
  });

  it("Should disable the button when given the 'loading' property with the value true", () => {
    render(<Button loading={true}>{"I'm a enabled button?"}</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("Should have the background color 'blue'", () => {
    render(<Button>{"I'm a blue button"}</Button>);

    expect(screen.getByRole("button")).toHaveStyle("background-color: blue");
  });

  it("Should have the background color 'green' when given a 'color' property with the value 'success'", () => {
    render(<Button color="success">{"I'm a blue button"}</Button>);

    expect(screen.getByRole("button")).toHaveStyle("background-color: green");
  });

  it("Should have the background color 'red' when given a 'color' property with the value 'danger'", () => {
    render(<Button color="danger">{"I'm a blue button"}</Button>);

    expect(screen.getByRole("button")).toHaveStyle("background-color: red");
  });

  it("Should have the background color 'yellow' when given a 'color' property with the value 'warning'", () => {
    render(<Button color="warning">{"I'm a blue button"}</Button>);

    expect(screen.getByRole("button")).toHaveStyle("background-color: yellow");
  });

  it("Should execute the click event when clicked", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>{"I'm a blue button"}</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
