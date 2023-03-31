import PreHeaderBar from '../app/components/storefront/PreHeaderBar';
import Footer from '../app/components/storefront/Footer';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router';
import SfThemeCustomization from '../themes/storefront';

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  overflow: 'hidden',
});

export default function SfLayout() {
  return (
    <SfThemeCustomization>
      <RootStyle>
        <PreHeaderBar />
        <Outlet />
        <Footer />
      </RootStyle>
    </SfThemeCustomization>
  );
}
