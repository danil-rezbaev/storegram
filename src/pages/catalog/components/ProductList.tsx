import React, { FC } from 'react'
import { productsData } from '../../../layout/data/catalog/productsData'
import ProductCategory from './ProductCategory'
// import { useAppSelector } from '../../../hooks/redux'

const ProductList: FC = (props) => {
  // const basket = useAppSelector(state => state.basket)

  // useEffect(() => {
  //   console.log(basket)
  // }, [basket])

  return (
    <div className="product-list">
      { productsData.map((category) => (
        <ProductCategory
          key={category.id}
          {...category}
        />
      ))}

      <div>
        {/* {basket} */}
      </div>
    </div>
  )
}

export default ProductList
