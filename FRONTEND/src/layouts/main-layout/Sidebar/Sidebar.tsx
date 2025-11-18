import { ReactElement } from 'react';
import { List, Toolbar, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';
import navItems from 'data/nav-items';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import Image from 'components/base/Image';
import logoWithText from '/funds.png';
import logo from '/funds.png';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <>
      <Toolbar
        sx={{
          position: 'fixed',
          height: 98,
          zIndex: 1,
          bgcolor: 'background.default',
          p: 0,
          justifyContent: 'center',
          width: open ? drawerOpenWidth - 1 : drawerCloseWidth - 1,
        }}
      >
        <NavLink to="/">
          <Image
            src={open ? logoWithText : logo}
            alt={open ? 'logo with text' : 'logo'}
            height={40}
          />
        </NavLink>
      </Toolbar>

      <SimpleBar style={{ maxHeight: '100vh' }}>
        <List
          component="nav"
          sx={{
            mt: 24.5,
            py: 2.5,
            height: 724,
            justifyContent: 'space-between',
          }}
        >
          {navItems.map((navItem) => (
            <Tooltip
              key={navItem.id}
              title={!open ? navItem.title : ''}
              placement="right"
              arrow
            >
              <div>
                <NavItem navItem={navItem} open={open} />
              </div>
            </Tooltip>
          ))}
        </List>
      </SimpleBar>
    </>
  );
};

export default Sidebar;
