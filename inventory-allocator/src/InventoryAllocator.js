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
}




var ship = new InventoryAllocator({ apple: 5, banana: 5, orange: 5 }, [ { name: "market", inventory: { apple: 5, orange: 10 } } , { name: "place", inventory: { banana: 5, orange: 10 } }]);
ship.getOrders();