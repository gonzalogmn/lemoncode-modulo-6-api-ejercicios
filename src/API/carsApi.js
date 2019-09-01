import axios from 'axios';

const baseUrl = 'http://localhost:3050';
axios.defaults.baseURL = baseUrl;


export const getAllCars = () => {
    return new Promise((resolve, _) => {
        axios.get('/api/cars')
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            this.handleError(err);
        });
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        axios.get(`/api/cars/${id}`)
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            this.handleError(err);
        });
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        axios.post('/api/cars', car)
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            this.handleError(err);
        });
    });
};

const handleError = (error) => {
    if(error.response) {
        console.log(`Server response: ${error.response.status} ${error.response.data}`);
    } else if(error.request) {
        console.log(`The request was made but no response was received ${error.request}`);
    } else {
        console.log(`Unknown error`, error.message);
    }

};