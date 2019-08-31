import axios from 'axios';

const baseUrl = 'http://localhost:3050';
axios.defaults.baseURL = baseUrl;


export const getAllCars = () => {
    return new Promise((resolve, _) => {
        axios.get('/api/cars')
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            console.error(err);
        });
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        axios.get(`/api/cars/${id}`)
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            console.error(err);
        });
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        axios.post('/api/cars', car)
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            console.error(err);
        });
    });
};