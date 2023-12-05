import { WebSocketServer } from 'ws';
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function connection(ws) {
  /* ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something'); */
  
  const interval = setInterval(() => {
    const number = randomNumber();
	console.log(number)
    ws.send(number.toString());
 }, 1000); // 1000 milliseconds
 
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
 });
});