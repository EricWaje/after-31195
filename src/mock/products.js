export const productos = [
    {
        id: 1,
        name: 'Remera',
        price: 200,
        stock: 4,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 2,
        name: 'Remera2',
        price: 222,
        stock: 10,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera2_pe94nf.jpg',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 3,
        name: 'Camisa',
        price: 300,
        stock: 4,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa3_xyt1ay.jpg',
        category: 'camisas',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 4,
        name: 'Camisa2',
        price: 333,
        stock: 4,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa4_ehruek.jpg',
        category: 'camisas',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 5,
        name: 'Gorra',
        price: 80,
        stock: 20,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra1C_r0cz4b.jpg',
        category: 'gorras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 6,
        name: 'Gorra2',
        price: 88,
        stock: 5,

        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra4C_nyvjj6.jpg',
        category: 'gorras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
];

const producto = {
    id: 1,
    name: 'Remera',
    price: 200,
    stock: 4,

    img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
    category: 'remeras',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
};

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 1000);
    });
};
