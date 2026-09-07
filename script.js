const menuItems = [
  {
    id: "s01", name: "Truffle Malai Broccoli", category: "Starters", price: 260,
    description: "Charred broccoli with hung curd, truffle oil and toasted almond.",
    ingredients: "Broccoli, hung curd, truffle oil, almond, herbs", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Vegetarian", spice: "Mild", portion: "6 pieces"
  },
  {
    id: "s02", name: "Chicken Tikka", category: "Starters", price: 320,
    description: "Char-grilled chicken marinated overnight with yogurt and aromatic spices.",
    ingredients: "Chicken, yogurt, ginger, garlic, Kashmiri chilli", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Non-vegetarian", spice: "Medium", portion: "6 pieces"
  },
  {
    id: "s03", name: "Lamb Galouti Kebab", category: "Starters", price: 390,
    description: "Silken minced lamb kebabs scented with rose, mace and warm spices.",
    ingredients: "Lamb mince, fried onion, raw papaya, rose, mace", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: false, bestseller: false, special: true, dietary: "Non-vegetarian", spice: "Mild", portion: "5 pieces"
  },
  {
    id: "s04", name: "Crispy Lotus Stem", category: "Starters", price: 280,
    description: "Thin lotus stem chips tossed in chilli, sesame and jaggery glaze.",
    ingredients: "Lotus stem, sesame, chilli, jaggery, spring onion", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: true, bestseller: false, special: false, dietary: "Vegan", spice: "Hot", portion: "One bowl"
  },
  {
    id: "s05", name: "Tandoori Prawns", category: "Starters", price: 420,
    description: "King prawns, charred hard at the edges and finished with lime butter.",
    ingredients: "Prawns, yogurt, mustard, lime, butter", image: "https://images.unsplash.com/photo-1565557623262-b51c51f3b7a9?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: true, dietary: "Non-vegetarian", spice: "Medium", portion: "6 prawns"
  },

  {
    id: "so01", name: "Roasted Tomato Shorba", category: "Soups", price: 190,
    description: "Slow-roasted tomato broth with basil oil and crisp garlic.",
    ingredients: "Tomato, basil, garlic, black pepper, cream", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "Bowl"
  },
  {
    id: "so02", name: "Mushroom Pepper Broth", category: "Soups", price: 210,
    description: "Fragrant mushroom broth with cracked pepper, ginger and scallion.",
    ingredients: "Mushroom, ginger, pepper, spring onion, soy", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: true, bestseller: false, special: false, dietary: "Vegan", spice: "Medium", portion: "Bowl"
  },
  {
    id: "so03", name: "Chicken Mulligatawny", category: "Soups", price: 230,
    description: "Anglo-Indian comfort soup with chicken, lentils, coconut and curry leaf.",
    ingredients: "Chicken, lentil, coconut milk, curry leaf, rice", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Non-vegetarian", spice: "Mild", portion: "Bowl"
  },
  {
    id: "so04", name: "Sweet Corn & Chilli", category: "Soups", price: 180,
    description: "Silky sweet corn soup lifted with ginger, scallion and green chilli.",
    ingredients: "Sweet corn, ginger, spring onion, chilli", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: true, bestseller: false, special: false, dietary: "Vegan", spice: "Medium", portion: "Bowl"
  },

  {
    id: "t01", name: "Paneer Angaarey", category: "Tandoor", price: 310,
    description: "Paneer steaks grilled over live fire with smoked pepper and kasuri methi.",
    ingredients: "Paneer, bell pepper, yogurt, kasuri methi", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: true, bestseller: true, special: true, dietary: "Vegetarian", spice: "Medium", portion: "8 pieces"
  },
  {
    id: "t02", name: "Murgh Afghani", category: "Tandoor", price: 360,
    description: "Creamy, peppery chicken skewers finished with char and a squeeze of lime.",
    ingredients: "Chicken, cream, cashew, pepper, lime", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Non-vegetarian", spice: "Mild", portion: "8 pieces"
  },
  {
    id: "t03", name: "Pesto Tandoori Mushroom", category: "Tandoor", price: 290,
    description: "Button mushrooms marinated in garlic, herbs and a bright basil pesto.",
    ingredients: "Mushroom, basil, garlic, lemon, olive oil", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "10 pieces"
  },
  {
    id: "t04", name: "Seekh Kebab", category: "Tandoor", price: 350,
    description: "Juicy minced lamb skewers with green chilli, coriander and a smoky crust.",
    ingredients: "Lamb mince, coriander, green chilli, onion", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Non-vegetarian", spice: "Hot", portion: "5 skewers"
  },
  {
    id: "t05", name: "Tandoori Fish Tikka", category: "Tandoor", price: 410,
    description: "Boneless fish marinated with ajwain and chilli, charred until just done.",
    ingredients: "White fish, yogurt, ajwain, chilli, lemon", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: false, dietary: "Non-vegetarian", spice: "Medium", portion: "8 pieces"
  },
  {
    id: "t06", name: "Tandoori Cauliflower", category: "Tandoor", price: 270,
    description: "Whole cauliflower roasted in clay-oven heat with a saffron yogurt glaze.",
    ingredients: "Cauliflower, yogurt, saffron, turmeric, cumin", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: true, dietary: "Vegetarian", spice: "Mild", portion: "Half head"
  },

  {
    id: "m01", name: "Butter Chicken", category: "Main Course", price: 390,
    description: "Tandoor chicken folded through silky tomato gravy, butter and gentle spice.",
    ingredients: "Chicken, tomato, butter, cream, fenugreek", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: false, bestseller: true, special: true, dietary: "Non-vegetarian", spice: "Mild", portion: "Half / Full"
  },
  {
    id: "m02", name: "Dal Makhani", category: "Main Course", price: 290,
    description: "Black lentils simmered overnight with butter, tomato and a touch of cream.",
    ingredients: "Black lentil, kidney beans, butter, cream, tomato", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Vegetarian", spice: "Mild", portion: "Bowl"
  },
  {
    id: "m03", name: "Kashmiri Rogan Josh", category: "Main Course", price: 450,
    description: "Slow-braised lamb in a fragrant Kashmiri chilli and fennel gravy.",
    ingredients: "Lamb, Kashmiri chilli, fennel, ginger, saffron", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: true, dietary: "Non-vegetarian", spice: "Medium", portion: "Half / Full"
  },
  {
    id: "m04", name: "Kadai Paneer", category: "Main Course", price: 320,
    description: "Soft paneer, bell pepper and onion tossed with toasted kadai masala.",
    ingredients: "Paneer, bell pepper, onion, coriander, spices", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Vegetarian", spice: "Medium", portion: "Half / Full"
  },
  {
    id: "m05", name: "Laal Maas", category: "Main Course", price: 470,
    description: "Rajasthani lamb curry with red chillies, garlic and a deep roasted finish.",
    ingredients: "Lamb, Mathania chilli, garlic, yogurt", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: true, dietary: "Non-vegetarian", spice: "Hot", portion: "Half / Full"
  },
  {
    id: "m06", name: "Palak Corn", category: "Main Course", price: 280,
    description: "Velvety spinach with sweet corn, toasted cumin and a light cream finish.",
    ingredients: "Spinach, sweet corn, cumin, cream, garlic", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "Half / Full"
  },
  {
    id: "m07", name: "Goan Fish Curry", category: "Main Course", price: 430,
    description: "Coastal curry of fish, coconut and tamarind with a bright chilli finish.",
    ingredients: "Fish, coconut, tamarind, chilli, curry leaf", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: true, spicy: true, bestseller: false, special: false, dietary: "Non-vegetarian", spice: "Medium", portion: "Half / Full"
  },
  {
    id: "m08", name: "Bengali Kosha Mangsho", category: "Main Course", price: 480,
    description: "Dark, slow-cooked mutton with caramelized onion, potato and whole spices.",
    ingredients: "Mutton, onion, potato, cinnamon, cardamom", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Non-vegetarian", spice: "Medium", portion: "Half / Full"
  },

  {
    id: "b01", name: "Old-City Chicken Biryani", category: "Biryani", price: 360,
    description: "Aromatic basmati, saffron, spiced chicken and a soft potato — sealed and steamed.",
    ingredients: "Basmati rice, chicken, saffron, potato, fried onion", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: true, special: true, dietary: "Non-vegetarian", spice: "Medium", portion: "Single / Double"
  },
  {
    id: "b02", name: "Mutton Biryani", category: "Biryani", price: 440,
    description: "Long-grain rice layered with tender mutton, saffron and fried onions.",
    ingredients: "Basmati rice, mutton, saffron, fried onion, mint", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Non-vegetarian", spice: "Medium", portion: "Single / Double"
  },
  {
    id: "b03", name: "Subz Dum Biryani", category: "Biryani", price: 310,
    description: "Seasonal vegetables, basmati rice and saffron cooked slowly in sealed handi.",
    ingredients: "Basmati rice, vegetables, saffron, mint, fried onion", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "Single / Double"
  },
  {
    id: "b04", name: "Prawn Biryani", category: "Biryani", price: 430,
    description: "Coastal prawns layered with spiced rice, coconut, mint and roasted curry leaves.",
    ingredients: "Prawns, basmati rice, coconut, mint, curry leaf", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: true, dietary: "Non-vegetarian", spice: "Medium", portion: "Single / Double"
  },
  {
    id: "b05", name: "Paneer Tikka Biryani", category: "Biryani", price: 330,
    description: "Smoky paneer tikka folded into saffron rice with mint and browned onion.",
    ingredients: "Paneer, basmati rice, saffron, mint, onion", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: true, bestseller: false, special: false, dietary: "Vegetarian", spice: "Medium", portion: "Single / Double"
  },

  {
    id: "br01", name: "Garlic Naan", category: "Breads", price: 90,
    description: "Soft tandoor naan brushed with garlic butter and fresh coriander.",
    ingredients: "Refined flour, garlic, butter, coriander", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Vegetarian", spice: "Mild", portion: "2 pieces"
  },
  {
    id: "br02", name: "Butter Tandoori Roti", category: "Breads", price: 55,
    description: "Charred whole-wheat roti finished with a light swipe of butter.",
    ingredients: "Whole wheat flour, butter", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "2 pieces"
  },
  {
    id: "br03", name: "Laccha Paratha", category: "Breads", price: 110,
    description: "Flaky layered paratha with crisp edges and a buttery center.",
    ingredients: "Refined flour, whole wheat, butter", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "2 pieces"
  },
  {
    id: "br04", name: "Cheese & Chilli Naan", category: "Breads", price: 150,
    description: "Tandoor naan stuffed with melting cheese, green chilli and coriander.",
    ingredients: "Flour, cheese, green chilli, coriander", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Vegetarian", spice: "Medium", portion: "1 naan"
  },
  {
    id: "br05", name: "Missi Roti", category: "Breads", price: 85,
    description: "Gram flour roti with ajwain, onion and fresh coriander.",
    ingredients: "Gram flour, wheat flour, ajwain, onion", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "2 pieces"
  },

  {
    id: "c01", name: "Chilli Garlic Noodles", category: "Chinese", price: 280,
    description: "Wok-tossed noodles with garlic, sesame, spring onion and fresh chilli.",
    ingredients: "Noodles, garlic, sesame, spring onion, chilli", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: true, bestseller: true, special: false, dietary: "Vegan", spice: "Hot", portion: "Bowl"
  },
  {
    id: "c02", name: "Wok Pepper Chicken", category: "Chinese", price: 330,
    description: "Tender chicken tossed with cracked pepper, onion and smoky wok sauce.",
    ingredients: "Chicken, onion, black pepper, soy, garlic", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: false, dietary: "Non-vegetarian", spice: "Medium", portion: "Bowl"
  },
  {
    id: "c03", name: "Crispy Chilli Paneer", category: "Chinese", price: 300,
    description: "Crisp paneer, peppers and onion in a glossy chilli-garlic glaze.",
    ingredients: "Paneer, bell pepper, onion, chilli, soy", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: true, bestseller: true, special: false, dietary: "Vegetarian", spice: "Hot", portion: "Bowl"
  },
  {
    id: "c04", name: "Schezwan Prawn Rice", category: "Chinese", price: 390,
    description: "Fragrant wok rice with prawns, egg, scallion and house Schezwan sauce.",
    ingredients: "Rice, prawns, egg, scallion, Schezwan sauce", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=82",
    vegetarian: false, vegan: false, spicy: true, bestseller: false, special: true, dietary: "Non-vegetarian", spice: "Hot", portion: "Bowl"
  },
  {
    id: "c05", name: "Vegetable Manchurian", category: "Chinese", price: 270,
    description: "Crisp vegetable dumplings with ginger, garlic and glossy Manchurian sauce.",
    ingredients: "Cabbage, carrot, beans, ginger, garlic, soy", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: true, bestseller: false, special: false, dietary: "Vegan", spice: "Medium", portion: "8 pieces"
  },

  {
    id: "d01", name: "Smoked Mango Chaas", category: "Beverages", price: 130,
    description: "Chilled buttermilk with roasted cumin, mint and a whisper of smoked mango.",
    ingredients: "Curd, water, mango, cumin, mint", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "300ml"
  },
  {
    id: "d02", name: "Kesar Cold Coffee", category: "Beverages", price: 190,
    description: "Silky cold coffee with saffron, vanilla and a soft cream top.",
    ingredients: "Coffee, milk, saffron, vanilla, cream", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Vegetarian", spice: "Mild", portion: "350ml"
  },
  {
    id: "d03", name: "Nimbu Basil Fizz", category: "Beverages", price: 150,
    description: "Fresh lime and basil with sparkling water and a touch of cane sugar.",
    ingredients: "Lime, basil, sparkling water, cane sugar", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "350ml"
  },
  {
    id: "d04", name: "Masala Iced Tea", category: "Beverages", price: 140,
    description: "Black tea chilled with orange, cardamom, clove and a little jaggery.",
    ingredients: "Black tea, orange, cardamom, clove, jaggery", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "350ml"
  },
  {
    id: "d05", name: "Fresh Watermelon Cooler", category: "Beverages", price: 160,
    description: "Fresh watermelon, basil and lime served ice cold.",
    ingredients: "Watermelon, basil, lime", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "350ml"
  },
  {
    id: "d06", name: "House Filter Coffee", category: "Beverages", price: 120,
    description: "South Indian filter coffee brewed strong, aromatic and balanced.",
    ingredients: "Arabica blend, milk, sugar", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Vegetarian", spice: "Mild", portion: "180ml"
  },

  {
    id: "ds01", name: "Gulab Jamun Tres Leches", category: "Desserts", price: 240,
    description: "Warm gulab jamun layered into a cardamom milk cake with pistachio.",
    ingredients: "Gulab jamun, milk, cream, cardamom, pistachio", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: true, dietary: "Vegetarian", spice: "Mild", portion: "1 serving"
  },
  {
    id: "ds02", name: "Burnt Basque Cheesecake", category: "Desserts", price: 260,
    description: "Dark caramelized top, creamy center and just enough sea salt.",
    ingredients: "Cream cheese, cream, egg, sugar, vanilla", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: true, special: false, dietary: "Vegetarian", spice: "Mild", portion: "1 slice"
  },
  {
    id: "ds03", name: "Dark Chocolate Kulfi", category: "Desserts", price: 220,
    description: "Dense, slow-churned kulfi with dark chocolate, cocoa nibs and sea salt.",
    ingredients: "Milk, cream, dark chocolate, cocoa, pistachio", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "2 slices"
  },
  {
    id: "ds04", name: "Mango Saffron Phirni", category: "Desserts", price: 210,
    description: "Silky ground-rice pudding layered with ripe mango and saffron.",
    ingredients: "Rice, milk, mango, saffron, pistachio", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: false, spicy: false, bestseller: false, special: false, dietary: "Vegetarian", spice: "Mild", portion: "Bowl"
  },
  {
    id: "ds05", name: "Coconut Jaggery Payasam", category: "Desserts", price: 190,
    description: "South Indian-style coconut pudding sweetened with dark jaggery.",
    ingredients: "Coconut milk, jaggery, rice, cardamom, cashew", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=82",
    vegetarian: true, vegan: true, spicy: false, bestseller: false, special: false, dietary: "Vegan", spice: "Mild", portion: "Bowl"
  }
];


