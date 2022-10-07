const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'baseball',
    },
    {
        category_name: 'football',
    },
    {
        category_name: 'soccer',
    },
    {
        category_name: 'basketball',
    },
    {
        category_name: 'icehockey',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;