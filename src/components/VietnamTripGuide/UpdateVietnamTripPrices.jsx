import React, { useEffect, useState } from "react";
// import "../styles/Page4.css";
import "../../styles/UpdateJapanTripPrices.css";

function UpdateVietnamTripPrices() {
  const [data, setData] = useState(null);
  const [originalShape, setOriginalShape] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    loadCurrent();
  }, []);

  async function loadCurrent() {
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch("https://japantripguidebackend.onrender.com/get-vietnam-expenses");
      const j = await res.json();
      let doc = null;
      if (j && j.data && Array.isArray(j.data) && j.data.length) {
        doc = { ...j.data[0] };
      } else if (j && j.data && typeof j.data === "object") {
        doc = { ...j.data };
      }

      if (!doc) doc = {};
      if (doc._id) delete doc._id;
      setData(doc);
      setOriginalShape(computeShape(doc));
    } catch (e) {
      console.error(e);
      setMsg({
        type: "error",
        text: "Failed to load current prices: " + e.message,
      });
    } finally {
      setLoading(false);
    }
  }

  function computeShape(v) {
    if (v === null) return { type: "primitive" };
    if (Array.isArray(v)) {
      return {
        type: "array",
        length: v.length,
        items: v.map((it) => computeShape(it)),
      };
    }
    if (typeof v === "object") {
      const keys = Object.keys(v).sort();
      const obj = {};
      for (const k of keys) obj[k] = computeShape(v[k]);
      return { type: "object", keys: obj };
    }
    return { type: "primitive" };
  }

  function compareShapes(a, b) {
    if (!a || !b) return false;
    if (a.type !== b.type) return false;
    if (a.type === "primitive") return true;
    if (a.type === "array") {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.items.length; i++) {
        if (!compareShapes(a.items[i], b.items[i])) return false;
      }
      return true;
    }
    if (a.type === "object") {
      const aKeys = Object.keys(a.keys).sort();
      const bKeys = Object.keys(b.keys).sort();
      if (aKeys.length !== bKeys.length) return false;
      for (let i = 0; i < aKeys.length; i++) {
        if (aKeys[i] !== bKeys[i]) return false;
        if (!compareShapes(a.keys[aKeys[i]], b.keys[bKeys[i]])) return false;
      }
      return true;
    }
    return false;
  }

  function getAtPath(obj, path) {
    let cur = obj;
    for (const p of path) {
      if (cur == null) return undefined;
      cur = cur[p];
    }
    return cur;
  }

  function setAtPath(obj, path, value) {
    if (!path.length) return value;
    const [head, ...rest] = path;
    const copy = Array.isArray(obj) ? obj.slice() : { ...(obj || {}) };
    if (rest.length === 0) {
      copy[head] = value;
    } else {
      copy[head] = setAtPath(copy[head], rest, value);
    }
    return copy;
  }

  function updateValue(path, rawValue) {
    setData((d) => {
      const current = getAtPath(d, path);
      let newVal = rawValue;
      if (typeof current === "number") {
        const num = Number(rawValue);
        newVal = Number.isNaN(num) ? 0 : num;
      } else if (typeof current === "boolean") {
        newVal = Boolean(rawValue);
      } else if (current === null) {
        newVal = rawValue;
      } else {
        newVal = rawValue;
      }
      return setAtPath(d, path, newVal);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);
    if (!data || typeof data !== "object") {
      setMsg({ type: "error", text: "Nothing to save." });
      return;
    }

    const newShape = computeShape(data);
    if (!originalShape || !compareShapes(originalShape, newShape)) {
      setMsg({
        type: "error",
        text: "Structure has changed. Only leaf values can be modified.",
      });
      return;
    }

    const payload = { ...data };
    if (Object.prototype.hasOwnProperty.call(payload, "_id"))
      delete payload._id;

    setLoading(true);
    try {
      const res = await fetch("https://japantripguidebackend.onrender.com/update-vietnam-prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      if (res.ok && j.success) {
        setMsg({ type: "success", text: "Prices updated successfully." });
      } else {
        setMsg({ type: "error", text: j.error || "Update failed" });
      }
    } catch (err) {
      console.error(err);
      setMsg({ type: "error", text: "Network error: " + err.message });
    } finally {
      setLoading(false);
    }
  }

  function renderNode(node, path = []) {
    if (
      node === null ||
      typeof node !== "object" ||
      (Array.isArray(node) === false &&
        Object.keys(node).length === 0 &&
        typeof node !== "object")
    ) {
      const val = getAtPath(data, path);
      const curType = typeof val;
      if (curType === "boolean") {
        return (
          <input
            className="ujtp-checkbox"
            type="checkbox"
            checked={Boolean(val)}
            onChange={(e) => updateValue(path, e.target.checked)}
          />
        );
      }
      if (curType === "number") {
        return (
          <input
            className="ujtp-input"
            type="number"
            value={val}
            onChange={(e) => updateValue(path, e.target.value)}
          />
        );
      }
      return (
        <input
          className="ujtp-input"
          type="text"
          value={val === null ? "" : String(val)}
          onChange={(e) => updateValue(path, e.target.value)}
        />
      );
    }

    if (Array.isArray(node)) {
      return (
        <div className="ujtp-child ujtp-array">
          {node.map((item, idx) => (
            <div key={idx} className="ujtp-array-item">
              <label className="ujtp-sublabel">[{idx}]</label>
              {renderNode(item, [...path, idx])}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="ujtp-child">
        {Object.keys(node).map((k) => (
          <div key={k} className="ujtp-node">
            <label className="ujtp-label">{k}</label>
            {renderNode(node[k], [...path, k])}
          </div>
        ))}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="page-4 page ujtp-container">
        <h2 className="head1">Update Vietnam Trip Prices</h2>
        <div className="loading-animation"></div>
        {msg && (
          <div
            className={`ujtp-msg ${msg.type === "error" ? "error" : "success"}`}
          >
            {msg.text}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="page-4 page ujtp-container">
      <h2 className="head1">Update Vietnam Trip Prices</h2>
      <form onSubmit={handleSubmit} className="ujtp-form">
        <div className="ujtp-controls">
          <button type="button" onClick={loadCurrent} disabled={loading} className="ujtp-button">Reload Current</button>
          <button type="submit" disabled={loading} className="ujtp-button ujtp-button--primary">{loading ? "Saving…" : "Save Changes"}</button>
        </div>

        <div className="ujtp-tree">{renderNode(data, [])}</div>
      </form>
      {msg && (
        <div className={`ujtp-msg ${msg.type === "error" ? "error" : "success"}`}>
          {msg.text}
        </div>
      )}
    </div>
  );
}

export default UpdateVietnamTripPrices;
