if (process.env.NODE_ENV === 'development') {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  }
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.errorHandler());
  }
  