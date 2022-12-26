import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { ReactComponent as DeleteIcon } from '../../assets/images/pages/basket/delete.svg'
import { useAppSelector } from '../../hooks/redux'

function BasketPage () {
  // const dispatch = useAppDispatch()
  const basket = useAppSelector(state => state.basket)

  console.log(basket)

  return (
    <div className="page page--basket">
      <Container>
        <div className="basket--header">
          <h1 className="basket--title">Корзина</h1>

          <Button
            variant="light"
            className="basket--delete-btn bg-transparent border-0">
            <DeleteIcon className="basket--delete-icon"/>
          </Button>
        </div>

        <div className="basket--product-list">
           {
            basket.products.map(item => (
              <div
                key={item.id}
                className="basket--product-item">
                <div className="product-item--body">
                  <div>
                    <img src={item.img} alt="" className="product-item--img"/>
                  </div>

                  <div className="product-item--content">
                    <b className="product-item--title">{item.title}</b>
                    <p className="product-item--description">{item.description}</p>
                  </div>
                </div>

                <div className="product-item--footer">
                  <p className="product-item--price">{ item.price }</p>
                </div>
              </div>
            ))
           }
        </div>
      </Container>
    </div>
  )
}

export default BasketPage
