import React from 'react'
import canvas from './canvas.png'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    img: {
        maxHeight: '300px'
    }
  }),
);

export default function MissingDay () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Não fique ansiosa, volte amanhã para mais
            <img className={classes.img} src={canvas} alt=""/>
        </div>
    )
}