const categoryLabels = {
  all: "সব",
  Starters: "স্টার্টার",
  Soups: "স্যুপ",
  Tandoor: "তন্দুর",
  "Main Course": "মেইন কোর্স",
  Biryani: "বিরিয়ানি",
  Breads: "রুটি ও নান",
  Chinese: "চাইনিজ",
  Beverages: "পানীয়",
  Desserts: "ডেজার্ট"
};

const dietaryLabels = {
  vegetarian: "ভেজিটেরিয়ান",
  vegan: "ভেগান",
  nonveg: "নন-ভেজ"
};

const spiceLabels = {
  Mild: "কম ঝাল",
  Medium: "মাঝারি ঝাল",
  Hot: "ঝাল"
};

const portionLabels = {
  "Half / Full": "হাফ / ফুল",
  "Single / Double": "সিঙ্গেল / ডাবল",
  "2 pieces": "২ পিস",
  "1 naan": "১ নান",
  "Bowl": "বোল",
  "One bowl": "১ বোল",
  "6 pieces": "৬ পিস",
  "5 pieces": "৫ পিস",
  "8 pieces": "৮ পিস",
  "10 pieces": "১০ পিস",
  "6 prawns": "৬টি প্রন",
  "5 skewers": "৫টি স্কিউয়ার",
  "Half head": "অর্ধেক",
  "1 serving": "১ পরিবেশন",
  "1 slice": "১ স্লাইস",
  "2 slices": "২ স্লাইস",
  "300ml": "৩০০ মি.লি.",
  "350ml": "৩৫০ মি.লি.",
  "180ml": "১৮০ মি.লি."
};

