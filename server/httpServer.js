module.exports = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ number: 1 , name: 'John'}))
    } else if(url ==='/getUsers' && method === 'GET') {
    //    TODO: return users
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ number: 1 , name: 'John'}))
    }
}