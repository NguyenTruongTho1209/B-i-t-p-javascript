/**
 * Bai 5
hãy sắp xếp các sản phẩm trong data sau theo createDate tăng dần và tính tổng giá trị của 2 sản phẩm đầu tiên trong array sau khi sắp xếp

const productList = [
            {
              _id: '629038822b7e291ffc3f6038',
              idProductCode: '628dd9ddfc45279c29739e49',
              price: 28290000,
              priceRange: 'trên 20tr',
              storage: 10,
              productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png','https://image.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg','https://image.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-mi-11t-1_1.jpg'],
              color: 'Xanh Dương',
              ram: '8 G'B,
              rom: '',
              createDate: '2022-05-27T02:33:38.750Z',
              suggest: 'fales',
              __v: 0
            },
            {
              _id: '629038922b7e291ffc3f603a',
              idProductCode: '628dd9ddfc45279c29739e49',
              price: 28290000,
              priceRange: 'trên 20tr',
              storage: 10,
              productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
              color: 'Vàng đồng',
              ram: '6 GB',
              rom: '8 G',
              createDate: '2022-05-27T02:33:54.947Z',
              suggest: 'fales',
              __v: 0
            },
            {
              _id: '629038a02b7e291ffc3f603c',
              idProductCode: '628dd9ddfc45279c29739e49',
              price: 28290000,
              priceRange: 'trên 20tr',
              storage: 10,
              productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
              color: 'Xám',
              ram: '6 GB',
              rom: '8 G',
              createDate: '2022-05-27T02:34:08.546Z',
              suggest: 'fales',
              __v: 0
            },
            {
              _id: '629038bd2b7e291ffc3f603e',
              idProductCode: '628dd9ddfc45279c29739e49',
              price: 28290000,
              priceRange: 'trên 20tr',
              storage: 10,
              productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
              color: 'Bạc',
              ram: '6 GB',
              rom: '8 G',
              createDate:' 2022-05-27T02:34:37.963Z',
              suggest: 'fales',
              __v: 0
            },
            {
              _id: '629038cc2b7e291ffc3f6040',
              idProductCode: '628dd9ddfc45279c29739e49',
              price: 28290000,
              priceRange: 'trên 20tr',
              storage: 10,
              productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
              color: 'Xanh lá',
              ram: '6 GB',
              rom: '8 G',
              createDate: '2022-05-27T02:34:52.022Z',
              suggest: 'fales',
              __v: 0
            }
        ]
        
    }
]
 */

const productList = [
    {
      _id: '629038822b7e291ffc3f6038',
      idProductCode: '628dd9ddfc45279c29739e49',
      price: 28290000,
      priceRange: 'trên 20tr',
      storage: 10,
      productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png','https://image.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg','https://image.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-mi-11t-1_1.jpg'],
      color: 'Xanh Dương',
      ram: '8 GB',
      rom: '128 GB',
      createDate: '2022-05-27T02:33:38.750Z',
      suggest: 'fales',
      __v: 0
    },
    {
      _id: '629038922b7e291ffc3f603a',
      idProductCode: '628dd9ddfc45279c29739e49',
      price: 28290000,
      priceRange: 'trên 20tr',
      storage: 10,
      productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
      color: 'Vàng đồng',
      ram: '6 GB',
      rom: '8 G',
      createDate: '2022-05-27T02:33:54.947Z',
      suggest: 'fales',
      __v: 0
    },
    {
      _id: '629038a02b7e291ffc3f603c',
      idProductCode: '628dd9ddfc45279c29739e49',
      price: 28290000,
      priceRange: 'trên 20tr',
      storage: 10,
      productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
      color: 'Xám',
      ram: '6 GB',
      rom: '8 G',
      createDate: '2022-05-27T02:34:08.546Z',
      suggest: 'fales',
      __v: 0
    },
    {
      _id: '629038bd2b7e291ffc3f603e',
      idProductCode: '628dd9ddfc45279c29739e49',
      price: 28290000,
      priceRange: 'trên 20tr',
      storage: 10,
      productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
      color: 'Bạc',
      ram: '6 GB',
      rom: '8 G',
      createDate:'2022-05-27T02:34:37.963Z',
      suggest: 'fales',
      __v: 0
    },
    {
      _id: '629038cc2b7e291ffc3f6040',
      idProductCode: '628dd9ddfc45279c29739e49',
      price: 28290000,
      priceRange: 'trên 20tr',
      storage: 10,
      productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
      color: 'Xanh lá',
      ram: '6 GB',
      rom: '8 G',
      createDate: '2022-05-27T02:34:52.022Z',
      suggest: 'fales',
      __v: 0
    }
]

var sapXep = productList.sort(function(a , b){
    if(a.createDate < b.createDate){
        return -1
    }
})
console.log(sapXep);

var tong = 0 ;
tong = productList[0].price + productList[1].price

console.log(tong);