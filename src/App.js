import React from 'react';
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import { Product, ProductResponsive, CartEntry }  from './components/Product'
import './App.css';


let dta = {"success":true,"message":"Products retrieved successfully","data":{"products":[{"_id":"6140caa0899e033037211b7f","imageURLs":["http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_PRM_1.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_ROM_1.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_DET_1.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_FRT_1.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_SID_1.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_BCK_1.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_DET_2.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_DET_3.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_DET_4.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_DET_5.jpg","http://fhphotos.s3-website-us-east-1.amazonaws.com/JLAN-232_HOV_1.jpg","http://marketplace.fourhands.com/s3/fhphotos/JLAN-232_PRM_1.jpg?width=150&height=150&mode=max"],"lifeStyleImageURLs":[],"stockQty":230,"tags":[{"_id":"621d01ce93dbdc37ebbc4523","name":"Residency in Marfa","category":"Style","base":"Residency in Marfa","base_FR":"Résidence à Maria","category_FR":"Style","name_FR":"Résidence à Maria"},{"_id":"61567aabba7da2944739b78e","name":"Living Room 3","category":"Room","base":"Living Room","base_FR":"Salle de séjour","category_FR":"Chambre","name_FR":"Salle de séjour 3"}],"fulhausCategory":{"_id":"63b82dc8c410c90de0d2ebf2","name":"Outdoor: Dining Chair"},"weight":37.48,"weightUnit":"lbs","length":27,"width":20.75,"height":34.5,"dimensionUnit":"in","currency":"USD","material":"Banana Leaf","updatedAt":"2023-03-15T21:22:57.488Z","fulhausColorName":"Grey Wash","fulhausDescription":"Finished in a washed grey, all-weather wicker, the Portia chair features curves for shapely intrigue. Cover or store inside during inclement weather and when not in use.","fulhausProductName":"PORTIA GRAY WASH CHAIR","warrantyInfo":null,"careInfo":null,"vendor":{"_id":"613fd8a4537db4c7503f5fc8","name":"Four Hands USA"},"retailPrice":1170,"careInfo_FR":null,"fulhausColorName_FR":"Lavage gris","fulhausDescription_FR":"Prenez la pose. Finis dans un gris délavé, les sièges en osier tout temps se courbent pour une intrigue de forme, à l'intérieur ou à l'extérieur. Couvrez-le ou rangez-le à l'intérieur par mauvais temps et lorsqu'il n'est pas utilisé.","fulhausMaterial_FR":"Feuille de banane","fulhausProductName_FR":"Chaise à manger Portia-Grey Wash","warrantyInfo_FR":null,"rentalPrice":93,"orderCurrency":"CAD"},{"_id":"62c88058a9ace80018a5d813","imageURLs":["https://s3.amazonaws.com/fhphotos/JLAN-225_FRT_1.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_PRM_1.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_VIG_1.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_OPN_1.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_SID_1.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_BCK_1.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_DET_2.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_DET_3.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_DET_4.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_DET_5.jpg","https://s3.amazonaws.com/fhphotos/JLAN-225_DET_6.jpg"],"lifeStyleImageURLs":[],"weight":81.13,"length":14,"width":54.5,"height":29.25,"fulhausCategory":{"_id":"6142e3a2a66fb0359ede3b23","name":"Console Table","base":"Coffee & Console Table","base_FR":"Café","name_FR":"Table console"},"material":"Solid Teak, Aluminum","stockQty":2,"tags":[],"warrantyInfo":null,"careInfo":null,"currency":"USD","dimensionUnit":"in","weightUnit":"lbs","vendor":{"_id":"613fd8a4537db4c7503f5fc8","name":"Four Hands USA"},"updatedAt":"2023-03-15T21:22:15.749Z","retailPrice":1721,"fulhausProductName":"Eli 6 Drawer Outdoor Chest","fulhausColorName":"Natural Teak, Charcoal Aluminum","fulhausDescription":"Sophisticated storage, thoughtfully made for the great outdoors. Framed by charcoal-finished aluminum, six fully removable drawers of natural teak, perfect for storing gardening tools, pool accessories and more. Mesh metal bottom well-suited for outdoor spaces. Cover or store inside during inclement weather.","rentalPrice":137,"orderCurrency":"CAD"},{"_id":"62c88102a9ace80018a5fcb8","imageURLs":["https://s3.amazonaws.com/fhphotos/ILMT-006-0912_PRM_1.jpg"],"lifeStyleImageURLs":[],"weight":70.55,"length":0.5,"width":108,"height":144,"fulhausCategory":{"_id":"6142e3a3a66fb0359ede3b37","name":"Rug","base":"Rugs","base_FR":"Tapis","name_FR":"Tapis"},"material":"100% Viscose (Rayon)","stockQty":1,"tags":[],"warrantyInfo":null,"careInfo":null,"currency":"USD","dimensionUnit":"in","weightUnit":"lbs","vendor":{"_id":"613fd8a4537db4c7503f5fc8","name":"Four Hands USA"},"updatedAt":"2023-03-15T20:45:51.426Z","retailPrice":1922,"fulhausProductName":"Alair Rug, 9x12'-Ivory, Dark Charcoal","fulhausColorName":"Ivory, Dark Charcoal","fulhausDescription":"With a short pile and soft hand, a beautiful blend of cool ivory and charcoal viscose features a contrasting double-cross hatch pattern, for a linear look with high/low impact.","rentalPrice":153,"orderCurrency":"CAD"},{"_id":"62c880f8a9ace80018a5fb56","imageURLs":["https://s3.amazonaws.com/fhphotos/ILMT-005B-0508_PRM_1.jpg","https://s3.amazonaws.com/fhphotos/ILMT-005B-0508_VIG_1.jpg","https://s3.amazonaws.com/fhphotos/ILMT-005B-0508_DET_1.jpg","https://s3.amazonaws.com/fhphotos/ILMT-005B-0508_DET_2.jpg","https://s3.amazonaws.com/fhphotos/ILMT-005B-0508_GRP_1.jpg","https://s3.amazonaws.com/fhphotos/ILMT-005B-0508_GRP_2.jpg"],"lifeStyleImageURLs":[],"weight":30.87,"length":0.5,"width":60,"height":96,"fulhausCategory":{"_id":"6142e3a3a66fb0359ede3b37","name":"Rug","base":"Rugs","base_FR":"Tapis","name_FR":"Tapis"},"material":"75% Vi, 25% Wo","stockQty":3,"tags":[],"warrantyInfo":null,"careInfo":null,"currency":"USD","dimensionUnit":"in","weightUnit":"lbs","vendor":{"_id":"613fd8a4537db4c7503f5fc8","name":"Four Hands USA"},"updatedAt":"2023-03-15T20:45:48.713Z","retailPrice":813,"fulhausProductName":"Adalyn Rug, 5x8'-Charcoal","fulhausColorName":"Charcoal","fulhausDescription":"With a short pile and luxuriously soft hand, rows of alternating pile and loop viscose deliver a linear look and fine-tailored feel to this heathered charcoal area rug.","rentalPrice":65,"orderCurrency":"CAD"},{"_id":"62c88062a9ace80018a5de7f","imageURLs":["https://s3.amazonaws.com/fhphotos/235542-001_PRM_1.jpg","https://s3.amazonaws.com/fhphotos/235542-001_FHM_1.jpg","https://s3.amazonaws.com/fhphotos/235542-001_PRM_2.jpg","https://s3.amazonaws.com/fhphotos/235542-001_DET_1.jpg","https://s3.amazonaws.com/fhphotos/235542-001_DET_2.jpg","https://s3.amazonaws.com/fhphotos/235542-001_DET_3.jpg","https://s3.amazonaws.com/fhphotos/235542-001_PRM_3.jpg"],"lifeStyleImageURLs":[],"weight":25,"length":4,"width":48,"height":48,"fulhausCategory":{"_id":"6142e3a3a66fb0359ede3b2d","name":"Artwork","base":"Decor","base_FR":"Décor","name_FR":"Œuvre d'art"},"material":"Matte Canvas","stockQty":1,"tags":[],"warrantyInfo":null,"careInfo":null,"currency":"USD","dimensionUnit":"in","weightUnit":"lbs","vendor":{"_id":"613fd8a4537db4c7503f5fc8","name":"Four Hands USA"},"updatedAt":"2023-03-15T19:26:00.742Z","retailPrice":1102,"fulhausProductName":"Penumbra Diptych By Matera","fulhausColorName":"Canvas","fulhausDescription":"A Mexico City native, Matera is an abstract artist specializing in acrylic and mixed media works. She paints outdoors exclusively, inspired by the changing weather which she uses to guide her intuitive process. This grandly scaled diptych is framed within rustic walnut and handmade in Austin, Texas.","rentalPrice":88,"orderCurrency":"CAD"},{"_id":"62c87f66a9ace80018a5b860","imageURLs":["https://s3.amazonaws.com/fhphotos/235532-001_FRT_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_PRM_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_ESS_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_DET_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_OPN_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_SID_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_BCK_1.jpg","https://s3.amazonaws.com/fhphotos/235532-001_DET_3.jpg","https://s3.amazonaws.com/fhphotos/235532-001_DET_4.jpg","https://s3.amazonaws.com/fhphotos/235532-001_DET_5.jpg","https://s3.amazonaws.com/fhphotos/235532-001_DET_6.jpg","https://s3.amazonaws.com/fhphotos/235532-001_DET_7.jpg"],"lifeStyleImageURLs":[],"weight":257.94,"length":16.25,"width":95,"height":38.25,"fulhausCategory":{"_id":"63b82dc8c410c90de0d2ebff","name":"Sideboard"},"material":"Iron, Tempered Glass","stockQty":1,"tags":[],"warrantyInfo":null,"careInfo":null,"currency":"USD","dimensionUnit":"in","weightUnit":"lbs","vendor":{"_id":"613fd8a4537db4c7503f5fc8","name":"Four Hands USA"},"updatedAt":"2023-03-15T19:25:46.740Z","retailPrice":3361,"fulhausProductName":"Lexington Sideboard Four Panel Door-Blck","fulhausColorName":"Black, Tempered Glass, White","fulhausDescription":"Finished in a classic black, an iron sideboard takes on tempered glass door fronts with traditional window-style paneling, for a clean look with great contrast. See-through front allows for endless styling and display options, with rear cutouts providing easy cord management.","rentalPrice":267,"orderCurrency":"CAD"}],"total":31575,"page":0,"limit":6}}

export class ProductApp extends React.Component
{
  constructor()
  {
      super();
      this.state = 
      {
        cartVisible : false, 
        totalAmount : 0,
        products : dta.data.products.map((a) => 
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
      };

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