const bengaliDescriptions = {
  "s01": "চারগ্রিল করা ব্রকোলি, টক-মিষ্টি দই, ট্রাফল অয়েল আর টোস্টেড আমন্ডের দারুণ কম্বিনেশন।",
  "s02": "দই, আদা-রসুন ও সুগন্ধি মশলায় ম্যারিনেট করা চারগ্রিলড চিকেন — বাইরে ধোঁয়াটে, ভেতরে নরম।",
  "s03": "রোজ, জয়ত্রী আর গরম মশলার সুবাসে তৈরি নরম ও সিল্কি ল্যাম্ব গালৌটি কাবাব।",
  "s04": "পাতলা লোটাস স্টেম ক্রিস্প, ঝাল মরিচ, তিল আর হালকা গুড়ের গ্লেজে টস করা।",
  "s05": "চারকোলে ঝলসানো কিং প্রন, হালকা তন্দুরি মশলা আর শেষে টক লেবু-বাটারের ছোঁয়া।",
  "so01": "ধীরে রোস্ট করা টমেটোর উষ্ণ স্যুপ, সঙ্গে বেসিল অয়েল আর ক্রিস্পি গার্লিক।",
  "so02": "মাশরুমের সুগন্ধি ব্রথ, ফাটা গোলমরিচ, আদা আর স্প্রিং অনিয়নের সতেজ স্বাদ।",
  "so03": "চিকেন, ডাল, নারকেল আর কারিপাতার মিশেলে তৈরি পরিচিত অ্যাংলো-ইন্ডিয়ান কমফোর্ট স্যুপ।",
  "so04": "মিষ্টি ভুট্টা, আদা, স্প্রিং অনিয়ন আর কাঁচালঙ্কার নরম ও সিল্কি স্যুপ।",
  "t01": "স্মোকি পনির, বেল পেপার আর টোস্টেড কড়াই মশলার তন্দুরি স্পেশাল।",
  "t02": "ক্রিমি, গোলমরিচের স্বাদের চিকেন স্কিউয়ার — তন্দুরের আগুনে চার হয়ে দারুণ রসালো।",
  "t03": "রসুন, হার্ব আর ফ্রেশ বেসিল পেস্টে ম্যারিনেট করা তন্দুরি মাশরুম।",
  "t04": "রসালো ল্যাম্ব সিক কাবাব, ধনেপাতা, কাঁচালঙ্কা আর ধোঁয়াটে চার-ফ্লেভারে ভরপুর।",
  "t05": "অজওয়াইন আর লঙ্কায় ম্যারিনেট করা বোনলেস মাছ — তন্দুরে ঠিক যতটা দরকার ততটাই চার।",
  "t06": "সাফরন-দইয়ের গ্লেজে রোস্ট করা সম্পূর্ণ ফুলকপি, ভেতরে নরম ও বাইরে হালকা চার।",
  "m01": "তন্দুরি চিকেনকে সিল্কি টমেটো গ্রেভি, বাটার আর হালকা মশলার সঙ্গে মিশিয়ে তৈরি আমাদের প্রিয় ক্লাসিক।",
  "m02": "রাতভর ধীরে রান্না করা কালো ডাল, বাটার, টমেটো আর হালকা ক্রিমে তৈরি গভীর স্বাদের ডাল।",
  "m03": "কাশ্মীরি লঙ্কা, মৌরি আর জাফরানের সুবাসে ধীরে রান্না করা নরম মাটন কারি।",
  "m04": "নরম পনির, বেল পেপার আর পেঁয়াজ টোস্টেড কড়াই মশলায় ঝটপট টস করা।",
  "m05": "রাজস্থানি স্টাইলে মাটন, লাল লঙ্কা আর রসুনের গভীর রোস্টেড স্বাদের ঝাল কারি।",
  "m06": "সিল্কি পালং, মিষ্টি ভুট্টা, টোস্টেড জিরে আর হালকা ক্রিমের আরামদায়ক কম্বিনেশন।",
  "m07": "নারকেল, তেঁতুল, কারিপাতা আর লঙ্কায় রান্না করা উপকূলের টাটকা মাছের ঝোল।",
  "m08": "গাঢ় রঙের কষা মাটন, ক্যারামেলাইজড পেঁয়াজ, আলু আর গোটা মশলার গভীর স্বাদ।",
  "b01": "সুগন্ধি বাসমতি, জাফরান, মশলাদার চিকেন আর নরম আলু — সিল করে ধীরে দমে রান্না করা।",
  "b02": "লম্বা দানার বাসমতি, নরম মাটন, জাফরান আর ভাজা পেঁয়াজের সমৃদ্ধ স্তর।",
  "b03": "মৌসুমি সবজি, বাসমতি, জাফরান আর মিন্ট দিয়ে ধীরে দমে রান্না করা হালকা ডাম বিরিয়ানি।",
  "b04": "নারকেল, মিন্ট আর রোস্টেড কারিপাতার সুবাসে স্তরে স্তরে তৈরি প্রন বিরিয়ানি।",
  "b05": "স্মোকি পনির টিক্কা, জাফরানি ভাত, মিন্ট আর ভাজা পেঁয়াজের সুন্দর মেলবন্ধন।",
  "br01": "তন্দুর থেকে গরম, নরম নান — ওপর থেকে গার্লিক বাটার আর ফ্রেশ ধনেপাতার ছোঁয়া।",
  "br02": "চারকরা আটার রুটি, শেষে হালকা বাটার মাখানো — গরম থাকতে পরিবেশন করা হয়।",
  "br03": "পাতলা স্তরে তৈরি ফ্লেকি লাচ্ছা পরোটা, বাইরে ক্রিস্পি আর ভেতরে বাটারি।",
  "br04": "গলতে থাকা চিজ, কাঁচালঙ্কা আর ধনেপাতা ভরা তন্দুরি নান — চিজপ্রেমীদের জন্য।",
  "br05": "বেসনের সঙ্গে মিশিয়ে তৈরি মিসি রুটি, অজওয়াইন, পেঁয়াজ আর ধনেপাতার সুবাসে ভরা।",
  "c01": "রসুন, তিল, স্প্রিং অনিয়ন আর ফ্রেশ লঙ্কায় ওয়কে ঝটপট টস করা নুডলস।",
  "c02": "টেন্ডার চিকেন, ফাটা গোলমরিচ, পেঁয়াজ আর স্মোকি ওয়ক সসের ঝাল-মশলাদার কম্বো।",
  "c03": "ক্রিস্পি পনির, বেল পেপার আর পেঁয়াজকে গ্লসি চিলি-গার্লিক গ্লেজে টস করা।",
  "c04": "সুগন্ধি ওয়ক রাইস, প্রন, ডিম, স্প্রিং অনিয়ন আর হাউস শেজওয়ান সস।",
  "c05": "ক্রিস্পি সবজি ডাম্পলিং, আদা-রসুন আর গ্লসি মাঞ্চুরিয়ান সসের মজাদার প্লেট।",
  "d01": "ঠান্ডা ঘোল, রোস্টেড জিরে, মিন্ট আর হালকা স্মোকি ম্যাংগোর দারুণ রিফ্রেশিং মিশেল।",
  "d02": "সিল্কি কোল্ড কফি, জাফরান, ভ্যানিলা আর নরম ক্রিমের স্তর — কফিপ্রেমীদের জন্য।",
  "d03": "ফ্রেশ লেবু, বেসিল আর স্পার্কলিং ওয়াটারের ঝকঝকে ও রিফ্রেশিং ফিজ।",
  "d04": "ব্ল্যাক টি, কমলালেবু, এলাচ, লবঙ্গ আর গুড়ের হালকা মিষ্টিতে ঠান্ডা মাসালা আইসড টি।",
  "d05": "ফ্রেশ তরমুজ, বেসিল আর লাইমে তৈরি বরফঠান্ডা সামার কুলার।",
  "d06": "স্ট্রং ও অ্যারোমাটিক সাউথ ইন্ডিয়ান ফিল্টার কফি — মিল্ক ও চিনি ব্যালান্স করে পরিবেশন।",
  "ds01": "গরম গুলাব জামুন, এলাচের মিল্ক কেক আর পিস্তাচিওর স্তর — মিষ্টির এক নতুন অভিজ্ঞতা।",
  "ds02": "উপরে ডার্ক ক্যারামেলাইজড ক্রাস্ট, ভেতরে নরম ক্রিমি চিজকেক আর হালকা সি-সল্ট।",
  "ds03": "ঘন ডার্ক চকোলেট কুলফি, কোকো নিবস, পিস্তাচিও আর সামান্য সি-সল্টের সঙ্গে।",
  "ds04": "সিল্কি চালের ক্ষীর, পাকা আম আর জাফরানের স্তরে তৈরি ঠান্ডা মিষ্টি।",
  "ds05": "নারকেল দুধ ও গুড়ের মিষ্টি ঘ্রাণে তৈরি নরম পায়েস, ওপর থেকে এলাচ ও কাজু।"
};

