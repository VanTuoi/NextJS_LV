
import axios from '@/utils/axios';

const register = async (name, email, password, gender, dateOfBirth) => {
    // console.log(name, email, password, gender, dateOfBirth);
    try {
        const response = await axios.post('/api/v1/register', {
            username: name,
            email: email,
            password: password,
            gender: gender,
            dateOfBirth: dateOfBirth
        })
        console.log(response);
        return response;
    } catch (error) {
        console.log('Resgister error', error);
        throw error;
    }

};

export { register }