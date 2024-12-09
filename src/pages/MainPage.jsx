const React = require('react');
const Layout = require('../components/Layout');
const Navbar = require('../components/Navbar');

module.exports = function MainPage({ user }) {
    return (
        <Layout>
            <Navbar user={user}/>
            <div className="container">
                <div className="priview">
                    <div className="priview_data">
                        { user ? 
                            (<>
                                <h1>Главная страница</h1><br />
                                <p>Выберите, что Вы хотите сделать</p>
                            </>) : 
                            (<>
                                <h1>Главная страница</h1><br />
                                <p>Зарегистрируйся или войди используя логин и пароль для входа</p>
                            </>)
                        }
                    </div>
                </div>
                <div className="page_data">
                </div>
            </div>
        </Layout>
    )
}