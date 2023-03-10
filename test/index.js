const WS = require("../");

async function test(){
  const ws = new WS('ws://localhost');
  await ws.open();
  let res=await ws.request('data');
  console.log(res);
}

test().then(()=>{});