const bengaliIngredients = {
  "s01": "ব্রকোলি, টক দই, ট্রাফল অয়েল, আমন্ড, হার্ব",
  "s02": "চিকেন, দই, আদা, রসুন, কাশ্মীরি লঙ্কা",
  "s03": "ল্যাম্ব কিমা, ভাজা পেঁয়াজ, কাঁচা পেঁপে, গোলাপ, জয়ত্রী",
  "s04": "লোটাস স্টেম, তিল, লঙ্কা, গুড়, স্প্রিং অনিয়ন",
  "s05": "প্রন, দই, সর্ষে, লাইম, বাটার",
  "so01": "টমেটো, বেসিল, রসুন, গোলমরিচ, ক্রিম",
  "so02": "মাশরুম, আদা, গোলমরিচ, স্প্রিং অনিয়ন, সয়",
  "so03": "চিকেন, ডাল, নারকেল দুধ, কারিপাতা, ভাত",
  "so04": "মিষ্টি ভুট্টা, আদা, স্প্রিং অনিয়ন, লঙ্কা",
  "t01": "পনির, বেল পেপার, দই, কসুরি মেথি",
  "t02": "চিকেন, ক্রিম, কাজু, গোলমরিচ, লাইম",
  "t03": "মাশরুম, বেসিল, রসুন, লেবু, অলিভ অয়েল",
  "t04": "ল্যাম্ব কিমা, ধনেপাতা, কাঁচালঙ্কা, পেঁয়াজ",
  "t05": "সাদা মাছ, দই, অজওয়াইন, লঙ্কা, লেবু",
  "t06": "ফুলকপি, দই, জাফরান, হলুদ, জিরে",
  "m01": "চিকেন, টমেটো, বাটার, ক্রিম, মেথি",
  "m02": "কালো ডাল, রাজমা, বাটার, ক্রিম, টমেটো",
  "m03": "মাটন, কাশ্মীরি লঙ্কা, মৌরি, আদা, জাফরান",
  "m04": "পনির, বেল পেপার, পেঁয়াজ, ধনেপাতা, মশলা",
  "m05": "মাটন, মথানিয়া লঙ্কা, রসুন, দই",
  "m06": "পালং, মিষ্টি ভুট্টা, জিরে, ক্রিম, রসুন",
  "m07": "মাছ, নারকেল, তেঁতুল, লঙ্কা, কারিপাতা",
  "m08": "মাটন, পেঁয়াজ, আলু, দারচিনি, এলাচ",
  "b01": "বাসমতি, চিকেন, জাফরান, আলু, ভাজা পেঁয়াজ",
  "b02": "বাসমতি, মাটন, জাফরান, ভাজা পেঁয়াজ, মিন্ট",
  "b03": "বাসমতি, সবজি, জাফরান, মিন্ট, ভাজা পেঁয়াজ",
  "b04": "প্রন, বাসমতি, নারকেল, মিন্ট, কারিপাতা",
  "b05": "পনির, বাসমতি, জাফরান, মিন্ট, পেঁয়াজ",
  "br01": "ময়দা, রসুন, বাটার, ধনেপাতা",
  "br02": "আটা, বাটার",
  "br03": "ময়দা, আটা, বাটার",
  "br04": "ময়দা, চিজ, কাঁচালঙ্কা, ধনেপাতা",
  "br05": "বেসন, আটা, অজওয়াইন, পেঁয়াজ",
  "c01": "নুডলস, রসুন, তিল, স্প্রিং অনিয়ন, লঙ্কা",
  "c02": "চিকেন, পেঁয়াজ, গোলমরিচ, সয়, রসুন",
  "c03": "পনির, বেল পেপার, পেঁয়াজ, লঙ্কা, সয়",
  "c04": "ভাত, প্রন, ডিম, স্প্রিং অনিয়ন, শেজওয়ান সস",
  "c05": "বাঁধাকপি, গাজর, বিনস, আদা, রসুন, সয়",
  "d01": "দই, জল, আম, জিরে, মিন্ট",
  "d02": "কফি, দুধ, জাফরান, ভ্যানিলা, ক্রিম",
  "d03": "লাইম, বেসিল, স্পার্কলিং ওয়াটার, আখের চিনি",
  "d04": "ব্ল্যাক টি, কমলা, এলাচ, লবঙ্গ, গুড়",
  "d05": "তরমুজ, বেসিল, লাইম",
  "d06": "আরাবিকা কফি, দুধ, চিনি",
  "ds01": "গুলাব জামুন, দুধ, ক্রিম, এলাচ, পিস্তাচিও",
  "ds02": "ক্রিম চিজ, ক্রিম, ডিম, চিনি, ভ্যানিলা",
  "ds03": "দুধ, ক্রিম, ডার্ক চকোলেট, কোকো, পিস্তাচিও",
  "ds04": "চাল, দুধ, আম, জাফরান, পিস্তাচিও",
  "ds05": "নারকেল দুধ, গুড়, চাল, এলাচ, কাজু"
};

