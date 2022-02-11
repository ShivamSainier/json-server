import Hidden from '@material-ui/core/Hidden';
import Log from "./main_logo.png"
const Logo = (props) => (
  <>
    <Hidden smUp>
      <img alt="Logo" src={Log} width="130px" {...props} />
    </Hidden>
    <Hidden smDown>
      <img alt="Logo" src={Log} width="150px" {...props} />
    </Hidden>
  </>
);

export default Logo;
