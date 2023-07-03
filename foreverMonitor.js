import forever from 'forever-monitor';

const monitor = new (forever.Monitor)('server.js', {
  silent: false
});

monitor.on('start', () => {
  console.log('Server started');
});

monitor.on('restart', () => {
  console.log('Server restarted');
});

monitor.on('exit', () => {
  console.log('Server exited');
});

process.on('SIGINT', () => {
  console.log('Server terminated by user');
  monitor.stop();
});

monitor.start();
