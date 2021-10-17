import Server from './server.ts';

const app = new Server();

app.get('/hello', (req: Deno.RequestEvent) => {
  req.respondWith(new Response('Hello World', {
    status: 200,
  }));
});

app.post('/login', async (req: Deno.RequestEvent) => {
  const reqBody = await req.request.json();
  req.respondWith(new Response(JSON.stringify({
    body: reqBody,
  }), {
    status: 200,
  }));
});

await app.listen(8080);