const categoryDescriptions = {
  Starters: "খাবার শুরুর জন্য ছোট প্লেটের মজার সব পদ।",
  Soups: "উষ্ণ, সুগন্ধি আরামদায়ক বাটি দিয়ে শুরু হোক খাবার।",
  Tandoor: "আগুনের তাপে ধোঁয়াটে চার আর তন্দুরের আসল স্বাদ।",
  "Main Course": "খাবারের মূল আকর্ষণ — ঘরোয়া, সমৃদ্ধ আর মনভরা স্বাদ।",
  Biryani: "সুগন্ধি চাল, জাফরান আর মশলার স্তরে ধীরে দমে রান্না।",
  Breads: "তন্দুর থেকে গরম রুটি, নান আর পরোটা — ভাগ করে খাওয়ার জন্য।",
  Chinese: "ওয়কে ঝলসানো, একটু ঝাল, একটু ক্রিস্পি আর পুরোপুরি মজাদার।",
  Beverages: "ঠান্ডা পানীয়, কফি আর হাউস রিফ্রেশমেন্টের সংগ্রহ।",
  Desserts: "শেষে একটু মিষ্টি — দিনের খাবারকে সুন্দর করে বিদায় দেওয়ার জন্য।"
};

const featuredIds = ["m01", "t04", "b01", "ds01", "s02"];

