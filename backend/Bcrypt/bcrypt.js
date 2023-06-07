const bcrypt = require('bcrypt');
const saltRounds = 10;

const hassPassword=async(password)=>{

    const hash = bcrypt.hash(password, saltRounds);
    return hash;

}

const compare=async(password,passwordHash)=>{

    const match = await bcrypt.compare(password, passwordHash);
    return match;
}

module.exports={hassPassword,compare}