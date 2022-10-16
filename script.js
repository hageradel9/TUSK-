var  productBtn =document.getElementById(" productBtn")
var productContainer =document.getElementById("productContainer");

data=[
    {id:1 ,name: "iphone x",desc:"this product is......."},
    {id:2 ,name: "iphone11",desc:"this product is......."},
    {id:3 ,name: "iphone12",desc:"this product is......."}, 
    {id:3 ,name: "iphone13",desc:"this product is......."}
]
    function draw(items){
        productContainer.innerHTML= "";
        items.forEach (function(ele){
        productContainer.innerHTML += `<div onclick= deleteItme(${ele.id})>  ${ele.name} </div>` ;
    })
}

    window.onload=function(){
        draw(data);
    }

    productBtn.addEventListener ("click" ,addItem);
    function addItem(){
        var productInput = document.getElementById("productInput");
        if (productInput.value== "") alert("you should enter a product");
        var lastId =data[data.length-1].id;
        data.push({id: ++lastId , name: productInput.value  ,desc:"this product is ...."})
        var addedItem=data[data.length-1]
        productContainer.innerHTML += `<div onclick=deleteItme(${addedItem.id})>  ${addedItem.name} </div>`;
        productInput.value="";

    }
    function deleteItme(id){
        var index = data.map(function(i){
            return i.id
        }).indexOf(id)

        if(index !== -1){
            data.splice(index, 1)
            draw(data)
        }
        console.log(data)}
