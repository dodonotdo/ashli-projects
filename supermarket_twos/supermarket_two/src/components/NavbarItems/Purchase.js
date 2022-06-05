import React, { Component } from "react";
import axios from "axios";
// import "./ItemsDetails.css";
import PurchaseDetailsRow from "./pur";

class Two extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/item_purchase/getPurchaseData")
      .then((response) => {
        this.setState({ items: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {

    return (
      <div className="items_details">
        <h3 style={{ color: "red" }}>Purchase Items Details:-</h3>
        <table>
          <tr>
            <th>Purchase_id</th>
            <th>Variety_code</th>
            <th>items_name</th>
            <th>variety_name</th>
            <th>Total_kg</th>
            <th>Per_kg_amt</th>
            <th>Total_kg_amt</th>
            <th>Per_kg_updated_amt</th>
            <th>Updated Date</th>
          </tr>
          <tbody>
          {this.state.items.map((item, index) => (
              <PurchaseDetailsRow item={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Two;
