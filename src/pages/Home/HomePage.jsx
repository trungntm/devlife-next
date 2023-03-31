import { Helmet } from 'react-helmet-async';
import { useHomeSlice } from './slice/HomeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectHome } from './slice/HomeSelectors';
import { useEffect } from 'react';

export default function HomePage(props) {
  const { actions } = useHomeSlice();
  const dispatch = useDispatch();
  const state = useSelector(selectHome);

  useEffect(() => {
  });

  const handleClick = () => {
    console.log('click');
    dispatch(actions.test());
  };

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <button onClick={handleClick}>123123123</button>
      <span>My HomePage</span>
    </>
  );
}
