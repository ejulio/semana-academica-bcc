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
      //price: "FREE",
      venue: "FURB - Auditório do bloco J",
      address: "Rua Antônio da Veiga, 140 - Victor Konder",
      city: "Blumenau",
      state: "Santa Catarina",
      coordinates: {
        latitude: -26.9048506,
        longitude: -49.0776500
      }
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/Calcomp/semana-academica-bcc"
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
      //'about',
      'location',
      'speakers',
      //'schedule',
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
        day: "", // 14/04/2014
        schedule: [{
            name: "Check-in",
            time: "18h30"
        }, {
            name: "Thiago Boufleuhr",
            photo: "themes/yellow-swan/img/thiago_boufleuhr.jpg",
            bio: "Consultor em arquitetura e desenvolvimento de sofware com foco em tecnologias Microsoft. Especialista em Microsoft .NET (ASP.NET MVC, ASP.NET WebAPI, Entity Framework, Windows Azure) com titulação MCT, Professional Scrum Master I (PSM I) e escritor de artigos para .NET Magazine. Atualmente possui uma empresa de consultoria e treinamentos em diversos temas relacionados a tecnologia.",
            company: "TB Training",
            twitter: "",
            presentation: {
                title: "Windos Azure WebSites – Descomplique a nuvem",
                description: "Será demonstrado o uso do serviço Azure WebSites, quando utilizá-lo, como utilizá-lo e integração com outros serviços do Windows Azure, como Storage e Cache.",
                time: ""
            }
        }, {
            name: "Loiane Groner",
            photo: "http://www.loiane.com/wp-content/uploads/2009/01/livro_loiane-300x225.jpg",
            bio: "Bacharel em Ciência da Computação, trabalha como Gerente de Desenvolvimento de Projetos no Citibank (maior instituição financeira do mundo), em São Paulo. Possui 8+ anos de experiência em TI. Autora dos livrosExt JS 4 First Look, Mastering Ext JS e Sencha Architect App Development, todos publicados pela editora Packt e lançados mundialmente em inglês. Evangelista Java e Sencha Community Leader no Brasil.",
            company: "City Bank / www.loiane.com",
            twitter: "@loiane",
            presentation: {
                title: " Desenvolvimento Mobile Híbrido com HTML5: por onde começar?",
                description: "Descrição: Nessa palestra vamos ver uma introdução sobre tecnologias para começar a desenvolver mobile com HTML5, como HTML5, Sencha Touch e Jquery Mobile. E para o desenvolvimento nativo não ficar de fora, vamos falar também sobre phonegap, um framework que casa muito bem com as tecnologias já mencionadas e que permite fazer acesso a recursos do disposito, como câmera, geolocalização,, contatos, conexão, etc. Vamos ver também dicas e ferramentas que podem nos ajudar com o desenvolvimento de apps mobile híbridas.",
                time: ""
            }
        }]
    }, {
        day: "", // 15/04/2014
        schedule: [{
            name: "Check-in",
            time: "18h30"
        }, {
            name: "",
            photo: "http://www.clker.com/cliparts/5/7/4/8/13099629981030824019profile.svg.hi.png",
            bio: "",
            company: "",
            twitter: "",
            presentation: {
                title: "A confirmar",
                description: "",
                time: ""
            }
        }, {
            name: "",
            photo: "http://www.clker.com/cliparts/5/7/4/8/13099629981030824019profile.svg.hi.png",
            bio: "",
            company: "",
            twitter: "",
            presentation: {
                title: "A confirmar",
                description: "",
                time: ""
            }
        }]
    }, {
        day: "", // 16/04/2014
        schedule: [{
            name: "",
            photo: "http://www.clker.com/cliparts/5/7/4/8/13099629981030824019profile.svg.hi.png",
            bio: "",
            company: "",
            twitter: "",
            presentation: {
                title: "A confirmar",
                description: "",
                time: ""
            }
        }, {
            name: "",
            photo: "http://www.clker.com/cliparts/5/7/4/8/13099629981030824019profile.svg.hi.png",
            bio: "",
            company: "",
            twitter: "",
            presentation: {
                title: "A confirmar",
                description: "",
                time: ""
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