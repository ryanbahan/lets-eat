import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <App />
    )
  });

  it("should render the correct items", () => {
    const { getByText, getByPlaceholderText } = utils;
    const title = getByText("Let's Eat!");
    const searchField = getByPlaceholderText("Search...");
    const stateFilter = getByText("State");
    const genreFilter = getByText("Cuisine");
    const clearFilters = getByText("Clear filters");

    expect(title).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    expect(stateFilter).toBeInTheDocument();
    expect(genreFilter).toBeInTheDocument();
    expect(clearFilters).toBeInTheDocument();
  });
});
