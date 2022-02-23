import React, { useContext, useState } from 'react';
import faker from 'faker';
import SingleProduct from './SingleProduct';
import "./styles.css";
import {Cart} from "../Context";


// Using Context Created here by a hook namely useContext().
faker.seed(100);
const Home = () => {
    const productsArray = [...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
    }));

    const [products] = useState(productsArray);
    return (
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
          />
        ))}
      </div>
    ); 
};

export default Home;