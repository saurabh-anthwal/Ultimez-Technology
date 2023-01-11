import React, { useEffect, useState } from "react";
import "./Table.css";
import { tabelHeading } from "../data";

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function abc() {
      const URL = await fetch(
        "https://lobster-app-ddwng.ondigitalocean.app/product/list",
        {
          // method: "POST",
          // body: {},
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
        }
      );
      const json = await URL.json();
      console.log(json);
      setData(json.message);
    }
    abc();
  }, []);
  return (
    <div className="main">
      <div className="flex between center">
        <h1>All Products</h1>
        <input placeholder="p lku" className="serch" />
      </div>
      <table className="table">
        <tr
          style={{ border: "5px solid black" }}
          className="table-border table-heading"
        >
          {tabelHeading.map((heading) => (
            <td className="heading">{heading.name}</td>
          ))}
        </tr>

        {data.map((el) => (
          <tr className="table-data">
            <td>{el._id}</td>
            <td>{el.product_name}</td>

            <td>{el.original_pric}</td>
            <td>{el.sale_price}</td>
            <td>{el.product_type}</td>
            <td>{el.description}</td>
            <td>{el.date_n_time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
