import React from "react";
import CustomTable from "../customTable";

import { render } from "setupTests";

const defaultProps = {
  headers: ["Name", "Email"],
};

describe("Custom Table Component", () => {
  it("Renders table ok", () => {
    const { container } = render(<CustomTable {...defaultProps} />);
    expect(container.firstChild).toBeTruthy();
  });

  it("Shows no headers when header props is null", () => {
    const { container } = render(<CustomTable />);
    expect(container.firstChild.querySelectorAll("th")).toHaveLength(0);
  });

  it("Shows loading", () => {
    const { getByRole } = render(<CustomTable loading={true} />);
    expect(getByRole("progressbar")).toBeTruthy();
  });

  it("Renders children properly", () => {
    const { queryByText } = render(
      <CustomTable {...defaultProps}>
        <tr>
          <td>Mark</td>
          <td>mark@gmail.com</td>
        </tr>
      </CustomTable>
    );
    expect(queryByText("Mark")).toBeTruthy();
  });

  it.each(defaultProps.headers)("Renders header prop %s properly", (header) => {
    const { queryByText } = render(<CustomTable {...defaultProps} />);
    expect(queryByText(header)).toBeTruthy();
  });
});
