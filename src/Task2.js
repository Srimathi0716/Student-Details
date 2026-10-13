import React, { useState } from "react";

function Task2() {
  const [form, setForm] = useState({ name: "", price: "" });
  const [products, setProducts] = useState([]);
  const [dark, setDark] = useState(false);
  const [rules, setRules] = useState(false);
  const [removeId, setRemoveId] = useState(null);

  const addProduct = (e) => {
    e.preventDefault();
    if (form.name == "" || form.price == "") return;

    setProducts([...products, {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      qty: 1
    }]);

    setForm({ name: "", price: "" });
  };

  const changeQty = (id, value) => {
    setProducts(products.map(p =>
      p.id == id ? { ...p, qty: Math.max(1, p.qty + value) } : p
    ));
  };

  const removeProduct = () => {
    setProducts(products.filter(p => p.id != removeId));
    setRemoveId(null);
  };

  return (
    <div style={{
      padding: 20, minHeight: "100vh",
      background: dark ? "#222" : "#eee",
      color: dark ? "white" : "black"
    }}>
      <h2>Shopping Cart</h2>

      <form onSubmit={addProduct}>
        <input
          placeholder="Product Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <button>Add</button>
      </form>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <button onClick={() => setRules(!rules)}>
        Shopping Rules
      </button>

      {rules && <p>Check price before buying. No return after purchase.</p>}

      <h3>All Products</h3>

      {products.map(p => (
        <div style={{ margin: 10 }} key={p.id}>
          {p.name} - ₹{p.price} × {p.qty}
          <button onClick={() => changeQty(p.id, 1)}>+</button>
          <button onClick={() => changeQty(p.id, -1)}>−</button>
          <button onClick={() => setRemoveId(p.id)}>Remove</button>
        </div>
      ))}

      <h3>Products Below ₹1000</h3>

      {products.filter(p => p.price < 1000).map(p => (
        <p key={p.id}>🛒 {p.name} - ₹{p.price}</p>
      ))}

      {removeId && (
        <div style={{
          position: "fixed", top: "40%", left: "35%",
          background: "white", color: "black",
          padding: 20, border: "2px solid black"
        }}>
          <p>Remove this product?</p>
          <button onClick={removeProduct}>Yes</button>
          <button onClick={() => setRemoveId(null)}>No</button>
        </div>
      )}
    </div>
  );
}

export default Task2;