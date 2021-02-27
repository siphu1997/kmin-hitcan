import useCustomHistory from 'hooks/useCustomHistory';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listRouteByKey } from 'configs/configureRoute';
export default function AuthWrapper({ isAuth, ...rest }) {
  const userData = useSelector((state) => state.globalData.userInfo);
  const { goTo } = useCustomHistory();
  const location = useLocation();

  useEffect(() => {
    if (!userData.role && isAuth) {
      goTo('login');
    }

    if (userData.role && location.pathname === listRouteByKey['login'].path) {
      goTo('home');
    }
  }, [userData]);
  return <div>{rest.children}</div>;
}
