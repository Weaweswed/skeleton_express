const React = require('react');
const Layout = require('../components/Layout');
const Navbar = require('../components/Navbar');

module.exports = function Auth() {
    return (
        <Layout>
            <Navbar />
            <div className="container">
                <div className="priview">
                    <div className="priview_data">
                        <h2>Авторизация</h2>
                        <p>Введите данные для аутентификации</p>
                    </div>
                </div>
                <div className="page_data">
                    <form name="auth" method="post" action="api/login">
                        <input type="text" name="email" placeholder="email"/>
                        <input type="password" name="password" placeholder="password"/>
                        <button type="submit" name="btnAuth">Войти</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}