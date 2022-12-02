import { MdstLayout } from '@/components/MdstLayout';
import React from 'react';
import { Outlet, useRouteData } from 'umi';

export default function Page() {
  const { route } = useRouteData();
  return (
    <>
      <MdstLayout>
        {route.path === '/' ? '' : <Outlet />}
        index
      </MdstLayout>
    </>
  );
}
