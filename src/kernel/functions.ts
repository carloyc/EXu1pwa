import bcryptjs from "bcryptjs";
require('dotenv').config();

export async function hash(password: string) {
    return new Promise((resolve, reject) => {
        bcryptjs.hash('', process.env.BCRYPTJS!, function (err, hash) {
            if(err) reject(err);
            resolve(hash);


    })
})
}



