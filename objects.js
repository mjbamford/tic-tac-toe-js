(function () {
    // A Recipe factory; usage:
    // let recipe = makeRecipe('Chocolate Cake', 3);
    function makeRecipe(name, difficulty) {
        let recipe = {};
        recipe.name = name;
        recipe.difficulty = difficulty;
        recipe.cook = function() {
            console.log(`Cook a ${this.name}`);
        }
        return recipe;
    }

    // Javascript `new` syntax
    function Recipe(name, difficulty) {
        if (new.target) {
            // this = {}
            this.name = name;
            this.difficulty = difficulty;
            // this.__proto__ = Recipe.prototype
            // return this;
        } else {
            return 'Use me as a contructor function, please!'
        }
    }

    // Recipe.prototype.cook = function() {
    //     console.log(`Cook a ${this.name}`);
    // }

    // Recipe.prototype.toString = function() {
    //     return `I'm a ${this.name} recipe! ${this.__proto__.__proto__.toString()}`
    // }

    // Recipe.prototype.valueOf = function() {
    //     return this.difficulty;
    // }

    Recipe.prototype = {
        toString() {
            return `I'm a ${this.name} recipe! ${super.toString()}`
        },

        cook: function () {
            return `Cook a ${this.name}`;
        }
    }

    // Usage:
    let recipe = new Recipe('Chocolate Cake', 3);
    // console.dir(recipe);

    // Can also call it as a regular Javascript function
    // console.log(Recipe());

    // let func = recipe.cook.bind(recipe);
    // setTimeout(func, 2000)

    console.log(String(recipe));
})();