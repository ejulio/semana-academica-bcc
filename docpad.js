module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Semana acadêmica de computação 2014",
      description: "Conference description",
      date: "14, 15, 16 de abril",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "FURB - Auditório do bloco J",
      address: "Rua Antônio da Veiga, 140 - Victor Konder",
      city: "Blumenau",
      state: "Santa Catarina",
      coordinates: {
        latitude: -26.9048500,
        longitude: -49.0776500
      }
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Apoio",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [{
        day: "14/04/2014",
        schedule: [{
            name: "Check-in / Breakfast",
            time: "18h30"
        }, {
            name: "Chuck Norris",
            photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            company: "Delta Command",
            twitter: "littlechuck",
            presentation: {
                title: "How to kill a elephant with one finger",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                time: "13h00"
            }
        }]
    }, {
        day: "15/04/2014",
        schedule: [{
            name: "Check-in / Breakfast",
            time: "18h30"
        }, {
            name: "Chuck Norris",
            photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            company: "Delta Command",
            twitter: "littlechuck",
            presentation: {
                title: "How to kill a elephant with one finger",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                time: "13h00"
            }
        }]
    }, {
        day: "16/04/2014",
        schedule: [{
            name: "Check-in / Breakfast",
            time: "18h30"
        }, {
            name: "Chuck Norris",
            photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            company: "Delta Command",
            twitter: "littlechuck",
            presentation: {
                title: "How to kill a elephant with one finger",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                time: "13h00"
            }
        }]
    }],

    // List of Sponsors
    sponsors: [],

    // List of Partners
    partners: [{
        name: "FURB",
        logo: "themes/yellow-swan/img/furb.jpg",
        url: "http://furb.br"
    }, {
        name: "DSC",
        logo: "themes/yellow-swan/img/furb.jpg",
        url: "http://www.inf.furb.br"
    }, {
        name: "CALCOMP",
        logo: "themes/yellow-swan/img/calcomp.png",
        url: "http://www.inf.furb.br"
    }],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};