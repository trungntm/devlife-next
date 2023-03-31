import { CacheProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import createCache from '@emotion/cache';

export default function CustomCacheProvider({ children }) {
  const emotionCache = createCache({ key: 'css' });

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}

CustomCacheProvider.propTypes = {
  children: PropTypes.node,
};
