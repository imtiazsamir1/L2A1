
function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return !value;  
    }
}














function getLength<T extends string | any[]>(eliment: T):number{
    if(typeof eliment=== 'string'){
        return eliment.length
    }else if(Array.isArray(eliment)){
        return eliment.length

    }
return 0

}










class Person{
    name:string;
    age:number;
    constructor( name:string, age:number){
         this.name = name;
        this.age = age;
}
getDetails(){
        return`'Name: ${this.name}, Age:${this.age}'`
    }
}
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);









const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
type Item={
    title:string;
    rating:number;
}
function filterByRating(books: Item[]): Item[] {
  return books.filter(book => book.rating >= 4);
}















const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
type User={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
function filterActiveUsers(users:User[]):User[]{
    return users.filter(user =>user.isActive===true)
}
















const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): string {
  const available = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`;
}












const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {

  const uniqueValues: (string | number)[] = [];

  function exists(value: string | number): boolean {
    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] === value) {
        return true;
      }
    }
    return false;
  }
for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      uniqueValues[uniqueValues.length] = arr1[i];
    }
  }
for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      uniqueValues[uniqueValues.length] = arr2[i];
    }
  }
return uniqueValues;
}












const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const basePrice = product.price * product.quantity;
      const discountAmount = product.discount ? (basePrice * product.discount) / 100 : 0;
      return basePrice - discountAmount;
    })
    .reduce((total, productPrice) => total + productPrice, 0);
}
















