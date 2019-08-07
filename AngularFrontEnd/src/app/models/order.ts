export interface Order {
    id: Number;
    coffeeDrinks:[{
        coffee: String,
        cquantity: String
    }]
    name: String;
    email:String;
    phone:String;
    date:Date;
    address:String;
}