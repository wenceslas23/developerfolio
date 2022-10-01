/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Wenceslas Thamar",
  title: "Je suis, Wenceslas DEKO",
  subTitle: emoji(
    "Référent digital de formation, je possède de multiples compétences transversales 🚀 que je vous invite à découvrir au cours de votre navigation sur ce portfolio."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/wenceslas23",
  linkedin: "https://www.linkedin.com/in/wenceslas-dekomarowski-b15ab8183/",
  gmail: "wenceslasthamar@hotmail.com",
  facebook: "https://www.facebook.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "À propos de moi",
  subTitle: "Je suis spécialisé dans les CMS tel que wordPress/Shopify & la gestion de projets Agile ",
  skills: [
    emoji(
      "Passionné du numérique depuis mon enfance, et fort de ma formation professionnelle au métier de référent digital, j’ai divers acquis et compétences qui font ma polyvalence."
    ),
    emoji("Autonome, enthousiaste, organisé, rigoureux dans le travail, voici une liste non-exhaustive de compétences transversales et de valeurs sur lesquelles se basent les fondements de mon éthique professionnelle."),
    emoji(
      "⚡ Je vous invite à consulter mon CV pour plus d’informations."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
 softwareSkills: [
    
    
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ecole241",
      logo: require("./assets/images/logoecole241.png"),
      subHeader: "CERTIFICAT SIMPLON / OIF",
      duration: "février 2022 - Septembre 2022",
      desc: "Formation au métier de Référent Digital",
      descBullets: [
        "Creation de site web",
        "Design, Community Management",
        "Marketing Digital, Gestion de projet"
      ]
    },
    {
      schoolName: "Institut Des Techniques Avancées (Libreville)",
      logo: require("./assets/images/logoITA.png"),
      subHeader: "3ème année en Informatique de Gestion (Option Développeur d’Application)",
      duration: "2019-2020",
    },

    {
      schoolName: "Institut Des Techniques Avancées (Libreville)",
      logo: require("./assets/images/logoITA.png"),
      subHeader: "2ème année en Informatique de Gestion (Option Développeur d’Application)",
      duration: "2018-2019",
    },
    {
      schoolName: "Institut Des Techniques Avancées (Libreville)",
      logo: require("./assets/images/logoITA.png"),
      subHeader: "1 ère année en Informatique de Gestion (Option Développeur d’Application)",
      duration: "2017-2018",
    },

    {
      schoolName: "Lycée Privée les Aiglons (Moanda)",
      logo: require("./assets/images/Aiglons.jfif"),
      subHeader: "Baccalauréat littéraire (série A1)",
      duration: "2015-2016",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Wordpress", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML & CSS",
      progressPercentage: "80%"
    },
    {
      Stack: "Community Manager",
      progressPercentage: "50%"
    },
    {
      Stack: "Canva",
      progressPercentage: "70%"
    },
    {
      Stack: "Photoshop",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant virtuel / Développeur web",
      company: "FFREELANCE",
      companylogo: require("./assets/images/free.png"),
      date: "Mars 2020 – aujourd'hui",
      descBullets: [
        "Maintenance et amélioration sites web existants (wordpress)",
        "Résolution des problèmes de plugin",
        "Migration de site Web",
        "-Saisie de données",
        "Saisie de fiches produits dans des boutiques en ligne",
        "Mise en page, mise en forme de document"
      ]
    },
    {
      role: "Suivie des projets de la transformation numérique",
      company: "COMILOG (Moanda)",
      companylogo: require("./assets/images/comilog.jpg"),
      date: "Aout 2019 – Janvier 2020",
      descBullets: [
        "Test des applications mobiles et site web (test de comptabilité,fonctionnelle, de performance, bugs)",
        "Participer au devellopement de l'application Ecomilog",
        "Révision des sites internet (forme et contenu)",   
      ]   } 
    ,
    {
      role: "Technicien en maintenance Informatique / Aide électricien",
      company: "EGEAI (Moanda)",
      companylogo: require("./assets/images/geai.png"),
      date: " Juillet – septembre 2018",
      descBullets: [
        "Suivie des installations électriques de COMILOG (Moanda)",
        "Diagnostiquer les pannes, mettre à jour les logiciels et supprimer les virus",
        "Réparation ou remplacement du matériel informatique défectueux au sein de l’entreprise",

      ]    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Certifications",
  subtitle: "Mes certifications, attestations ou récompenses. 🏆 ",
  projects: [
    {
      image: require("./assets/images/ats.jpg"),
      projectName: "Participation au Sambas Professionnels",
      projectDesc: "Atelier Entrepreunariat: Comment passer du business à une entreprise et comment vivre tout de l'intérieur vers l'extérieur",
      footerLink: [
        {
          name: "Dévouvrir les Sambas",
          url: "https://www.facebook.com/LesSambasProfessionnels"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/googlecert.jpg"),
      projectName: "Google Ateliers Numériques",
      projectDesc: "Les principes fondamentaux du marketing numérique",
      footerLink: [
        {
          name: "Vérifiez l'autenticité du certificat",
          url: "https://learndigital.withgoogle.com/ateliersnumeriques/validate-certificate-code"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations 🏆 "),
  subtitle:
    "Les fruits d’un travail de qualité!",

  achievementsCards: [
    {
      title: "Chef d'équipe technique",
      subtitle:
        "Conception du site web des Sambas Professionnels",
      image: require("./assets/images/sambas1.png"),
      imageAlt: "Sambas Professionnels",
      footerLink: [
        {
          name: "sambasprofessionnel.org",
          url: "tedusite2.ga"
        },
        
      ]
    },
    {
      title: "Reproduction du site remesh.ai",
      subtitle:
        "Languages utilisés: HTML, CSS,JAVA SCRIPT",
      image: require("./assets/images/remesh.png"),
      imageAlt: "remesh",
      footerLink: [
        {
          name: "Voir la reproduction",
          url: "https://remesh.netlify.app/"
        }
      ]
    },

    {
      title: "Reproduction du site biografrik.co ",
      subtitle: "Languages utilisés: HTML, CSS",
      image: require("./assets/images/bioga.png"),
      imageAlt: "bioga",
      footerLink: [
        {name: "Voir la reproduction", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez Moi ☎️"),
  subtitle:
    "Vous avez besoin de mes services ? Vous pouvez me joindre en utilisant les coordonnées ci-dessous.",
  number: "(+241) 077 05 30 32 / 062 56 26 05",
  email_address: "wenceslasthamar@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
