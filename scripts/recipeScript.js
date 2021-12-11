// ========================================
// GETTERS
// Get recipe data to show on page.
// ========================================


// Function to get the array of ingredients for a specific recipe.
function getIngredients(recipeCode) {
	
	// Create an empty array.
	var i = [];
	
	if (recipeCode == "ham_bananas") {
		
		i = [
			"6 medium bananas",
			"1/4 cup lemon juice",
			"6 slices of boiled ham (about half of a pound)",
			"3 tablespoons yellow mustard",
			"2.5 oz hollandaise sauce mix (2 regular envelopes)",
			"1/4 cup light cream"
		];
	} else if (recipeCode == "frankfurter") {
		
		i = [
			"8 ounces frankfurters",
			"1 tart medium apple, cored and diced",
			"1/4 medium pineapple, diced",
			"1 pineapple core, with leaves",
			"4 ounces canned onions",
			"1/2 cup sliced, canned carrots",
			"1/4 cup chicken bouillon",
			"1 tablespoon tomato juice",
			"1 tablespoon lemon juice",
			"1/2 tablespoon cider vinegar",
			"1/2 teaspoon curry powder",
			"1/8 teaspoon ginger",
			"1/8 teaspoon nutmeg",
			"1/8 teaspoon cayenne pepper",
			"1/8 teaspoon coriander seeds"
		];
	} else if (recipeCode == "monterey_salad") {
		
		i = [
			"1 package lemon-flavored gelatin",
			"1 cup hot water",
			"1/2 cup cold water",
			"2 tablespoons lemon juice",
			"1/2 cup mayonnaise",
			"1.5 cans tuna",
			"3/4 cups chopped cucumber or celery",
			"1/4 cup sliced, stuffed olives",
			"2 tablespoons chopped pimento",
			"1/2 teaspoon grated onion",
			"1/4 teaspoon salt"
		];
	} else if (recipeCode == "ham_aspic") {
		
		i = [
			"2 1/2 cups aspic jelly",
			"3 stuffed olives",
			"1/2 cup cooked peas",
			"3 hard-boiled eggs, chopped",
			"1 can ham, diced",
			"8 cooked prunes, pitted and chopped"
		];
	} else if (recipeCode == "jellied_tomato") {
		
		i = [
			"1 envelope unflavored gelatin",
			"1/4 cup cold water",
			"3 cups tomato juice",
			"2 tablespoons dehydrated green pepper flakes",
			"Artificial sweetener, equivalent to 2 teaspoons sugar",
			"2 teaspoons lemon juice",
			"1 packet instant beef broth and seasoning mix, or 1 beef bouillon cube",
			"1 teaspoon Worcestershire sauce",
			"1/4 teaspoon garlic salt",
			"1/8 teaspoon ground cloves",
			"1/2 medium green pepper, cut in rings"
		];
	} else if (recipeCode == "frosted_melon") {
		
		i = [
			"1 medium-sized honeydew melon or cantaloupe",
			"1 3-ounce package of gelation",
			"3/4 cup cold water",
			"3/4 cup boiling water",
			"1 cup canned fruit, drained",
			"3 ounces cream cheese",
			"2 tablespoons milk"
		];
	} else if (recipeCode == "meatloaf_roll") {
		
		i = [
			"1 can (10 3/4 ounces) tomato soup",
			"1 1/2 pounds ground beef",
			"1/2 cup fine dry bread crumbs",
			"1/4 cup minced onions",
			"2 tablespoons chopped parsley",
			"1 egg, slightly beaten",
			"1 teaspoon salt",
			"Dash of pepper",
			"9 ounces cut green beans, cooked and well-drained"
		];
	} else if (recipeCode == "spinach_egg") {
		
		i = [
			"1 envelope unflavored gelatin",
			"3/4 cup plus 3 tablespoons cold water",
			"1 teaspoon salt",
			"1/4 teaspoon dry mustard",
			"1/4 teaspoon hot sauce",
			"1 1/3 cups cottage cheese",
			"1 cup chopped fresh spinach",
			"4 medium eggs, hard-cooked and diced",
			"Lemon juice to taste",
			"Radish slices",
			"Parsley sprigs"
		];
	} else if (recipeCode == "spam_cakes") {
		
		i = [
			"1 box of Bisquick pancake mix",
			"1 cup milk",
			"2 eggs",
			"1 can of Spam",
			"Butter, optional",
			"Maple syrup, optional"
		];
	} else {
		
		console.log("Error in getting ingredients for recipeCode: " + recipeCode);
	}
	
	
	return i;
}

