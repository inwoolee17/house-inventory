import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const StyledLink = {
    color: 'black',
    textDecoration: 'none'
  };
=======
import {Link} from 'react-router-dom';

const StyledLink = {
  color: 'black',
  textDecoration: 'none'
};
>>>>>>> 7c227da4908050f1a8687560e79d4a6b0deef94c

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
<<<<<<< HEAD
=======
          <MenuItem onClick={this.handleClose}>
            <Link style={StyledLink} to="/DeleteHouse">Delete House</Link>
          </MenuItem>
>>>>>>> 7c227da4908050f1a8687560e79d4a6b0deef94c
        </Menu>
      </div>
    );
  }
}

<<<<<<< HEAD
export default SimpleMenu;
=======
export default SimpleMenu;
>>>>>>> 7c227da4908050f1a8687560e79d4a6b0deef94c
