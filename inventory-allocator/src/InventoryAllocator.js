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
                // 1st case: we find a warehouse that has the exact number of whatever we're buying, all we have to do is push that info to our receipt varible
                if(this.inv[i]["inventory"].hasOwnProperty(key) === true && this.inv[i]["inventory"][key] === value && val !== 0)  {
                    val = 0;
                    let obj = {};
                    let info = {};
                    info[key] = value;
                    obj[this.inv[i]["name"]] = info;
                    receipt.push(obj);
                    //console.log(`${key} ${value}`)
                }
                // 2nd case: multiple warehouses needed to ship an item ex) apple:10, warehouse 1 has 3 apples, warehouse 2 has 7 apples
                else if(this.inv[i]["inventory"].hasOwnProperty(key) === true && this.inv[i]["inventory"][key] < value && val !== 0) {
                    val -= this.inv[i]["inventory"][key];
                    let warehouseExist = false;
                    let obj = {};
                    let info = {};
                    info[key] = this.inv[i]["inventory"][key];
                    obj[this.inv[i]["name"]] = info;
                    for(let j = 0; j < receipt.length; j++) {
                        //console.log(receipt[j].hasOwnProperty(this.inv[i].name))
                        if(receipt[j].hasOwnProperty(this.inv[i].name) === true) {
                            warehouseExist = true;
                            receipt[j][this.inv[i].name][key] = this.inv[i]["inventory"][key];
                            break;
                        }
                    }
                    (!warehouseExist ? receipt.push(obj) : console.log("warehouse true"))
                }
            }
        }

        //console.log(this.orders);
        //console.log(this.inv);
        console.log(receipt)
    }


}




var ship = new InventoryAllocator({ apple: 7 }, [{ name: `owd`, inventory: { apple: 2 } }, { name: `dm`, inventory: { apple: 5 }}]);
ship.ship();