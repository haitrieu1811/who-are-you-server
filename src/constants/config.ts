import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'

const env = process.env.NODE_ENV
const envFilename = `.env.${env}`

if (!env) {
  console.log(`Bạn chưa cung cấp biến môi trường NODE_ENV (ví dụ: development, production)`)
  console.log(`Phát hiện NODE_ENV = ${env}`)
  process.exit(1)
}
console.log(`Phát hiện NODE_ENV = ${env}, vì thế app sẽ dùng file môi trường là ${envFilename}`)
if (!fs.existsSync(path.resolve(envFilename))) {
  console.log(`Không tìm thấy file môi trường ${envFilename}`)
  console.log(`Lưu ý: App không dùng file .env, ví dụ môi trường là development thì app sẽ dùng file .env.development`)
  console.log(`Vui lòng tạo file ${envFilename} và tham khảo nội dung ở file .env.example`)
  process.exit(1)
}

config({
  path: envFilename
})

export const isProduction = env === 'production'

export const ENV_CONFIG = {
  PORT: process.env.PORT as string,
  SERVER_HOST: process.env.SERVER_HOST as string,
  PASSWORD_SECRET: process.env.PASSWORD_SECRET as string,

  DB_USERNAME: process.env.DB_USERNAME as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_REFRESH_TOKENS_COLLECTION: process.env.DB_REFRESH_TOKENS_COLLECTION as string,
  DB_IMAGES_COLLECTION: process.env.DB_IMAGES_COLLECTION as string,
  DB_USERS_COLLECTION: process.env.DB_USERS_COLLECTION as string,
  DB_NATIONS_COLLECTION: process.env.DB_NATIONS_COLLECTION as string,
  DB_LEAGUES_COLLECTION: process.env.DB_LEAGUES_COLLECTION as string,
  DB_TEAMS_COLLECTION: process.env.DB_TEAMS_COLLECTION as string,
  DB_PLAYERS_COLLECTION: process.env.DB_PLAYERS_COLLECTION as string,
  DB_QUESTIONS_COLLECTION: process.env.DB_QUESTIONS_COLLECTION as string,

  JWT_SECRET_ACCESS_TOKEN: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
  JWT_SECRET_REFRESH_TOKEN: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN as string,
  JWT_SECRET_VERIFY_EMAIL_TOKEN: process.env.JWT_SECRET_VERIFY_EMAIL_TOKEN as string,
  VERIFY_EMAIL_TOKEN_EXPIRES_IN: process.env.VERIFY_EMAIL_TOKEN_EXPIRES_IN as string,
  JWT_SECRET_FORGOT_PASSWORD_TOKEN: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
  FORGOT_PASSWORD_TOKEN_EXPIRES_IN: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN as string,

  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID as string,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY as string,
  AWS_REGION: process.env.AWS_REGION as string,
  AWS_SES_FROM_ADDRESS: process.env.AWS_SES_FROM_ADDRESS as string,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME as string
} as const
