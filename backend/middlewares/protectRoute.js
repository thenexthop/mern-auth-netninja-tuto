import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export async function protectRoute(req, res, next) {

  const { authorization } = req.headers 

  if(!authorization) {
    return res.status(401).json({
      status: "fail",
      errormsg: "Debe iniciar sesión para acceder a este recurso.",
    });
  }
  
  const token = authorization.split(" ")[1];

  if(!token) {
    return res.status(401).json({
      status: "fail",
      errormsg: "Debe iniciar sesión para acceder a este recurso.",
    });
  }

  console.log("authorization: ", authorization);
  console.log("token: ", token);  

  try {
    const { uid } = jwt.verify(token, process.env.TOKEN_SECRET);

    // buscamos ese usuario en la BDatos para verificar
    // que aun exista
    const userFound = await User.findOne({_id: uid});

    if(!userFound) {
      throw Error("El usuario no está registrado en el sistema.");
    }

    //Guardo el id del usuario
    req.user = userFound._id;

  } catch (error) {
    console.error(error);
    return res.status(401).json({
      status: "fail",
      errormsg: "Debe iniciar sesión para acceder a este recurso.",
    });
  }
        
  //Permite acceso a la ruta protegida
  next();
}
