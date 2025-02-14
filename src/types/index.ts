export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & { //take all the properties from MenuItem and add the quantity property
    quantity: number;
}