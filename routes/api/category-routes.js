const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(categoryresults => {
    if(!categoryresults) {
      res.status(404).json({message: 'Could not find any categories.'});
      return;
    }
    res.json(categoryresults);
  })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Server Error.'})
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(categoryresults => {
      if(!categoryresults) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(categoryresults);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Server Error.'})
    });
});

router.post('/', (req, res) => {
  // create a new category

  Category.create({
    category_name: req.body.category_name
  })
    .then(categoryresults => res.json(categoryresults))
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Could not create category'})
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(categoryresults => {
      if (!categoryresults) {
        res.status(404).json({message:'Could not find category with this id'});
        return;
      }
      res.json(categoryresults);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});  

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryresults => {
      if (!categoryresults){
        res.status(404).json({message: 'Could not find category with this id.'});
        return;
      }
      res.json(categoryresults);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
