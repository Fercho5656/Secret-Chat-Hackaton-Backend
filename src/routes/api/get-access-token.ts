import express from 'express'
import twilio from 'twilio'
import {
  TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY,
  TWILIO_API_SECRET,
  SERVICE_SID
} from '../../env'
const router = express.Router()

console.log({
  TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY,
  TWILIO_API_SECRET,
  SERVICE_SID
})

router.get('/', (req, res): any => {
  const jwt = req.headers.authorization
  console.log(jwt)
  if (jwt == null) return res.status(401).send('No JWT provided')

  const identity = jwt?.startsWith('anonymous')
    ? jwt?.split('_')[1]
    : null

  if (identity == null) return res.status(401).send('No identity provided')

  const { AccessToken } = twilio.jwt
  const { ChatGrant } = AccessToken

  const accessToken = new AccessToken(TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET, { identity })
  const conversationGrant = new ChatGrant({ serviceSid: SERVICE_SID })

  accessToken.addGrant(conversationGrant)
  console.log(accessToken.toJwt())

  res.status(200).send({
    accessToken: accessToken.toJwt()
  })
})

export default router
