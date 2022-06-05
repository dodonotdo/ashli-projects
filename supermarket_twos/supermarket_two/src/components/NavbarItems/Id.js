import React, { Component } from "react";

class ItemsDetailsRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.items_id}</td>
        <td>{this.props.item.items_code}</td>
        <td>{this.props.item.variety_code}</td>
        <td>{this.props.item.items_name}</td>
        <td>{this.props.item.variety_name}</td>
      </tr>
    );
  }
}

export default ItemsDetailsRow;

