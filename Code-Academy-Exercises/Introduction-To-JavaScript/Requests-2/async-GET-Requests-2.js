const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint');
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
};

//Learned how to create the boilerplate for an asynchronous get request using async, await and the fetch function.