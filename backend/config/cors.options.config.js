import { allowedOrigins } from './allowed.origins.config.js';

export const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.includes(origin) || !origin) {
        //if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }else {
            // callback(new AppError('No permitido por CORS', 401));
            throw new Error('No permitido por CORS. Cod.401');
        }
    },
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
 }