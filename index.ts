import express from 'express'
import { connect } from 'mongoose'
import * as transformers from './transformers/transformers'
import { Brand } from './brands-schema'
import Utils from './Utils'

connect('mongodb://localhost:27017/brands')

const app = express()
app.use(express.json())
app.listen(3000, () => {
  console.log('Server is running')
})

Brand.find({})
  .lean()
  .then(Utils.flattenObject)
  .then(transformers.brandName)
  .then(transformers.yearFounded)
  .then(transformers.headquarters)
  .then(transformers.numberOfLocations)
  .then(transformers.filter)
  .then(Utils.validate)
  .then(Utils.saveAll)
  .catch((error) => {
    console.error(error)
  })
