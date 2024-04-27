import axios from "axios";
import NgtechnoApi, { RequestApi, ResponseRPC } from "../utils/api/ngtechnoApi";

const makeSut = (): NgtechnoApi => {
  return new NgtechnoApi();
};

const makeFakeParams = (): RequestApi => ({
  url: "/any-url-test",
  method: "POST",
  body: { test: "any-body-test" },
});

const makeFakeResponse = (): ResponseRPC => ({
  sucesso: true,
  mensagem: "Any success message",
  retorno: { body: "any-body" },
  exceptionType: null,
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

  test("should return an RPC response on success", async () => {
    const sut = makeSut();
    jest.spyOn(axios, "request").mockResolvedValue({
      data: makeFakeResponse(),
    });
    const fakeRequestParams = makeFakeParams();
    const httpResponse = await sut.request(fakeRequestParams);
    expect(httpResponse).toEqual(makeFakeResponse());
  });
});
