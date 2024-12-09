const React = require('react');
const Layout = require('../components/Layout');
const Navbar = require('../components/Navbar');

module.exports = function Registration() {
    return (
        <Layout>
            <Navbar/>
            <div className="container">
                <div className="priview">
                    <div className="priview_data">
                        <h2>Регистрация</h2>
                        <p>Введите данные для регистрации</p>
                    </div>
                </div>
                <div className="page_data">
                    <form name="registration" method="post" action="api/registration">
                        <input type="text" name="name" placeholder="name"/>
                        <input type="email" name="email" placeholder="email"/>
                        <input type="password" name="password" placeholder="password"/>
                        <button type="submit" name="btnRegistration">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}