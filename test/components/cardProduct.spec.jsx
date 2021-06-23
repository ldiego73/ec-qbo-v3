import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { CardProduct } from "../../src/components/CardProduct";

describe("Component CardProduct", () => {
  const product = {};

  beforeEach(() => {
    product.id = 1;
    product.name = "Product 0";
    product.category = "Category 0";
    product.image = "image.jpg";
    product.price = 10;
    product.priceOld = 20;
  });

  it("Render correctly", () => {
    const { container } = render(<CardProduct product={product} />);

    expect(container).toBeInTheDocument();
  });

  it("Validate props", () => {
    render(<CardProduct product={product} />);

    expect(screen.getByText(product.category)).toHaveTextContent(
      product.category
    );
    expect(screen.getByText(product.name)).toHaveTextContent(
      new RegExp(product.name)
    );
    expect(screen.getByText(product.name)).toHaveTextContent(/Product 0/);
    expect(screen.getByText("S/ 10.00")).toHaveTextContent("S/ 10.00");
  });

  it("Fire event add product", () => {
    const fn = jest.fn();

    render(<CardProduct onAddProduct={fn} product={product} />);

    userEvent.click(screen.getByTestId("button"));

    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(1);
  });

  it("Fire event click product", () => {
    const fn = jest.fn();

    render(<CardProduct onClick={fn} product={product} />);

    userEvent.click(screen.getByTestId("card-product"));

    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(1);
  });

  it("Custom width and height", () => {
    const width = 280;

    const { container } = render(
      <CardProduct
        height={320}
        imageHeight={320}
        width={width}
        product={product}
      />
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByTestId("card-product-cmp")).toHaveStyle(
      `width: ${width}px`
    );
  });
});
