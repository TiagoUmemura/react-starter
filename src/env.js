const env = {
    localhost: {
      NODE_ENV: 'development',
      REACT_APP_ADDRESS: 'http://localhost:3003',
      REACT_APP_URL: 'http://localhost:3000',
      REACT_APP_OPENID_CLIENT_ID: '9078b58d-fee5-4bec-98a6-f4d0f11d7cc4',
      REACT_APP_OPENID_AUTH_URL: 'https://auth.grupoboticario.com.br'
    },
    'dportalinstantmessage.grupoboticario.digital': {
      NODE_ENV: 'production',
      REACT_APP_ADDRESS: 'https://dimapiportalinstantmessage.grupoboticario.digital',
      REACT_APP_URL: 'https://dportalinstantmessage.grupoboticario.digital',
      REACT_APP_OPENID_CLIENT_ID: '9078b58d-fee5-4bec-98a6-f4d0f11d7cc4',
      REACT_APP_OPENID_AUTH_URL: 'https://auth.grupoboticario.com.br'
    },
    'hportalinstantmessage.grupoboticario.digital': {
      NODE_ENV: 'production',
      REACT_APP_ADDRESS: 'https://himapiportalinstantmessage.grupoboticario.digital',
      REACT_APP_URL: 'https://hportalinstantmessage.grupoboticario.digital',
      REACT_APP_OPENID_CLIENT_ID: '9078b58d-fee5-4bec-98a6-f4d0f11d7cc4',
      REACT_APP_OPENID_AUTH_URL: 'https://auth.grupoboticario.com.br'
    },
    'portalinstantmessage.grupoboticario.digital': {
      NODE_ENV: 'production',
      REACT_APP_ADDRESS: 'https://imapiportalinstantmessage.grupoboticario.digital',
      REACT_APP_URL: 'https://portalinstantmessage.grupoboticario.digital',
      REACT_APP_OPENID_CLIENT_ID: 'ba724d25-3fee-4a09-906c-732373f12e43',
      REACT_APP_OPENID_AUTH_URL: 'https://auth.grupoboticario.com.br'
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
  