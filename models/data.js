const Images = [
    {image: require('../assets/event(1).jpg')},
    {image: require('../assets/event(2).jpg')},
    {image: require('../assets/event(3).jpg')},
  ];
  
  export const data = [
    {
      id: '1',
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: 'MIP Event Planners',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      categories: ['Birthday','Wedding'],
    },
    {
      id: '2',
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: 'Shah Event Planners',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      categories: ['Birthday,Wedding'],
    },
    {
      id: '3',
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: 'Fatima Event Planners',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[2].image,
      rating: 3,
      reviews: 220,
      categories: ['Birthday','Wedding'],
    },

  ];

