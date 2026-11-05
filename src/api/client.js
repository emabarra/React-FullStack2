const API_URL = import.meta.env.VITE_API_URL;

export async function request(endpoint, method="GET", body){
    const req = await fetch(`${API_URL}${endpoint}`,{

        method,
        headers:{
            "Content-type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
    })

    if(!req.ok) throw new Error(`Error ${req.status}`);

    return req.status === 204 ? null : req.json();
}