// Function to get the array of directions for a specific recipe.
function getDirections(recipeCode) {
	
	// Create an empty array.
	var d = [];
	
	if (recipeCode == "ham_bananas") {
		
		d = [
			"Preheat oven to 400°F.",
			"Lightly butter a 2-quart, shallow baking dish.",
			"Peel bananas and sprinkle each with 1/2 tablespoon of lemon juice, to prevent darkening.",
			"Spread mustard on one side of each slice of ham.",
			"Wrap each banana in a slice of ham, with mustard on the inside.",
			"Arrange wrapped bananas in a single layer in a casserole dish.",
			"Bake for 10 minutes.",
			"Meanwhile, make the sauce: In a small saucepan, combine the hollandaise sauce mix with 1 cup water, 1 tablespoon lemon juice, and the light cream. Heat the sauce, stirring, until it boils.",
			"Take the bananas out of the oven and pour the hot hollandaise sauce over them. Try to keep the sauce on the ham slices, not on the actual bananas.",
			"Bake the dish for 5 more minutes, or until slightly golden.",
			"Serve warm. Makes 6 servings."
		];
	} else if (recipeCode == "frankfurter") {
		
		d = [
			"Slice frankfurters lengthwise but do not cut all the way through, so the halves are still attached.",
			"Broil frankfurters about 3 inches from the source of heat for 6 minutes, or until cooked throughout.",
			"Combine remaining ingredients (except the pineapple core) in a saucepan. Cook over low heat, stirring frequently, for 10 minutes.",
			"Add the frankfurters to the pan and cook an additional 3 minutes.",
			"Wrap a few frankfurters around the pineapple core and secure them with toothpicks, to create a dramatic centerpiece.",
			"Add cooked mixture around the base of the pineapple core.",
			"Serve warm. Makes two dinner servings."
		];
	} else if (recipeCode == "monterey_salad") {
		
		d = [
			"Dissolve gelatin in hot water.",
			"Add the cold water, lemon juice, mayonnaise, and salt to the gelatin.",
			"Blend the gelatin mix well with a rotary beater.",
			"Pour the gelatin mix into a container and freeze for 15 to 20 minutes, or until firm about 1 inch from edge but still soft in center.",
			"Pour the gelatin mix into a bowl and whip with the rotary beater until fluffy.",
			"Fold in the tuna, chopped cucumber or celery, olives, pimento, and grated onion.",
			"Pour mixture into a 1-quart mold or individual molds.",
			"Chill in refrigerator until firm, 30 to 60 minutes.",
			"Flip the gelatin out of the mold and onto a plate. Garnish with salad greens and additional mayonnaise.",
			"Serve chilled. Makes 4-6 servings."
		];
	} else if (recipeCode == "ham_aspic") {
		
		d = [
			"Make aspic jelly and allow it to cool until it thickens but is not set.",
			"Pour a 1/4-inch layer of aspic jelly into the bottom of the mold and allow it to set.",
			"Cut a thin, round slice of the canned ham. Dice the rest.",
			"Arrange the sliced olives, peas, and the slice of ham in the mold.",
			"Pour enough cool-but-not-set aspic jelly into the mold to cover the previous layer.",
			"Refrigerate the mold until quite firm.",
			"Mix the diced ham, chopped prunes, and the chopped eggs together. Arrange them in the mold.",
			"Pour another layer of jelly to cover.",
			"Refrigerate the mold until it sets.",
			"To serve, unmold the aspic onto a platter. (Tip for unmolding: dip the mold in hot water for only a few seconds to loosen it."
		];
	} else if (recipeCode == "jellied_tomato") {
		
		d = [
			"Sprinkle gelatin over cold water to soften.",
			"Separately, combine tomato juice, green pepper flakes, sweetener, lemon juice, broth mix, Worcestershire, garlic salt, and cloves in a saucepan.",
			"Bring saucepan to a boil, then remove from heat.",
			"Add the softened gelatin to the saucepan and stir to dissolve.",
			"Pour mixture into a bowl and refrigerate until set.",
			"Just before serving, beat mixture lightly with a fork.",
			"Spoon mixture, evenly divided, into 4 dessert dishes. Garnish with green pepper rings.",
			"Serve cold. Makes 4 servings."
		];
	} else if (recipeCode == "frosted_melon") {
		
		d = [
			"Dissolve gelatin in boiling water. Add cold water. Chill in refrigerator until very thick.",
			"Meanwhile, peel the melon, leaving it whole. Cleanly slice off one of the ends, about 2 inches in, to reach the interior. Place the slice to the side.",
			"Scoop out the seeds and let the melon drain well on a paper towel.",
			"Fold fruit into the thick gelatin.",
			"Place the melon upright in a bowl. Spoon the gelatin-fruit mixture into the melon.",
			"Replace the cut-off slice and secure it with toothpicks. Chill.",
			"Just before serving the melon, blend cream cheese and milk until smooth and fluffy. Spread the cheese over the melon to cover it.",
			"Serve cold, in slices."
		];
	} else if (recipeCode == "meatloaf_roll") {
		
		d = [
			"Preheat oven to 350°F.",
			"Combine 1/2 cup of tomato soup with all ingredients except the green beans. Mix well.",
			"On waxed paper, pat meat mixture into a 12x9-inch piece.",
			"Spread green beans to cover meat within 1 inch of all edges and pat them gently into the meat.",
			"With aid of the waxed paper, roll meat tightly in a jelly-roll fashion, starting at the long edge. Seal the ends.",
			"Use waxed paper to transfer roll to baking dish.",
			"Bake in oven for 40 minutes.",
			"Spoon off fat. Pour remaining soup over loaf. Bake 10 minutes longer.",
			"Serve warm. Makes 6 servings."
		];
	} else if (recipeCode == "spinach_egg") {
		
		d = [
			"Sprinkle gelatin over 3/4 cold water in saucepan.",
			"Stir over low heat until gelatin dissolves, then remove pan from heat.",
			"Stir in salt, mustard, and hot sauce.",
			"Chill, stirring occasionally, until mixture is syrupy.",
			"Separately, combine cottage cheese and remaining water in a blender and process at high speed until mixture is smooth.",
			"Transfer the cottage cheese mixture to a large bowl. Add in gelatin mixture, eggs, and lemon juice.",
			"Mix mixture well and pour it into a 3-cup mold. Chill until firm, about 3 hours.",
			"Unmold the mixture onto a plate and garnish with radish slices and parsley sprigs.",
			"Serve chilled. Makes 4 luncheon servings."
		];
	} else if (recipeCode == "spam_cakes") {
		
		d = [
			"Stir pancake mix, milk, and eggs in a bowl until blended.",
			"Grease or spray griddle or skillet and heat over medium-high heat.",
			"Brown the spam slices on the griddle, 2 to 3 inches apart.",
			"Turn over spam slices. Pour slightly less than 1/4 cup of pancake batter over each slice.",
			"Cook until edges are dry.",
			"Flip spam cakes over and cook until golden.",
			"Eat plain or top with butter and maple syrup."
		];
	}  else {
		
		console.log("Error in getting directions for recipeCode: " + recipeCode);
	}	
	
	return d;
}

