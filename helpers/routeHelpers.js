module.exports = {
  validateParams: (id) => {
    return (req, res, next) => {
      if (!parseInt(req.params[id])) {
        res.status(400).json({message: "Wrong parameter"});
      } else {
        next();
      }
    }
  }
}