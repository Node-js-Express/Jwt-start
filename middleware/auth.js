// authenticationMiddleware.js
import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

const authenticationMiddleware = async (req, res, next) => {

  try {
  
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
};

export default authenticationMiddleware;
