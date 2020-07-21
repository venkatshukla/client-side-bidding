git checkout package-lock.json
git pull
npm i
pm2 reload ecosystem.config.js  --env $NODE_ENV
pm2 logs public-api