const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    one_item: (req, res) => res.send('Route for Item View'),
    add_item: (req, res) => res.send('Route for Add Item View'),
    cart: (req, res) => res.send('Route for Cart View'),
    cart_post: (req, res) => res.send('Route for Shop View')
};

module.exports = shopControllers;