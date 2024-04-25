import { Spin } from 'antd';
import { useAuth } from '../../hooks';
import { Role } from '../../shared/api/__generated__/data-contracts';

type AuthorizedRouteParams = {
  children: JSX.Element;
  roles?: Role[];
};

export const AuthorizedRoute = ({ children, roles }: AuthorizedRouteParams) => {
  const { role } = useAuth();

  if (!role) {
    return <Spin />;
  }

  if (!roles || roles.length === 0 || roles.includes(role)) {
    return children;
  }

  return <div>403</div>;
};
