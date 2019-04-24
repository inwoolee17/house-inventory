import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const StyledLink = {
    color: 'black',
    textDecoration: 'none'
  };

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link style={StyledLink} to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link style={StyledLink} to="/inventory">Inventory</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link style={StyledLink} to="/CreateHouse">Add House</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;