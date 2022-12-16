import React, { Component } from "react";

export default class GioHang extends Component {
  renderCart = () => {
   return this.props.cart.map((element) => {
      return (
        <tr key={element.id}>
          <td>{ element.id}</td>
          <td>
            <img
              width={50}
              src={element.image}
              className="img-fluid"
              alt="shoes"
            />
          </td>
          <td>{element.name}</td>
          <td>
            <button onClick={()=> this.props.handleQuantity(element, false)} className="btn btn-warning">-</button>
            <span className="mx-1">{element.soLuong}</span>
            <button onClick={()=> this.props.handleQuantity(element, true)} className="btn btn-warning">+</button>
          </td>
          <td>{element. price}</td>
          <td>{element.price * element.soLuong}</td>
          <td>
            <button onClick={()=> this.props.handleDelete(element)} className="btn btn-danger">XÓA</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG ({this.props.cart.length})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderCart()}

                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
