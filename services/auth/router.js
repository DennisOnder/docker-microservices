const router = require("express").Router();
const bcrypt = require("bcryptjs");
const config = require("./config");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateInput = require("./middleware/validateInput");
const User = require("./models/User");
const isEmpty = require("./functions/isEmpty");

router.get("/", (req, res) => res.send("Auth service!"));

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(403).json({ error: "User already exists." });
      return;
    }
    if (isEmpty(req.body.email) || isEmpty(req.body.password)) {
      res.status(400).json({ error: "Please provide valid credentials." });
      return;
    }
    const newUser = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, config.SECRET_OR_KEY)
    });
    await newUser.save().then(user => res.status(200).json(user));
  } catch (error) {
    console.error(error);
  }
});

router.post("/login", validateInput, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ error: "User does not exist." });
      return;
    }
    if (isEmpty(req.body.email) || isEmpty(req.body.password)) {
      res.status(400).json({ error: "Please provide valid credentials." });
      return;
    }
    const passwordMatch = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      res.status(400).json({ error: "Incorrect password." });
      return;
    }
    jwt.sign(
      { id: user.id },
      config.SECRET_OR_KEY,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) {
          res.status(500).json({ error: "An error has occured." });
          return;
        }
        res.status(200).json({ loggedIn: true, token: `Bearer ${token}` });
      }
    );
  } catch (error) {
    console.error(error);
  }
});

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        res.status(404).json({ error: "User does not exist." });
        return;
      }
      user
        .remove()
        .then(() =>
          res.status(200).json({ deleted: true, timestamp: Date.now() })
        );
    } catch (error) {
      console.error(error);
    }
  }
);

module.exports = router;
