const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const dummyUsers = [];
const dummyGroups = [];
const dummyUserGroups = [];
const shoppingList = [];

const usernames = ['james', 'john', 'william', 'paul', 'thomas', 'kevin', 'gary', 'larry', 'dennis', 'roger'];
const groups = ['football', 'tennis', 'basketball', 'volleyball', 'hockey'];

usernames.forEach(x => {
    dummyUsers.push({
        firstName: x.split('').reverse().join(''),
        lastName: x.split('').sort(() => Math.random() - 0.5).join(''),
        username: x, email: `${x}@gmail.com`, userId: uuidv4(),
        password: bcrypt.hashSync('toto', 10),
        createdAt: new Date(), updatedAt: new Date(),
    });
});

groups.forEach(x => {
    dummyGroups.push({
        groupId: uuidv4(), groupName: x,
        groupDescription: `this a ${x} group`
    })
});

Array(5).fill(0).forEach((x, i) => {
    dummyUserGroups.push({
        id_group_user: uuidv4(),
        userId: dummyUsers[i].userId,
        groupId: dummyGroups[i].groupId,
        role: (i === 2) ? 'admin' : 'member'
    })
});

const products = [
    {
        "code": 16513,
        "product_name": "Organic Sunflower Oil",
        "brands": "Napa Valley Naturals",
        "ingredients": "Organic expeller pressed, refined high oleic sunflower oil"
    }, {
        "code": 16612,
        "product_name": "Organic Adzuki Beans",
        "brands": "Unfi",
        "ingredients": "Organic adzuki beans"
    }, {
        "code": 16650,
        "product_name": "Organic Penne Pasta",
        "brands": "Gardentime",
        "ingredients": "Organic refined durum semolina wheat flour"
    }, {
        "code": 16872,
        "product_name": "Zen Party Mix",
        "brands": "Sunridge",
        "ingredients": "Roasted peanuts (peanuts, peanut or canola oil, salt), sesame sticks (unbleached wheat flour, sesame seeds, sunflower oil, sa;t, beet powder, turmeric), chili crackers (rice, corn starch, soy sauce[water, soybeans, wheat, salt], brown rice syrup, paprika, onion powder, garlic powder), tamari roasted almonds (almonds, tamari shoyu [water, wheat, soybeans, salt]), salt"
    },
    {
        "code": 16933,
        "product_name": "Organic Golden Flax Seeds",
        "brands": "Unfi",
        "ingredients": "Organic golden flax seeds"
    }, {
        "code": 17497,
        "product_name": "Organic Spicy Punks",
        "brands": "Eden",
        "ingredients": "Organic dry roasted pumpkin seeds, tamari (soybeans, water and salt), garlic and cayenne."
    }, {
        "code": 18012,
        "product_name": "Cinnamon Nut Granola",
        "brands": "Grizzlies",
        "ingredients": "Organic rolled oats, honey, raisins, almonds, sunflower seeds, walnuts, wheat germ, unrefined expeller-pressed safflower oil, molasses, cinnamon"
    }, {
        "code": 18050,
        "product_name": "Organic Hazelnuts",
        "brands": "Grizzlies",
        "ingredients": "Organic raw hazelnuts."
    },
    {
        "code": 18173,
        "product_name": "Organic Sweetened Banana Chips",
        "brands": "Unfi",
        "ingredients": "Organic bananas, organic coconut oil, organic sugar"
    }, {
        "code": 18197,
        "product_name": "Lotus Organic Brown Jasmine Rice",
        "brands": "Unfi",
        "ingredients": "Organic brown jasmine rice"
    }, {
        "code": 18227,
        "product_name": "Organic Oat Groats",
        "brands": "Pcc",
        "ingredients": "Organic oat groats"
    }, {
        "code": 18265,
        "product_name": "Energy Power Mix",
        "brands": "Sunridge",
        "ingredients": "Yogurt raisins, tamari roasted almonds, organic tamari roasted soy nuts, dark chocolate stars, cranberries, dark chocolate chips, peanut butter chips, milk chocolate raisins, pineapple, papaya, peanut butter peanuts & raisins, roasted peanuts."
    },
    {
        "code": 18289,
        "product_name": "Antioxidant Mix - Berries & Chocolate",
        "brands": "Sunridge",
        "ingredients": "Chocolate stars (dehydrated cane juice, sweetened chocolate, cocoa butter, soy lecithin [an emulsifier], natural vanilla), roasted peanuts (peanuts, safflower, peanut, and/or canola oil, salt), dry roasted almonds (almonds, sea salt), dry roasted cashews (cashews, sea salt), dried cranberries (cranberries, evaporated cane juice, sunflower oil), dried cherries, walnuts, dried blueberries (blueberries, evaporated cane juice, sunflower oil)."
    }, {
        "code": 18319,
        "product_name": "Organic Quinoa Coconut Granola With Mango",
        "brands": "Sunridge",
        "ingredients": "Organic rolled oats, organic evaporated cane juice, organic quinoa flakes, organic raisins, organic expeller pressed canola oil, organic mango, organic oat bran, organic coconut."
    }, {
        "code": 18340,
        "product_name": "Fire Roasted Hatch Green Chile Almonds",
        "brands": "Sunridge",
        "ingredients": "Dry roasted almonds, hatch green chile seasoning (organic cheddar cheese powder [organic cheddar cheese {cultured pasteurized milk, salt, enzymes}, organic nonfat milk,organic whey, salt, sodium phosphate], salt, hatch green chile pepper, evaporated cane juice, onion, parsely, natural flavors,garlic, maltodextrin, spices, spices extractives, citric acid), expeller pressed canola oil."
    }, {
        "code": 18357,
        "product_name": "Peanut Butter Power Chews",
        "brands": "Sunridge",
        "ingredients": "Peanut butter (dry roasted peanuts, palm oil, salt), honey, crispy brown rice (brown rice flour [rice flour, rice bran], honey, calcium carbonate), barley malt, soy lecithin (an emulsifier), sea salt, locust bean gum, carrageenan gum."
    },
    {
        "code": 18371,
        "product_name": "Real Salt Granular",
        "brands": "Redmond",
        "ingredients": "Ancient sea salt with natural trace minerals"
    }, {
        "code": 18388,
        "product_name": "Organic Unswt Berry Coconut Granola",
        "brands": "New England Naturals",
        "ingredients": "Organic whole rolled oats, organic expeller pressed canola oil, organic raisins, organic coconut, organic corn meal, organic flax seed, organic freeze dried raspberries, organic freeze dried blueberries, organic vanilla, salt."
    }, {
        "code": 18395,
        "product_name": "Roasted Salted Black Pepper Cashews",
        "brands": "Sunridge",
        "ingredients": "Whole cashews, sunflower oil, salt, black pepper"
    }, {
        "code": 18401,
        "product_name": "Thai Curry Roasted Cashews",
        "brands": "Sunridge",
        "ingredients": "Cashews, curry seasoning (salt, maltodextrin, spices, torula yeast, onion, garlic, turmeric, extractives of spice and natural flavor), canola oil."
    }
];

Array(5).fill(0).forEach((x, i) => {
    shoppingList.push({
        id: uuidv4(),
        id_group_user: dummyUserGroups[i].id_group_user,
        code: products[i].code,
        quantity: Math.floor(Math.random() * 5) + 1
    });
});


module.exports = {
    dummyUsers, usernames, dummyGroups,
    groups, dummyUserGroups, products, shoppingList
}
