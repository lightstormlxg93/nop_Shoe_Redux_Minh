import React, { Component } from 'react'
import List from './List'
import Modal from './Modal'
import Cart from './Cart'


export default class Ex_Shoe extends Component {
    render() {

        return (
            <div className='col-12'>
                <Cart/>

                {/* Component List */}
                <div className='row mx-0'>
                    {/* begin nav */}
                    <div className='nav_shoe col-3'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>

                    </div>
                    {/* background nav */}
                    <div className='col-3'></div>
                    {/* end nav */}
                    <List />
                </div>

                <Modal />



            </div>
        )
    }
}
