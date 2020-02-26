'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Products', [{
    name: 'Motorolla Razr',
    image_url: 'https://embedsocial.com/admin/story-media/feed-media/17908/17908034296408556/image_0_large.jpeg',
    price: 21000000,
    stock: 100,
    CategoryId: 1
  },{
    name: 'Samsung Galaxy Z Flip',
    image_url: 'https://embedsocial.com/admin/story-media/feed-media/17908/17908034296408556/image_0_large.jpeg',
    price: 300000000,
    stock: 1000,
    CategoryId: 1
  },{
    name: 'Tesla model X',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOSDJygafCAd-l7lTTvYS3QTf2B1inytMPefhwASq9Dcd-jxkz',
    price: 100000000,
    stock: 10,
    CategoryId: 2
  },{
    name: 'Oneplus 7 Pro',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOSDJygafCAd-l7lTTvYS3QTf2B1inytMPefhwASq9Dcd-jxkz',
    price: 8000000,
    stock: 200,
    CategoryId: 1
  },
{
  name: 'LG SIGNATURE W9 Wallpaper 77 inch',
  image_url: 'https://www.lg.com/us/images/tvs/md06065036/gallery/OLED77W9PUA_1600_v3.jpg',
  price: 140000000,
  stock: 5,
  CategoryId: 3
},{
  name: 'RED RAVEN DIGITAL CINEMA Camera Kit 4.5K Dragon Sensor',
  image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCMiD_40-zCOR63cxLkKt2Lpi6Twc-4P9wc9VTRGPDGr-lfkFc',
  price: 189000000,
  stock: 25,
  CategoryId: 4
},
{
  name: 'Lenovo Thinkpad X1 Fold',
  image_url: 'https://cms.dailysocial.id/wp-content/uploads/2020/01/c8e7df043bcac8fbcdba6595bc5ff5c1_lenovo-thinkpad-x1-fold-03.jpg',
  price: 34000000,
  stock: 10,
  CategoryId: 5
},
{
  name: 'BellaBot',
  image_url: 'https://static.wixstatic.com/media/7243ac_5d748b77ab2743e5828cb87fa16c9100~mv2.png/v1/fill/w_1060,h_1079,al_c/7243ac_5d748b77ab2743e5828cb87fa16c9100~mv2.png',
  price: 18200000,
  stock: 3,
  CategoryId: 6
}], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Products', null, {})
  }
};
