const itemModel = require('../models/itemModel')

const getAllItems = async () => {
  return await itemModel.getAll();
}

const getOneItem = async (id) => {
  return await itemModel.getOne({item_id: id});
}

const createItem = async (item, files) => {
  const itemSchema = {
    item_id: '' + Date.now(),
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    dues: item.dues,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    image_front: '../../img/' + files[0].filename,
    image_back: '../../img/' + files[1].filename,
    licence_id: item.collection
  }
  return await itemModel.createOne(itemSchema);
}

const editItem = async (item, id) => {
  console.log('Llega a itemServices', item)
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    dues: item.dues,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    image_front: '/imagen_front',
    image_back: '/imagen_front',
    licence_id: item.collection
  }
  return await itemModel.editOne(itemSchema, {item_id: id});
};

const deleteItem = async (id) => {
  return await itemModel.deleteOne({item_id: id});
}

module.exports = {
    getAllItems,
    getOneItem,
    createItem,
    deleteItem,
    editItem
}