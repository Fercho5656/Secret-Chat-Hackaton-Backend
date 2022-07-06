import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT ?? '5000'
export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID ?? 'NO_TWILIO_ACCOUNT_SID'
export const TWILIO_API_KEY = process.env.TWILIO_API_KEY ?? 'NO_TWILIO_API_KEY'
export const TWILIO_API_SECRET = process.env.TWILIO_API_SECRET ?? 'NO_TWILIO_API_SECRET'
export const SERVICE_SID = process.env.SERVICE_SID ?? 'NO_SERVICE_SID'
