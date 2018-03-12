import React from 'react';
import { connect } from 'react-redux';
import iconData from '../../data/iconData';
import generateUniqueKey from '../../helpers/generateUniqueKey/generateUniqueKey';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => {
  const { currentView, changePhotosView } = props;

  const buttons = ['Grid', 'List'];

  const renderButtons = buttons.map(button => {
    const checkSelected = currentClass => {
      return currentView === button ? currentClass + ' selected' : currentClass;
    };

    return (
      <a
        key={generateUniqueKey()}
        className={checkSelected('view-button')}
        onClick={() => changePhotosView(button)}
      >
        <svg
          className={checkSelected('view-icon')}
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

Header.propTypes = {
  currentView: PropTypes.string,
  changePhotosView: PropTypes.func
};
