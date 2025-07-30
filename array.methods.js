// this is for array method in js 
const products = [
  { id: "prod_001", name: "Wireless Bluetooth Headphones", brand: "SoundMax", price: 79.99 },
  { id: "prod_002", name: "Smart Fitness Watch", brand: "FitTime", price: 49.99 },
  { id: "prod_003", name: "USB-C Fast Charger", brand: "ChargePro", price: 14.99 }
];
const product = {
  id: "prod_001",
  name: ['shobhan','karim'],
  brand: "SoundMax",
  price: 79.99
};



const brand = products.map(product => product.brand);

console.log(brand);

let num= [1,2,3,4];

let res = num.map(n=> n*2);
console.log(res);

const filt = products.filter(p => p.price >20);

console.log(filt);


// array and object distruction in js 

const [x,y,z] = [1,2,.3];

console.log(z);

//movies 

const [m1,m2] = product.name;
console.log(m1,m2);





