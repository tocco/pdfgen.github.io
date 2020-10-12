import React from "react";
import { Typography, makeStyles, Theme, Card, CardActionArea, CardContent } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Link } from "gatsby";
import { IHomePageProps } from "@jorsek/ezd-client/dist/src/Core";
import HeroImage from "@jorsek/gatsby-theme-easydita-core/src/components/HeroImage";
import { useSiteMetadata, useGroup } from "@jorsek/gatsby-theme-easydita-core/src/utils/hooks";
import { SearchBox } from "@jorsek/static-portal-components";

const withStyles = makeStyles((theme: Theme) => {
    return {
        content: {
            display: "flex",
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            justifyContent: "center",

            [theme.breakpoints.down("sm")]: {
                maxWidth: theme.spacing(44),
            },
        },
        ezd_hero_text: {
            margin: theme.spacing(2),
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
                width: theme.spacing(37.5),
                fontSize: "2.0rem",
                textAlign: "center",
                margin: "auto",
            },
        },
        heroSubtitle: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 100,
            margin: theme.spacing(2),
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.25rem",
                textAlign: "center",
            },
        },
        products: {
            marginTop: theme.spacing(3.5),
            display: "grid",
            gridTemplateColumns: `
                minmax(${theme.spacing(37.5)}px, ${theme.spacing(39.5)}px) 
                minmax(${theme.spacing(37.5)}px, ${theme.spacing(39.5)}px)`,
            gridAutoRows: `minmax(${theme.spacing(10.5)}px, auto)`,
            gridGap: theme.spacing(3),
            justifyContent: "center",
        },
        feature: { justifyContent: "center" },
        product_card: {
            backgroundColor: theme.palette.primary.main,
            color: grey[100],
            textAlign: "center",
            height: "100%",
        },
        product_card_title: {
            textAlign: "center",
        },
        product_card_button: {
            height: "100%",
            minHeight: theme.spacing(10),
        },
        sidebar: {
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down("md")]: {
                visibility: "hidden",
            },
        },
        media: {
            width: "30%",
            display: "block",
            margin: "auto",
        },
        link: { textDecoration: "none" },
    };
});

const IndexPage = (_props: IHomePageProps) => {
    const styles = withStyles({});
    const metadata = useSiteMetadata();
    const mainGroup = useGroup("main");
    return (
        <div className={styles.content}>
            <div className={styles.feature}>
                <Typography align="center" variant="h1" color="primary" className={styles.ezd_hero_text}>
                    {metadata.heroTitle}
                </Typography>
                <Typography align="center" variant="h4" color="primary" className={styles.heroSubtitle}>
                    {metadata.heroSubtitle}
                </Typography>
                <SearchBox placeholder="Search" />
                <div className={styles.products}>
                    {mainGroup?.children?.map((card) => (
                        <Link className={styles.link} key={card.href} to={`/content/${card.href}`}>
                            <Card className={styles.product_card}>
                                <CardActionArea className={styles.product_card_button}>
                                    <CardContent>
                                        {!!card.thumbnail && <img className={styles.media} src={card.thumbnail} />}
                                        <Typography
                                            className={styles.product_card_title}
                                            align="left"
                                            variant="h6"
                                            component="h2"
                                            color="inherit"
                                        >
                                            {card.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
