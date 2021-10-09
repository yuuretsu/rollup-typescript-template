export default () => {
  let server;

  function toExit() {
    server && server.kill(0);
  }

  return {
    writeBundle() {
      server = server || require('child_process')
        .spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    }
  };
}
