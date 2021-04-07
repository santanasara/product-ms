const axios = require('axios')

const validateToken = async (token) => {
  const resp = await axios.post(`${process.env.AUTH_API_PATH}/validateToken`, {
    token
  })
  if (resp?.status === 200) {
    return resp.data
  }
  throw new Error('Error with auth API communication')
}

module.exports = {
  validateToken
}