module.exports = {
    apps : [{
        name: 'public-api',
        script: './index.js',
        watch: false,
        instances : '2',
        exec_mode : 'cluster',
        env: {
            NODE_ENV: 'localDevelopment'
        },
        env_production: {
            NODE_ENV: 'production',
        },
        env_development: {
            NODE_ENV: 'staging',
        }
    }
    ]
};