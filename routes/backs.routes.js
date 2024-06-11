import express from 'express';
import {
  getBacks, createBack, getBack, deleteBack, updateBack,
} from '../controllers/backs.controller.js';

const backsRouter = express.Router(); // Router is a method on express object that we're importing above...it's what allows us to set up routes...it is a method that accepts routes and then the function you wand to call on those routes...and these funcitons are found in the controller

// GET to /api/v1/excercises
backsRouter.get('/', getBacks);

// POST /api/v1/excercises
backsRouter.post('/', createBack);

// GET /api/v1/excercises/<id>
backsRouter.get('/:id', getBack); // this is a get to a single excercise by a user provided id...id's populate in req.params(we write this in our controller)

// DELETE /api/v1/excercises/<id>
backsRouter.delete('/:id', deleteBack);

// PATCH /api/v1/excercises/<id>
backsRouter.patch('/:id', updateBack);

export default backsRouter;
