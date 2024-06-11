import express from 'express';
import {
  getTightEnds, createTightEnd, getTightEnd, deleteTightEnd, updateTightEnd,
} from '../controllers/tightends.controller.js';

const tightendsRouter = express.Router();

// GET to /api/v1/excercises
tightendsRouter.get('/', getTightEnds);

// POST /api/v1/excercises
tightendsRouter.post('/', createTightEnd);

// GET /api/v1/excercises/<id>
tightendsRouter.get('/:id', getTightEnd);

// DELETE /api/v1/excercises/<id>
tightendsRouter.delete('/:id', deleteTightEnd);

// PATCH /api/v1/excercises/<id>
tightendsRouter.patch('/:id', updateTightEnd);

export default tightendsRouter;
