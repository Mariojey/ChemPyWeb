const db = require('../config/db');

class Element {
    constructor(name, electrons) {
        this.name = name;
        this.electrons = electrons;
    }

    static findAll(){

        let query = `SELECT * FROM chemLab.elements`;

        return db.execute(query);
    }

    async save(){

        let query = `INSERT INTO chemLab.elements (name, count_of_electrons) 
                            VALUES ('${this.name}', '${this.electrons}')`;

        const [newElectrons, _] = await db.execute(query);

        return newElectrons;
    }
}

module.exports = Element;