import React from 'react';
import { render } from '@testing-library/react';
import Paginator from './Paginator';
import MyProvider from '../Context';

describe("Paginator", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <MyProvider>
        <Paginator length={38}/>
      </MyProvider>
    )
  });

  it("should render the correct items", () => {
    const { getByText } = utils;

    const page1 = getByText("1");
    const page2 = getByText("2");
    const page3 = getByText("3");
    const page4 = getByText("4");

    expect(page1).toBeInTheDocument();
  });
});
