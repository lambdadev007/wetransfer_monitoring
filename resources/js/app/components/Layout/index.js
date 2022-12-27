import React, { useState, Fragment, useMemo, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Container,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    CircularProgress
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import moment from "moment";
import cloneDeep from "lodash/cloneDeep";

import { clientUnset } from "@/redux/actions/client";
import { planNameLoading } from "@/redux/actions/plans";
import * as c from "@/constants";
import checkRole from "@/helpers/checkRole";
import { dateFormatPretty } from "@/config";

const accountMenuId = "navbar-account-menu";
const sidebarWidth = 266;
const onlyAdmins = [c.super_administrator, c.admin];

const mainSidebarList = [
    {
        title: "2021 - 2025 წლების გეგმა",
        defaultExpanded: true,
        list: [
            {
                title: "მიზნები",
                url: "/goals",
                permissions: onlyAdmins
            },
            {
                title: "ამოცანები",
                url: "/tasks",
                permissions: onlyAdmins
            },
            {
                title: "ინდიკატორები",
                url: "/indicators",
                permissions: onlyAdmins
            },
            {
                title: "მტკიცებულებები",
                url: "/evidences",
                permissions: onlyAdmins
            },
            {
                title: "წლის გეგმები",
                alwaysExpanded: true,
                noActiveClassName: true,
                url: "/activities",
                list: [
                    {
                        title: "აქტივობები",
                        url: "/activities"
                    }
                ]
            }
        ]
    },
    {
        title: "საკონტაქტო ინფორმაცია",
        url: "/contact-info"
    },
    {
        title: "სტატისტიკა",
        url: "/statistics"
    }
];
const adminMenu = [
    {
        title: "პარამეტრები",
        url: "/parameters"
    },
    {
        title: "სამსახურების მართვა",
        url: "/manage-departments"
    },
    {
        title: "მომხმარებლების მართვა",
        url: "/manage-users"
    },
    {
        title: "ლოგი",
        url: "/logs"
    }
];

const useStyles = makeStyles(theme => ({
    sidebar: {
        width: props => (props.isSidebarHidden ? 0 : sidebarWidth),
        height: "100%",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        overflowY: "auto",
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        "& .MuiListItemText-primary": {
            fontFeatureSettings: "'case' on",
            textTransform: "uppercase"
        }
    },
    navbarLogoLink: {
        display: "flex",
        cursor: "pointer"
    },
    navbarLogo: {
        width: "230px",
        objectFit: "contain"
    },
    userName: {
        "&&": {
            maxWidth: "500px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }
    },
    sidebarList: {},
    sidebarListItemWrapper: {
        display: "flex",
        alignItems: "center"
    },
    sidebarListNested: {
        paddingLeft: theme.spacing(2)
    },
    sidebarAdminMenuHeader: {
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2)
    },
    sidebarNavLink: {
        width: "100%",
        transition: "0.2s"
    },
    sidebarActiveNavLink: {
        backgroundColor: "#E5E7F5"
    },
    // necessary for content to be below app bar
    toolbarDefault: theme.mixins.toolbar,
    toolbar: {
        "&&": {
            paddingLeft: "0",
            justifyContent: "space-between"
        }
    },
    navbarLeft: {
        display: "flex",
        alignItems: "center",
        "& > * + *": {
            marginLeft: theme.spacing(2)
        }
    },
    sidebarExpandIcon: {
        "&&": { transition: "0.2s" }
    },
    sidebarExpanded: {
        "&&": { transform: "rotate(180deg)" }
    },
    navbarRight: {
        display: "flex",
        alignItems: "center"
    },
    main: {
        marginLeft: props => (props.isSidebarHidden ? 0 : sidebarWidth)
    },
    mainContainer: {
        "&&": {
            marginLeft: "unset"
        }
    },
    content: {
        padding: theme.spacing(3)
    }
}));

const RecursiveExpandableList = ({ item, list, ...props }) => {
    const [isOpen, setIsOpen] = useState(!!item.defaultExpanded);
    const cls = useStyles();
    const canShow = useMemo(() => {
        if (item.permissions) {
            return checkRole(item.permissions);
        } else {
            return true;
        }
    }, []);

    const hasList = !!list && list.length > 0;

    const handleExpand = () => {
        setIsOpen(prev => !prev);
    };

    const NavLinkOrFragment = item.url ? NavLink : Fragment;

    if (!canShow) {
        return null;
    }

    return (
        <>
            <div className={cls.sidebarListItemWrapper}>
                <NavLinkOrFragment
                    {...(item.url
                        ? {
                              to: item.url,
                              activeClassName: item.noActiveClassName
                                  ? null
                                  : cls.sidebarActiveNavLink,
                              className: cls.sidebarNavLink
                          }
                        : {})}
                >
                    <ListItem button onClick={handleExpand}>
                        <ListItemText primary={item.title} />
                        {hasList && !item.alwaysExpanded ? (
                            <div style={{ paddingLeft: "8px" }}>
                                {isOpen ? (
                                    <ExpandLessIcon />
                                ) : (
                                    <ExpandMoreIcon />
                                )}
                            </div>
                        ) : null}
                    </ListItem>
                    {item.editable && (
                        <div>
                            <IconButton>
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </div>
                    )}
                </NavLinkOrFragment>
            </div>
            {hasList && (
                <Collapse
                    in={item.alwaysExpanded || isOpen}
                    timeout="auto"
                    unmountOnExit
                >
                    <div className={cls.sidebarListNested}>
                        {list.map((el, index) => (
                            <RecursiveExpandableList
                                key={index}
                                item={el}
                                list={el.list}
                            />
                        ))}
                    </div>
                </Collapse>
            )}
        </>
    );
};

const Layout = ({
    logout,
    userInfo,
    planNameLoading,
    planName,
    loadPlanName,
    ...props
}) => {
    const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
    const cls = useStyles({ isSidebarHidden });

    const canShowAdminList = useMemo(() => checkRole(onlyAdmins), []);
    const modifiedMainSidebarList = useMemo(() => {
        let _updated = cloneDeep(mainSidebarList);
        _updated[0].title = planName;
        return _updated;
    }, [planName]);

    const isAccountMenuOpen = !!accountMenuAnchor;

    const openAccountMenu = event => {
        setAccountMenuAnchor(event.currentTarget);
    };
    const closeAccountMenu = () => {
        setAccountMenuAnchor(null);
    };

    const renderedMenu = (
        <Menu
            anchorEl={accountMenuAnchor}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={accountMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isAccountMenuOpen}
            onClose={closeAccountMenu}
        >
            <Link to="/profile">
                <MenuItem onClick={closeAccountMenu}>ჩემი პროფილი</MenuItem>
            </Link>
            <MenuItem
                onClick={() => {
                    closeAccountMenu();
                    logout();
                }}
            >
                გასვლა
            </MenuItem>
        </Menu>
    );

    useEffect(() => {
        loadPlanName();
    }, []);

    return (
        <div>
            <div className={cls.sidebar}>
                <div className={cls.toolbarDefault} />
                {planNameLoading ? (
                    <div style={{ textAlign: "center", padding: "24px" }}>
                        <CircularProgress />
                    </div>
                ) : planName ? (
                    <>
                        <List className={cls.sidebarList}>
                            {modifiedMainSidebarList.map((el, index) => (
                                <RecursiveExpandableList
                                    key={index}
                                    item={el}
                                    list={el.list}
                                />
                            ))}
                        </List>
                        {canShowAdminList && (
                            <>
                                <Divider />
                                <div className={cls.sidebarAdminMenuHeader}>
                                    <Typography variant="subtitle1">
                                        ადმინისტრატორის სივრცე
                                    </Typography>
                                </div>
                                <List className={cls.sidebarList}>
                                    {adminMenu.map((el, index) => (
                                        <RecursiveExpandableList
                                            key={index}
                                            item={el}
                                            list={el.list}
                                        />
                                    ))}
                                </List>
                            </>
                        )}
                    </>
                ) : (
                    <div style={{ padding: "24px 8px" }}>
                        <Typography variant="body1">
                            გეგმის სახელი ვერ ჩაიტვირთა
                        </Typography>
                    </div>
                )}
            </div>
            <AppBar position="sticky" className={cls.appBar}>
                <Toolbar className={cls.toolbar}>
                    {renderedMenu}
                    <div className={cls.navbarLeft}>
                        <IconButton
                            onClick={() => {
                                setIsSidebarHidden(prev => !prev);
                            }}
                            className={clsx(
                                cls.sidebarExpandIcon,
                                isSidebarHidden && cls.sidebarExpanded
                            )}
                            color="inherit"
                        >
                            <ChevronLeftIcon fontSize="large" />
                        </IconButton>
                        <Link to="/" className={cls.navbarLogoLink}>
                            <img
                                src="/img/logo-navbar.png"
                                className={cls.navbarLogo}
                            />
                        </Link>
                        <div>
                            <Typography>{`${moment().format(
                                dateFormatPretty
                            )} - ${moment().quarter()} კვარტალი`}</Typography>
                        </div>
                    </div>
                    <div className={cls.navbarRight}>
                        <Typography variant="body2" className={cls.userName}>
                            {userInfo[c.job_name]}
                        </Typography>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={accountMenuId}
                            aria-haspopup="true"
                            onClick={openAccountMenu}
                            color="inherit"
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={cls.main}>
                <Container
                    disableGutters
                    maxWidth={false}
                    className={cls.mainContainer}
                >
                    <div className={cls.content}>{props.children}</div>
                </Container>
            </div>
        </div>
    );
};

const mapState = state => ({
    userInfo: state.client.userInfo,
    planNameLoading: state.plans.loading,
    planName: state.plans.data
});
const mapDispatch = {
    logout: clientUnset,
    loadPlanName: planNameLoading
};

export default connect(mapState, mapDispatch)(Layout);
