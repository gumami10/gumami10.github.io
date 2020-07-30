import React from 'react'
import canvas from './canvas.jpg'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        maxHeight: '300px',
        maxWidth: '300px'
    },
    breakText: {
        maxWidth: '500px',
        margin: 0,
        padding: '2px',
    }
  }),
);

export default function MissingDay () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className={classes.breakText}>Disclaimer: a pergunta dela era mt mais complicada, eu simplifiquei pq nao ia ficar legal fazer por pc</p>
            <p className={classes.breakText}>a pergunta original era: <br />"Qual foi esse momento tão difícil que eu estava passando e o que você deixou de fazer para ficar do meu lado?"</p>
            <p className={classes.breakText}>Resposta: <br />A minha avó estava morrendo de câncer e o Bruno tinha terminado comigo e você deixou de sair para tomar sorvete veio ficar comigo.</p>
    <p>Desculpe Elisama, tamo junto {'<3'}</p>
            <img className={classes.img} src={canvas} alt=""/>
            Não fique ansiosa, volte amanhã para mais
        </div>
    )
}