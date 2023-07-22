debugger;

fetch('./test.mp4')
  .then((rsp) => rsp.blob())
  .then((file) => console.log('client:', file))
  .catch(console.error);
