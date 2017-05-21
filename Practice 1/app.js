var gem=[{"name":"Dummy 1",
          "description":"This is some text.This is some text.This is some text.This is some text.",
          "price":20.99,
          "canPurchase":true,
          "soldOut":false,
          "shine":4,
          "images":[{
              img:"iphone5s.jpg"
                },
                {
              img:"iphone5s.jpg"
                },
                {
              img:"iphone5s.jpg"
                }
            ],
          reviews: [{
        stars: 5,
        body: "I love this phone very much!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This phone is bad.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
         },
        {"name":"Dummy 2",
         "description":"This is some text.This is some text.This is some text.This is some text.",
         "price":19.99,
         "canPurchase":true,
         "soldOut":false,
         "shine":4,
         "images":[{
              img:"iphone5s.jpg"
                },
                {
              img:"iphone5s.jpg"
                },
                {
              img:"iphone5s.jpg"
                }
            ],
         reviews: [{
        stars: 5,
        body: "I love this phone!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This phone sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
        },
        {"name":"Dummy 3",
         "description":"This is some text.This is some text.This is some text.This is some text.",
         "price":18.99,
         "canPurchase":false,
         "soldOut":false,
         "shine":4,
         "images":[{
              img:"iphone5s.jpg"
                },
                {
              img:"iphone5s.jpg"
                },
                {
              img:"iphone5s.jpg"
                }
            ],
          reviews: [{
        stars: 5,
        body: "I love this phone!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This phone sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
        }
        ];



var a = angular.module("gemStone", []);
a.controller("StoreController",function(){
   this.products = gem;
});

 a.controller("TabController",function(){
    this.tab=1;
    this.setTab=function(tabValue){
      this.tab=tabValue;
    };
    
    this.isSet=function(tabValue){
      return this.tab==tabValue;
    };
  });

a.controller("GalleryController",function(){
    this.current=0;
    this.setCurrent = function(value){
      this.current=value||0;  
    };
});

  a.controller('ReviewController',function(){
    this.review={};
    this.addReview=function(product){
        product.review = {"createdOn":Date.now()};
      product.reviews.push(this.review);
      this.review={};
    };
  });