const state = {
  category: "all",
  filter: "all",
  search: "",
  lastFocusedElement: null
};

const menuContainer = document.getElementById("menuContainer");
const emptyState = document.getElementById("emptyState");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const searchHint = document.getElementById("searchHint");
const itemModal = document.getElementById("itemModal");
const modalClose = document.getElementById("modalClose");
const currentYear = document.getElementById("currentYear");

function imageUrl(url, width = 900) {
  return url.replace(/w=\d+/, `w=${width}`);
}

function getMatches() {
  const query = state.search.trim().toLowerCase();
  return menuItems.filter(item => {
    const categoryMatch = state.category === "all" || item.category === state.category;
    let filterMatch = true;
    if (state.filter === "vegetarian") filterMatch = item.vegetarian;
    if (state.filter === "non-vegetarian") filterMatch = !item.vegetarian;
    if (state.filter === "spicy") filterMatch = item.spicy;
    if (state.filter === "vegan") filterMatch = item.vegan;
    if (!categoryMatch || !filterMatch) return false;
    if (!query) return true;
    const haystack = [
      item.name,
      item.description,
      bengaliDescriptions[item.id] || "",
      item.category,
      categoryLabels[item.category] || "",
      item.ingredients,
      bengaliIngredients[item.id] || "",
      item.vegetarian ? "vegetarian ভেজিটেরিয়ান" : "non vegetarian নন-ভেজ",
      item.vegan ? "vegan ভেগান" : "",
      item.spicy ? "spicy ঝাল" : ""
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function badgeMarkup(item) {
  const badges = [];
  if (item.bestseller) badges.push('<span class="badge bestseller"><i class="bi bi-star-fill"></i> বেস্টসেলার</span>');
  if (item.special) badges.push('<span class="badge special"><i class="bi bi-award"></i> শেফের স্পেশাল</span>');
  if (item.spicy) badges.push('<span class="badge spicy"><i class="bi bi-fire"></i> ঝাল</span>');
  return badges.join("");
}

function dietMarkup(item) {
  const label = item.vegan ? dietaryLabels.vegan : item.vegetarian ? dietaryLabels.vegetarian : dietaryLabels.nonveg;
  const dot = item.vegetarian ? "veg" : "nonveg";
  return `<span class="diet-info"><span class="diet-dot ${dot}"></span>${label}</span>`;
}

function cardMarkup(item) {
  return `
    <article class="menu-card reveal" data-id="${item.id}" tabindex="0" role="button" aria-label="${item.name}-এর বিস্তারিত দেখুন">
      <div class="menu-image-wrap">
        <img loading="lazy" src="${imageUrl(item.image, 700)}" alt="${item.name}" width="700" height="700">
        <span class="menu-image-action" aria-hidden="true"><i class="bi bi-arrows-angle-expand"></i></span>
      </div>
      <div class="menu-card-copy">
        <div class="badge-row">${badgeMarkup(item)}</div>
        <div class="item-heading">
          <h4>${item.name}</h4>
          <span class="item-price">₹${item.price}</span>
        </div>
        <p class="item-description">${bengaliDescriptions[item.id] || item.description}</p>
        <div class="item-footer">
          ${dietMarkup(item)}
          <span class="open-detail" aria-hidden="true"><i class="bi bi-arrow-up-right"></i></span>
        </div>
      </div>
    </article>
  `;
}

function renderMenu() {
  const matches = getMatches();
  if (!matches.length) {
    menuContainer.innerHTML = "";
    emptyState.hidden = false;
    searchHint.textContent = state.search ? `“${state.search}” দিয়ে কোনও পদ পাওয়া যায়নি।` : "এই ফিল্টারে কোনও পদ পাওয়া যায়নি।";
    observeReveal();
    return;
  }

  emptyState.hidden = true;
  const visibleCategories = state.category === "all"
    ? [...new Set(matches.map(item => item.category))]
    : [state.category];

  menuContainer.innerHTML = visibleCategories.map(category => {
    const items = matches.filter(item => item.category === category);
    if (!items.length) return "";
    return `
      <section class="menu-category" id="category-${slugify(category)}" aria-labelledby="heading-${slugify(category)}">
        <div class="category-heading">
          <div>
            <p class="eyebrow"><span></span> ${String(items.length).padStart(2, "0")}টি পদ</p>
            <h3 id="heading-${slugify(category)}">${categoryLabels[category] || category}</h3>
          </div>
          <p>${categoryDescriptions[category] || "Made fresh for the table."}</p>
        </div>
        <div class="menu-grid">${items.map(cardMarkup).join("")}</div>
      </section>
    `;
  }).join("");

  bindCards();
  observeReveal();
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function bindCards() {
  const cards = [...document.querySelectorAll(".menu-card")];
  cards.forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });

  if (window.GLightbox) {
    const oldLightbox = window.__menuLightbox;
    if (oldLightbox) oldLightbox.destroy();
    const elements = cards.map(card => {
      const item = menuItems.find(menuItem => menuItem.id === card.dataset.id);
      return {
        href: imageUrl(item.image, 1400),
        type: "image",
        title: item.name,
        description: `${bengaliDescriptions[item.id] || item.description} · ₹${item.price}`
      };
    });
    window.__menuLightbox = GLightbox({
      elements,
      touchNavigation: true,
      loop: false,
      closeButton: true,
      zoomable: true,
      openEffect: "zoom",
      closeEffect: "fade"
    });
    cards.forEach((card, index) => {
      const imageWrap = card.querySelector(".menu-image-wrap");
      if (!imageWrap) return;
      imageWrap.addEventListener("click", event => {
        event.stopPropagation();
        window.__menuLightbox.openAt(index);
      });
    });
  }
}

function renderFeatured() {
  const container = $("#featuredCarousel");
  container.trigger("destroy.owl.carousel");
  container.html(featuredIds.map(id => {
    const item = menuItems.find(menuItem => menuItem.id === id);
    return `
      <article class="chef-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${item.name}-এর বিস্তারিত দেখুন">
        <img loading="lazy" src="${imageUrl(item.image, 1000)}" alt="${item.name}" width="1000" height="700">
        <div class="chef-card-overlay"></div>
        <div class="chef-card-copy">
          <span class="card-tag">${categoryLabels[item.category]} · ${spiceLabels[item.spice]}</span>
          <h3>${item.name}</h3>
          <p>${bengaliDescriptions[item.id] || item.description}</p>
          <div class="card-price-row">
            <span class="card-price">₹${item.price}</span>
            <span class="card-tag">বিস্তারিত দেখুন <i class="bi bi-arrow-up-right"></i></span>
          </div>
        </div>
      </article>
    `;
  }).join(""));
  container.owlCarousel({
    loop: false,
    margin: 14,
    nav: true,
    dots: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 4700,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      580: { items: 2 },
      900: { items: 3 }
    }
  });
  container.off("click", ".chef-card").on("click", ".chef-card", function() {
    openModal(this.dataset.id);
  });
  container.off("keydown", ".chef-card").on("keydown", ".chef-card", function(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(this.dataset.id);
    }
  });
}

function openModal(id) {
  const item = menuItems.find(menuItem => menuItem.id === id);
  if (!item) return;
  state.lastFocusedElement = document.activeElement;
  document.getElementById("modalImage").src = imageUrl(item.image, 1200);
  document.getElementById("modalImage").alt = item.name;
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalCategory").textContent = `${categoryLabels[item.category] || item.category} · ${item.vegan ? dietaryLabels.vegan : item.vegetarian ? dietaryLabels.vegetarian : dietaryLabels.nonveg}`;
  document.getElementById("modalPrice").textContent = `₹${item.price}`;
  document.getElementById("modalDescription").textContent = bengaliDescriptions[item.id] || item.description;
  document.getElementById("modalIngredients").textContent = bengaliIngredients[item.id] || item.ingredients;
  document.getElementById("modalSpice").textContent = spiceLabels[item.spice] || item.spice;
  document.getElementById("modalDietary").textContent = item.vegan ? dietaryLabels.vegan : item.vegetarian ? dietaryLabels.vegetarian : dietaryLabels.nonveg;
  document.getElementById("modalPortion").textContent = portionLabels[item.portion] || item.portion;
  document.getElementById("modalBadges").innerHTML = badgeMarkup(item);
  itemModal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  itemModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  const icons = [document.getElementById("themeToggle"), document.getElementById("themeToggleDesktop")]
    .filter(Boolean);
  icons.forEach(button => {
    button.innerHTML = `<i class="bi ${isDark ? "bi-sun" : "bi-moon-stars"}"></i><span>${button.id === "themeToggleDesktop" ? "থিম" : ""}</span>`;
    button.setAttribute("aria-label", isDark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন");
  });
  localStorage.setItem("ember-theme", theme);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#171411" : "#f7f2ea");
}

function toggleTheme() {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}

function setCategory(category, shouldScroll = false) {
  state.category = category;
  document.querySelectorAll(".category-chip").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });
  renderMenu();
  if (shouldScroll) {
    const target = category === "all" ? document.getElementById("main-menu") : document.getElementById(`category-${slugify(category)}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll(".filter-chip").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderMenu();
}

function toggleSearch(forceOpen = null) {
  const shouldOpen = forceOpen === null ? searchPanel.hidden : forceOpen;
  searchPanel.hidden = !shouldOpen;
  if (shouldOpen) {
    searchInput.focus();
    if (window.innerWidth < 701) {
      document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function observeReveal() {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    el.style.transition = "opacity .45s ease, transform .45s ease";
    observer.observe(el);
  });
}

function resetAll() {
  state.category = "all";
  state.filter = "all";
  state.search = "";
  searchInput.value = "";
  setCategory("all");
  setFilter("all");
  toggleSearch(false);
}

document.addEventListener("DOMContentLoaded", () => {
  currentYear.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("ember-theme");
  const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(preferredTheme);

  renderFeatured();
  renderMenu();

  document.querySelectorAll(".category-chip").forEach(button => {
    button.addEventListener("click", () => setCategory(button.dataset.category, true));
  });

  document.querySelectorAll(".filter-chip").forEach(button => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  document.getElementById("openSearch").addEventListener("click", () => toggleSearch());
  document.getElementById("mobileSearch").addEventListener("click", () => toggleSearch(true));
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("themeToggleDesktop").addEventListener("click", toggleTheme);

  searchInput.addEventListener("input", event => {
    state.search = event.target.value;
    renderMenu();
    searchHint.textContent = state.search
      ? `“${state.search}” মিলিয়ে পদ দেখানো হচ্ছে।`
      : "“Chicken”, “Paneer”, “ঝাল” বা “Dessert” লিখে খুঁজুন।";
  });

  document.getElementById("clearSearch").addEventListener("click", () => {
    searchInput.value = "";
    state.search = "";
    renderMenu();
    searchInput.focus();
    searchHint.textContent = "“Chicken”, “Paneer”, “ঝাল” বা “Dessert” লিখে খুঁজুন।";
  });

  document.getElementById("resetFilters").addEventListener("click", resetAll);
  modalClose.addEventListener("click", closeModal);

  itemModal.addEventListener("click", event => {
    if (event.target === itemModal) closeModal();
  });

  document.getElementById("modalCall").addEventListener("click", () => {
    window.location.href = "tel:+919876543210";
  });

  document.addEventListener("keydown", event => {
    if (itemModal.hidden) return;
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (event.key === "Tab") {
      const focusable = itemModal.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
