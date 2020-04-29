import React from 'react';
import { render } from '@testing-library/react';
import Filter from './Filter';

describe("Filter", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Filter />
    )
  });

  it("should render the correct items", () => {
    const { getByText, getByPlaceholderText, debug } = utils;

    debug();
  });
});
