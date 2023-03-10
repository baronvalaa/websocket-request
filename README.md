# websocket-request

## About

Made websocket to Request response mode. 

Imitate the request and response mode of HTTP, send a request and wait for the response to return.

Allows you to use websocket just like http requests

## How use

### npm
```bash
npm i websocket-request --save
```

### yarn

```bash
yarn add websocket-request -S
```

### example
```javascript

 
const WS = require("websocket-request");

async function test(){
  const ws = new WS('ws://localhost');
  await ws.open();
  let res=await ws.request('data');
  console.log(res);
}

test().then(()=>{});


```

