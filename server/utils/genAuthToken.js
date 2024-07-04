import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const genAuthToken = (user) => {
  const authKey = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      slug: user.slugName,
      isVerified: user.isVerified,
      userProfile: user.userProfile,
      hasVerified_email: user.hasVerified_email,
    },
    authKey
  );
  return token;
};

export default genAuthToken;
