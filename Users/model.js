import { Schema, model} from 'mongoose'

export default model('User', new Schema({
  userName: {
    type: String,
    required: 'User Name required'
  },
  password: {
    type: String,
    required: 'Password is required'
  }
}));
