import React from 'react';
import { connect } from 'react-redux';
import iconData from '../../data/iconData';
import * as actions from '../../actions';
import './Header.css';

const Header = props => {
  const { currentView, changePhotosView } = props;

  const buttons = ['Grid', 'List'];

  const renderButtons = buttons.map((button, index) => {
    const currentClass =
      currentView === button ? 'view-button active' : 'view-button';
    const iconClass = currentView === button ? 'view-icon active' : 'view-icon';

    return (
      <a
        key={index}
        className={currentClass}
        onClick={() => changePhotosView(button)}
      >
        <svg
          className={iconClass}
          width="13"
          height="10"
          viewBox="0 0 13 10"
        >
          <path d={iconData[button]} />
        </svg>
        {button}
      </a>
    );
  });

  return (
    <div className="Header">
      <h1 className="header-title">My Photos</h1>

      <span className="button-wrapper">{renderButtons}</span>
    </div>
  );
};

const mapStateToProps = store => ({
  currentView: store.currentView
});

const mapDispatchToProps = dispatch => ({
  changePhotosView: selectedView =>
    dispatch(actions.changePhotosView(selectedView))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
