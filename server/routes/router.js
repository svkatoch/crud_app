const express = require('express');
const route = express.Router()

const services = require('../services/render');

const controller = require('../contoller/controller')
// @DESCRIPTION root route
// @method GET/

route.get('/',services.homeRoutes);

// @DESCRIPTION add user
// @method GET/


route.get('/add-user',services.add_user);

// @DESCRIPTION update user
// @method GET/


route.get('/update-user',services.update_user);

// create api
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;