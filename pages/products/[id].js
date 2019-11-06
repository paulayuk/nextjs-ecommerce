import { useState } from 'react';
import Layout from '../../components/layout';
import ProductItem from '../../components/Product-item.js'
import fetch from 'isomorphic-unfetch';

const Productitem = props => {

  return (
    <ProductItem product={props.product} />
  )

};

Productitem.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://my-json-server.typicode.com/mood-board/demo/products/${id}`);
  const product = await res.json();
  return { product };
};

export default Productitem;
