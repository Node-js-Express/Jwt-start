import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors/index.js';

const login = async (req, res) => {

};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };
