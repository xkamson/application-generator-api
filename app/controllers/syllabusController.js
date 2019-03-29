const express = require('express');

const router = express.Router();
const {
  faculties, years, types, levels, fields, mods, mod, test,
} = require('./../middlewares/syllabusMiddleware');

router.get('/faculties', faculties);
router.get('/years', years);
router.get('/types', types);
router.get('/levels', levels);
router.get('/fields', fields);
router.get('/modules', mods);
router.get('/modules/:module', mod);

router.get('/test', test);

module.exports = router;
