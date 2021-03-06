const { Drink } = require("../models/drink");

module.exports = app => {
  // /api/drinks?limit=6&skip=0&order=asc

  app.get("/api/drinks", (req, res) => {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Drink.find()
      .skip(skip)
      .sort({ _id: order })
      .limit(limit)
      .exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
      });
  });


  app.get("/api/getDrink", (req, res) => {
    let id = req.query.id;

    Drink.findById(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc);
    });
  });


  app.get("/api/user_posts", (req, res) => {
    Drink.find({ ownerId: req.query.user }).exec((err, docs) => {
      if (err) return res.status(400).send(err);
      res.send(docs);
    });
  });

  app.post("/api/drink", (req, res) => {
    const drink = new Drink(req.body);

    drink.save((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        post: true,
        drinkId: doc._id
      });
    });
  });

  app.get("/api/getReviwer", (req, res) => {
    let id = req.query.id;

    User.findById(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.send({
        firstname: doc.firstname,
        lastname: doc.lastname
      });
    });
  });

  app.post("/api/drink_update", (req, res) => {
    Drink.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true },
      (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
          success: true,
          doc
        });
      }
    );
  });

  app.delete("/api/delete_drink", (req, res) => {
    let id = req.query.id;

    Drink.findByIdAndRemove(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json(true);
    });
  });
};
