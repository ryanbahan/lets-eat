import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import MyProvider from '../Context';

describe("Form", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <MyProvider>
        <Form />
      </MyProvider>
    )
  });

  it("should render the correct items", () => {
    const { getByText, getByPlaceholderText } = utils;

    const searchField = getByPlaceholderText("Search...");
    const stateFilter = getByText("State");
    const genreFilter = getByText("Cuisine");
    const clearFilters = getByText("Clear filters");

    expect(searchField).toBeInTheDocument();
    expect(stateFilter).toBeInTheDocument();
    expect(genreFilter).toBeInTheDocument();
    expect(clearFilters).toBeInTheDocument();
  });
});
