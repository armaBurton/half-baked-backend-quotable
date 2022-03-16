const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
// const names = require('../json/names');

// TODO: Implement me!
module.exports = Router()
  .post('/', async (req, res) => {
    const profile = await ProfileService.create(req.body.name);

    res.json(profile);
});
