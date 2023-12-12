const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../data/products.json')

const getAll = () => {
    try {
        const dataJSON = fs.readFileSync(dataPath);
        const allItems = JSON.parse(dataJSON);
        const response = {
            isError: false,
            data: allItems
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo cargar debido a ${e}`
        };
        return error;
    }
}

const getOne = async (params) => {
    try {
        const products = getAll().data;
        const id_req = params.item_id;
        const productos = products.find(product => product.item_id == id_req);
        const response = {
            isError: false,
            data: productos
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos obtener los datos debido a que ${e}`
        };
        return error;
    }
}

const createOne = async (params) => {
    try {
        const products = getAll().data;
        products.push(params)
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2))
        const response = {
            isError: false,
            data: params
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos crear el producto debido a ${e}`
        }
        return error;
    }
}

const editOne = async (params, id) => {
    try {
        const products = getAll().data;
        const id_req = id.item_id;
        const findItem = products.find(product => product.item_id == id_req);
        Object.keys(params).forEach(key => {
            findItem[key] = params[key];
        });
        const edited = fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
        const response = {
            isError: false,
            item: edited
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `Falló la edición del item porque ${e}`
        }
        return error;
    }
}
 
const deleteOne = async (params) => {
    try {
        const products = getAll().data;
        const id_req = params.item_id;
        const filter = products.filter(product => product.item_id != id_req);
        const deleted = fs.writeFileSync(dataPath, JSON.stringify(filter, null, 2));
        const response = {
            isError: false,
            items: deleted
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo borrar el item debido a que ${e}`
        }
        return error;
    }
}

module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne,
    editOne
}