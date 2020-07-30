import React from 'react';
import { TextField } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Fuse from 'fuse.js'
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

export default function DayFour(props: any) {
    const classes = useStyles();
    const [input, setInput] = React.useState('')
    const [score, setScore] = React.useState(1)

    React.useEffect(() => {
        let i = input.toLocaleLowerCase().trim()
        if(i === 'tomar sorvete') { 
            props.setAnswer(true)
        }
    }, [input])


    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                <p className={classes.breakText}><strong>Adna já passamos por muitos momentos juntos tantos ruins quantos bons, mas sempre uma do lado da outra. No momento mais difícil da minha vida você esteve do meu lado, eu lembro que liguei chorando e você deixou de fazer algo que você queria para vir na minha casa ficar comigo. Esse dia percebi que eu sempre teria sua amizade e que você sempre estaria do meu lado. EU TE AMO.<br/></strong></p>
            </Typography>
            <Typography className={classes.question}>
                <h4><strong>Nesse momento tão difícil o que foi que você deixou de fazer para ficar do meu lado?</strong></h4>
            </Typography>
            <TextField 
                onChange={e => setInput(e.target.value)}
                label="Resposta"
                variant="filled"
                error={props.error}
                helperText={props.error ? `Você está ${((1 - score) * 100).toFixed(2)}% perto da resposta` : ''}
            >
            </TextField>

        </div>
    )   
}
