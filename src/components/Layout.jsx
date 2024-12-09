const React = require('react');

module.exports = function Layout({ title, children }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Скелетон</title>
          <link rel="stylesheet" href="/css/main.css" />
          <script defer src="/js/registration.js"></script>
          <script defer src="/js/auth.js"></script>
        </head>
        <body>
          { children }
          <footer>
            <div className="footer_info">
              <p>Все права не защищены! Не делай ничего лишнего!</p>
            </div>
          </footer>
        </body>
      </html>
    );
  };