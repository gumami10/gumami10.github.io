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
    }
  }),
);

export default function DayOne(props: any) {
    const classes = useStyles();
    const [input, setInput] = React.useState('')
    
    React.useEffect(() => {
        let i = input.toLocaleLowerCase()
        if(i === 'a odisséia dos tontos' || i === 'a odisseia dos tontos') { 
            props.setAnswer(true)
        }
    })

    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                <h3>Salve minha deusa!! <br /></h3>
                Esse é o primeiro de 7 desafios que eu vou fazer para tu,
                sendo que eu vou liberar eles um por dia. Se tu conseguir completar todos, no final vai ter um prêmio, rs... <br />
                Como esse é o primeiro dia, eu vou fazer um desafio bem easy, boa sorte e espero que vc curta! <br />
                Te amo meu amor {'<3'}
            </Typography>
            <Typography className={classes.question}>
                <h4><strong>Qual é o nome do primeiro filme que nós "assistimos" juntinhos quando nos vemos pela 1a vez?</strong></h4>
            </Typography>
            <TextField onChange={e => setInput(e.target.value)} label="Resposta" variant="filled" error={props.error} helperText={props.error ? 'Sorry bro' : ''}></TextField>
        </div>
    )   
}
