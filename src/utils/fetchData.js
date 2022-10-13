export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'a332e6dfc2msh1c5d28c2d1ac437p152040jsn0e132fd94561',
    }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}