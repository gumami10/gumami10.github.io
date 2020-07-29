import React from 'react';
import { TextField } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import  Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     display: 'flex',
     justifyContent: 'center',
     flexDirection: "column"
    },
    text: {

    },
    question: {
        fontSize: '22px'
    },

    markedText: {
        margin: 0
    },

    breakText: {
        paddingBottom: '4px',
        borderBottom: '2px solid #cecece'
    }
  }),
);

export default function DayTwo(props: any) {
    const classes = useStyles();
    const [input, setInput] = React.useState('')
    
    React.useEffect(() => {
        let i = input.toLocaleLowerCase().trim()
        if(i === 'a odisséia dos tontos' || i === 'a odisseia dos tontos') { 
            props.setAnswer(true)
        }
    })

    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                <p className={classes.breakText}    ><strong>Eric - Tu tem alguma piada interna com ela ou alguma memoria daora que eu possa colocar aqui?<br />
                X - Sério Man core aqui bateu <br/></strong></p>
                <p className={classes.breakText}>
                    Primeira que eu mandei uma história assim na Tegra; alguém tinha perguntado se a gente almoçou, e eu falei: "os estagiários já estão comidos" <br />
                    Essa ela lembra ezyyy <br/>
                </p>
                <p className={classes.breakText}>
                Tem outra do git, que eu fui ensinar git para Adna pela 6x vez e ela confunde git com Github <br />
                </p>
                <h4 className={classes.markedText}>E a famosa...</h4>
                <h4 className={classes.markedText}>O gerente tá maluco, só 3 trufas por 6 reais</h4>
            </Typography>
            <Typography className={classes.question}>
                <h4><strong>Quém é esse serhumaninho?</strong></h4>
            </Typography>
            <TextField onChange={e => setInput(e.target.value)} label="Resposta" variant="filled" error={props.error} helperText={props.error ? 'Sorry bro' : ''}></TextField>
        </div>
    )   
}
