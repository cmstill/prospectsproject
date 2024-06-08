const errorMiddleware = () => (err, req, res, next) => { // error handler middlewares always need these four params
  console.error(`ERROR: The following error occured : ${err}`); // this is just for our purposes as developers.  The User will never see this.  We have to send the user a response.

  res.status(500).json({
    error: true,
    errorMessage: 'Something went wrong',
  });
};

export default errorMiddleware;

// errors have to be caught, so we set up try catch statments in our controller and catch them w/ next(ex or err)
