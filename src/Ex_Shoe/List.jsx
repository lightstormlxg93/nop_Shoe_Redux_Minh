import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'
// nhận shoeArr  
class List extends Component {
  renderListShoe=() => { 
    return this.props.shoeArr.map((item) => { 
        return <Item  key={item.id} data={item}/>
     })
   }
   
    render() {
      
    return (
      
      <div className='row col-9'>
        <div className='col-12' style={{textAlign:"center", fontSize:"35px"}}>

        Shoes Shop
        </div>
        {this.renderListShoe()}
      </div>
    )
  }
}

// lấy data:
let mapStateToProps = (state) => { 
  return{
    shoeArr:state.shoeArr,
    
  }
 }


export default connect(mapStateToProps)(List);