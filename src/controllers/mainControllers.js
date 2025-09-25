/* module.exports = {
Piel: (req, res) => res.send("Piel de Potrero"),
Infiniti: (req, res) => res.send("Infiniti Machine"),
Platense: (req, res) => res.send("PlatenseMania")
}
 */

module.exports = {
home: (req, res) => res.render('index'),
contact: (req, res) => res.render('contact'),
about: (req, res) => res.render('about')
}
