import dotenv from 'dotenv'
dotenv.config()

export const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/deverr-db'
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'This is the secret'