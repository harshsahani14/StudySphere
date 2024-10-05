const express = require('express');
const sectionRouter = express.Router();

const {isvalidToken,isStudent,isInstructor,isAdmin} = require('../middlewares/Authz')
const {createSection,updateSection,deleteSection} = require('../controllers/Section');

sectionRouter.post('/createSection',isvalidToken,isInstructor,createSection);
sectionRouter.put('/updateSection',isvalidToken,isInstructor,updateSection);
sectionRouter.delete('/deleteSection',isvalidToken,isInstructor,deleteSection);

module.exports = sectionRouter;
