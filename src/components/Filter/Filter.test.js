import React from 'react';
import { render } from '@testing-library/react';
import Filter from './Filter';

describe("Filter", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Filter name="State"/>
    )
  });

  it("should render the correct items", () => {
    const { getByText } = utils;
    const title = getByText("State");

    expect(title).toBeInTheDocument();
  });
});
