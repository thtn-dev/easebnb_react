import useScroll from '@/common/hooks/use_scroll';
import { Box, styled } from '@mui/material';

const HeaderBox = styled(Box)({
  height: "375rem",
  width: 1,
  position: "sticky",
  top: 0,
  zIndex: 100,
  left: 0,
});

function Header() {
  const scrolled = useScroll(20);
  return <HeaderBox component="header"></HeaderBox>;
}

export default Header;
