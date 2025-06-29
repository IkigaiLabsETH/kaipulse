"use client";

interface Dish {
  name: string;
  cuisine: string;
  type: string;
  description: string;
  ingredients: string[];
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  tm7Features: string[];
  emoji: string;
}

const favoriteDishes: Dish[] = [
  {
    name: "Ratatouille",
    cuisine: "French",
    type: "Vegetarian",
    description: "A vibrant Provençal vegetable stew showcasing the TM7's chopping and Varoma steaming capabilities. Perfect for healthy, Mediterranean-inspired meals.",
    ingredients: ["Eggplant", "Zucchini", "Bell peppers", "Tomatoes", "Onion", "Garlic", "Olive oil", "Thyme", "Basil"],
    cookingTime: "35 minutes",
    difficulty: "Easy",
    tm7Features: ["Varoma steaming", "Precise chopping", "Temperature control"],
    emoji: "🍆"
  },
  {
    name: "Coq au Vin",
    cuisine: "French",
    type: "Hearty",
    description: "Classic French chicken stew with rich, robust flavors. The TM7's slow cooking mode ensures tender chicken and complex sauce development.",
    ingredients: ["Chicken thighs", "Red wine", "Bacon", "Mushrooms", "Onion", "Carrots", "Garlic", "Thyme"],
    cookingTime: "75 minutes",
    difficulty: "Medium",
    tm7Features: ["Slow cooking mode", "Reverse stirring", "Temperature precision"],
    emoji: "🍷"
  },
  {
    name: "Pizza Dough",
    cuisine: "Italian",
    type: "Versatile",
    description: "Perfect elastic dough using the TM7's kneading mode. Creates the foundation for endless pizza possibilities with authentic Italian texture.",
    ingredients: ["00 Flour", "Water", "Yeast", "Salt", "Olive oil"],
    cookingTime: "20 minutes + rising",
    difficulty: "Easy",
    tm7Features: ["Kneading mode", "Fermentation mode", "Precise measurements"],
    emoji: "🍕"
  },
  {
    name: "Fresh Pasta & Pesto",
    cuisine: "Italian",
    type: "Fresh",
    description: "Homemade pasta with vibrant pesto Genovese. The TM7 creates perfect pasta dough and blends restaurant-quality pesto in minutes.",
    ingredients: ["00 Flour", "Eggs", "Basil", "Parmesan", "Pine nuts", "Garlic", "Olive oil"],
    cookingTime: "30 minutes",
    difficulty: "Medium",
    tm7Features: ["Kneading mode", "High-speed blending", "Precise portioning"],
    emoji: "🍝"
  },
  {
    name: "Focaccia Bread",
    cuisine: "Italian",
    type: "Rustic",
    description: "Fluffy, airy Italian bread with crispy crust. The TM7's fermentation mode ensures perfect rise and texture for this beloved artisan bread.",
    ingredients: ["Bread flour", "Water", "Yeast", "Salt", "Olive oil", "Rosemary", "Sea salt"],
    cookingTime: "25 minutes + rising",
    difficulty: "Easy",
    tm7Features: ["Kneading mode", "Fermentation mode", "Temperature control"],
    emoji: "🥖"
  },
  {
    name: "Spanakopita",
    cuisine: "Greek",
    type: "Savory",
    description: "Spinach and feta pie with flaky phyllo pastry. The TM7 simplifies filling preparation and can even make homemade phyllo dough.",
    ingredients: ["Spinach", "Feta cheese", "Onion", "Dill", "Parsley", "Eggs", "Phyllo pastry", "Olive oil"],
    cookingTime: "45 minutes",
    difficulty: "Medium",
    tm7Features: ["Precision chopping", "Mixing mode", "Dough kneading"],
    emoji: "🥧"
  },
  {
    name: "Chicken Souvlaki",
    cuisine: "Greek",
    type: "Grilled",
    description: "Mediterranean chicken skewers with vibrant marinade. The TM7 creates perfect marinades and steams vegetables for a complete healthy meal.",
    ingredients: ["Chicken breast", "Bell peppers", "Zucchini", "Red onion", "Olive oil", "Garlic", "Oregano", "Lemon"],
    cookingTime: "25 minutes + marinating",
    difficulty: "Easy",
    tm7Features: ["Marinade blending", "Varoma steaming", "Precise chopping"],
    emoji: "🍢"
  }
];

export default function FavoriteDishes() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Our Favorite Dishes
      </h3>
      <div className="space-y-6">
        <p className="text-lg text-gray-300">
          A curated collection of our most-loved recipes that showcase the TM7&apos;s versatility, from Italian classics to Mediterranean favorites. Each dish is optimized for the TM7&apos;s unique capabilities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteDishes.map((dish, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{dish.emoji}</span>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500">{dish.name}</h4>
                  <p className="text-sm text-yellow-400">{dish.cuisine} • {dish.type}</p>
                </div>
              </div>
              
              <p className="text-white/80 font-satoshi text-sm mb-4">{dish.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-400">Cooking Time:</span>
                  <span className="text-white">{dish.cookingTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-400">Difficulty:</span>
                  <span className={`${
                    dish.difficulty === 'Easy' ? 'text-green-400' : 
                    dish.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {dish.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="text-yellow-400 font-epilogue text-sm mb-2">Key Ingredients:</h5>
                <div className="flex flex-wrap gap-1">
                  {dish.ingredients.slice(0, 4).map((ingredient, idx) => (
                    <span key={idx} className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">
                      {ingredient}
                    </span>
                  ))}
                  {dish.ingredients.length > 4 && (
                    <span className="text-xs text-yellow-400">+{dish.ingredients.length - 4} more</span>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="text-yellow-400 font-epilogue text-sm mb-2">TM7 Features Used:</h5>
                <ul className="text-xs text-white/70 space-y-1">
                  {dish.tm7Features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-yellow-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-500/10 p-6 rounded-none border border-yellow-500/20 mt-8">
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Recipe Collection Benefits:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-400 font-epilogue mb-2">Mediterranean Focus:</h5>
              <p className="text-white/80 font-satoshi text-sm">
                Emphasis on Italian, French, and Greek cuisines with fresh ingredients, olive oil, and vibrant flavors that complement healthy eating.
              </p>
            </div>
            <div>
              <h5 className="text-yellow-400 font-epilogue mb-2">TM7 Optimization:</h5>
              <p className="text-white/80 font-satoshi text-sm">
                Each recipe leverages specific TM7 functions—kneading for doughs, Varoma for steaming, slow cooking for stews, and precision blending for sauces.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/30 rounded border border-yellow-500/10">
            <p className="text-yellow-400 font-epilogue text-sm font-bold mb-2">Pro Tip:</p>
            <p className="text-white/80 font-satoshi text-sm">
              All recipes are available in Cookidoo® with step-by-step guidance, automatic temperature control, and timing coordination. 
              The €60/year subscription unlocks variations like gluten-free pasta or vegan pesto options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 