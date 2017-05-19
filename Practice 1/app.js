var gem=[{"name":"Dummy 1","description":"This is some text.This is some text.This is some text.This is some text.","price":20.99,"canPurchase":true,"soldOut":false},
        {"name":"Dummy 2","description":"This is some text.This is some text.This is some text.This is some text.","price":19.99,"canPurchase":true,"soldOut":false},
        {"name":"Dummy 3","description":"This is some text.This is some text.This is some text.This is some text.","price":18.99,"canPurchase":false,"soldOut":false}];



var a = angular.module("gemStone", []);
a.controller("StoreController",function(){
   this.products = gem;
});