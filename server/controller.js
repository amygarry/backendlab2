const houses = require('./db.json')
let nextHouseId = 4

module.exports = {
    getHouses:(req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse:(req, res) => {
        const deleteId = req.params.id
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index,1)
        res.status(200).send(houses) 
    },
    createHouse:(req, res)=>{
        const {address, price, imageURL} = req.body
      
        let newHouse = {
            id: nextHouseId,
            address,
            price,
            imageURL,
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        nextHouseId = nextHouseId + 1 
    },

    updateHouse:(req, res)=>{
        let id = req.params.id
        let type = req.body.type

        let index = houses.findIndex(element => element.id === +id)
        if (type === 'plus'){
            houses[index].price = houses[index].price + 10000
            res.status(200).send(houses)
        }else if (type === 'minus'){
            houses[index].price = houses[index].price - 10000
            res.status(200).send(houses)
        }else {
            res.sendStatus(400)
         }
    },
}
