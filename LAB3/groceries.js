
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var productsstock = [
	{
		name: "Brocoli",
		noixfree:true,
		type: "Légume",
		vegetarian: true,
		glutenFree: true,
		LactoseFree: true,
		light:true,
		organic:true,
		price: 1.99}

		,

		{name : " Raclette",
		vegetarian: true,
		LactoseFree:false,
		glutenFree: true,
		noixfree:false ,
		light:false,
		type: "Fromage",
		bigtype:"Produit laitier",

		organic:false,

		price: 4.29

		},


		{
			name: "Bannane",
			type:"Fruit",
			vegetarian: true,
			glutenFree: true,
			noixfree:true,
			light:true,
			LactoseFree: true,
			organic:false,
			price: 0.99}
			,

			{
				name: "Oeufs de compagne",
				type:"Oeufs",
				vegetarian: true,
				light:false,
				glutenFree: true,
				noixfree:true,

				LactoseFree: true,
				organic:true,
				price: 6.99},
				{name: "Yaourt aux noix",
				vegetarian: true,
				type:"Yaourt",
				bigtype: "Produit laitier",
				LactoseFree:false,
				organic:false,
				light:false,
				glutenFree: true,
				noixfree:false ,
				price: 3.40,

			}
				,	{
						name: "Lait de noix",
						type:"Lait",
						bigtype:"Produit Laitier",
						noixfree:false,
						vegetarian: true,
						light:false,
						glutenFree: true,
						LactoseFree: true,
						organic:false,
						price: 5.99}
						,	{
								name: "Boeuf de Cobe",
								type:"Boeuf",
								vegetarian: false,
								glutenFree: true,
								noixfree:true,
								light:false,

								LactoseFree: true,
								organic:false,
								price: 16.99}
								,	{
										name: "Oeufs moyennes",
										type:"Oeufs",
										vegetarian: true,
										glutenFree: true,
										LactoseFree: true,
										light:false,

										organic:false,
										noixfree:true,

										price: 2.99}
										,	{
												name: "Pomme de compagne",
												type:"Fruit",
												vegetarian: true,
												light:true,

												glutenFree: true,
												noixfree:true,

												LactoseFree: true,
												organic:true,
												price: 1.99}
												,	{
														name: "Huile de coco",
														type:"Huile",
														vegetarian: true,
														glutenFree: true,
														LactoseFree: true,
														noixfree:true,
														light:false,

														organic:false,
														price: 3.99}
														,	{
																name: "Poitrine de poulet fermier",
																type:"Poulet",
																bigtype:"Viande",
																vegetarian: false,
																glutenFree: true,
																LactoseFree: true,
																noixfree:true,
																light:false,


																organic:true,
																price: 14.99}
																,	{
																		name: "Pomme Verte",
																		type:"Fruit",
																		vegetarian: true,
																		glutenFree: true,
																		noixfree:true,

																		LactoseFree: true,
																		organic:false,
																		price: 1.19}
																		,

	{
		name: "Pain de compagne",
		type:"Pain",
		vegetarian: true,
		glutenFree: false,
		noixfree:true,
		light:false,

		organic:true,
		LactoseFree:true,
		price: 2.35},
		{name: "Yaourt nature sans sucre",
		vegetarian: true,
		type:"Yaourt",
		bigtype: "Produit laitier",
		LactoseFree:false,
		organic:false,
		light:true,
		glutenFree: true,
		noixfree:true ,
		price: 3.40,

	},
	{
		name: "Saumon",
		type:"Poisson",
		vegetarian: false,
		LactoseFree:true,
		noixfree:true,
		light:false,

		glutenFree: true,
		organic:true,
		price: 10.00,},
	{name: "Granola aux amandes",
	type:"Céréales",

	vegetarian: true,
	LactoseFree:true,
	glutenFree: false,
	organic:false,
	light:false,

	noixfree:false,
	price: 8.00,},

	{name : "Camembert ",
	vegetarian: true,
	LactoseFree:false,
	glutenFree: true,
	light:false,

	noixfree:true ,
	type: "Fromage",
	bigtype:"Produit laitier",

	organic:false,

	price: 4.50

	},
	{
		name: "Baguette parisienne",
		type:"Pain",
		vegetarian: true,
		glutenFree: false,
		light:false,

		organic:false,
		noixfree:true,
		LactoseFree:true,
		price: 1.35},

	{name: "Yaourt",
	vegetarian: true,
	type: "Produit laitier",
	LactoseFree:false,
	organic:false,
	glutenFree: true,
	light:false,

	noixfree:true ,
	price: 4.00,

},

	{name : "Biscuits sans Gluten",
	type:"Biscuit",
	vegetarian: true,
	LactoseFree:true,
	organic:false,
	light:false,

	glutenFree: true,
	noixfree:true ,
	price: 3.00

},
{name : "Cheddar ",
vegetarian: true,
LactoseFree:false,
light:false,

glutenFree: true,
noixfree:false ,
type: "Fromage",
bigtype:"Produit laitier",

organic:false,

price: 3.50

},
{
	name: "Toasts Diet",
	type:"Pain",
	light:true,
	vegetarian: true,
	noixfree:true,

	glutenFree: false,
	organic:true,

	LactoseFree:true,
	price: 2.35},
{name : "Huile de noix",
type:"Huile",

organic:true,
vegetarian: true,
LactoseFree:true,
glutenFree: true,
light:false,
noixfree:false ,
price: 5.00,

},
{name : "Beurre",
vegetarian: true,
organic:true,
LactoseFree:false,
type: "produit laitier",
glutenFree: true,
light:false,

noixfree:true ,
price: 4.50,

},
{name : "Patisserie noisette",
type:"Patisserie ",
organic:false,
light:false,

organic:true,
vegetarian: true,
LactoseFree:true,
glutenFree: true,
noixfree:false ,
price: 1.00

},
{name : "Fromage 0%  ",
vegetarian: true,
LactoseFree:false,
glutenFree: true,
noixfree:false ,
bigype: "produit laitier",
type:"Fromage",
light:true,

organic:false,

price: 3.50

},
{
	name : "Jus de citron",
	type:"jus",
	light:false,

	oarganic:true,
	vegetarian: true,
	LactoseFree:true,
	glutenFree: true,
	noixfree:true ,
	price: 2.00

},

{
	name: "Toasts completes",
	type:"Pain",
	light:true,
	vegetarian: true,
	glutenFree: false,
	noixfree:true,
	organic:false,
	LactoseFree:true,
	price: 2.35},


	{name : "Frommage  ",
	vegetarian: true,
	LactoseFree:false,
	glutenFree: true,
	noixfree:false ,
	type: "produit laitier",
	light:false,

	organic:false,

	price: 3.50

	},



{name : "Gouda  ",
vegetarian: true,
LactoseFree:false,
glutenFree: true,
noixfree:false ,
bigype: "produit laitier",
type:"Fromage",
light:false,

organic:false,

price: 3.50

},

{name : "St-Julien aux noix ",
vegetarian: true,
LactoseFree:false,
light:false,

glutenFree: true,
noixfree:false ,
type: "Fromage",
bigtype:"Produit laitier",

organic:false,

price: 3.50

},

{
		name: "Cuisse de Poulet",
		type:"Poulet",
		bigtype:"Viande",
		noixfree:true,

		vegetarian: false,
		glutenFree: true,
		light:false,

		LactoseFree: true,
		organic:false,
		price: 7.99}
		,
		{
				name: "Lait UHT",
				type:"Lait",
				bigtype:"Produit Laitier",
				vegetarian: true,
				noixfree:true,

				glutenFree: true,
				light:false,

				LactoseFree: false,
				organic:false,
				price: 3.89}
				,
				{
						name: "Thon",
						type:"Poisson",
						bigtype:"Viande",
						noixfree:true,

						vegetarian: false,
						glutenFree: true,
						LactoseFree: true,
						light:true,

						organic:false,
						price: 4.99}
						,

						{
								name: "Tomates",
								type:"Fruit",
								bigtype:"Fruit et Légume",
								vegetarian: true,
								noixfree:true,

								glutenFree: true,
								light:true,

								LactoseFree: true,
								organic:false,
								price: 2.30}
								,
								{
										name: "Jus a base de noix",
										type:"jus",
										vegetarian: true,
										glutenFree: true,
										light:false,
										noixfree:false,
										LactoseFree: true,
										organic:false,
										price: 4.79}
										,








];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	var filtredprods=[];
	for (const prod of prods) {

		compset=[prod.LactoseFree,prod.glutenFree,prod.noixfree
		,prod.organic,prod.light,prod.vegetarian];

		var check=0;

		for (let i=0;i<restrictions.length;i++){
			if(restrictions[i]==true){
				if(compset[i]==restrictions[i] /*|| typeof compset[i]== "undefined"*/){
					check++;
				}

			}

			else{check++;	}


		}
		 if(check==6){
			filtredprods.push(prod);

		}










	}
	return filtredprods;

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
