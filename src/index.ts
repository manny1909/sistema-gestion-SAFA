import app from './models/app';
import dotenv from 'dotenv';
dotenv.config()

const listen:any= app.get('listen')
listen();