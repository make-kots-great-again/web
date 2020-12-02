const products = [
    {
        "code": 16513,
        "product_name": "Organic Sunflower Oil",
        "brands": "Napa Valley Naturals",
        "ingredients": "Organic expeller pressed, refined high oleic sunflower oil",
        "half_peremption_date": 10
    }, {
        "code": 16612,
        "product_name": "Organic Adzuki Beans",
        "brands": "Unfi",
        "ingredients": "Organic adzuki beans",
        "half_peremption_date" : 7
    }, {
        "code": 16650,
        "product_name": "Organic Penne Pasta",
        "brands": "Gardentime",
        "ingredients": "Organic refined durum semolina wheat flour",
        "half_peremption_date" : 30
    }, {
        "code": 16872,
        "product_name": "Zen Party Mix",
        "brands": "Sunridge",
        "ingredients": "Roasted peanuts (peanuts, peanut or canola oil, salt), sesame sticks (unbleached wheat flour, sesame seeds, sunflower oil, sa;t, beet powder, turmeric), chili crackers (rice, corn starch, soy sauce[water, soybeans, wheat, salt], brown rice syrup, paprika, onion powder, garlic powder), tamari roasted almonds (almonds, tamari shoyu [water, wheat, soybeans, salt]), salt",
        "half_peremption_date" : 20
    },
    {
        "code": 16933,
        "product_name": "Organic Golden Flax Seeds",
        "brands": "Unfi",
        "ingredients": "Organic golden flax seeds",
        "half_peremption_date" : 5
    }, {
        "code": 17497,
        "product_name": "Organic Spicy Punks",
        "brands": "Eden",
        "ingredients": "Organic dry roasted pumpkin seeds, tamari (soybeans, water and salt), garlic and cayenne.",
        "half_peremption_date" : 23
    }, {
        "code": 18012,
        "product_name": "Cinnamon Nut Granola",
        "brands": "Grizzlies",
        "ingredients": "Organic rolled oats, honey, raisins, almonds, sunflower seeds, walnuts, wheat germ, unrefined expeller-pressed safflower oil, molasses, cinnamon",
        "half_peremption_date" : 60
    }, {
        "code": 18050,
        "product_name": "Organic Hazelnuts",
        "brands": "Grizzlies",
        "ingredients": "Organic raw hazelnuts.",
        "half_peremption_date" : 10
    },
    {
        "code": 18173,
        "product_name": "Organic Sweetened Banana Chips",
        "brands": "Unfi",
        "ingredients": "Organic bananas, organic coconut oil, organic sugar",
        "half_peremption_date" : 8
    }, {
        "code": 18197,
        "product_name": "Lotus Organic Brown Jasmine Rice",
        "brands": "Unfi",
        "ingredients": "Organic brown jasmine rice",
        "half_peremption_date" : 45
    }, {
        "code": 18227,
        "product_name": "Organic Oat Groats",
        "brands": "Pcc",
        "ingredients": "Organic oat groats",
        "half_peremption_date" : 9
    }, {
        "code": 18265,
        "product_name": "Energy Power Mix",
        "brands": "Sunridge",
        "ingredients": "Yogurt raisins, tamari roasted almonds, organic tamari roasted soy nuts, dark chocolate stars, cranberries, dark chocolate chips, peanut butter chips, milk chocolate raisins, pineapple, papaya, peanut butter peanuts & raisins, roasted peanuts.",
        "half_peremption_date" : 120
    },
    {
        "code": 18289,
        "product_name": "Antioxidant Mix - Berries & Chocolate",
        "brands": "Sunridge",
        "ingredients": "Chocolate stars (dehydrated cane juice, sweetened chocolate, cocoa butter, soy lecithin [an emulsifier], natural vanilla), roasted peanuts (peanuts, safflower, peanut, and/or canola oil, salt), dry roasted almonds (almonds, sea salt), dry roasted cashews (cashews, sea salt), dried cranberries (cranberries, evaporated cane juice, sunflower oil), dried cherries, walnuts, dried blueberries (blueberries, evaporated cane juice, sunflower oil).",
        "half_peremption_date" : 33
    }, {
        "code": 18319,
        "product_name": "Organic Quinoa Coconut Granola With Mango",
        "brands": "Sunridge",
        "ingredients": "Organic rolled oats, organic evaporated cane juice, organic quinoa flakes, organic raisins, organic expeller pressed canola oil, organic mango, organic oat bran, organic coconut.",
        "half_peremption_date" : 23
    }, {
        "code": 18340,
        "product_name": "Fire Roasted Hatch Green Chile Almonds",
        "brands": "Sunridge",
        "ingredients": "Dry roasted almonds, hatch green chile seasoning (organic cheddar cheese powder [organic cheddar cheese {cultured pasteurized milk, salt, enzymes}, organic nonfat milk,organic whey, salt, sodium phosphate], salt, hatch green chile pepper, evaporated cane juice, onion, parsely, natural flavors,garlic, maltodextrin, spices, spices extractives, citric acid), expeller pressed canola oil.",
        "half_peremption_date" : 13
    }, {
        "code": 18357,
        "product_name": "Peanut Butter Power Chews",
        "brands": "Sunridge",
        "ingredients": "Peanut butter (dry roasted peanuts, palm oil, salt), honey, crispy brown rice (brown rice flour [rice flour, rice bran], honey, calcium carbonate), barley malt, soy lecithin (an emulsifier), sea salt, locust bean gum, carrageenan gum.",
        "half_peremption_date" : 12
    },
    {
        "code": 18371,
        "product_name": "Real Salt Granular",
        "brands": "Redmond",
        "ingredients": "Ancient sea salt with natural trace minerals",
        "half_peremption_date" : 360
    }, {
        "code": 18388,
        "product_name": "Organic Unswt Berry Coconut Granola",
        "brands": "New England Naturals",
        "ingredients": "Organic whole rolled oats, organic expeller pressed canola oil, organic raisins, organic coconut, organic corn meal, organic flax seed, organic freeze dried raspberries, organic freeze dried blueberries, organic vanilla, salt.",
        "half_peremption_date" : 27
    }, {
        "code": 18395,
        "product_name": "Roasted Salted Black Pepper Cashews",
        "brands": "Sunridge",
        "ingredients": "Whole cashews, sunflower oil, salt, black pepper",
        "half_peremption_date" : 21
    }, {
        "code": 18401,
        "product_name": "Thai Curry Roasted Cashews",
        "brands": "Sunridge",
        "ingredients": "Cashews, curry seasoning (salt, maltodextrin, spices, torula yeast, onion, garlic, turmeric, extractives of spice and natural flavor), canola oil.",
        "half_peremption_date" : 17
    }
];

module.exports = {products}
