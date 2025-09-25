module.exports = {
shop: (req, res) => {
res.render('shop/shop');
},
item: (req, res) => {
res.render('shop/item');
},
addItem: (req, res) => res.send("esta es la ruta para agregar un item al carrito"),
cart: (req, res) => {
res.render('shop/cart');
},
addCart: (req, res) => res.send("ruta para proceder a la compra")
};