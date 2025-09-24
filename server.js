const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ROUTE_EMAIL = process.env.ROUTE_EMAIL || "mohiiish_com_gmail_com";

function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  return b === 0n ? a : gcd(b, a % b);
}

function lcm(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  return (a * b) / gcd(a, b);
}

app.get("/:email", (req, res) => {
  const email = req.params.email;

  if (email !== ROUTE_EMAIL) {
    return res.status(404).send("Not Found");
  }

  const { x, y } = req.query;

  
  if (x === undefined || y === undefined) {
    return res.send("NaN");
  }

  let a, b;
  try {
    a = BigInt(x);
    b = BigInt(y);
  } catch {
    return res.send("NaN");
  }

  if (a === 0n && b === 0n) return res.send("NaN");

  if ((a === 0n && b > 0n) || (b === 0n && a > 0n)) return res.send("0");


  if (a < 0n || b < 0n) return res.send("NaN");

  return res.send(lcm(a, b).toString());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});