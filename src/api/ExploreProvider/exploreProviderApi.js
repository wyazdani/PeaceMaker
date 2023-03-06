import axios from "api/axios";

const exploreProviderApi = async () => {
    try{
        const token = localStorage.getItem('token');
        const response = await axios.get('api/get-providers', {
            headers : {'Content-Type' : 'application/json',
            Authorization: `Bearer ${token}`,
        },
        });
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export default exploreProviderApi;