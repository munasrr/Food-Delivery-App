const admin = (req, res, next) => {
  // console.log("Admin Middleware req.user:", req.user); // Debugging log

  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

export { admin };
