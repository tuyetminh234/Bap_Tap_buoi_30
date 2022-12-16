import React, { Component } from 'react'

import data from "../../data/DataShoes.json"
import GioHang from './GioHang';
import Products from "./Products"

export default class BaiTapGiay extends Component {
  state = {
    cart: []
  }

  renderShoesList = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.id}>
          {/* b4-card-default */}

          <Products
            element={element}
            showDescription={this.showDescription}
            addToCart={this.addToCart}
          />
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  addToCart = (shoes) => {
    const data = [...this.state.cart]

    const idx = data.findIndex(element => element.id === shoes.id)

    if (idx === -1) {
      data.push({ ...shoes, soLuong: 1 })
    } else {
      data[idx].soLuong += 1
    }



    this.setState({
      cart: data,
    },
      () => {
        console.log(this.state.cart)
      }
    )
  }

  handleQuantity = (shoes, isIncrease) => {
    const data = [...this.state.cart]
    const idx = data.findIndex((ele) => ele.id === shoes.id)
    if (isIncrease) {
      data[idx].soLuong += 1
    } else {
      if (data[idx].soLuong > 1) {
        data[idx].soLuong -= 1
      } else if (window.confirm("Ban co muon xoa khong ?")) {
        data.splice(idx, 1)
      }
    }
    this.setState({
      cart: data,
    })

    handleDelete = (shoes) => {
      const data = [...this.state.cart]
      const idx = data.findIndex((element) => element.id === shoes.id)
      data.splice(idx, 1)
      this.setState({
        cart: data,
      })

    }
  }
  render() {
    return (
      <div>
        <h3>BaiTapGiay</h3>
        <GioHang cart={this.state.cart} handleQuantity={this.handleQuantity} handleDelete={this.handleDelete} />
        <div className="row">{this.renderShoesList()}</div>
      </div>
    );
  }
}
