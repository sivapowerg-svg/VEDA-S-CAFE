export interface MenuItem {
  id: string;
  name: string;
  teluguName: string;
  category: 'tea' | 'coffee' | 'milk' | 'health' | 'parcel';
  categoryLabel: string;
  teluguCategoryLabel: string;
  price: string;
  numericPrice?: number;
  priceNote?: string;
  description: string;
  teluguDescription: string;
  image: string;
  isSpecial?: boolean;
  highlightBadge?: string;
  flavorNotes: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  // Signature Special
  {
    id: 'crunchy-cup-tea',
    name: 'Crunchy Cup Tea',
    teluguName: 'క్రంచీ కప్ టీ',
    category: 'tea',
    categoryLabel: 'Signature Special',
    teluguCategoryLabel: 'సిగ్నేచర్ స్పెషల్',
    price: 'Price to be confirmed',
    priceNote: 'Ask at counter',
    description: 'Hot spiced Indian tea poured into an oven-baked crispy waffle cup. Drink the tea, then eat the cup!',
    teluguDescription: 'వేడి వేడి సుగంధభరిత టీతో కూడిన కరకరలాడే రుచికరమైన బిస్కెట్ కప్. టీ తాగండి, కప్ తినండి!',
    image: '/src/assets/images/signature_crunchy_cup_tea_1793623102249.jpg',
    isSpecial: true,
    highlightBadge: "The Veda's Special",
    flavorNotes: ['Cardamom', 'Caramel Waffle', 'Crispy Crunch']
  },
  // Tea & Beverages
  {
    id: 'tea',
    name: 'Tea',
    teluguName: 'టీ',
    category: 'tea',
    categoryLabel: 'Tea & Beverages',
    teluguCategoryLabel: 'టీ & పానీయాలు',
    price: '₹12',
    numericPrice: 12,
    description: 'Classic freshly brewed Indian milk chai made with rich tea leaves and fresh whole milk.',
    teluguDescription: 'తాజా పాలు మరియు నాణ్యమైన టీ పొడితో తయారైన అసలైన సంప్రదాయ టీ.',
    image: '/images/items/tea.jpg',
    flavorNotes: ['Robust', 'Creamy', 'Traditional']
  },
  {
    id: 'sp-tea',
    name: 'SP Tea (Special Tea)',
    teluguName: 'ఎస్పీ టీ (స్పెషల్ టీ)',
    category: 'tea',
    categoryLabel: 'Tea & Beverages',
    teluguCategoryLabel: 'టీ & పానీయాలు',
    price: '₹20',
    numericPrice: 20,
    description: 'Our barista special blend with aromatic spices and extra-thick creamy milk.',
    teluguDescription: 'ప్రత్యేక మసాలా దినుసులు మరియు చిక్కటి పాలతో తయారు చేసిన స్పెషల్ టీ.',
    image: '/images/items/sp-tea.jpg',
    isSpecial: true,
    highlightBadge: 'Chef Blend',
    flavorNotes: ['Elaichi', 'Clove hint', 'Velvety']
  },
  {
    id: 'allam-tea',
    name: 'Allam Tea (Ginger Chai)',
    teluguName: 'అల్లం టీ',
    category: 'tea',
    categoryLabel: 'Tea & Beverages',
    teluguCategoryLabel: 'టీ & పానీయాలు',
    price: '₹20',
    numericPrice: 20,
    description: 'Freshly pounded organic ginger simmered into golden milk chai for a comforting warm kick.',
    teluguDescription: 'తాజా దంచిన అల్లం రసంతో మరిగించిన ఘాటైన మరియు హాయినిచ్చే అల్లం టీ.',
    image: '/images/items/allam-tea.jpg',
    flavorNotes: ['Fresh Ginger', 'Warming', 'Zesty']
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    teluguName: 'లెమన్ టీ',
    category: 'tea',
    categoryLabel: 'Tea & Beverages',
    teluguCategoryLabel: 'టీ & పానీయాలు',
    price: '₹20',
    numericPrice: 20,
    description: 'Crisp black tea steeped to amber perfection and lifted with freshly squeezed sun-ripened lemons.',
    teluguDescription: 'తాజా నిమ్మరసంతో కలగలిసిన రిఫ్రెషింగ్ మరియు శక్తినిచ్చే లెమన్ టీ.',
    image: '/images/items/lemon-tea.jpg',
    flavorNotes: ['Citrus Zing', 'Refreshing', 'Pure Amber']
  },
  {
    id: 'ginger-lemon-tea',
    name: 'Ginger Lemon Tea',
    teluguName: 'అల్లం లెమన్ టీ',
    category: 'tea',
    categoryLabel: 'Tea & Beverages',
    teluguCategoryLabel: 'టీ & పానీయాలు',
    price: '₹20',
    numericPrice: 20,
    description: 'Invigorating harmony of spicy fresh ginger and bright tangy lemon drops with mild natural honey tone.',
    teluguDescription: 'ఘాటైన అల్లం మరియు నిమ్మకాయ కలయికతో రూపొందించిన ఆరోగ్యకరమైన పానీయం.',
    image: '/images/items/ginger-lemon-tea.jpg',
    flavorNotes: ['Immunity', 'Spicy Lemon', 'Cleansing']
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    teluguName: 'గ్రీన్ టీ',
    category: 'tea',
    categoryLabel: 'Tea & Beverages',
    teluguCategoryLabel: 'టీ & పానీయాలు',
    price: '₹20',
    numericPrice: 20,
    description: 'Delicate handpicked whole green tea leaves delivering clean antioxidant wellness.',
    teluguDescription: 'సహజసిద్ధమైన గ్రీన్ టీ ఆకులతో చేసిన యాంటీఆక్సిడెంట్ నిండిన సంపూర్ణ ఆరోగ్య పానీయం.',
    image: '/images/items/green-tea.jpg',
    flavorNotes: ['Botanical', 'Detoxifying', 'Earthy']
  },
  // Coffee & Infusions
  {
    id: 'coffee',
    name: 'Coffee',
    teluguName: 'కాఫీ',
    category: 'coffee',
    categoryLabel: 'Coffee & Infusions',
    teluguCategoryLabel: 'కాఫీ & ఇన్ఫ్యూషన్లు',
    price: '₹20',
    numericPrice: 20,
    description: 'Rich roasted South Indian coffee brewed with dense frothy milk and golden crema.',
    teluguDescription: 'సువాసనగల కాఫీ గింజలతో, నురుగుతో కూడిన చిక్కటి దక్షిణ భారతీయ కాఫీ.',
    image: '/images/items/coffee.jpg',
    flavorNotes: ['Nutty Crema', 'Dark Roast', 'Smooth']
  },
  {
    id: 'sonti-coffee',
    name: 'Sonti Coffee (Dry Ginger Coffee)',
    teluguName: 'శొంఠి కాఫీ',
    category: 'coffee',
    categoryLabel: 'Coffee & Infusions',
    teluguCategoryLabel: 'కాఫీ & ఇన్ఫ్యూషన్లు',
    price: '₹20',
    numericPrice: 20,
    description: 'Ayurvedic sun-dried ginger (sonti) blended with fresh coffee decoction and jaggery essence.',
    teluguDescription: 'సాంప్రదాయ ఎండిన శొంఠితో తయారుచేసిన ఆయుర్వేద కాఫీ, గొంతుకు ఎంతో ఉపశమనం.',
    image: '/images/items/sonti-coffee.jpg',
    flavorNotes: ['Dry Ginger', 'Herbal Comfort', 'Spiced']
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee',
    teluguName: 'బ్లాక్ కాఫీ',
    category: 'coffee',
    categoryLabel: 'Coffee & Infusions',
    teluguCategoryLabel: 'కాఫీ & ఇన్ఫ్యూషన్లు',
    price: '₹20',
    numericPrice: 20,
    description: 'Pure unfiltered dark roast decoction with bold body and no added dairy.',
    teluguDescription: 'పాల కలయిక లేని స్వచ్ఛమైన, బలమైన బ్లాక్ కాఫీ డికాక్షన్.',
    image: '/images/items/black-coffee.jpg',
    flavorNotes: ['Bold Cocoa', 'Clean Finish', 'Zero Dairy']
  },
  // Milk & Specialty
  {
    id: 'milk',
    name: 'Milk',
    teluguName: 'పాలు',
    category: 'milk',
    categoryLabel: 'Milk & Specialty',
    teluguCategoryLabel: 'పాలు & స్పెషాలిటీ',
    price: '₹15',
    numericPrice: 15,
    description: 'Steamed pure farm-fresh dairy milk, served piping hot with gentle natural sweetness.',
    teluguDescription: 'తాజా స్వచ్ఛమైన పాడి పాలు, వేడిగా తియ్యగా అందించబడుతుంది.',
    image: '/images/items/milk.jpg',
    flavorNotes: ['Pure Dairy', 'Velvety', 'Wholesome']
  },
  {
    id: 'badam-milk',
    name: 'Badam Milk',
    teluguName: 'బాదం పాలు',
    category: 'milk',
    categoryLabel: 'Milk & Specialty',
    teluguCategoryLabel: 'పాలు & స్పెషాలిటీ',
    price: '₹20',
    numericPrice: 20,
    description: 'Golden saffron infused milk loaded with roasted California almond slivers and pistachios.',
    teluguDescription: 'కుంకుమపువ్వు సువాసనతో, వేయించిన బాదం మరియు పిస్తా పలుకులతో చేసిన రాజసమైన బాదం పాలు.',
    image: '/images/items/badam-milk.jpg',
    isSpecial: true,
    highlightBadge: 'Royal Sip',
    flavorNotes: ['Saffron', 'Crushed Almonds', 'Creamy Cardamom']
  },
  // Health Drinks
  {
    id: 'boost',
    name: 'Boost',
    teluguName: 'బూస్ట్',
    category: 'health',
    categoryLabel: 'Health Drinks',
    teluguCategoryLabel: 'హెల్త్ డ్రింక్స్',
    price: '₹20',
    numericPrice: 20,
    description: 'Nutritious chocolate malt energy beverage whipped hot into steaming milk.',
    teluguDescription: 'ఉత్సాహాన్నిచ్చే చాక్లెట్ మాల్ట్ ఎనర్జీ హెల్త్ డ్రింక్.',
    image: '/images/items/boost.jpg',
    flavorNotes: ['Chocolate Malt', 'Energy Boost', 'Rich']
  },
  {
    id: 'horlicks',
    name: 'Horlicks',
    teluguName: 'హార్లిక్స్',
    category: 'health',
    categoryLabel: 'Health Drinks',
    teluguCategoryLabel: 'హెల్త్ డ్రింక్స్',
    price: '₹20',
    numericPrice: 20,
    description: 'Wholesome malted barley and wheat milk drink, comforting and restorative.',
    teluguDescription: 'బార్లీ మరియు గోధుమ మాల్ట్ యొక్క పోషక విలువలతో కూడిన సాంప్రదాయ హార్లిక్స్.',
    image: '/images/items/horlicks.jpg',
    flavorNotes: ['Barley Malt', 'Gentle Sweetness', 'Restorative']
  },
  // Parcel Menu
  {
    id: 'tea-parcel',
    name: 'Tea Parcel',
    teluguName: 'టీ పార్శిల్',
    category: 'parcel',
    categoryLabel: 'Parcel Menu',
    teluguCategoryLabel: 'పార్శిల్ మెనూ',
    price: '₹30',
    numericPrice: 30,
    description: 'Convenient thermal flask pack sealing hot freshly prepared chai for home or workplace.',
    teluguDescription: 'ఇంటికి లేదా ఆఫీసుకు వేడి వేడిగా తీసుకెళ్లడానికి ప్రత్యేకంగా ప్యాక్ చేసిన టీ పార్శిల్.',
    image: '/images/items/tea-parcel.jpg',
    flavorNotes: ['Thermal Sealed', 'Serves Fresh', 'Piping Hot']
  },
  {
    id: 'coffee-parcel',
    name: 'Coffee Parcel',
    teluguName: 'కాఫీ పార్శిల్',
    category: 'parcel',
    categoryLabel: 'Parcel Menu',
    teluguCategoryLabel: 'పార్శిల్ మెనూ',
    price: 'Confirm price with owner',
    priceNote: 'Confirm price with owner',
    description: 'Frothy hot South Indian coffee packaged hot for your journey or family gathering.',
    teluguDescription: 'ప్రయాణాలకు మరియు కుటుంబ సభ్యులకు ప్రత్యేకంగా ప్యాక్ చేసిన వేడి కాఫీ పార్శిల్.',
    image: '/images/items/coffee-parcel.jpg',
    flavorNotes: ['Fresh Brew', 'Confirm at counter', 'Aromatic']
  },
  {
    id: 'milk-parcel',
    name: 'Milk Parcel',
    teluguName: 'పాలు పార్శిల్',
    category: 'parcel',
    categoryLabel: 'Parcel Menu',
    teluguCategoryLabel: 'పార్శిల్ మెనూ',
    price: '₹30',
    numericPrice: 30,
    description: 'Boiled fresh farm milk cleanly insulated and packed for takeaway convenience.',
    teluguDescription: 'తీసుకెళ్లడానికి పరిశుభ్రంగా ప్యాక్ చేయబడిన తాజా పాలు పార్శిల్.',
    image: '/images/items/milk-parcel.jpg',
    flavorNotes: ['Hygienic', 'Whole Milk', 'Thermal Wrap']
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-crunchy',
    title: 'The Signature Crunchy Cup Tea',
    category: 'Signature Special',
    image: '/src/assets/images/signature_crunchy_cup_tea_1793623102249.jpg',
    caption: 'Eat the cup after your tea. Crafted with edible crispy waffle biscuit.'
  },
  {
    id: 'gal-chai',
    title: 'Traditional Cutting Chai',
    category: 'Traditional Tea',
    image: '/images/items/tea.jpg',
    caption: 'Steaming glass kulhad chai with slow simmered ginger and green cardamom.'
  },
  {
    id: 'gal-art',
    title: 'The Art of Master Brewing',
    category: 'Tea Preparation',
    image: '/images/items/sp-tea.jpg',
    caption: 'Long pour aeration for thick creamy froth and velvety consistency.'
  },
  {
    id: 'gal-coffee',
    title: 'South Indian Filter Coffee',
    category: 'Coffee',
    image: '/images/items/coffee.jpg',
    caption: 'Served in a gleaming brass dabara and tumbler with authentic crema.'
  },
  {
    id: 'gal-badam',
    title: 'Golden Saffron Badam Milk',
    category: 'Specialty Beverage',
    image: '/images/items/badam-milk.jpg',
    caption: 'Rich almond cream milk adorned with Kashmiri saffron and pistachio crunch.'
  },
  {
    id: 'gal-ambiance',
    title: "Veda's Cafe Ambiance",
    category: 'Cafe Atmosphere',
    image: '/cafe-photo.jpg',
    caption: 'Warm golden lamps, dark wood warmth, and good conversations in Gudur.'
  },
  {
    id: 'gal-lemon',
    title: 'Infused Ginger Lemon Tea',
    category: 'Specialty Beverage',
    image: '/images/items/ginger-lemon-tea.jpg',
    caption: 'Sun-drenched citrus and spicy ginger root for an invigorating sip.'
  }
];
