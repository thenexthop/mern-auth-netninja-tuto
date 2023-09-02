import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Debe ingresar el correo electrónico."],
    unique: [true, "El email ingresado ya se encuentra registrado en la aplicación."]
  },
  password: {
    type: String,
    required: [true, "Debe ingresar el correo electrónico."],
    trim: true,
  },

}, {timestamps: true});

userSchema.pre("save", async function(next) {
  // Si no se ha modificado el password retorna y continua con la ejecucion
  if(!this.isModified('password')) return next();

  try {
    // en caso contrario hashea el password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();

  } catch (error) {
    console.error(error);
    throw new Error('Ocurrió un error al intentar registrar la contraseña del usuario.');
}

});

// methods
userSchema.methods.passwordIsCorrect = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
}

export default new model("User", userSchema);