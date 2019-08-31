import axios from 'axios';

const baseUrl = 'http://localhost:3050';
axios.defaults.baseURL = baseUrl;


export const getAllCars = () => {
    return axios.get('/api/cars');
}

export const getCarById = (id) => {
    return axios.get(`/api/cars/${id}`);
}

export const addCar = (car) => {
    return axios.post('/api/cars', car);
};