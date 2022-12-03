import { MdstLayout } from '@/components/MdstLayout';
import React from 'react';
import { Outlet, useLocation } from 'umi';
import { Servers } from './Servers';

export default function Page() {
  const location = useLocation();

  return (
    <>
      <MdstLayout>
        {location.pathname === '/' ? <Servers /> : <Outlet />}
      </MdstLayout>
    </>
  );
}
