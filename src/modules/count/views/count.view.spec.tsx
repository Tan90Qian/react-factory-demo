import React from "react";
import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";

import { CountUI, CountView, useDidMount } from "./count.view";

describe("test CountUI", () => {
  test("snapshot test", () => {
    const wrapper = shallow(
      <CountUI count={1} loading={false} onClick={() => {}} />
    );
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  test("snapshot test when loading", () => {
    const wrapper = shallow(
      <CountUI count={1} loading={true} onClick={() => {}} />
    );
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});

test("test useDidMount", () => {
  const didMount = jest.fn();
  renderHook(() => useDidMount(didMount));
  expect(didMount.mock.calls.length).toBe(1);
});

describe("test CountView", () => {
  const didMount = jest.fn();

  test("snapshot test", () => {
    const wrapper = shallow(
      <CountView
        didMount={didMount}
        count={1}
        loading={false}
        onClick={() => {}}
      />
    );
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
