import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, login again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode?.id) {
      req.user = { id: tokenDecode.id }; // store in req.user instead of req.body
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token, login again" });
    }
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
