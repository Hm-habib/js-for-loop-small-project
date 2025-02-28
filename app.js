// let a = 1;

// for (let i = 0; i < 50; i++) {
//     // const element = product[i];
//     console.log(a + i);

// }

const products = [{
        id: 1,
        name: "HP 250 G9 Core i3 12th Gen",
        brand: "Hp",
        price: ` $999.99`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInwp3KwXrDSLlYu5VB6A5wwEG-yblJD_EOw&s",
    },
    {
        id: 2,
        name: "Redmi note 9",
        brand: "Xiaomi",
        price: ` $99.99`,
        image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/smartphone-2048px-1013.jpg",
    },
    {
        id: 3,
        name: "OnPlus Nord 30 se",
        brand: "OnPlus",
        price: ` $119.99`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBWojpFb-lzcdasdfrPFlYlEKspQkYTLtUA&s",
    },
    {
        id: 4,
        name: "HP 250 G6 Core i5 11th Gen",
        brand: "Hp",
        price: ` $199.99`,
        image: "https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9871-2x1-1.jpg?width=1024&quality=75&crop=2:1&auto=webp",
    },
    {
        id: 2,
        name: "Xiaomi pad ",
        brand: "Xiaomi",
        price: ` $89.99`,
        image: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/southeast-asia/bd/mkt/plp/tablets/matepad-11-5.jpg",
    },
    {
        id: 2,
        name: "A4 tech smart headset",
        brand: "A4 tech",
        price: ` $49.99`,
        image: "https://cdn.thewirecutter.com/wp-content/media/2021/11/kidsheadphones-2048px-7289.jpg?auto=webp&quality=75&width=1024",
    },
    {
        id: 2,
        name: "Intel core i5 12gen 500gb ssd",
        brand: "Intel",
        price: ` $599.99`,
        image: "https://cdn.bdstall.com/product-image/giant_260752.jpg",
    },


];

const productContainer = document.getElementById("product-container")

for (let i = 0; i < products.length; i++) {
    const product = products[i];


    // console.log(product);

    productContainer.innerHTML += `

        <div class="bg-white p-4 rounded-md shadow-md"> 
        <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover rounded-md" />
        <h3 class="text-lg font-bold mt-3">Name: ${product.name} </h3>
        <h3 class="text-lg">Brand: ${product.brand}</h3> 
        <p class="text-gray-900 text-lg">Price:${product.price}</p>

        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md ">Add To Cart</button>
        </div>
        `



}