import useScroll from '@/common/hooks/use_scroll';
import { Box, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MotionBox = motion(Box);

const HeaderBox = styled(MotionBox)(() => ({
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  left: 0,
  boxShadow: '0 0.1rem 1rem rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
}));

const headerSize: Record<'lg' | 'sm', string> = {
  lg: '6rem',
  sm: '4rem',
};

function Header() {
  const scrolled = useScroll(60);
  const controls = useAnimation();
  const [height, setHeight] = useState(headerSize.lg);

  useEffect(() => {
    if (scrolled) {
      setHeight(headerSize.sm);
    } else {
      setHeight(headerSize.lg);
    }

    controls.start({
      height: height,
      transition: { duration: 0.133 },
    });
  }, [scrolled, controls, height]);

  return (
    <HeaderBox
      component="header"
      initial={{ height: headerSize.lg }}
      animate={controls}
    >
      <Typography variant="h5">Header</Typography>
    </HeaderBox>
  );
}

export default Header;
