import { MdstLayout } from '@/components/MdstLayout';
import React from 'react';
import { Link, NavLink, Outlet, useRouteData } from 'umi';

export const Servers: React.FC = () => {
  const { route } = useRouteData();
  return (
    <>
      <Link to="/server/1">第一个</Link>
    </>
  );
};
