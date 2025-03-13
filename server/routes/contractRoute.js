const express = require("express");

const {
    storeMessage,
    retrieveMessage,
    emitEventStoredMessage
} = require('../controllers/contractController');
const { isAuthenticatedUser } = require("../middlewares/user_actions/auth");

const router = express.Router();

router.route('/api/store-message').post(isAuthenticatedUser, storeMessage)

router.route('/api/retrieve-message').get(isAuthenticatedUser, retrieveMessage)

router.route('/api/emit-event').post(isAuthenticatedUser, emitEventStoredMessage);

module.exports = router;
