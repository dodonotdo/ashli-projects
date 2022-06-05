import React, { Component } from "react";

class PurchaseDetailsRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.purchase_id}</td>
        <td>{this.props.item.variety_code}</td>
        <td>{this.props.item.items_name}</td>
        <td>{this.props.item.variety_name}</td>
        <td>{this.props.item.total_kg}</td>
        <td>{this.props.item.per_kg_amt}</td>
        <td>{this.props.item.total_kg_amt}</td>
        <td>{this.props.item.per_kg_updated_amt}</td>
        <td>{this.props.item.updated_date}</td>
      </tr>
    );
  }
}

export default PurchaseDetailsRow;
