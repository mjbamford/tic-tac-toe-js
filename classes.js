(function () {
    class Recipe {
        constructor(name, difficulty) {
            this.name = name;
            this.difficulty = difficulty;
        }

        cook() {
            return `Cook a ${this.name}`;
        }

        toString() {
            const original = super.toString();
            return `I'm a ${this.name} recipe! ${original}`
        }
    }

    // Recipe.prototype.toString = function () {
    //     const original = super.toString();
    //     return `I'm a ${this.name} recipe! ${original}`
    // }

    let recipe = new Recipe('Banana Cake', 4);
    console.log(recipe.cook());
    console.log(String(recipe));
    console.log(recipe.__proto__);
})();