import dotenv from 'dotenv'
// require('custom-env').env('dev')

dotenv.config()

const env = Object.freeze({ ...process.env })

export default env
