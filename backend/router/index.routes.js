const { Router } = require('express');
const studentController = require('../controllers/collections/student.controller');
const ROUTE = require('./collections.routes');

const apiRoutes = Router();

apiRoutes.use(ROUTE.generateApiRest("students", studentController));
apiRoutes.use(ROUTE.init());
apiRoutes.use(ROUTE.notFound());
apiRoutes.use(ROUTE.renderError());

module.exports = apiRoutes;