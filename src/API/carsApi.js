import axios from 'axios';

const baseUrl = 'http://localhost:3050';
axios.defaults.baseURL = baseUrl;


export const getAllCars = () => {
    return new Promise((resolve, _) => {
        axios.get('/api/cars')
        .then((result) => {
            resolve(result.data);
        }).catch(handleError);
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        axios.get(`/api/cars/${id}`)
        .then((result) => {
            resolve(result.data);
        }).catch(handleError);
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        axios.post('/api/cars', car)
        .then((result) => {
            resolve(result.data);
        }).catch(handleError);
    });
};

const handleError = (error) => {
    if(error.response) {
        console.error(`Server response: ${error.response.status}`, error.response.data);
    } else if(error.request) {
        console.error(`The request was made but no response was received`, error.request);
    } else {
        console.error(`Unknown error`, error.message);
    }

};