import React, { Component } from "react";
import axios from "axios";
import "./ItemsDetails.css";
import ItemsDetailsRow from "./Id";

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/item_details/getitemDetailsData")
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
        <h3 style={{ color: "red" }}>Items Details:-</h3>
        <table>
          <tr>
            <th>Items Id</th>
            <th>Items Code</th>
            <th>Variety Code</th>
            <th>Items Name</th>
            <th>Variety Name</th>
          </tr>
          <tbody>
            {this.state.items.map((item, index) => (
              <ItemsDetailsRow item={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default One;
