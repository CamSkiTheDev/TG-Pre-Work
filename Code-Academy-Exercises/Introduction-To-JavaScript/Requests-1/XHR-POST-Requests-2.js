const xhr = new XMLHttpRequest;

const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({ id: '200' });

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
        xhr.open('POST', url);
        xhr.send(data);
    }
};

//Learned how to create a boilerplate for a HTTP POST request and send the data to the server.