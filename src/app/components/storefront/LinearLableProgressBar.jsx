import Box from '@mui/material/Box';
import LinearProgress  from '@mui/material/LinearProgress';
import * as React from 'react';
import styled from 'styled-components/macro';
import Typography from 'app/pages/storefront/Home/components/Typography';

export default function LinearLabelProgressBar(
  props
) {
  return (
    <Div>
      <Typography gutterBottom>{props.label}</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </Div>
  );
}

const Div = styled.div``;
