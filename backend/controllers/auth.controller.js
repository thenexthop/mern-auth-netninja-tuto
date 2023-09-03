import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export function createToken(uid) {
  return jwt.sign({ uid }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
}

// @desc login
// @route POST api/users/login
// @access Public
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({email})
  
    if(!user || !(await user.passwordIsCorrect(password, user.password))) {
      throw Error("Credenciales inválidas.");
    }

    const token = createToken(user._id);
  
    return res.status(200).json({
      status: 'success',
      data: {
          email: user.email,
          token
      }
    });

  } catch (error) {
    console.error(error.message);
    return res.status(401).json({
      status: 'fail',
      errormsg: error.message 
    });
  }  
}

// @desc register
// @route POST api/users/register
// @access Public
export const register = async (req, res) => {
  const { email, password } = req.body;

  try {

    const exists = await User.findOne({email});

    if(exists) {
      throw Error("El correo electrónico ingresado ya se encuentra registrado.");
    }

    const newUser = await User.create({ email, password });
    
    const token = createToken(newUser._id);
  
    return res.status(201).json({
      status: 'success',
      data: {
        email: newUser.email,
        token
      }
    });

  } catch (error) {
    return res.status(422).json({
      status: 'fail',
      errormsg: error.message 
    });
  }
}
