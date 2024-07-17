import React from "react";
import { useSelector } from "react-redux";
import "../css/Projects.css";

const Projects = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="projects">
      <h2>{language === "en" ? "Projects" : "Projeler"}</h2>
      <div className="project-list">
        <div className="project-item">
          <video
            src="src/assets/Ekran Kaydı 2024-07-17 140440.mp4"
            alt="Workintech"
            className="project-media"
            controls
          />
          <h3>Twitter Proje</h3>
          <p>
            {language === "en"
              ? "I developed a simple Twitter clone using React. This project allows users to post tweets, follow other users, and interact with tweets through likes and comments. The application provides a basic social media experience with a clean and user-friendly interface."
              : "Basit bir Twitter projesi geliştirdim. Bu projede kullanıcılar tweet atabilir, tweetleri beğenebilir ve diğer kullanıcıların tweetlerini görüntüleyebilir. Proje, modern React kütüphanesi ve bileşen tabanlı mimari kullanılarak oluşturulmuştur."}
          </p>
          <div className="project-links">
            <a href="https://github.com/mypiroglu63/twitter-end">GitHub</a>
            <a href="#">View Site</a>
          </div>
        </div>
        <div className="project-item">
          <img
            src="src/assets/Pizza 2.png"
            alt="Pizza Proje"
            className="project-media"
          />
          <h3>Pizza Proje</h3>
          <p>
            {language === "en"
              ? "I developed a pizza ordering site. This site enables users to explore various pizza options, customize their orders with desired toppings, and place their orders online. The user-friendly interface and modern web technologies provide a fast and smooth ordering experience."
              : "Bir pizza siparişi verme sitesi geliştirdim. Bu site üzerinden kullanıcılar, diledikleri malzemelerle özelleştirilmiş siparişlerini kolayca oluşturabilir ve online ödeme yapabilirler. Kullanıcı dostu arayüz ve modern web teknolojileri ile hızlı ve sorunsuz bir sipariş deneyimi sunulmaktadır."}
          </p>
          <div className="project-links">
            <a href="https://github.com/mypiroglu63/fsweb-s7-challenge-pizza">
              GitHub
            </a>
            <a href="https://pizzaa-projem-1rb66bmmt-yasin-piroglus-projects.vercel.app/">
              View Site
            </a>
          </div>
        </div>
        <div className="project-item">
          <img
            src="src/assets/Tesbih2.png"
            alt="Tesbih Proje"
            className="project-media"
          />
          <h3>Tesbih Proje</h3>
          <p>
            {language === "en"
              ? "I created a simple rosary sales page. This page showcases various rosary products available for purchase, allowing users to browse, select, and buy their preferred rosaries easily. The site features an intuitive design to ensure a seamless shopping experience."
              : "Basit bir tesbih satış sayfası geliştirdim. Bu sayfada kullanıcılar farklı tesbih modellerini inceleyebilir, ürün detaylarını görüntüleyebilir ve satın alma işlemlerini gerçekleştirebilir. Sayfa, kullanıcı dostu bir arayüz ile modern web teknolojileri kullanılarak tasarlandı."}
          </p>
          <div className="project-links">
            <a href="https://github.com/mypiroglu63/my-tesbih-app">GitHub</a>
            <a href="https://my-tesbih-app-yasin-piroglus-projects.vercel.app/">
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
