import axios from "api/axios";

const loginApi = async (data) => {
    try
    {
        const response = await axios.post('api/login', JSON.stringify(data),
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

export default loginApi