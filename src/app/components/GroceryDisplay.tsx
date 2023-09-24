"use client";

import handleCheckedFunc from "../actions/handleCheck";
import IncEssentialItem from "../actions/IncrementEssentialItem";
import { GroceryItem, EssentialItem } from "@/app/types/types";

export function GroceryDisplay(props: {
  essentials: EssentialItem[];
  groceries: GroceryItem[];
  session;
}) {
  async function setChecked(item: GroceryItem) {
    const newCheckedValue = !item.bought;
    console.log(item.bought);
    console.log(item);
    try {
      await handleCheckedFunc({ ...item, bought: newCheckedValue });
    } catch (error) {
      console.log(error);
    }
  }

  async function IncItem(item: EssentialItem) {
    const newQuant = item.quantity + 1;
    try {
      await IncEssentialItem(item, newQuant);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col px-6 mx-auto  p-4 max-w-md ">
      <div className="overflow-x-auto">
        <p>Essential Items</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {props.essentials.map((essent, idx) => (
              <tr key={idx}>
                <td>{essent.name}</td>
                <td>{essent.quantity}</td>
                <td>
                  <button
                    onClick={() => IncItem(essent)}
                    className="btn btn-success"
                  >
                    increase amount
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-8">
        <p>Groceries</p>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Bought</th>
              <th>Purchased by</th>
            </tr>
          </thead>
          <tbody>
            {props.groceries.map((grocery, index) => (
              <tr key={index}>
                <td>{grocery.name}</td>
                <td>{grocery.amount}</td>

                <td>
                  <input
                    type="checkbox"
                    checked={grocery.bought}
                    onChange={() => setChecked(grocery)}
                  />
                </td>
                {grocery.bought ? (
                  <td>
                    Purchased by:{" "}
                    <span className="font-bold">
                      {props.session?.user.name}
                    </span>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
