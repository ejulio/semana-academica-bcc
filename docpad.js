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
      venue: "FURB - Auditório da biblioteca (Campus 1)",
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
      theme: "default",
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
            name: "Check-in",
            time: "18h 30min"
        }, {
            name: "Abertura",
            time: "18h 45min"
        }, {
            name: "Loiane Groner",
            photo: "http://www.loiane.com/wp-content/uploads/2009/01/livro_loiane-300x225.jpg",
            bio: "Bacharel em Ciência da Computação, trabalha como Gerente de Desenvolvimento de Projetos no Citibank (maior instituição financeira do mundo), em São Paulo. Possui 8+ anos de experiência em TI. Autora dos livrosExt JS 4 First Look, Mastering Ext JS e Sencha Architect App Development, todos publicados pela editora Packt e lançados mundialmente em inglês. Evangelista Java e Sencha Community Leader no Brasil.",
            company: "City Bank / www.loiane.com",
            twitter: "@loiane",
            presentation: {
                title: " Desenvolvimento Mobile Híbrido com HTML5: por onde começar?",
                description: "Descrição: Nessa palestra vamos ver uma introdução sobre tecnologias para começar a desenvolver mobile com HTML5, como HTML5, Sencha Touch e Jquery Mobile. E para o desenvolvimento nativo não ficar de fora, vamos falar também sobre phonegap, um framework que casa muito bem com as tecnologias já mencionadas e que permite fazer acesso a recursos do disposito, como câmera, geolocalização,, contatos, conexão, etc. Vamos ver também dicas e ferramentas que podem nos ajudar com o desenvolvimento de apps mobile híbridas.",
                time: "19h"
            }
        }, {
            name: 'Coffee break',
            time: '20h 15min' 
        }, {
            name: "Thiago Boufleuhr",
            photo: "images/thiago_boufleuhr.jpg",
            bio: "Consultor em arquitetura e desenvolvimento de sofware com foco em tecnologias Microsoft. Especialista em Microsoft .NET (ASP.NET MVC, ASP.NET WebAPI, Entity Framework, Windows Azure) com titulação MCT, Professional Scrum Master I (PSM I) e escritor de artigos para .NET Magazine. Atualmente possui uma empresa de consultoria e treinamentos em diversos temas relacionados a tecnologia.",
            company: "TB Training",
            twitter: "",
            presentation: {
                title: "Windos Azure WebSites – Descomplique a nuvem",
                description: "Será demonstrado o uso do serviço Azure WebSites, quando utilizá-lo, como utilizá-lo e integração com outros serviços do Windows Azure, como Storage e Cache.",
                time: "20h 30min"
            }
        }]
    }, {
        day: "15/04/2014",
        schedule: [{
            name: "Check-in",
            time: "18h 30min"
        }, {
            name: "Marcos Harbs",
            photo: "images/marcos_harbs.jpg",
            bio: "",
            company: "",
            twitter: "",
            presentation: {
                title: "Motor para Jogos 2D utilizando HTML5",
                description: "Este trabalho apresenta a implementação de um motor de jogos 2D em HTML5 e Javascript, um editor web para este motor e uma aplicação para exemplificar o uso destas duas implementações. O motor de jogos disponibiliza funcionalidades como criação de cena, criação de camadas, gerenciamento de objetos, gerenciamento de recurso de imagens e áudio, detecção de colisão, física de corpos rígidos (utilizando a biblioteca Box2DJS) e uma arquitetura reutilizável orientada a componentes. Para a criação do motor foi utilizada a linguagem Javascript juntamente com o elemento canvas do HTML5. Este trabalho também aborda técnicas para abstração da parte comum de um jogo e apresenta os resultados obtidos com os testes de desempenho e memória realizados através dos principais navegadores do mercado. ",
                time: "18h 45min"
            }
        }, {
            name: "Jackson Krause",
            photo: "images/jackson_krause.jpg",
            bio: "",
            company: "",
            twitter: "",
            presentation: {
                title: "Uber: uma Ferramenta para Realce de Microcalcificações Mamárias",
                description: "O trabalho descreve o desenvolvimento de uma ferramenta capaz de realçar microcalcificações presentes em mamografias digitais. A ferramenta obteve 81,81% de acerto em relação ao que a biblioteca MIAS aponta como maior concentração de microcalcificações. Os resultados demonstram que a ferramenta desenvolvida é eficiente para encontrar aglomerados de microcalcificações, porém necessita de alguns ajustes para diminuição de falsas microcalcificações eventualmente realçadas.",
                time: "19h 30min"
            }
        }, {
            name: 'Coffee break',
            time: '20h 15min' 
        }, {
            name: "Rafael Mueller",
            photo: "images/rafael_mueller.jpg",
            bio: "Arquiteto e desenvolvedor de software na Inventti Soluções. Bacharel em Ciências da Computação pela UFSC, e especialista em engenharia de software pela IST. Trabalha profissionalmente com software desde 2001, nesses anos já trabalhou com PHP, Java, Ruby e nos últimos 5 anos na plataforma .net. Agilista desde 2004, sempre buscando mudança e melhoria no desenvolvimento de software.",
            company: "Inventti Soluções",
            twitter: "",
            presentation: {
                title: "A melhor profissão em 2014? Developers! Developers! Developers!",
                description: "Qual o melhor emprego para 2014 segundo pesquisa da U.S. News & World Report? Desenvolvedor de software. Nós temos o melhor emprego, mas mesmo assim é comum encontrarmos desenvolvedores insatisfeitos. Nessa palestra vou abordar alguns assuntos que podem fazer nossa profissão ainda melhor, e nossas empresas mais interessantes de se trabalhar. Vou falar sobre técnicas, processos, ferramentas, e responsabilidades de um desenvolvedor, e também vários pontos dos quais eu gostaria de ter ouvido há 13 anos atrás, quando comecei a trabalhar como desenvolvedor.",
                time: "20h 30min"
            }
        }]
    }, {
        day: "16/04/2014", 
        schedule: [{
            name: "Check-in",
            time: "18h 30min"
        }, {
            name: "Gabriel Schade Cardoso",
            photo: "http://programadorpoliglota.com.br/wp-content/uploads/2013/08/perfil-150x150.jpg",
            bio: "Gabriel trabalha como desenvolvedor de software com a plataforma .NET desde 2008 com as plataformas desktop, web e mobile utilizando principalmente metodologias ágeis. Iniciou em 2012 como palestrante em eventos de tecnologia. Bacharel em Ciência da Computação pela UNIVALI (Itajaí- SC), autor do livro Microsoft Kinect: Crie aplicações interativas e apaixonado por pesquisas em tecnologias novas, principalmente na área de sensores e mobile. Possui as certificações Microsoft: Programming in C# e Programming in HTML5 with JavaScript and CSS3.",
            company: "",
            twitter: "@gabrielschade",
            presentation: {
                title: "Crie aplicações interativas com o Microsoft Kinect",
                description: "Entenda conceitos de interfaces naturais (NUI) e saiba como o Kinect pode ajudar a oferecer este tipo de interface para sua aplicação .NET. Utilize comandos de voz, direção da fonte de áudio, gestos, interações e câmeras para tornar a experiência do usuário única e fantástica.",
                time: "19h"
            }
        }, {
            name: 'Encerramento / Coffee break',
            time: '20h 15min' 
        }]
    }],

    // List of Sponsors
    sponsors: [{
        name: "Casa do Código",
        logo: "images/casa_do_codigo.png",
        url: "http://www.casadocodigo.com.br/"
    }, {
        name: "O'Reilly",
        logo: "images/oreilly.jpg",
        url: "http://www.oreillynet.com/"
    }, {
        name: "JetBrains",
        logo: "images/jetbrains.png",
        url: "http://www.jetbrains.com/"
    }, {
        name: "Pluralsight",
        logo: "images/pluralsight.png",
        url: "http://www.pluralsight.com/"
    }, {
        name: "Novatec",
        logo: "images/novatec.gif",
        url: "http://www.novatec.com.br/"
    }],

    // List of Partners
    partners: [{
        name: "FURB",
        logo: "images/FURB.jpg",
        url: "http://furb.br/"
    }, {
        name: "DSC",
        logo: "images/FURB.jpg",
        url: "http://www.inf.furb.br/"
    }, {
        name: "CALCOMP",
        logo: "images/calcomp.png",
        url: "http://www.inf.furb.br/calcomp/"
    }],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};