import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "./env";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { projectTheme } from "theme";
// import GlobalStyle from './assets/styles/global'
import { rootReducers } from "./store";
export const store = createStore(rootReducers);

// scrollIntoView placed at window scope
const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

// mock csv download functions
window.URL.createObjectURL = jest.fn();
window.HTMLCanvasElement.prototype.getContext = jest.fn();
jest.mock("file-saver", () => {
  return {
    saveAs: (blob, filename) => {
      return filename;
    },
  };
});

//mock line for charjs react
jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};
global.navigator.mediaDevices = {
  getUserMedia: () => Promise.resolve(),
};
global.MediaRecorder = class {
  constructor() {}
  start() {
    this.state = "recording";
    return undefined;
  }
  stop() {
    this.onstop();
    return undefined;
  }
};
global.AudioContext = class {
  constructor() {}
  createMediaStreamSource() {
    return undefined;
  }
};

global.Worker = class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {};
  }
  postMessage(msg) {
    this.onmessage({ data: msg });
  }
};

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={projectTheme}>
        {/* <GlobalStyle /> */}
        {children}
      </ThemeProvider>
    </Provider>
  );
};
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });
// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
