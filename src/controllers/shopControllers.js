const itemService = require('../services/itemServices')

const shopControllers = {
    shop: async (req, res) => {
        const items = await itemService.getAllItems();
        const { data } = items;
        res.render('shop/shop', {
            title: 'Item | Funkoshop',
            items: data
        });
    },

    one_item: async (req, res) => {
        const id = req.params.id;
        const item = await itemService.getOneItem(id);
        const { data } = item;
        res.render('shop/item', {
            title: 'Item | Funkoshop',
            item: {...data}
        });
    },

    add_item: (req, res) => res.render('admin/create', { title: 'Create | Funkoshop'}),
    cart: (req, res) => res.render('shop/cart', { title: 'Cart | Funkoshop'}),
    cart_post: (req, res) => res.send('Route for Shop View')
};

module.exports = shopControllers;