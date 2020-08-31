// create a class & constructor so that there exists orders and a inventory
class InventoryAllocator {
    constructor(orders, inv) {
        this.orders = orders;
        this.inv = inv;
    }
    getOrders() {
        return this.orders;
    }

    getInventory() {
        return this.inv;
    }

    ship() {
        // receipt will output the name of the place we are getting the desired items from and the items quantity
        let receipt = [];
        // make a map of orders with the key being the item like "apple"
        // and the value being the quantity of said key
        // makes it easier to organize and eventually try to ship
        let orderMap = new Map();

        for (const [key, value] of Object.entries(this.orders)) {
            let val = value;
            for(let i = 0; i < this.inv.length; i++){
                if(this.inv[i]["inventory"].hasOwnProperty(key) === true && this.inv[i]["inventory"][key] === value && val !== 0)  {
                    val -= 0;
                    let obj = {};
                    let info = {};
                    info[key] = value;
                    obj[this.inv[i]["name"]] = info;
                    receipt.push(obj);
                    //console.log(`${key} ${value}`)
                }
            }
        }

        console.log(this.orders);
        console.log(this.inv);
        console.log(receipt)
    }


}




var ship = new InventoryAllocator({ apple: 1 }, [{ name: "owd", inventory: { apple: 1 } }]);
ship.ship();