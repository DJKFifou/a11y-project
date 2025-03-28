/** This only exists in English, but you can duplicate it and translate it in other languages
 * Then you need to declare the language in app.component.ts */

import { on } from 'events';

export const en = {
  header: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    news: 'News',
    lists: 'Lists',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
  },
  footer: {
    legal: 'Legal notices',
    confidentiality: 'Privacy Policy',
    form: {
      input: {
        placeholder: 'Your email adress',
      },
      button: {
        text: 'Register!',
      },
    },
    text: 'Created with Passion (and a bit of sadism) by Fred. &copy; HemIT 2023 (although not sure we want to be made accountable for this...)',
  },
  cookie_banner: {
    title: 'Cookies',
    text_first: 'This site uses cookies to improve your experience.',
    text_second:
      'This includes functional, targeted ads and social networks cookies.',
    button: {
      text: 'Ok',
    },
  },
  aboutPage: {
    title: 'About',
    text: 'There is nothing much to see here yet. Not sure you want to know who we are.',
    button: {
      text: 'Go back',
    },
  },
  homePage: {
    section_1: {
      title: 'Who are we?',
      text: 'The a11y website aims at showing you the best practices regarding web design and accessibility. We are a really modern website that is easily usable by everyone. Well. Almost. Not really.',
      span: 'At least we tried ok!!!!!',
      image: {
        alt: 'Laptop computer sitting on top of a desk, representing web accessibility',
      },
      links: {
        by: 'Photo by',
        first_link: {
          aria_label: "Visit Elizabeth Woolner's profile on Unsplash",
        },
        on: 'on',
        second_link: {
          aria_label: 'View original image on Unsplash',
        },
      },
    },
    section_2: {
      title: 'Our strengths',
      card1: {
        title: 'Expertise',
        text: 'Our developers and designers all have 20+ years of experience. They work with the pioneers of the web.',
      },
      card2: {
        title: 'Attention to details',
        text: 'We scrutinize and polish every single pixel of this website for the best experience ever.',
      },
      card3: {
        title: 'Up to date',
        text: "We follow the latest standards such as HTML5 and CSS3. We're quite proud to be that up to date.",
      },
      card4: {
        title: 'Support',
        text: 'We are easily accessible through the contact form that you can reach',
        link: {
          text: 'here',
          aria_label: 'Go to our contact page',
        },
      },
    },
    section_3: {
      title: 'Testimonies',
      first_article: {
        image: {
          alt: 'Portrait of Sandra, an a11y user',
        },
        quote:
          'I like this website. It shows me all the colors that do exist and are not to be used on the Internet. Navigating this website feels like a quest into the unknown. And all that for free.',
        cite: 'Sandra, a11y user',
      },
      second_article: {
        image: {
          alt: 'Portrait of Michael, an a11y user',
        },
        quote:
          'Since I discovered this website, I lost 5/10 in average on my eyes and had to buy glasses. This is a very nice warning to what kind of emotions and physical modifications good websites can cause.',
        cite: 'Michael, a11y user',
      },
    },
    section_4: {
      title: 'In images',
      links: {
        by: 'Photo by',
        on: 'on',
        second_link: {
          aria_label: 'View original image on Unsplash',
        },
      },
      first_figure: {
        image: {
          alt: 'Person holding a black device case',
        },
        first_link: {
          aria_label: "Visit Sigmund's profile on Unsplash",
        },
      },
      second_figure: {
        image: {
          alt: "A person's hand on a table with a chain attached to it",
        },
        first_link: {
          aria_label: "Visit Elizabeth Woolner's profile on Unsplash",
        },
      },
      third_figure: {
        image: {
          alt: 'Woman in black long sleeve shirt covering her face',
        },
        first_link: {
          aria_label: "Visit Ivan Aleksic's profile on Unsplash",
        },
      },
      fourth_figure: {
        image: {
          alt: 'Man wearing red crew neck sweater with teal and black backpack"',
        },
        first_link: {
          aria_label: "Visit Jorge Franganillo's profile on Unsplash",
        },
      },
    },
  },
};
