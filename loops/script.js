const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is the first product.",
        price: "10",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is the second product.",
        price: "20",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is the third product.",
        price: "30",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is the fourth product.",
        price: "40",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        name: "Product 5",
        description: "This is the fifth product.",
        price: "50",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 6,
        name: "Product 6",
        description: "This is the sixth product.",
        price: "60",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 7,
        name: "Product 7",
        description: "This is the seventh product.",
        price: "70",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 8,
        name: "Product 8",
        description: "This is the eighth product.",
        price: "80",
        imageUrl: "https://via.placeholder.com/150"
    }
];

const cardContainer = document.querySelector('.container');
let card = '';
// return an div for all the elements of product array
const allProduct = () =>{
    cards = products.map(item => {
        return( `
                <div class='card'>
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <span>${item.name}</span>
                    <span>${item.description}</span>
                    <span>${item.price}</span>
                </div>
        `)
    })
    .join("") // join is used to join the elements of returned array in single string
}

// if we want filtered product we have to write the below code
const filterProduct = () => {
    cards = products
            .filter(item => parseInt(item.price) < 50)
            .map(item => {
                return( `
                    <div class='card'>
                      <img src="${item.imageUrl}" alt="${item.name}">
                      <span>${item.name}</span>
                      <span>${item.description}</span>
                      <span>${item.price}</span>
                    </div>
                `)
            })
            .join("")
}
allProduct();
// filterProduct();
cardContainer.innerHTML = cards;

