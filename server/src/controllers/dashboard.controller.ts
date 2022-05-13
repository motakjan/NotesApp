import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { TActionOneParams, TCreateOneBody, TUpdateOneBody, TUpdateOneParams } from '../schemas/dashboard.schemas';
import {
  createOne,
  deleteOne,
  findAll,
  findOneExtended,
  findOne,
  updateOne,
  findAllByUser,
} from '../services/dashboard.service';

export const getDashboardsHandler = async (req: Request, res: Response) => {
  const dashboards = await findAll();
  return res.status(StatusCodes.OK).json(dashboards);
};

export const getUserDashboardsHandler = async (req: Request, res: Response) => {
  const userDashboards = await findAllByUser(req.params.userId ?? req.user._id);
  return res.status(StatusCodes.OK).json(userDashboards);
};

export const getDashboardHandler = async (req: Request<TActionOneParams>, res: Response) => {
  try {
    const dashboard = await findOne(req.params.id);
    if (!dashboard) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Dashboard not found.' });

    const extendedDashboards = await findOneExtended(dashboard);

    return res.status(StatusCodes.OK).json(extendedDashboards);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const createDashboardHandler = async (req: Request<{}, {}, TCreateOneBody>, res: Response) => {
  try {
    const dashboard = await createOne(req.body);

    return res.status(StatusCodes.OK).json(dashboard);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const updateDashboardHandler = async (req: Request<TUpdateOneParams, {}, TUpdateOneBody>, res: Response) => {
  try {
    const dashboard = await updateOne(req.params.id, req.body);
    if (!dashboard) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Dashboard not found.' });

    return res.status(StatusCodes.OK).json(dashboard);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const deleteDashboardHandler = async (req: Request<TUpdateOneParams>, res: Response) => {
  try {
    const dashboard = await deleteOne(req.params.id);

    if (!dashboard) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Dashboard not found.' });
    return res.status(StatusCodes.OK).json(dashboard);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
