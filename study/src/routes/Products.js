import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import Layouts from '../components/Layouts.js';

const Products = (props) => {
  function handleDelete(id) {
    props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
     <Layouts>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={props.products} />
    </Layouts>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products
}))(Products);
