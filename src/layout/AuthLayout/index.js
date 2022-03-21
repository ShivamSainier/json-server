import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import AuthNavbar from './AuthNavbar';

const AuthLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const AuthLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  // paddingTop: 64
});

const AuthLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const AuthLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const AuthLayout = () => (
  <AuthLayoutRoot>
    {/* <MainNavbar /> */}
    <AuthLayoutWrapper>
      <AuthLayoutContainer>
        <AuthLayoutContent>
          <Outlet />
        </AuthLayoutContent>
      </AuthLayoutContainer>
    </AuthLayoutWrapper>
  </AuthLayoutRoot>
);

export default AuthLayout;
