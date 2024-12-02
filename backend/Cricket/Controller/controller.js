const axios = require('axios');

const getScore =async (res,req)=>{
    const apiKey = '2d368239-1f63-490e-8773-7d78c9b5f3de';
    const url = `https://cricapi.com/api/matches?apikey=${apiKey}`;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching cricket scores:', error);
        res.status(500).send('Error fetching data');
    }

}
module.exports={
    getScore
}