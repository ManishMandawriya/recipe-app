import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import Payment from '../../Payment';

const AddToCart = () => {
    const {isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
                } = useCart();
                if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
  return (
    <section className='py-4 container'>
    <div className='row justify-content-center'>
          <div className='col-12'>
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
          <tbody>
                {items.map((item, index)=>{
                    return(
                    <tr key={index}>
                    <td>
                        <img src={item.img} style={{height:'6rem'}} alt="Image"/>
                    </td>
                    <td>{item.title}</td>
                    <td>&#x20B9; {item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                    <h3>Akshat sir</h3>
                        <button className='btn btn-info ms-2'
                        onClick={()=> updateItemQuantity(item.id, item.quantity-1)}
                        >-</button>
                        <button className='btn btn-info ms-2'  onClick={()=> updateItemQuantity(item.id, item.quantity+1)}>+</button>  
                        <button className='btn btn-danger ms-2'
                        onClick={()=>removeItem(item.id)}
                        >Remove Items</button>
                    </td>

                    </tr>
                    )
                })}
                </tbody>

          </table>

          </div>
          <div className='col-auto ms-auto'>
            <h2>Total Price:&#x20B9; {cartTotal}</h2>
          </div>
                <div className='col-auto'>
                    <button className='btn btn-danger m-2'
                    onClick={()=>emptyCart()}
                    >Clear Cart

                    </button>

                </div>
                    <NavLink to='/order/bill/payment' className='btn btn-success paymentbtn'>Proceed To Payment</NavLink>

    </div>
    {/* <Payment/> */}
    </section>
    )
}

export default AddToCart