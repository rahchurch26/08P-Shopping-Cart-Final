var itemNames=[];
var itemPrices=[];
var price;
var name;
var total=0;
$(".newItem").click(function(){
    price=$(".itemPrice").val();
    name=$(".itemName").val();
    price = parseInt(price);
    itemNames.push(name);
    itemPrices.push(price);
    var items=itemNames.length;
    $(".number").text(items);
    $(".cart").append("<div class='item'><p>"+name+"</p><p>$"+price+"</p></div>");    
});
$(".purchase").click(function(){
    itemPrices.forEach(function(money){
        total=total + money;
    });
    alert(total + " Thank you for your money!");
});