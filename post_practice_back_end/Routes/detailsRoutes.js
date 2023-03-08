const express = require('express')
const details = require('../Controller/details')

const routes = express.Router();

routes.post('/',details.postDetailsData)


module.exports = routes;