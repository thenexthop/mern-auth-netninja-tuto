import User from '../models/user.model.js';

export const getAllUsers = async (req, res) => {

  try {
    const users = await User.find({});
    
    return res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
    
  } catch (error) {
    
    return res.status(422).json({
      status: 'fail',
      error: error.message 
    });
  }

}