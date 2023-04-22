import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4/anime";
const randomAnimeUrl = "https://api.jikan.moe/v4/top/anime";

const searchAnimes = async (searchKey) => {
    const response = await axios.get(baseUrl, {
        params:{
            q: searchKey,
        }
    });

    return response.data;
};

const getRandomAnimes = async () => {
    const response = await axios.get(randomAnimeUrl,{
        params:{
            limit:15,
        }
    });

    return response.data;
};

export {searchAnimes, getRandomAnimes};