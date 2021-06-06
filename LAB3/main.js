var cart= [];
var indexcart=0;
function clickOnCheckout() {
  var x = document.getElementById("checkout");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function updateTotalPrice(){
  var totalPrice=0;
  for (let i=0 ;i<cart.length;i++ ){
    console.log(cart[i])
    totalPrice=totalPrice+parseFloat(cart[i].prix)

  }
  prixplace=document.getElementById("prixTotal")
  totalPrice=totalPrice.toFixed(2)
  prixplace.innerHTML=totalPrice+"$"

}
function deleateProd(prod){
console.log(prod);

empla=prod.className;
prod=prod.childNodes;
name=prod[0].textContent;

console.log(prod);

for(let i =0 ;i<cart.length;i++){
  if (cart[i].nom==name){
    cart.splice(i, 1);

    document.querySelectorAll('.'+empla).forEach(function(a){
a.remove()
})


  }

}
updateTotalPrice()

}
function addToCart(prod){

console.log(prod);
cartdiv= document.getElementById("inpanier");

proddiv=document.createElement('div');

proddiv.className="cartitem"+indexcart;
indexcart++;




  var tagnom = document.createElement("p");
  var tagprix = document.createElement("p");
  var tagsuppbtn = document.createElement('button');
  if(prod.childNodes[6].textContent!="Ajouter"){
    var prix = document.createTextNode(prod.childNodes[6].textContent );
    prx=prod.childNodes[6].textContent.replace( "$", '');


  }

else{
  var prix = document.createTextNode(prod.childNodes[5].textContent );
  prx=prod.childNodes[5].textContent.replace( "$", '');


}

  var nom = document.createTextNode(prod.childNodes[0].textContent);
  tagsuppbtn.innerHTML="Supprimer";
  tagsuppbtn.onclick = function(){
    deleateProd(this.parentElement.parentElement);

  };
tagnom.appendChild(nom);
tagprix.appendChild(prix);
tagnom.className="nomcart";
tagprix.className="prixcart";
tagsuppbtn.id="suppbtn";



proddiv.appendChild(tagnom);
tagprix.appendChild(tagsuppbtn)
proddiv.appendChild(tagprix);

cartdiv.appendChild(proddiv);

console.log(prx)

cart.push({nom:prod.childNodes[0].textContent,
  prix:prx,
})
  console.log(cart)
updateTotalPrice()






}
function clickOnCart() {
  var x = document.getElementById("cart");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function getCriteres(){

  let crits = [];
  var brut = document.getElementsByTagName("input");
  for(var i = 0; i < brut.length; i++) {


              crits.push(brut[i].checked);

      }


return crits;
  }

function initProds(){
  var index=0 ;

  maindiv=document.getElementById("products");
  var pas = 9 ;
   var prodspage=[];

  while(pas!=0){
    prodspage.push(document.createElement('div'));
    prodspage[index].className="produit";





    var tagnom = document.createElement("p");
    var tagtype = document.createElement("p");
    var tagprix = document.createElement("p");
    var tagaddbtn = document.createElement('button');
    tagaddbtn.innerHTML = 'click me';
    tagaddbtn.onclick = function(){
      addToCart(this.parentElement)
    };

    var nom = document.createTextNode(productsstock[index].name);
    var type= document.createTextNode(productsstock[index].type);
    var prix = document.createTextNode(productsstock[index].price + "$");
    tagaddbtn.innerHTML="Ajouter";
  tagnom.appendChild(nom);
  tagtype.appendChild(type);
  tagprix.appendChild(prix);
  tagnom.className="nom";
  tagtype.className="type";
  tagprix.className="prix";
  tagaddbtn.id="addbtn";




  prodspage[index].appendChild(tagnom);
  prodspage[index].appendChild(tagtype);

  if(productsstock[index].organic==true){
    var tagorganic = document.createElement("i");
    var organic = document.createTextNode("Organique");
    tagorganic.appendChild(organic);
    var br=document.createElement("br");
    prodspage[index].appendChild(br);

    prodspage[index].appendChild(tagorganic);
  }
  else{
    var tagorganic = document.createElement("i");
    var organic = document.createTextNode("");
    tagorganic.appendChild(organic);
    var br=document.createElement("br");
    prodspage[index].appendChild(br);

    prodspage[index].appendChild(tagorganic);
  }

  if(productsstock[index].light==true){
    var taglight = document.createElement("i");

    var light = document.createTextNode("Light");
    taglight.appendChild(light);
    var br=document.createElement("br");
    prodspage[index].appendChild(br);
    prodspage[index].appendChild(taglight);


  }
  else{
    var taglight = document.createElement("i");

    var light = document.createTextNode("");
    taglight.appendChild(light);
    var br=document.createElement("br");
    prodspage[index].appendChild(br);
    prodspage[index].appendChild(taglight);

  }

  prodspage[index].appendChild(tagprix);
  prodspage[index].appendChild(tagaddbtn);


  console.log(prodspage[index].childNodes[7].onclick);

  console.log(prodspage[index].childNodes);




  maindiv.appendChild(prodspage[index]);
  index++;
  pas--;

  }




}

function initPages(prods){
  pages = prods.length;
  numpages= pages/9;
  if(numpages!=Math.floor(numpages)){
    numpages++;
    numpages=Math.floor(numpages);}
  else{
    numpages=Math.floor(numpages);
  }

   var pages=[];


  divpages= document.getElementById("divpages");
  divpages.innerHTML="";
  for(let i=1;i<=numpages;i++){
    pages.push(document.createElement("a"));
    var page= document.createTextNode(" "+i+" ");
    pages[i-1].appendChild(page);
    pages[i-1].href=("javascript:getPage("+i+",getFiltredList())")
    divpages.appendChild(pages[i-1]);



  }



}

function getPage(i,prods){
  var index=0 ;


  firstprod=9*(i-1);
  lastprod=9*i;
  if(lastprod>prods.length){
    lastprod=prods.length;
  }

    maindiv=document.getElementById("products");
    prodspage=[];
    console.log(maindiv);
    maindiv.innerHTML = "";
    for(let j=firstprod;j<lastprod;j++){


        prodspage.push(document.createElement('div'));
        prodspage[index].className="produit";





        var tagnom = document.createElement("p");
        var tagtype = document.createElement("p");
        var tagprix = document.createElement("p");
        var tagaddbtn= document.createElement("button")

        var nom = document.createTextNode(prods[j].name);
        var type= document.createTextNode(prods[j].type);
        var prix = document.createTextNode(prods[j].price + "$");
        var add= document.createTextNode("Ajouter")
      tagnom.appendChild(nom);
      tagtype.appendChild(type);
      tagprix.appendChild(prix);
      tagaddbtn.appendChild(add);
      tagnom.className="nom";
      tagtype.className="type";
      tagprix.className="prix";
      tagaddbtn.id="addbtn";



      prodspage[index].appendChild(tagnom);
      prodspage[index].appendChild(tagtype);

      if(productsstock[index].organic==true){
        var tagorganic = document.createElement("i");
        var organic = document.createTextNode("Organique");
        tagorganic.appendChild(organic);

        prodspage[index].appendChild(tagorganic);
      }
      else{
        var tagorganic = document.createElement("i");
        var organic = document.createTextNode("");
        tagorganic.appendChild(organic);

        prodspage[index].appendChild(tagorganic);
      }

      if(productsstock[index].light==true){
        var taglight = document.createElement("i");

        var light = document.createTextNode("Light");
        taglight.appendChild(light);
        var br=document.createElement("br");
        prodspage[index].appendChild(br);
        prodspage[index].appendChild(taglight);


      }
      else{
        var taglight = document.createElement("i");

        var light = document.createTextNode("");
        taglight.appendChild(light);
        var br=document.createElement("br");
        prodspage[index].appendChild(br);
        prodspage[index].appendChild(taglight);

      }

      prodspage[index].appendChild(tagprix);
      tagaddbtn.onclick = function(){
        console.log("aaaaaaaaaaaaaaaaaaaa");
        console.log(this.parentElement)
        addToCart(this.parentElement)
      };
      prodspage[index].appendChild(tagaddbtn);



      maindiv.appendChild(prodspage[index]);
      index++;




    }


}

function getFiltredList(){
   var criteres = getCriteres();

    return restrictListProducts(productsstock, criteres);
}


function refreshprods(){
filtredstuff= getFiltredList();
console.log(filtredstuff)
console.log("fffffffff")
initPages(filtredstuff);
getPage(1,filtredstuff);

}
getFiltredList();
initProds() ;
initPages(productsstock);
