import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FullSizeCenteredFlexBox } from '@/common/components/styled';
import styled from '@emotion/styled';

const StyledFullsizeCenteredFlexBox = styled(FullSizeCenteredFlexBox)({
  '@media (max-width: 600px)': {
    padding: '0.625rem',
  },
});

function AppErrorBoundaryFallback() {
  return (
    <Box height="100vh">
      <StyledFullsizeCenteredFlexBox>
        <Paper sx={{ padding: 5 }}>
          <Typography variant="h5" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" gutterBottom>
            An error occurred while rendering this page. Please try refreshing the page.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
            Refresh
          </Button>
        </Paper>
      </StyledFullsizeCenteredFlexBox>
    </Box>
  );
}

export default AppErrorBoundaryFallback;
