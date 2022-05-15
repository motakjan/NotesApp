import express from 'express';
import { processRequest } from 'zod-express-middleware';
import * as DashboardController from '../controllers/dashboard.controller';

import { actionOneSchema, createOneSchema, updateOneSchema, findByUserSchema } from '../schemas/dashboard.schemas';

const dashboardRouter = express.Router();

dashboardRouter.get('/', DashboardController.getDashboardsHandler);

dashboardRouter.get(
  '/user/:userId?',
  processRequest({ params: findByUserSchema.params }),
  DashboardController.getUserDashboardsHandler
);

dashboardRouter.get(
  '/:id',
  processRequest({ params: actionOneSchema.params }),
  DashboardController.getDashboardHandler
);
dashboardRouter.post('/', processRequest({ body: createOneSchema.body }), DashboardController.createDashboardHandler);
dashboardRouter.put(
  '/:id',
  processRequest({
    body: updateOneSchema.body,
    params: updateOneSchema.params,
  }),
  DashboardController.updateDashboardHandler
);
dashboardRouter.delete(
  '/:id',
  processRequest({ params: actionOneSchema.params }),
  DashboardController.deleteDashboardHandler
);

export default dashboardRouter;
