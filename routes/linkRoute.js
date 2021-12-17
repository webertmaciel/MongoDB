const express = require('express');
const router = express.Router()
const linkController = require('../controllers/linkControllers')



router.get('/:title', linkController.redirect)


router.get('/', (req, res) => res.render('index', { error: false }))

router.post('/', express.urlencoded({ extended: true }), linkController.addLink)



module.exports = router