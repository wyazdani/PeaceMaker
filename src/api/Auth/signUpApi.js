import axios from "../axios";

const signUpApi = async (data) => {

    try{
        const response = await axios.post('api/register', JSON.stringify(data),
        {
            headers : {'Content-Type' : 'application/json'}
        });

        return response;
    }
    catch(err)
    {
        return err;
    }

}

export default signUpApi 