'use stict';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


import headerStyle from './header.scss';
import logoHeader from '../../images/logo.png';

class Header extends Component {

  state = {
    activeSearch: false,
    query: '',
  };

  handleSearch(query) {
    const { match, location, history } = this.props;
    history.push(`/videos/${query}`);
  }

  render() {
    return (
      <header className={headerStyle.header}>
        <div className={headerStyle.header__content}>

          <div className={headerStyle.header__brand}>
            <Link to='/'>
              <img src={logoHeader} alt="Fictícia Vídeos" title="Fictícia Vídeos" className={headerStyle.header__logo} />
            </Link>
          </div>

          <form className={this.state.activeSearch ? `${headerStyle.header__search} ${headerStyle.active}` : `${headerStyle.header__search}`} title="Pesquisar"
            onSubmit={e => {
              e.preventDefault();
              this.handleSearch(e.target.q.value);
            }} >
            <input type="text" name="q" className={`${headerStyle.header__search_input}`} />
            <i className={this.state.activeSearch ? `${headerStyle.header__search_icon} fa fa-close` : `${headerStyle.header__search_icon} fa fa-search`} onClick={() => {
              const currentState = this.state.activeSearch;
              this.setState({ activeSearch: !currentState });
            }}></i>
          </form>

          <div className={headerStyle.header__menu} title="Menu">Menu
            <i className={`${headerStyle.header__menu_icon} fa fa-bars`}></i>
          </div>

          <ul className={headerStyle.menuFloat}>
            <li className={headerStyle.menuFloat__item}>
              <Link to='/'>
                <i className={`${headerStyle.menuFloat__item_icon} fa fa-star-o`}></i>
                <span>Destaques</span>
              </Link>
            </li>
            <li className={headerStyle.menuFloat__item}>
              <Link to='/videos'>
                <i className={`${headerStyle.menuFloat__item_icon} fa fa-toggle-right`}></i>
                <span>Vídeos</span>
              </Link>
            </li>
          </ul>

        </div>
      </header >
    )
  }
}

export default withRouter(Header);
// export default Header;
