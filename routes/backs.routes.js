import express from 'express';
import {
  getBacks, createBack, getBack, deleteBack, updateBack,
} from '../controllers/backs.controller.js';

const backsRouter = express.Router(); 

// GET to /api/v1/excercises
backsRouter.get('/', getBacks);

// POST /api/v1/excercises
backsRouter.post('/', createBack);

// GET /api/v1/excercises/<id>
backsRouter.get('/:id', getBack);

// DELETE /api/v1/excercises/<id>
backsRouter.delete('/:id', deleteBack);

// PATCH /api/v1/excercises/<id>
backsRouter.patch('/:id', updateBack);

export default backsRouter;
