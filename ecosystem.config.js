module.exports = {
  apps: [{
    name: 'seabay-proxy',
    script: './server.js',
  }],
  deploy: {
    production: {
      user: 'ross',
      host: '134.209.69.8',
      key: '~/.ssh/rosscalimlim.me',
      ref: 'origin/master',
      repo: 'git@github.com:seabay-hratx42-fec/proxy-ross.git',
      path: '/home/ross/server/proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
