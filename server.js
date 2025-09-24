import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/mohiiish_com_gmail_com", (req, res) => {
  const { x, y } = req.query;

  // Try to convert to BigInt
  let a, b;
  try {
    a = BigInt(x);
    b = BigInt(y);
  } catch {
    return res.type("text/plain").send("NaN");
  }

  // Validate natural numbers (positive integers)
  if (a <= 0n || b <= 0n) {
    return res.type("text/plain").send("NaN");
  }

  // GCD using BigInt
  function gcd(m, n) {
    return n === 0n ? m : gcd(n, m % n);
  }

  const lcm = (a * b) / gcd(a, b);
  res.type("text/plain").send(lcm.toString());
});

app.listen(port, () => console.log(`Listening on port ${port}`));
