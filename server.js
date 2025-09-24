import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Helper: compute GCD
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Helper: compute LCM
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

app.get("/mohiiish_com_gmail_com", (req, res) => {
  const { x, y } = req.query;

  // validate natural numbers (positive integers)
  const n1 = Number(x);
  const n2 = Number(y);
  if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 <= 0 || n2 <= 0) {
    return res.type("text/plain").send("NaN");
  }

  res.type("text/plain").send(String(lcm(n1, n2)));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
