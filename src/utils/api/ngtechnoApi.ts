// import axios from "axios";

interface ResponseRPC {
  sucesso: boolean;
  mensagem: string;
  retorno: any;
  exceptionType: string;
}

interface RequestApi {
  url: string;
  method?: string;
  body?: any;
}

interface ApiFetcher {
  request: (params: RequestApi) => Promise<ResponseRPC>;
}

export default class NgtechnoApi implements ApiFetcher {
  constructor(private url: string = "https://cloudng.azurewebsites.net/api") {}

  public async request(params: RequestApi): Promise<ResponseRPC> {
    console.log(`${this.url}${params.url}`);
    console.log({ params: params.body });
    // const { data } = await axios.request({
    //   url: `${this.url}${params.url}`,
    //   method: params.method,
    //   params: params.body,
    // });
    const responseRPC: ResponseRPC = {
      sucesso: false,
      mensagem: "",
      retorno: null,
      exceptionType: "",
      // sucesso: data.sucesso,
      // mensagem: data.mensagem,
      // retorno: data.retorno,
      // exceptionType: data.exceptionType,
    };
    return responseRPC;
  }
}
