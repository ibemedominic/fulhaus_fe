import React from 'react'
import { FaCartPlus, FaTrash, FaStar } from "react-icons/fa";


export const Product = (props) => 
{
    return (
      <div className={ "card " + (props.props.current ? "selected" : "") } onClick={ props.onHighlight }>
        <img className="img-fluid card-img-top" src={ props.props.imageURLs[0] } alt="portfolio_img" />
        <div className="card-body">
          <h4 className="card-title">{ props.props.fulhausProductName }</h4>
          <div style={{ display : "flex", flexDirection : "row" }} >
            <FaStar color='gold' />
            <FaStar color='gold' />
            <FaStar color='gold' />
            <FaStar color='gold' />
            <FaStar color='gold' />
          </div>
          <div style={{ display : "flex", flexDirection : "row" }} >
            <p className="card-text" style={{ flex : 1, textAlign: "left", fontWeight : "bold" }}>${props.props.retailPrice}</p>
            <a className="btn btn-primary" onClick={ props.onDoClick }>
              <FaCartPlus />
              <span>&nbsp;Add</span>
            </a>
          </div>
        </div>
      </div>
    )
}


export const ProductResponsive = (props) => {
  return (
    <div className="col-md-4 col-sm-6" onClick={ props.onHighlight }>
      <div className="card" style={{ height : "500px", marginBottom : "20px" }}>
        <img className="img-fluid card-img-top" style={{ height : "60%" }} src={ props.props.imageURLs[0] } alt="portfolio_img" />
        <div className="card-body">
          <h4 className="card-title">{ props.props.fulhausProductName }</h4>
          <div style={{ display : "flex", flexDirection : "row" }} >
            <FaStar color='gold' />
            <FaStar color='gold' />
            <FaStar color='gold' />
            <FaStar color='gold' />
            <FaStar color='gold' />
          </div>
          <div style={{ display : "flex", flexDirection : "row" }} >
            <p className="card-text" style={{ flex : 1, textAlign: "left", fontWeight : "bold" }}>${props.props.retailPrice}</p>
            <a className="btn btn-primary" onClick={ props.onDoClick }>
              <FaCartPlus />
              <span>&nbsp;Add</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CartEntry = (props) => {
  return (
    <div className="card col-12 text-center" style={{ display : "flex", flexWrap : "wrap", flexDirection : "row" }}>
      <div style={{ flex : 1 }}>
        <img className="" style={{ width : "100%", height : "100%" }} src={ props.props.imageURLs[0] } alt="portfolio_img" />
      </div>
      <div style={{ flex : 1 }}>
        <h4 className="card-title">{props.props.fulhausProductName}</h4>
        <div style={{ display : "flex", flexDirection : "row" }} >
          <p className="card-text" style={{ flex : 1, textAlign: "left" }}>${props.props.retailPrice}</p>
          <a className="btn btn-primary btn-outline" onClick={ props.onCheck }>
            <FaTrash />
          </a>
        </div>
      </div>
    </div>
  )
}

