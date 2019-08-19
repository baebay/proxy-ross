module.exports = {
  apps: [{
    name: 'seabay-proxy',
    script: './server.js',
  }],
  deploy: {
    production: {
      user: 'ross',
      host: '134.209.69.8',
      key: '~/.ssh/rosscalimlim.pem',
      ref: 'origin/master',
      repo: 'git@github.com:baebay/proxy-ross.git',
      path: '/home/ubuntu/server/proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
