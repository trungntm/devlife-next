import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import styled from 'styled-components/macro';
import { Stack } from '@mui/material';
import LinearLabelProgressBar from 'app/components/storefront/LinearLableProgressBar';
import Typography from 'app/pages/storefront/Home/components/Typography';

export function Intro(props) {
  return (
    <Div>
      <Container component={'section'} sx={{ mt: 8, mb: 4 }}>
        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          <Grid container spacing={4}>
            <Grid item xs={4} sx={{ textAlign: 'right', pl: 4 }}>
              <Typography variant="h5">Intro</Typography>
              <Typography>What I am all about.</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                Hi, I'm Trung Nguyen - a Senior Java developer. I graduated
                since 2019 at Ho Chi Minh city University of Technology and
                Education, and have 5 years working with Java.
              </Typography>
              <Stack spacing={3} mt={4} pr={2}>
                <LinearLabelProgressBar value={80} label={'Spring boot'} />
                <LinearLabelProgressBar value={60} label={'React'} />
                <LinearLabelProgressBar value={70} label={'Angular'} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Div>
  );
}

const Div = styled.div``;
