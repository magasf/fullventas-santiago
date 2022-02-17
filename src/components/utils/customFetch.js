


let is_ok = true;
const {data} = require('./data.js');

console.log(data)
const customFetch = (timeout, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(is_ok) {
                resolve(data);
            } else {
                reject('KO');
            }
        }, timeout);
    });
};

customFetch(2000, data)
.then((data) => console.log('Se cargan las img', data))
.catch((error) => console.log('No se pueden cargar las img', error))
