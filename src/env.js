const env = {
    localhost: {
      NODE_ENV: 'development',
      REACT_APP_ADDRESS: 'http://localhost:3003',
      REACT_APP_URL: 'http://localhost:3000',
      REACT_APP_OPENID_CLIENT_ID: '9078b58d-fee5-4bec-98a6-f4d0f11d7cc4',
      REACT_APP_OPENID_AUTH_URL: 'https://auth.com.br'
    },
    'exemplo.test.js': {
      NODE_ENV: 'production'
    },
    'exemplo.url.production': {
      NODE_ENV: 'production'
    }
  }
  
  const setEnv = () => {
    window.env = {}
    for (const variable in env[window.location.hostname]) {
      if (!window.env[variable]) {
        window.env[variable] = env[window.location.hostname][variable]
      }
    }
  }
  
  setEnv()
  
  export default {
    env,
    setEnv
  }
  