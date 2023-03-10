const WebSocket = require("ws");

module.exports = class WS {
  ws = null;
  wsIsOpen = true;
  url='';
  constructor(url){
    this.url=url;
  }
  cb = (data) => {
    // console.log("ws reseid mesage", data);
  };
  open() {
    const that=this;
    return new Promise((resole, reject) => {
      const ws = new WebSocket(that.url);     
      ws.on("open", () => {
        // console.log("ws is open ", that.url);
        that.wsIsOpen = true;
        resole();
      });
      ws.on("close", (e) => {
        that.wsIsOpen = false;
        reject("ws is close ", that.url, e);
      });
      ws.on("error", (e) => {
        that.wsIsOpen = false;
        reject("ws is error ", that.url, e);
      });
      ws.on("message", (data) => {
        that.cb(data);
      });
      that.ws=ws;
    });
  }
  request(msg) {
    const that=this;
    return new Promise((resole, reject) => {
      if (!that.ws) {
        return reject("WebSocket not init ");
      }
      if (!that.wsIsOpen) {
        return reject("WebSocket is closed ");
      }
      that.cb = (data) => {
        // console.log("ws res mesage", data);
        resole(data);
      };
      // console.log("sending ...");
      that.ws.send(msg);
      // console.log("send end");
    });
  }
};