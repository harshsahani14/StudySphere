const express = require('express');
const subSectionRouter = express.Router();

const {isvalidToken,isStudent,isInstructor,isAdmin} = require('../middlewares/Authz')
const {createSubSection,deleteSubSection} = require('../controllers/SubSection');

subSectionRouter.post('/createSubSection',isvalidToken,isInstructor,createSubSection)
subSectionRouter.delete('/deleteSubSection',isvalidToken,isInstructor,deleteSubSection);

module.exports = subSectionRouter
