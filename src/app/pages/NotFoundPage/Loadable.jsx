import loadable from 'utils/loadable';

export default loadable(() => import('./NotFoundPage'), {
  fallback: <>Loading ...</>,
});
