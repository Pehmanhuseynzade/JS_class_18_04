// class Animal{
//      constructor(name) {
//           this.name=name
//      }
// }
// let name = new Animal("dog")
// class animal_voice extends Animal{
//      constructor(voice,name){
//           super(name)
//           this.voice = voice
//      }
// }
// let it = new animal_voice("hav","dog")
// console.log(it)

// let originalProducts = [
//      {
//          "id": 4,
//          "supplierId": 2,
//          "categoryId": 3,
//          "quantityPerUnit": "48 - 6 oz jars",
//          "unitPrice": 22,
//          "unitsInStock": 53,
//          "unitsOnOrder": 0,
//          "reorderLevel": 0,
//          "discontinued": true,
//          "name": "Chef Anton's Cajun Seasoning",
//          "supplier": {
//              "id": 2,
//              "companyName": "New Orleans Cajun Delights",
//              "contactName": "Shelley Burke",
//              "contactTitle": "Order Administrator",
//              "address": {
//                  "street": "P.O. Box 78934",
//                  "city": "New Orleans",
//                  "region": "LA",
//                  "postalCode": 70117,
//                  "country": "USA",
//                  "phone": "(100) 555-4822"
//              }
//          },
//          "category": {
//              "id": 3,
//              "description": "Desserts candies and sweet breads",
//              "name": "Confections"
//          }
//      },
//      {
//          "id": 5,
//          "supplierId": 2,
//          "categoryId": 2,
//          "quantityPerUnit": "36 boxes",
//          "unitPrice": 21.35,
//          "unitsInStock": 0,
//          "unitsOnOrder": 0,
//          "reorderLevel": 0,
//          "discontinued": true,
//          "name": "Chef Anton's Gumbo Mix"
//      },
//      {
//          "id": 6,
//          "supplierId": 3,
//          "categoryId": 2,
//          "quantityPerUnit": "12 - 8 oz jars",
//          "unitPrice": 25,
//          "unitsInStock": 120,
//          "unitsOnOrder": 0,
//          "reorderLevel": 25,
//          "discontinued": false,
//          "name": "Grandma's Boysenberry Spread"
//      },
//      {
//          "id": 7,
//          "supplierId": 3,
//          "categoryId": 7,
//          "quantityPerUnit": "12 - 1 lb pkgs.",
//          "unitPrice": 30,
//          "unitsInStock": 15,
//          "unitsOnOrder": 0,
//          "reorderLevel": 10,
//          "discontinued": false,
//          "name": "Uncle Bob's Organic Dried Pears"
//      },
//      {
//          "id": 8,
//          "supplierId": 3,
//          "categoryId": 2,
//          "quantityPerUnit": "12 - 12 oz jars",
//          "unitPrice": 40,
//          "unitsInStock": 6,
//          "unitsOnOrder": 0,
//          "reorderLevel": 0,
//          "discontinued": false,
//          "name": "Northwoods Cranberry Sauce"
//      },
//      {
//          "id": 9,
//          "supplierId": 4,
//          "categoryId": 6,
//          "quantityPerUnit": "18 - 500 g pkgs.",
//          "unitPrice": 97,
//          "unitsInStock": 29,
//          "unitsOnOrder": 0,
//          "reorderLevel": 0,
//          "discontinued": true,
//          "name": "Mishi Kobe Niku"
//      },
//      {
//          "id": 10,
//          "supplierId": 4,
//          "categoryId": 8,
//          "quantityPerUnit": "12 - 200 ml jars",
//          "unitPrice": 31,
//          "unitsInStock": 31,
//          "unitsOnOrder": 0,
//          "reorderLevel": 0,
//          "discontinued": false,
//          "name": "Ikura"
//      },
//  ]

//1.en bahali mehsulu tapin

// let arr = []  //bos arr yaratdiq

// for (let i=0;i<originalProducts.length;i++){
//      // console.log(originalProducts[i].unitPrice) //unit pricemin icinbde olanlar
//      arr.push(originalProducts[i].unitPrice) //arrayin icine push etdim
// }
// console.log(arr.sort()) 
// console.log(arr[arr.length-1]) //en bahalimi tapdim


//2.en ucuz mehsulu tapin

// arr = []

// for(let i=0;i<originalProducts.length;i++){
//      arr.push(originalProducts[i].unitPrice)
// }
// console.log(arr.sort())
// console.log(arr[0])

//3.Mehsullarin ortalama qiymetini tapin


// sum = 0
// let ave
// for(let i = 0;i<originalProducts.length;i++){
//      sum+=originalProducts[i].unitPrice
//     ave= sum/originalProducts.length
// }

// console.log(ave)


//4.Stok miqdari 10dan az olan mehsullarin sayi ne qederdir

// for(let i = 0;i<originalProducts.length;i++){
//      if(originalProducts[i].unitsInStock<10){
//           console.log(originalProducts[i].unitsInStock)
//           }
// }




//5.adinda x herfi olan nece mehsul var?

// count = 0
// for(let i = 0 ;i<originalProducts.length;i++){
//      console.log(originalProducts[i].name)
//      if(originalProducts[i].name.includes("a")){
//           console.log(count++)
//      }
// }

//6. discontinued true olan nece mehsul var?

// count = 0
// for(let i=0;i<originalProducts.length;i++){
//      console.log(originalProducts[i].discontinued)
//      if(originalProducts[i].discontinued==true){
//           count++
//      }
// }
// console.log(count)



//7.CateqoryId si 4 olan mehsullari ekrana yazdir

// count = 0
// for(let i= 0;i<originalProducts.length;i++){
//      if(originalProducts[i].categoryId==2){
//           count++
//      }
// }
// console.log(count)

let countries = {
     Afghanistan: [
       "Herat",
       "Kabul",
       "Kandahar",
       "Molah",
       "Rana",
       "Shar",
       "Sharif",
       "Wazir Akbar Khan",
     ],
     Albania: [
       "Elbasan",
       "Petran",
       "Pogradec",
       "Shkoder",
       "Tirana",
       "Ura Vajgurore",
     ],
   };

   //1.Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın

   //console.log(Object.keys(countries))

   //console.log(Object.values(countries))


   //2.Ən çox şəhəri olan ölkə adını return edən funksiya yazın
arr1 = []
arr2 = []
for(let i = 0;i<countries.length;i++){
     arr1.push(countries[i].Afghanistan)
}

console.log(arr1)

