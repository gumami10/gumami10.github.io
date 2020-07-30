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

export default function DayThree(props: any) {
    const classes = useStyles();
    const [input, setInput] = React.useState('')
    
    React.useEffect(() => {
        let i = input.toLocaleLowerCase().trim()
        if(i === 'oscar niemayer' || i === 'oscar niemeyer') { 
            props.setAnswer(true)
        }
    })

    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                <p className={classes.breakText}><strong>E a Adna é muito engraçada, sempre que acho que estou começando a entende-la somente fico mais perdido, desde questões de escolhas a gostos que são alterados a cada ciclo da lua. Mas diante de toda essa confusão eu acho uma amiga nela, uma melhor amiga para ser mais preciso.<br/></strong></p>
            </Typography>
            <Typography className={classes.question}>
                <h4><strong>Bem, em um de nosso rolês eu estava andando de skate e tive uma queda muito linda na frente de toda a galera, ainda fiquei todo sujo e assim continuei o dia todo. A pergunta é, em qual local de Goiânia que eu caí?</strong></h4>
            </Typography>
            <TextField onChange={e => setInput(e.target.value)} label="Resposta" variant="filled" error={props.error} helperText={props.error ? 'Sorry bro' : ''}></TextField>
        </div>
    )   
}
