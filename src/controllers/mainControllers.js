const mainConstrollers = {
    home: (req, res) => res.send('Route for Home View'),
    contact: (req, res) => res.send('Route for Contact View'),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faq View')
}

module.exports = mainConstrollers;