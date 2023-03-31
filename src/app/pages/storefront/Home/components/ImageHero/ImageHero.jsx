import * as React from 'react';
import ImageHeroLayout from './ImageHeroLayout';
import SocialRoundLink from '../SocialRoundLink';
import Typography from '../Typography';

const backgroundImage =
  '/static/pages/home/IMG_4338.png?auto=format&fit=crop&w=1400';

export default function ImageHero() {
  return (
    <ImageHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="left" variant="h2" marked="center">
        Nguyễn Tạ Minh Trung
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Senior Backend Engineer
      </Typography>
      <SocialRoundLink />
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ImageHeroLayout>
  );
}
