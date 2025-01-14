const Element = require('./models/Element');

exports.getAllElements = async (req, res, next) => {
    try{
        const elements = await Element.findAll();
        res.status(200).send({elements});
    }catch(error) {
        console.log(error);
        next(error);
    }
}

exports.createElement = async (req, res, next) => {
    try{

        let name = req.body.name;
        let electrons = req.body.name;

        let element = new Element(name, electrons)
        element = await element.save();

        res.status(200).send({message: "Element created", element});
    }catch(error) {
        console.log(error);
        next(error);
    }
}