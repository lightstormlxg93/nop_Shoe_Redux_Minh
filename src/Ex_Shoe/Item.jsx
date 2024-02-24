import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Item extends Component {
    render() {
        let {image,name}=this.props.data;
        return (
            <div className='item_Background col-4'>
                <div className='item_Shoe '>
                    <img style={{width:"100%"}}  src={image} alt="" />
                    <h6>{name}</h6>
                    {/* vẫn còn truyền data, this.props.data là của list truyền cho */}
                    <button className=' btn-success' onClick={() => {this.props.handelAddToCart(this.props.data)  }}>Add</button>

                    <button 
                    className=' btn-dark' 
                    onClick={() => {this.props.handelClickDetail(this.props.data)  }}>View</button>
                </div>
            </div>
            
        )
    }
}

// dispatch
let mapDispatchToProps=(dispatch) => { 
    return{
        handelClickDetail: (shoe) => { 
           let action={

               type: "View",
               payload:shoe,
           }
           dispatch(action)
         },

         handelAddToCart: (shoe) => { 
            let action={
                type:"Add",
                payload:shoe
            }
            dispatch(action)
          }
    }
 }
export default connect(null,mapDispatchToProps)(Item);