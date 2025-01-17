import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions'

class Home extends Component{

    handleClick = (id) => {
        this.props.addToCart(id); 
    }

    render() {
        let itemList = this.props.items.map(item => {
            return(
                <div className="card" key={item.id} style={{width: "220px", height: "220px", float: "left", margin: "30px 10px"}}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title" style={{color: "black"}}>{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light blue" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">

                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }

}    

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch)=>{

    return{
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 