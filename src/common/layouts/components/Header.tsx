import { Box, styled, Typography } from '@mui/material';

const HeaderBox = styled(Box)({
  height: '3.75rem',
  width: "100%",
  position: 'sticky',
  top: 0,
  zIndex: 100,
  left: 0,
  boxShadow: '0 0.1rem 1rem rgba(0, 0, 0, 0.1)',
});

function Header() {
  return (
    <HeaderBox component="header">
      <Typography variant="h5">Header</Typography>
    </HeaderBox>
  );
}

export default Header;
