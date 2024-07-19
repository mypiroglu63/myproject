import {
  SET_THEME,
  SET_LANGUAGE,
  SET_PROFILE_DATA,
  SET_HIREME_DATA,
} from "./actions";

const initialState = {
  profile: {
    tarih: "",
    city: "",
    egitim: "",
    role: "",
    yazi: "",
    name: "",
  },
  theme: "light",
  language: "en",
  skills: [
    {
      id: 1,
      name: {
        en: "JavaScript",
        tr: "JavaScript",
      },
      description: {
        en: "I am capable of providing interactive and dynamic web experiences with JavaScript.",
        tr: "JavaScript ile etkileşimli ve dinamik web deneyimleri sağlayabiliyorum.",
      },
    },
    {
      id: 2,
      name: {
        en: "React.Js",
        tr: "React.Js",
      },
      description: {
        en: "I have the ability to create modern and dynamic user interfaces with React.",
        tr: "React ile modern ve dinamik kullanıcı arayüzleri oluşturma becerisine sahibim.",
      },
    },
    {
      id: 3,
      name: {
        en: "Node.Js",
        tr: "Node.Js",
      },
      description: {
        en: "I can develop scalable and high-performance server applications using Node.js.",
        tr: "Node.js ile ölçeklenebilir ve yüksek performanslı sunucu uygulamaları geliştirebiliyorum.",
      },
    },
  ],
  projects: [
    {
      id: 1,
      title: {
        en: "Twitter Project",
        tr: "Twitter Proje",
      },
      description: {
        en: "I developed a simple Twitter clone using React. This project allows users to post tweets, follow other users, and interact with tweets through likes and comments. The application provides a basic social media experience with a clean and user-friendly interface.",
        tr: "Basit bir Twitter projesi geliştirdim. Bu projede kullanıcılar tweet atabilir, tweetleri beğenebilir ve diğer kullanıcıların tweetlerini görüntüleyebilir. Proje, modern React kütüphanesi ve bileşen tabanlı mimari kullanılarak oluşturulmuştur.",
      },
      mediaType: "video",
      mediaSrc: "src/assets/Ekran Kaydı 2024-07-17 140440.mp4",
      github: "https://github.com/mypiroglu63/twitter-end",
      site: "#",
      tags: ["react", "redux", "axios"],
    },
    {
      id: 2,
      title: {
        en: "Pizza Project",
        tr: "Pizza Proje",
      },
      description: {
        en: "I developed a pizza ordering site. This site enables users to explore various pizza options, customize their orders with desired toppings, and place their orders online. The user-friendly interface and modern web technologies provide a fast and smooth ordering experience.",
        tr: "Bir pizza siparişi verme sitesi geliştirdim. Bu site üzerinden kullanıcılar, diledikleri malzemelerle özelleştirilmiş siparişlerini kolayca oluşturabilir ve online ödeme yapabilirler. Kullanıcı dostu arayüz ve modern web teknolojileri ile hızlı ve sorunsuz bir sipariş deneyimi sunulmaktadır.",
      },
      mediaType: "image",
      mediaSrc: "src/assets/Pizza 2.png",
      github: "https://github.com/mypiroglu63/fsweb-s7-challenge-pizza",
      site: "https://pizzaa-projem-1rb66bmmt-yasin-piroglus-projects.vercel.app/",
      tags: ["react", "redux", "axios"],
    },
    {
      id: 3,
      title: {
        en: "Rosary Project",
        tr: "Tesbih Proje",
      },
      description: {
        en: "I created a simple rosary sales page. This page showcases various rosary products available for purchase, allowing users to browse, select, and buy their preferred rosaries easily. The site features an intuitive design to ensure a seamless shopping experience.",
        tr: "Basit bir tesbih satış sayfası geliştirdim. Bu sayfada kullanıcılar farklı tesbih modellerini inceleyebilir, ürün detaylarını görüntüleyebilir ve satın alma işlemlerini gerçekleştirebilir. Sayfa, kullanıcı dostu bir arayüz ile modern web teknolojileri kullanılarak tasarlandı.",
      },
      mediaType: "image",
      mediaSrc: "src/assets/Tesbih2.png",
      github: "https://github.com/mypiroglu63/my-tesbih-app",
      site: "https://my-tesbih-app-yasin-piroglus-projects.vercel.app/",
      tags: ["react", "redux", "axios"],
    },
  ],
  navigationLinks: [
    { id: 1, href: "#skills", text: { en: "Skills", tr: "Beceriler" } },
    { id: 2, href: "#projects", text: { en: "Projects", tr: "Projeler" } },
    { id: 3, href: "#hire-me", text: { en: "Hire me", tr: "Beni işe al" } },
  ],
  footerLinks: [
    {
      id: 1,
      href: "#hireme",
      text: { en: "Personal Blog", tr: "Kişisel Blog" },
      className: "footer-personal",
    },
    {
      id: 2,
      href: "https://github.com/mypiroglu63",
      text: { en: "GitHub", tr: "GitHub" },
      className: "footer-github",
    },
    {
      id: 3,
      href: "https://www.linkedin.com/in/mehmet-yasin-piro%C4%9Flu-079223224/",
      text: { en: "LinkedIn", tr: "LinkedIn" },
      className: "footer-linkedin",
    },
  ],
  footerText: {
    en: "Let's work together on your next product.",
    tr: "Bir sonraki ürününüzde birlikte çalışalım.",
    email: "mypiroglu63@gmail.com",
  },
  hireMe: {
    en: {
      heading: "Architect of Digital Transformation",
      paragraph:
        "Hello, I'm Mehmet Yasin Piroğlu. I am a full-stack developer. If you are looking for a developer to create robust and scalable web applications, meet me, who offers user-focused and impactful solutions. I am here to take your projects to the next level with an innovative and minimalist approach.",
      hireMe: "Hire me",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    tr: {
      heading: "Dijital Dönüşümün Mimarı",
      paragraph:
        "Merhaba, ben Mehmet Yasin Piroğlu. Tam yığın bir geliştiriciyim. Sağlam ve ölçeklenebilir web uygulamaları oluşturacak bir geliştirici arıyorsanız, kullanıcı odaklı ve etkileyici çözümler sunan benimle tanışın. Yenilikçi ve minimalist yaklaşımla projelerinizi bir üst seviyeye taşımak için buradayım",
      hireMe: "Beni işe al",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    name: "Mehmet Yasin Piroğlu",
    image: "src/assets/56cbf71b-ddb6-40d4-9be7-897a68611739.jpg",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_HIREME_DATA:
      return {
        ...state,
        hireMe: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
