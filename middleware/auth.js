const { User } = require('../db/models');

const getUser = async (req, res, next) => {
  try {
    if (req.session.user_sid) {
      const user = await User.findByPk(req.session.user_sid);
      res.locals.user = user ? structuredClone(user) : null;
    } else {
      res.locals.user = null;
    }
  } catch (error) {
    console.log(error, 'middleware auth not have user', );
  }
  next();
};

module.exports = getUser;
