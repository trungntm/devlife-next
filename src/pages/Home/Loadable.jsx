import loadable from "utils/loadable";


export default loadable(() => import('./HomePage'), {
  fallback: <>LOading ...</>,
});
