import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Search, Settings } from '@material-ui/icons';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { Link } from 'react-router-dom';
import AddUser from '../AddUser/AddUser';
import UserList from '../UserList/UserList';
import AddResourses from '../AddResourses/AddResourses';
import Candidatelist from '../Common/CandidateList';
import ListContext from '../ContextApi/ListContext';
// import GamesComponent from '../Pages/GamesComponent';
// import gameContext from '../gameContext';
const drawerWidth = 200;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    background: 'hsl(231deg 39% 17%)',
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    background: 'hsl(231deg 31% 22%)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    background: 'hsl(231deg 39% 17%)',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      activeInput: 1,
      isClicked:false
    };
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  setActiveTab = (id) => {
    this.setState({
      activeInput: id,
    });
  };
  clicked=(param)=>{
    this.setState({
      isClicked:true
    })
    setTimeout(() => {
      this.setState({
        isClicked:false
      })
    }, 1000);
  }
  render() {
    const { classes } = this.props;
    let badgeno = this.context.userData.length
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
              style={{
                display: 'flex',
              }}
            >
              Homepage
            </Typography>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width:200
              }}
            >
              <IconButton color="inherit">
                <Badge badgeContent={badgeno} color="secondary">
                  <NotificationsIcon />
                 {this.state.isClicked ? 
                 <div className="notications">
                   <b>{badgeno}</b> &nbsp; JD are Posted 
                  </div>:null } 
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Settings />
              </IconButton>
              <IconButton onClick={() => this.setActiveTab(5)} color="inherit">
                <img
                  className="profile"
                  src="https://d38we5ntdyxyje.cloudfront.net/858987/profile/GJQSELLC_avatar_medium_square.jpg"
                  alt
                />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            ),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <ul className="left__tab">
            <li
              className={this.state.activeInput === 1 ? 'active-tab' : 'tab'}
              onClick={() => this.setActiveTab(1)}
            >
              <SportsEsportsOutlinedIcon />
              &emsp; Add JD
            </li>
            <Divider />
            <li
              className={this.state.activeInput === 2 ? 'active-tab' : 'tab'}
              onClick={() => this.setActiveTab(2)}
            >
              <SportsEsportsOutlinedIcon />
              &emsp;JD List
            </li>
            <Divider />
            <li
              className={this.state.activeInput === 3 ? 'active-tab' : 'tab'}
              onClick={() => this.setActiveTab(3)}
            >
              <SportsEsportsOutlinedIcon />
              &emsp;Add Resources
            </li>
            <Divider />
            <li
              className={this.state.activeInput === 4 ? 'active-tab' : 'tab'}
              onClick={() => this.setActiveTab(4)}
            >
              <SportsEsportsOutlinedIcon />
              &emsp;Candidate List
            </li>
            <Divider />
          </ul>
        </Drawer>
        <main
          className={classes.content}
          style={{
            color: 'white',
          }}
        >
          <div className={classes.appBarSpacer} />
          <div
            className={
              this.state.activeInput == 1 ? 'active-content' : 'content'
            }
          >
            <AddUser clicked={this.clicked} />
          </div>
          <div
            className={
              this.state.activeInput == 2 ? 'active-content' : 'content'
            }
          >
              {/* <SimpleLineChart /> */}
              <UserList/>
          </div>
          <div
            className={
              this.state.activeInput == 3 ? 'active-content' : 'content'
            }
          >
              <AddResourses/>
          </div>
          <div
            className={
              this.state.activeInput == 4 ? 'active-content' : 'content'
            }
          >
              <Candidatelist/>
          </div>
          <div
            className={
              this.state.activeInput == 5 ? 'active-content' : 'content'
            }
          >
            <Typography variant="h4" gutterBottom component="h2">
              Profile
            </Typography>
          </div>
        </main>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};
Homepage.contextType = ListContext;
export default withStyles(styles)(Homepage);
