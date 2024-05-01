const express = require("express");
const router = express.Router();

const Cars = require("../../models/Car");

//@route   GET api/cars
//@desc    Test cars route
//@access  Public
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const limit = parseInt(req.query.limit) || 12; // Default to limit of 12 items per page

  try {
    let cars;
    if (req.query.make) {
      const makes = req.query.make.split(",");
      console.log(makes);
      cars = await Cars.find(
        { make: { $in: makes } },
        {
          make: 1,
          model: 1,
          trany: 1,
          fueltype1: 1,
          city08: 1,
          highway08: 1,
          id: 1,
          fuelcost08: 1,
        }
      )
        .skip((page - 1) * limit)
        .limit(limit);
    } else {
      cars = await Cars.find(
        {},
        {
          make: 1,
          model: 1,
          trany: 1,
          fueltype1: 1,
          city08: 1,
          highway08: 1,
          id: 1,
          fuelcost08: 1,
        }
      )
        .skip((page - 1) * limit)
        .limit(limit);
    }

    res.status(200).json(cars);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

router.get("/allFilters", async (req, res) => {
  try {
    const allCount = await Cars.aggregate([
      {
        $group: {
          _id: "$make",
          count: { $sum: 1 },
        },
      },
      {
        $project: { _id: 0, make: "$_id", count: 1 },
      },
    ]);
    res.status(200).json(allCount);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  const query = req.query.make;
  try {
    const cars = await Cars.find(
      { make: query },
      {
        make: 1,
        model: 1,
        trany: 1,
        fueltype1: 1,
        city08: 1,
        highway08: 1,
        id: 1,
        fuelcost08: 1,
      }
    )
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(cars);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

router.get("/search", async (req, res) => {
  const query = req.query.make;
  const searchlimit = 5; // Default to limit of 5 items per page

  try {
    const cars = await Cars.find(
      { make: { $regex: query, $options: "i" } },
      {
        make: 1,
        model: 1,
      }
    ).limit(searchlimit);
    res.status(200).json(cars);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});
module.exports = router;
