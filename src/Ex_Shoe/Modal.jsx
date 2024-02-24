import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Modal extends Component {
  exit=() => {
    document.querySelector(".background_view_shoe").style.display="none"
    document.querySelector(".view_Shoe").style.display="none"
    }
  
  
    render() {
      let {image,quantity,shortDescription,price,name}=this.props.detail;
    return (
      <div>
        <div className="background_view_shoe">
        </div>

        
        <div className="view_Shoe">
            <div style={{textAlign:"center"}}>

            <img style={{width:"100%"}} src={image} alt="" />
            </div>
            <br />
            <div style={{backgroundColor:'gray', color:"white"}}>
                <span>Name:</span> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</span> <br />
                <span>Price:</span>  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price}$</span> <br />
                <div style={{display:"flex"}}>
                  <span>Desc:</span>
                  <span style={{paddingLeft:"31px"}}>{shortDescription}</span> <br />
                </div>

                <span>Quantity:</span> <span>{quantity}</span> <br />
                <div style={{textAlign:"center"}}>

                <button className='btn btn-danger' onClick={this.exit}>Exit</button>
                </div>

            </div>
            
        </div>
        
      </div>
    )
  }
}


let mapStateToProps=(state) => { 
  return{
    detail:state.detail
  }
 }
export default connect(mapStateToProps)(Modal)