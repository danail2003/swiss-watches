const requester = async (url, method, body) => {
    if (method === 'GET') {
        return await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    else {
        return await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
};

export default requester;