// Function to get the full recipe name for a specific recipe.
function getRecipeName(recipeCode) {
	
	// Create an empty string.
	var r = "";
	
	if (recipeCode == "ham_bananas") {
		r = "Ham and Bananas Hollandaise";
		
	} else if (recipeCode == "frankfurter") {
		r = "Frankfurter Spectacular";
		
	} else if (recipeCode == "monterey_salad") {
		r = "Monterey Souffle Tuna Salad";
		
	} else if (recipeCode == "ham_aspic") {
		r = "Ham in Aspic";
		
	} else if (recipeCode == "jellied_tomato") {
		r = "Jellied Tomato Refresher";
		
	} else if (recipeCode == "frosted_melon") {
		r = "Frosted Melon";
		
	} else if (recipeCode == "meatloaf_roll") {
		r = "Roll-in-One Meat Loaf";
		
	} else if (recipeCode == "spinach_egg") {
		r = "Spinach and Egg Mold";
		
	} else if (recipeCode == "spam_cakes") {
		r = "Spam Cakes";
		
	} else {
		
		console.log("Error in getting recipe name for recipeCode: " + recipeCode);
	}	
	
	return r;
}

// ========================================
// SETTERS
// Modify the HTML on recipe pages.
// ========================================

// Function to fill the unordered list of ingredients on the page with the ingredients stored in the myIngredients array. 
function populateIngredients(ingredients) {
	var ul = document.getElementById("ul_ingredients");
	
	for (i in ingredients) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(ingredients[i]));
		ul.appendChild(li);
	}
}

