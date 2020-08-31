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

        for (const [key, value] of Object.entries(this.orders)) {
            let val = value;
            for(let i = 0; i < this.inv.length; i++){
                // 1st case: we find a warehouse that has the exact number of whatever we're buying, all we have to do is push that info to our receipt varible
                if(this.inv[i]["inventory"].hasOwnProperty(key) === true && this.inv[i]["inventory"][key] === val && val !== 0)  {
                    val = 0;
                    let obj = {};
                    let info = {};
                    let warehouseExist = false;
                    info[key] = value;
                    obj[this.inv[i]["name"]] = info;

                    for(let j = 0; j < receipt.length; j++) {
                        if(receipt[j].hasOwnProperty(this.inv[i].name) === true) {
                            warehouseExist = true;
                            receipt[j][this.inv[i].name][key] = this.inv[i]["inventory"][key];
                            break;
                        }
                    }
                    (!warehouseExist ? receipt.push(obj) : true)
                    //console.log(`${key} ${value}`)
                }
                // case 1.5: there exist a item in the warehouse that contains the exact amount that we need, but is found later on
                if(this.inv[i]["inventory"].hasOwnProperty(key) === true && this.inv[i]["inventory"][key] === value && val !== 0)  {
                    val = 0;
                    let obj = {};
                    let info = {};
                    let warehouseExist = false;
                    info[key] = value;
                    obj[this.inv[i]["name"]] = info;


                    for(let j = 0; j < receipt.length; j++) {
                        //console.log(receipt[j].hasOwnProperty(this.inv[i].name))
                        if(receipt[j].hasOwnProperty(this.inv[i].name) === true) {
                            warehouseExist = true;
                            receipt[j][this.inv[i].name][key] = this.inv[i]["inventory"][key];
                            break;
                        }
                    }
                    (!warehouseExist ? receipt.push(obj) : true)
                    //console.log(`${key} ${value}`)
                }
                // 2nd case: multiple warehouses needed to ship an item ex) apple:10, warehouse 1 has 3 apples, warehouse 2 has 7 apples
                else if(this.inv[i]["inventory"].hasOwnProperty(key) === true && this.inv[i]["inventory"][key] < val && val !== 0) {
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
                    (!warehouseExist ? receipt.push(obj) : true)
                }
            }
            if(receipt.length > 0) {
                for(let i = 0; i < receipt.length; i++) {

                }
            }
        }


        // console.log('Order: ' + this.orders);
        // console.log('Warehouse Inventory: ' + this.inv);
        console.log(receipt)
        return receipt
    }


}




var ship = new InventoryAllocator({ apple: 5, banana: 1 }, [{ name: `owd`, inventory: { apple: 2 } }, { name: `dm`, inventory: { apple: 5 }},{ name: `poo`, inventory: { apple: 2, banana: 1 } }]);
ship.ship();