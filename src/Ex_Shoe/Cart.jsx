
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {

        return (

            <div >


                <div className='cart'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th colSpan={6} >CART</th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Todal Monney</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* render with map  */}
                            {this.props.cart.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <img style={{ width: "5%" }} src={item.image} alt="" />
                                        </td>
                                        <td>{item.price}$</td>
                                        <td>
                                            <button className='btn-dark' onClick={() => { this.props.handelDown(item) }}>-</button>
                                            <strong>&nbsp;{item.amount}&nbsp;</strong>
                                            <button className='btn-success' onClick={() => { this.props.handelPlus(item) }}  >+</button>
                                        </td>
                                        <td>{item.amount * item.price}$</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { this.props.handelDelete(item) }}>Delete</button>

                                        </td>

                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>

            </div >
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handelDown: (shoe) => {
            let action = {
                type: "Down",
                payload: shoe,
            }
            dispatch(action)
        },

        handelPlus: (shoe) => {
            let action = {
                type: "Plus",
                payload: shoe,
            }
            dispatch(action)
        },

        handelDelete: (shoe) => {
            let action = {
                type: "Delete",
                payload: shoe,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)