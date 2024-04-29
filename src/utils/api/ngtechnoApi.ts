import axios from "axios";

export interface ResponseRPC {
  sucesso: boolean;
  mensagem: string;
  retorno: any;
  exceptionType?: string | null;
}

export interface RequestApi {
  url: string;
  method?: string;
  body?: any;
}

interface ApiFetcher {
  request: (params: RequestApi) => Promise<ResponseRPC | undefined>;
}

export default class NgtechnoApi implements ApiFetcher {
  constructor(private url: string = "https://cloudng.azurewebsites.net/api") {}

  public async request(params: RequestApi): Promise<ResponseRPC | undefined> {
    try {
      console.log(params);
      const { data } = await axios.request({
        url: `${this.url}${params.url}`,
        method: params.method,
        params: params.body,
      });
      const responseRPC: ResponseRPC = {
        sucesso: data.sucesso ? data.sucesso : false,
        mensagem: data.mensagem ? data.mensagem : "",
        retorno: data.retorno ? data.retorno : {},
        exceptionType: data?.exceptionType ? data?.exceptionType : null,
      };
      return responseRPC;
    } catch (error) {
      console.log(error);
    }
  }
}
