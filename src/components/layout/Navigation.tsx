import { AppBar, Toolbar, Button, Switch, Box, Stack, Tooltip, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { House, EnvelopeSimple, Cpu, Robot, IdentificationBadge, ImageSquare } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import React from 'react';

const navItems = [
  { path: '/', label: 'home', icon: <House size={18} /> },
  { path: '/contact', label: 'contact', icon: <EnvelopeSimple size={18} /> },
  { path: '/technologies', label: 'technologies', icon: <Cpu size={18} /> },
  { path: '/ai-approach', label: 'aiApproach', icon: <Robot size={18} /> },
  { path: '/patents', label: 'patents', icon: <IdentificationBadge size={18} /> },
  { path: '/prompt-gallery', label: 'promptGallery', icon: <ImageSquare size={18} /> },
];

const Navigation = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'tr' : 'en');
  };

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ width: '100%', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
      <Toolbar sx={{ minHeight: '56px', px: { xs: 1, sm: 2 } }}>
        {/* Hamburger menu for xs/sm screens */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: '100%' }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <Tooltip key={item.path} title={t(`nav.${item.label}`)}>
                <Button
                  component={Link}
                  to={item.path}
                  color={location.pathname === item.path ? 'primary' : 'inherit'}
                  sx={{
                    minWidth: '40px',
                    px: 1,
                    fontFamily: 'inherit',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                >
                  {item.icon}
                </Button>
              </Tooltip>
            ))}
          </Stack>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {/* Normal navbar for md and up */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          width: '100%',
          justifyContent: 'center'
        }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {navItems.map((item) => (
              <Tooltip key={item.path} title={t(`nav.${item.label}`)}>
                <Button
                  component={Link}
                  to={item.path}
                  color={location.pathname === item.path ? 'primary' : 'inherit'}
                  sx={{
                    minWidth: { xs: '40px', md: 'auto' },
                    px: { xs: 1, md: 2 },
                    fontFamily: 'inherit',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    '& .MuiButton-startIcon': {
                      margin: { xs: 0, md: '0 8px 0 0' }
                    }
                  }}
                >
                  {item.icon}
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {t(`nav.${item.label}`)}
                  </Box>
                </Button>
              </Tooltip>
            ))}
          </Stack>
        </Box>
        {/* Language switcher */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          position: 'absolute',
          right: 16
        }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <span style={{ 
              fontWeight: isEnglish ? 600 : 400, 
              color: isEnglish ? '#1976d2' : '#888',
              fontFamily: 'inherit'
            }}>EN</span>
            <Switch checked={isEnglish} onChange={toggleLanguage} color="primary" />
            <span style={{ 
              fontWeight: !isEnglish ? 600 : 400, 
              color: !isEnglish ? '#1976d2' : '#888',
              fontFamily: 'inherit'
            }}>TR</span>
          </Stack>
        </Box>
        {/* Drawer for mobile settings */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{ 
            sx: { 
              width: 220,
              fontFamily: 'inherit'
            } 
          }}
        >
          <Box sx={{ p: 2 }}>
            <List>
              <ListItem>
                <ListItemText primary={t('language')} />
              </ListItem>
              <ListItem>
                <Stack direction="row" spacing={1} alignItems="center">
                  <span style={{ 
                    fontWeight: isEnglish ? 600 : 400, 
                    color: isEnglish ? '#1976d2' : '#888',
                    fontFamily: 'inherit'
                  }}>EN</span>
                  <Switch checked={isEnglish} onChange={toggleLanguage} color="primary" />
                  <span style={{ 
                    fontWeight: !isEnglish ? 600 : 400, 
                    color: !isEnglish ? '#1976d2' : '#888',
                    fontFamily: 'inherit'
                  }}>TR</span>
                </Stack>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 