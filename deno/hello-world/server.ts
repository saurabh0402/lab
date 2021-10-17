export type RequestHandler = (req: Deno.RequestEvent) => void;

class Server {
  listener: ReturnType<typeof Deno.listen> | undefined;
  urlHandler: { [key: string]: RequestHandler } = {};

  async listen(port: number) {
    this.listener = Deno.listen({
      port,
    });

    await this.init();
  }

  async init() {
    if (this.listener) {
      for await (const conn of this.listener) {
        const httpConn = Deno.serveHttp(conn);
        for await (const req of httpConn) {
          const reqUrl = new URL(req.request.url);
          const reqMethod = req.request.method;
          const key = `${reqMethod.toLowerCase()}-${reqUrl.pathname.toLowerCase()}`;

          if (this.urlHandler[key]) {
            this.urlHandler[key](req);
          } else {
            req.respondWith(new Response('404', {
              status: 404,
            }));
          }
        }
      }
    }
  }

  get(path: string, handler: RequestHandler) {
    this.urlHandler[`get-${path.toLowerCase()}`] = handler;
  }

  post(path: string, handler: RequestHandler) {
    this.urlHandler[`post-${path.toLowerCase()}`] = handler;
  }
}

export default Server;