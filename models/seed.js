// Contains the seed data
const products = [
    {
      name: "Superyacht A",
      description: "One of the most unique and stylish superyachts ever created, boasting luxurious amenities such as a helipad, swimming pool, and underwater observation room.",
      city: "Monaco",
      state: null,
      country: "Italy",
      category: "Yachts",
      photo: "https://en.wikipedia.org/wiki/A_%28sailing_yacht%29#/media/File:White_Pearl_A_Seite.JPG",
      condition: "Used",
      askingPrice: 500000000,
      quantity: 1,
      isFeatured: true
    },
    {
      name: "Boeing Business Jet",
      description: "A luxurious private jet designed for the discerning traveler, with custom interiors that include a master suite, multiple lounges, and a conference room.",
      city: "Seattle",
      state: "Washington",
      country: "USA",
      category: "Private Jets",
      photo: "https://jetsetters-aviation.com/wp-content/uploads/BBJ.jpeg",
      condition: "Used",
      askingPrice: 100000000,
      quantity: 3,
      isFeatured: true
    },
    {
      name: "Necker Island",
      description: "A 74-acre private island in the British Virgin Islands owned by billionaire entrepreneur Richard Branson. Features stunning beaches, luxurious villas, and a wide range of outdoor activities.",
      city: "Virgin Gorda",
      state: null,
      country: "British Virgin Islands",
      category: "Private Islands",
      photo: "https://media.cntraveler.com/photos/61a7ee7ace5a389d35064e81/master/w_1600,c_limit/Moskito%20Island_Moskito%20Island%20aerial%20(2).jpg",
      condition: "Used",
      askingPrice: 100000000,
      quantity: 1,
      isFeatured: true
    },
    {
      name: "The World",
      description: "A private residential yacht that offers its wealthy residents the ultimate luxury lifestyle, with 165 private residences, restaurants, a spa, and a golf course.",
      city: "Oslo",
      state: null,
      country: "Norway",
      category: "Yachts",
      photo: "https://media.cnn.com/api/v1/images/stellar/prod/170505161720-the-world-in-ross-sea.jpg?q=x_711,y_315,h_1432,w_2546,c_crop/h_720,w_1280",
      condition: "Used",
      askingPrice: 75000000,
      quantity: 1,
      isFeatured: true
    },
    {
      name: "The Serengeti House",
      description: "A luxurious private residence located in the heart of the Serengeti National Park, offering breathtaking views of the African savannah and unparalleled wildlife experiences.",
      city: "Serengeti",
      state: null,
      country: "Tanzania",
      category: "Residences",
      photo: "https://singitacdn.s3.eu-west-1.amazonaws.com/library/wp-content/uploads/Singita-Malilangwe-House-Aerial-View-1024x768.jpg",
      condition: "New",
      askingPrice: 15000000,
      quantity: 1,
      isFeatured: false
    },
    {
      name: "Bugatti La Voiture Noire",
      description: "A one-of-a-kind luxury car created by Bugatti, featuring a sleek black carbon fiber exterior and a powerful 16-cylinder engine. Only one was made and sold for a record-breaking $18.7 million.",
      city: "Molsheim",
      state: null,
      country: "France",
      category: "Luxury Cars",
      photo: "https://www.motortrend.com/uploads/sites/5/2019/03/Bugatti-La-Voiture-Noire-6.jpg?fit=around%7C770:481.25",
      condition: "New",
      askingPrice: 18900000,
      quantity: 1,
      isFeatured: true
    },
    {
      name: "Skyscraper",
      description: "Residential skyscraper along Billionaires' Row on the the South Side of Central Park South. ",
      city: "New York",
      state: "New York",
      country: "USA",
      category: "Residences",
      photo: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/01/manhattan-skyline-new-york-city-usa-iStock-914218078-1200x801.jpg",
      condition: "New",
      askingPrice: 1400000000,
      quantity: 1,
      isFeatured: true
    },
    {
      name: "French Mountain Chalet",
      description: "A luxurious ski chalet located in the French Alps. This stunning residence features six bedrooms, seven bathrooms, and spectacular views of the surrounding mountains. With easy access to world-class skiing and a wide range of outdoor activities, this is the perfect retreat for any outdoor enthusiast.",
      city: "Samoëns",
      state: null,
      country: "France",
      category: "Residences",
      photo: "https://static01.nyt.com/images/2022/11/23/realestate/23IHH-Alps-01/23IHH-Alps-superJumbo.jpg?quality=75&auto=webp",
      condition: "New",
      askingPrice: 4200000,
      quantity: 1,
      isFeatured: false
    }
  ];
  

// Export the seed data to `models/index.js`
module.exports = products