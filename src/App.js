import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Product, ProductResponsive, CartEntry }  from './components/Product'
import './App.css';

export class ProductApp extends React.Component
{
  constructor()
  {
      super();
      this.state = {
        cartVisible : false, 
        totalAmount : 0,
        products : []
      };
  }

  componentDidMount()
  {
    let url = "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6";

    fetch(url).
    then(res => res.json()).
    then((data)=>
    {
      let products = data.data.products;
      this.setState({
        cartVisible : false, 
        totalAmount : 0,
        products : products.map((a) => 
        {
          return {
            id : a._id,
            selected : false,
            current : false,
            retailPrice : a.retailPrice,
            imageURLs : a.imageURLs,
            fulhausProductName : a.fulhausProductName
          }
        })
      })

    }).
    catch((error)=>
    {

    })

  }

  toggleCart()
  {
    this.setState({
      ...this.state,
      cartVisible : !this.state.cartVisible
    })
    return false;
  }

  computeTotalCart(items)
  {
    let total = 0;
    items.forEach((entry)=>
    {
      if(entry.selected == true)
      {
        total += entry.retailPrice
      }
    })
    return total;
  }

  removeFromCart(item)
  {
    this.setState((prevState) => 
    {
      let products = prevState.products.map((a)=>
      {
        if(a.id !== item.id) return a;
        return { ...a, selected : false };
      });

      let total = this.computeTotalCart(products);
      return {
        ...prevState,
        products : products,
        totalAmount : total
      }
    });
    return false;
  }

  addToCart(item)
  {
    this.setState((prevState) => 
    {
      let products = prevState.products.map((a)=>
      {
        if(a.id !== item.id) 
        {
          return a;
        }
        return { ...a, selected : true };
      });
      let total = this.computeTotalCart(products);
      return {
        cartVisible : prevState.cartVisible, 
        products : products,
        totalAmount : total
      }
    });
    return false;
  }
  
  higlightItem(item)
  {
    this.setState((prevState) => 
    {
      return {
        ...prevState,
        products : prevState.products.map((a)=>
        {
          if(a.id !== item.id)
          {
            return { ...a, current : false };
          } else {
            return { ...a, current : true };
          }
        })
      }
    });
    return false;
  }

  render()
  {
    return (
      
<div className="App">

  <nav className="navbar navbar-expand navbar-dark bg-primary"> 
    <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active" onClick={()=> this.toggleCart() }> 
              <a className="nav-link btn btn-outline" href="#">
                <FaCartArrowDown />
                <span> View</span>
              </a> 
            </li>
        </ul>
    </div>
  </nav>

  <div id="wrapper" className={' ' + ( this.state.cartVisible ? "toggled" : "") }>

    <div id="sidebar-wrapper">
      <div style={{ height : "50px", backgroundColor : "#92cf9b" }}>
        <p className="card-title" style={{ flex : 1, textAlign: "center", fontWeight : "bold" }}>Shopping Cart</p>
      </div>
      <div className="side-wrapper">
        <div className="container">
          <div className="row">
            {
              this.state.products.filter((a)=> a.selected === true).map((entry)=>
              {
                return (<CartEntry props={ entry } onCheck={( ()=> this.removeFromCart(entry))} />)
              })
            }
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card col-12 text-center">
            <div className="card-body">
              <div style={{ display : "flex", flexDirection : "row" }} >
                <p className="card-title" style={{ flex : 1, textAlign: "left", fontWeight : "bold" }}>Total</p>
                <span className="#">{ "$" + this.state.totalAmount }</span>
              </div>
              <a className="btn btn-primary">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="page-content-wrapper">
        <div className="container-fluid responsive">
          <section className="bg-light page-section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Product Catalog</h2>
                </div>
              </div>
              <div className="row responsive">
                {
                  this.state.products.map((entry)=>
                  {
                    return (<ProductResponsive props={ entry } onDoClick={( ()=> this.addToCart(entry))} onHighlight={( ()=> this.higlightItem(entry))} />)
                  })
                }
              </div>
            </div>
          </section>
        </div>
        
        <main className="product">
          <h1>Product Catalog</h1>
          <div className="product__list">
            {
              this.state.products.map((entry)=>
              {
                return (<Product props={ entry } onDoClick={( ()=> this.addToCart(entry))} onHighlight={( ()=> this.higlightItem(entry))} />)
              })
            }
          </div>
        </main>

    </div>
  </div>

</div>
    )
  }
}
