
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli (organic)",
		vegetarian: true,
		glutenFree: true,
		LactoseFree: true,
		organic:true,
		price: 1.99}
		,

		{
			name: "bannane",
			vegetarian: true,
			glutenFree: true,
			LactoseFree: true,
			organic:false,
			price: 0.99}
			,
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		LactoseFree:true,
		price: 2.35},
	{
		name: "salmon (organic)",
		vegetarian: false,
		LactoseFree:true,
		glutenFree: true,
		organic:true,
		price: 10.00,},
	{name: "granola aux amandes",
	vegetarian: true,
	LactoseFree:true,
	glutenFree: false,
	organic:false,
	noixfree:false,
	price: 8.00,},

	{name: "yaourt",
	vegetarian: true,
	LactoseFree:false,
	organic:false,
	glutenFree: true,
	noixfree:true ,
	price: 4.00,

},

	{name : "biscuit sans Gluten",
	vegetarian: true,
	LactoseFree:true,
	organic:false,
	glutenFree: true,
	noixfree:true ,
	price: 3.00

},
{name : "Huiles de noix (organic)",
vegetarian: true,
LactoseFree:true,
glutenFree: true,
organic:true,

noixfree:false ,
price: 5.00,

},
{name : "Beurre (organic)",
vegetarian: true,
organic:true,
LactoseFree:false,
glutenFree: true,

noixfree:true ,
price: 5.00,

},
{name : "patisserie noisette",

organic:false,
vegetarian: true,
LactoseFree:true,
glutenFree: true,
noixfree:false ,
price: 2.00

},

{name : "Fromage ",
vegetarian: true,
LactoseFree:false,
glutenFree: true,
noixfree:false ,
organic:false,

price: 3.50

},






];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction,ischeked) {
	let product_names = [];
	for (let i=0; i<products.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			if(ischeked==true){
				if(prods[i].organic==true){
			product_names.push(prods[i]);}
		}
		else{	product_names.push(prods[i]);

		}
	}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			if(ischeked==true){
				if(prods[i].organic==true){
			product_names.push(prods[i]);}
		}
		else{	product_names.push(prods[i]);

		}		}
		else if (restriction == "None"){
			if(ischeked==true){
				if(prods[i].organic==true){
			product_names.push(prods[i]);}
		}
		else{	product_names.push(prods[i]);

		}		}
		else if ((restriction == "noixfree") && (prods[i].noixfree == true)){
			if(ischeked==true){
				if(prods[i].organic==true){
			product_names.push(prods[i]);}
		}
		else{	product_names.push(prods[i]);

		}		}
		else if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			if(ischeked==true){
				if(prods[i].organic==true){
			product_names.push(prods[i]);}
		}
		else{	product_names.push(prods[i]);

		}		}
	}
	 product_names = product_names.sort((x, y) => x.price - y.price);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
