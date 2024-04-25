import { Menu, Spin } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { routeMap } from '../Protected/PrivateRoutes';
import styles from './Sidebar.module.scss';
import { useMemo } from 'react';

const Sidebar = () => {
  const { role } = useAuth();
  const { pathname } = useLocation();

  const validRoutes = useMemo(
    () =>
      routeMap.filter(
        (item) =>
          !!item.sideBar &&
          (!item.roles ||
            item.roles.length === 0 ||
            (role && item.roles.includes(role))),
      ),
    [role],
  );

  const selectedKeys = useMemo(
    () =>
      validRoutes
        .filter((item) => pathname.startsWith(item.route))
        .map((item) => item.route),
    [validRoutes, pathname],
  );

  if (!role) {
    return <Spin />;
  }

  return (
    <>
      <div className={styles.leftBar} />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        items={validRoutes.map((item) => ({
          key: item.route,
          icon: item.sideBar?.icon,
          label: <Link to={item.route}> {item.sideBar?.label}</Link>,
        }))}
      />
    </>
  );
};

export default Sidebar;