// Function to fill the ordered list of directions on the page with the directions stored in the myDirections array. 
function populateDirections(directions) {
	var ol = document.getElementById("ol_directions");
	
	for (d in directions) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(directions[d]));
		ol.appendChild(li);
	}
}

// Function to load the recipe name in the page title and header.
function populateRecipeName(recipeName) {
	var h = document.getElementById("h_recipeName");
	h.innerHTML = recipeName + " Recipe";
	
	document.title = recipeName;
}

// Function to load the recipe image.
function populateRecipeImage(recipeName, recipeCode) {
	var i = document.getElementById("img_recipe");
	
	i.src = "../images/" + recipeCode + ".jpg";
	i.alt = recipeName;
	
}


// Function to fill the page with data. Called on page load.
function populatePage() {
	populateIngredients(getIngredients(myRecipeCode));
	populateDirections(getDirections(myRecipeCode));
	populateRecipeName(getRecipeName(myRecipeCode));
	populateRecipeImage(getRecipeName(myRecipeCode), myRecipeCode);
}


// ========================================
// SETTERS
// Modify the HTML on the index page.
// ========================================


// Function to create and fill a cell of the recipes table with a recipe link and image.
function createRecipeCell(recipeCode) {
	// Get recipe name.
	var n = getRecipeName(recipeCode);
	
	// Create a title for the recipe that links to its page.
	var t = document.createElement("A");
	t.href = "./pages/" + recipeCode + ".html";
	t.innerHTML = n;
	
	// Create an image for the recipe thumbnail.
	var img = document.createElement("IMG");
	img.src = "./images/" + recipeCode + ".jpg";
	img.alt = n;
	
	// Create a link for the recipe image.
	var a = document.createElement("A");
	a.href = "./pages/" + recipeCode + ".html";
	
	// Add the recipe image to the link.
	a.appendChild(img);
	
	// Create a new TD cell.
	var td = document.createElement("TD");
	td.class = "td_index";
	
	// Add linked title and image to the cell.
	td.appendChild(t);
	td.appendChild(document.createElement("BR"));
	td.appendChild(document.createElement("BR"));
	td.appendChild(a);
	
	return td;
}

// Function to create and fill the recipes table.
function createTable() {
	
	var mainTable = document.getElementById("table_index");
	
	// Create an array of recipe codes, which must also be the file names of their html pages and jpg images.
	var recipeCodes = [
		"ham_bananas",
		"monterey_salad",
		"frankfurter",
		"ham_aspic",
		"jellied_tomato",
		"frosted_melon",
		"meatloaf_roll",
		"spinach_egg",
		"spam_cakes"
	]
	
	var r = 0;
	
	// Get length of array and check if there are any recipes.
	var numRecipes = recipeCodes.length;
	if (numRecipes > 0) {
		
		// Figure out how many rows to create.
		const numRecipesPerRow = 3;
		var numRows = Math.ceil(numRecipes / numRecipesPerRow);
		console.log("There are " + numRecipes + " recipes. Creating a table with " + numRows + " rows of up to " + numRecipesPerRow + " recipes...");
		
		// Create each row of recipes and add it to the table.
		for (var x = 0; x < numRows; x++) {
			
			// Create a row.
			var newRow = document.createElement("TR");
			
			// Add three recipes to the row.
			for (var y = 0; y < numRecipesPerRow; y++) {
				
				
				// Double-check that there is a recipe that can be added.
				if (r < numRecipes) {
					
					console.log("Creating table cell for recipeCode " + recipeCodes[r] + " at index " + r + ". Table row " + x + ", table cell " + y);
					
					// Create a cell of the recipe with a recipe link and image.
					var newRecipeCell = createRecipeCell(recipeCodes[r]);
					
					newRow.appendChild(newRecipeCell);
				} else {
					
					console.log("Cannot create a table cell for index " + r);
				}
				
				r++;
			}
			
			mainTable.appendChild(newRow);
			
		}
		
	}
}


// Function to fill the page with data. Called on page load.
function populateIndex() {
	createTable();
}


