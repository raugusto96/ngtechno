import axios from "axios";
import NgtechnoApi from "../utils/api/ngtechnoApi";

const makeSut = (): NgtechnoApi => {
  return new NgtechnoApi();
};

const makeFakeParams = () => ({
  url: "/any-url-test",
  method: "POST",
  body: { test: "any-body-test" },
});

describe("NgTechNo Api Service", () => {
  test("should call axios with correct params when is provided", () => {
    const sut = makeSut();
    const axiosSpy = jest.spyOn(axios, "request");
    const fakeRequestParams = makeFakeParams();
    sut.request(fakeRequestParams);
    expect(axiosSpy).toHaveBeenCalledWith({
      url: `https://cloudng.azurewebsites.net/api${fakeRequestParams.url}`,
      method: fakeRequestParams.method,
      params: fakeRequestParams.body,
    });
  });
});
