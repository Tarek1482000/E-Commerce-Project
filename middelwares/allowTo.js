const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.currentUser.role)) {
      const err = appError.create(
        "this role is not authorized",
        401,
        httpStatusText.ERROR
      );
      return next(err);
    }
    return next();
  };
};
