import bcrypt from "bcrypt";

export async function encrypt(data) {
    const salt = 10;

    try {
        return await bcrypt.hash(data, salt);
    } catch (error) {
        throw error;
    }
}

export async function decrypt(plainText, data) {
    try {
        return await bcrypt.compare(plainText, data);
    } catch (error) {
        throw error;
    }
}