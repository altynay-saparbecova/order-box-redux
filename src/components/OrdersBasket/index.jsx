import React, { useEffect } from 'react'
import './OrderBasket.css'
import { DeleteFilled } from '@ant-design/icons'
import { data } from '../../store/data'
import { useSelector, useDispatch } from 'react-redux'
import { add_order, add_delete } from '../../store/actions'
import { Button } from 'antd';

export const OrderBasket = () => {
    //orders деген озгормо ачабыз
    //state ке кайрылып щквукы деген ключту кайтарып ,озгормого туруп калат
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch()
    // localStorage хранилища
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    return <div className='orderContainer'>
        <div className="menuContainer">
            <h1>Menu</h1>
            {/*data  ны рендер кылабыз */}
            <ul >
                {
                    data.map((el, id) => {
                        //бул жакта  onClick события кошуп диспатч менен сторго объект жонотобуз
                        //add_order деген функцияны чакырабыз ал item кутот -объект келет
                        return <Button className='menu'>
                            <li
                                //добавить заказы
                                onClick={() => {
                                    dispatch(add_order(el))
                                }}
                                style={{ cursor: 'pointer', listStyle: 'none' }}
                                key={id} >
                                {el.title} <b>{el.price}</b>
                                <img src={el.img} />
                            </li>
                        </Button>
                    })
                }
            </ul>
        </div>
        <div className='basketContainer'>
            <h1>Orders</h1>
            <ul >
                {
                    orders.map((el, id) => {
                        return <Button type='success' className='menu' key={id}>


                            <span>{el.title} </span>
                            <b> {el.price} * {el.count} = {el.sum}</b>
                            <span onClick={() => dispatch(add_delete(el))}>{/*удалить заказ */}
                                <DeleteFilled />
                            </span>
                        </Button>

                    })


                }
            </ul>
        </div>

    </div >
}

