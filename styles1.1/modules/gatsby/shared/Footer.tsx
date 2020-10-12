import React from "react";
import { Theme, makeStyles, Typography } from "@material-ui/core";
import RSSIcon from "@material-ui/icons/RssFeed";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const withStyles = makeStyles((theme: Theme) => {
    return {
        footer_1_wrapper: {
            backgroundColor: theme.palette.primary.dark,
        },
        footer_1: {
            "color": theme.palette.text.secondary,
            "padding": theme.spacing(8),
            "paddingLeft": 0,
            "width": "100%",
            "display": "flex",
            "margin": "0 auto",
            "maxWidth": theme.spacing(180),
            "& > div:first-of-type": {
                marginLeft: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                "flexDirection": "column-reverse",
                "paddingTop": theme.spacing(3),
                "paddingBottom": theme.spacing(3),
                "& > div:first-of-type": {
                    marginLeft: theme.spacing(3),
                    marginBottom: theme.spacing(2),
                },
                "& > div": {
                    marginLeft: theme.spacing(3),
                    marginBottom: theme.spacing(5),
                },
            },
        },
        footer_2_wrapper: {
            backgroundColor: theme.palette.primary.light,
        },
        footer_2: {
            "display": "flex",
            "justifyContent": "space-between",
            "color": theme.palette.text.secondary,
            "padding": theme.spacing(3),
            "paddingLeft": 0,
            "maxWidth": theme.spacing(180),
            "margin": "0 auto",
            "width": "100%",
            "& > div:first-of-type": {
                marginLeft: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                "flexDirection": "column-reverse",
                "paddingLeft": theme.spacing(3),
                "& > div:first-of-type": {
                    margin: "0 auto",
                    marginTop: theme.spacing(1),
                },
                "& div:nth-of-type(2)": {
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "70%",
                },
            },
        },
        footer_item: {
            "marginLeft": theme.spacing(10),
            "& a": {
                "textDecoration": "none",
                "color": theme.palette.text.secondary,
                "&:hover": {
                    color: theme.palette.secondary.main,
                },
            },
            [theme.breakpoints.down("sm")]: {
                "margin": "0 auto",
                "& a": {
                    // marginRight: theme.spacing(3)
                },
                "& svg": {
                    height: theme.spacing(5),
                    width: theme.spacing(5),
                },
            },
        },
        footerCopyrightText: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.6rem",
            },
        },
    };
});

const Footer = (props: any) => {
    const classes = withStyles(props);
    const getCurrentYear = () => new Date().getFullYear();

    return (
        <>
            <div className={classes.footer_1_wrapper}>
                <div className={classes.footer_1}>
                    <div className={classes.footer_item}>
                        <Typography color="inherit" variant="h5">
                        Company Name
                        </Typography>
                        3645  Wilson Street
                        <br />
                        Suite 404
                        <br />
                        Palm Springs, California
                        <br />
                        Toll Free: 1-234-567-8999
                    </div>
                    <div className={classes.footer_item}>
                        <Typography color="inherit" variant="h5">
                            Resources
                        </Typography>
                        <a href="#main_site">company.com</a>
                        <br />
                        <a href="#about">about</a>
                        <br />
                        <a href="#resources">resources</a>
                        <br />
                        <a href="#support">support</a>
                    </div>
                </div>
            </div>
            <div className={classes.footer_2_wrapper}>
                <div className={classes.footer_2}>
                    <div className={classes.footer_item}>
                    <Typography className={classes.footerCopyrightText}>
                        {`Copyright © 2020-${getCurrentYear()} Company Name Inc. | `}<a href="#legal"> Legal</a>
                    </Typography>
                    </div>
                    <div className={classes.footer_item}>
                        <a href="#fanpage" target="blank"> <FacebookIcon style={{ fontSize:32 }}/></a>
                        <a href="#twitter" target="blank"><TwitterIcon style={{ fontSize:32 }}/></a>
                        <a href="#feed" target="blank"><RSSIcon style={{ fontSize:32 }}  /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
