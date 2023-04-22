import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4/anime";

const searchAnimes = async (searchKey) => {
    const response = await axios.get(baseUrl, {
        params:{
            q: searchKey,
        }
    });

    console.log(response.data)
    return response.data;
};

export default searchAnimes;