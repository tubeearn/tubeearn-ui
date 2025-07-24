const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/send-gift", (req, res) => {
  const { fromUserId, toUserId, giftId } = req.body;
  // TODO: Implement gift transaction logic here
  res.json({ success: true, message: "Gift sent successfully!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
