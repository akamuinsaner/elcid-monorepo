import * as bcrypt from 'bcryptjs-react';
import md5 from 'md5';

async function hashPassword(textPassword: string) {
    // const salt = await bcrypt.genSalt();
    // const hash = await bcrypt.hash(textPassword, salt);
    return md5(textPassword);
}

export default hashPassword;
