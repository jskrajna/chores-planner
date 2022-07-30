import mongoose from 'mongoose'
import { config } from '../config/index.js'

const connect = (url = config.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}

export { connect }

