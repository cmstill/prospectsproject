import express from 'express';
import {
  getReceivers, createReceiver, getReceiver, replaceReceiver, deleteReceiver, updateReceiver,
} from '../controllers/receivers.controller.js';

const receiversRouter = express.Router(); // Router is a method on express object that we're importing above...it's what allows us to set up routes...it is a method that accepts routes and then the function you wand to call on those routes...and these funcitons are found in the controller

// GET to /api/v1/excercises
receiversRouter.get('/', getReceivers);

// POST /api/v1/excercises
receiversRouter.post('/', createReceiver);

// GET /api/v1/excercises/<id>
receiversRouter.get('/:id', getReceiver); // this is a get to a single excercise by a user provided id...id's populate in req.params(we write this in our controller)

// PUT /api/v1/excercises/<id>
receiversRouter.put('/:id', replaceReceiver);

// DELETE /api/v1/excercises/<id>
receiversRouter.delete('/:id', deleteReceiver);

// PATCH /api/v1/excercises/<id>
receiversRouter.patch('/:id', updateReceiver);

export default receiversRouter;

// This is where you define API routes...each API route in here invokes our controller which then calls our coordinator which then calls our model and then our router manipulates our database*
