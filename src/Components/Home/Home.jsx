import React, { useState } from 'react'
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar}/>
            <Link to={`/store`} style={{ textDecoration: 'inherit', color: 'inherit'}}>
            <Typography variant="h1" align="center" alignItems="center">eStore.</Typography>
            <Typography variant="h5" align="center" alignItems="center" fontSize='10px'>Shop now</Typography>
            <img className={classes.herophoto} src="https://miro.medium.com/max/1400/1*x3PryP3omK_6tiZ7wI4cgw.png" alt="" />
            <img className={classes.herophoto} src="https://images.macrumors.com/t/tA_RAlO-sKIrvULzR2aaVJ5Tyd4=/1920x/article-new/2019/02/MR-Future-Products-2020-2.png" alt="" />
            <img className={classes.herophoto} src="https://img.us.news.samsung.com/us/wp-content/uploads/2020/08/05100258/01_Unpacked_2020_press_release_main_image_1000x554.jpg" alt="" />
            </Link>
        </div>
    )
}

export default Home
