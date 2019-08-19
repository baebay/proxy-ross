module.exports = {
  apps: [{
    name: 'seabay-proxy',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '3.19.49.181',
      key: '~/.ssh/seabay.pem',
      ref: 'origin/master',
      repo: 'git@github.com:baebay/proxy-ross.git',
      path: '/home/ubuntu/server/proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'

    }
  }
}