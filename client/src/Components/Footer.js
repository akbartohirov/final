import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m6 l4 s12">
            <h5 className="indigo-text text-danken-5">Salam Market Uz</h5>
            <p className="indigo-text text-danken-5">
              Самые качественные, самые надежные, самые доступные товары у нас!
            </p>
          </div>

          <div className="col m6 l3 s12">
            <h5 className="indigo-text text-danken-5">О компании</h5>
            <ul className="footer-text-color">
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  О нас
                </a>
              </li>
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  Политика обработки персональных данных
                </a>
              </li>
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  Публичная оферта
                </a>
              </li>
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  Часто задаваемые вопросы
                </a>
              </li>
            </ul>
          </div>

          <div className="col m6 l3 s12">
            <h5 className="indigo-text text-danken-5">Свяжитесь с нами</h5>
            <ul className="footer-text-color">
              <li>
                <a
                  className="indigo-text text-danken-5"
                  href="tel:998933936703"
                >
                  <i class="fas fa-phone"></i> Позвоните нам: +998 (93) 393 67
                  03
                </a>
              </li>
              <li>
                <a
                  className="indigo-text text-danken-5"
                  href="mailto:salam@marlet.com"
                >
                  <i class="fas fa-envelope"></i> Напишите нам: salam@market.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col m6 l2 s12">
            <h5 className="indigo-text text-danken-5">Links</h5>
            <ul className="footer-text-color">
              <li>
                <a
                  className="indigo-text text-danken-5"
                  href="https://t.me/salammarket_uz"
                >
                  <i className="fab fa-telegram"></i> Telegram
                </a>
              </li>
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a className="indigo-text text-danken-5" href="#!">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <span className="indigo-text text-danken-5">
            © 2022 Copyright Text
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
