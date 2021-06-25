import { act, renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import { useApi } from "../../src/hooks";

jest.mock("axios");

describe("Hook useApi", () => {
  it("Load todos correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const url = "https://URL_SUCCESS";
    const { result, waitForNextUpdate } = renderHook(() => useApi(url));

    await act(async () => {
      await waitForNextUpdate();
    });

    const { response, error, loading } = result.current;

    expect(loading).toBeFalsy();
    expect(error).toBeNull();
    expect(Array.isArray(response)).toBeTruthy();
    expect(response.length).toBe(0);
  });

  it("Load todos with error", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Network error"))
    );

    const url = "https://NOT_FOUND_URL";
    const { result, waitForNextUpdate } = renderHook(() => useApi(url));

    await act(async () => {
      await waitForNextUpdate();
    });

    const { response, error, loading } = result.current;

    expect(loading).toBeFalsy();
    expect(response).toBeNull();
    expect(error).not.toBeNull();
    expect(error.message).toBe("Network error");
  });
});
