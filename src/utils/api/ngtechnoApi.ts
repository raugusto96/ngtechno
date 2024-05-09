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
      const { data } = await axios.request({
        url: `${this.url}${params.url}`,
        method: params.method,
        params: params.body,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        },
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
