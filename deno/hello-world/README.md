## Deno 🦕
- With my first hands on with Deno, it seems like a different (maybe better, not sure though) version of Node. With in-built TS support, no need to use `ts-node`.
- Wherever possible, it seems to use the web API standard which actually tends to be a lot different from the current Node versions. Like - the `ReadableStream` API uses the web api standard and that makes handling streams a lot different from how we used to do it in node.
- Bundling, Dependency management, everything is done through a single Deno executable. We don't anything else like - `npm` or `yarn`.
- We need to give explicit permissions for each access our app should get and that for sure makes it a bit secure but do we need that much security in backend apps, not sure 🤷.
- Since it's very new, the community and the libraries are a bit lacking. Even the standard library is still in Beta. So, that makes me question if it is ready to be used on production yet? 🤔

## Running the Application 🏃
- Install Deno. Installation is quite simple.
- Just run the following command
  ```
  deno run --allow-net index.ts
  ```
- That's it. 🥳