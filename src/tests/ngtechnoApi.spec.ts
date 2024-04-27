import axios from "axios";
import NgtechnoApi from "../utils/api/ngtechnoApi";

describe("NgTechNo Api Service", () => {
  test("should call axios with correct params when is provided", () => {
    const sut = new NgtechnoApi();
    const axiosSpy = jest.spyOn(axios, "request");
    const fakeRequestParams = {
      url: "/any-url-test",
      method: "POST",
      body: { test: "any-body-test" },
    };
    sut.request(fakeRequestParams);
    expect(axiosSpy).toHaveBeenCalledWith({
      url: `https://cloudng.azurewebsites.net/api${fakeRequestParams.url}`,
      method: fakeRequestParams.method,
      params: fakeRequestParams.body,
    });
  });
});
