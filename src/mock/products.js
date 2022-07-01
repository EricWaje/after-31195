export const products = [
    {
        name: 'Remera',
        price: 200,
        stock: 4,
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Remera2',
        price: 222,
        stock: 10,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera2_pe94nf.jpg',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Camisa',
        price: 300,
        stock: 4,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa3_xyt1ay.jpg',
        category: 'camisas',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Camisa2',
        price: 333,
        stock: 4,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa4_ehruek.jpg',
        category: 'camisas',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Riñonera',
        price: 70,
        stock: 6,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/rinonera1C_alnfaf.jpg',
        category: 'rinoneras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Riñonera2',
        price: 77,
        stock: 6,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/rinonera3C_hnxpzc.jpg',
        category: 'rinoneras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Gorra',
        price: 80,
        stock: 20,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra1C_r0cz4b.jpg',
        category: 'gorras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        name: 'Gorra2',
        price: 88,
        stock: 5,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra4C_nyvjj6.jpg',
        category: 'gorras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
