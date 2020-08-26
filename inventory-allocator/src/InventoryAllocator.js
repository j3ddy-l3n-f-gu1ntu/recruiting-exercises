// create a class & constructor so that there exists orders and a inventory
class InventoryAllocator {
    constructor(orders, inventory) {
        this.orders = orders;
        this.inventory = inventory;
    }
    getOrders() {
        return this.orders;
    }

    getInventory() {
        return this.inventory;
    }

    ship() {
        // make a map of orders with the key being the item like "apple"
        // and the value being the quantity of said key
        // makes it easier to organize and eventually try to ship
        let orderMap = new Map();

        for (const [key, value] of Object.entries(this.orders)) {
            orderMap.set(key, value);
        }


        // receipt will output the name of the place we are getting the desired items from and the items quantity
        let receipt = [];

        console.log(orderMap);
    }


}




var ship = new InventoryAllocator({ apple: 5, banana: 5, orange: 5 }, [ { name: "market", inventory: { apple: 5, orange: 10 } } , { name: "place", inventory: { banana: 5, orange: 10 } }]);
ship.ship();