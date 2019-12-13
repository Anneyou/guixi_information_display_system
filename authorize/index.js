let authorize = {
  redirectUrl: process.env.AUTHORIZE_REDIRECT_URL,
  requestBaseUrl: process.env.AUTHORIZE_REQUEST_BASE_URL,
  appid: process.env.AUTHORIZE_APPID,
  appsecret: process.env.AUTHORIZE_APPSECRET,
  clientID: process.env.AUTHORIZE_CLIENT_ID,
  clientSecret: process.env.AUTHORIZE_CLIENT_SECRET
}

module.exports = authorize
