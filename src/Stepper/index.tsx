import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DayOne from './DayOne';
import MissingDay from './MissingDay/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'auto',
      margin: '16px'
    },
    button: {
      width: '300px',
      backgroundColor: '#1791B1'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
  }),
);

function getSteps() {
  return ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia Final, rs'];
}

function getStepContent(step: number, error: boolean, setError: Function, setAnswer: any) {
  switch (step) {
    case 0:
      return <DayOne error={error} setAnswer={setAnswer} setError={setError}/>;
    case 1:
      return <MissingDay />;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [answer, setAnswer] = React.useState(false)

  const steps = getSteps();

  const isNextStepAvailable = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    if(answer) {
        setActiveStep(activeStep + 1)
        setError(false)
    } else {
        setError(true)
    }
  };


  useEffect(() => {
      const mission = localStorage.getItem('mission')
      if(mission) {
        setActiveStep(Number(mission))
      }
  }, [])

  useEffect(() => {
    localStorage.setItem('mission', activeStep.toString());
  }, [activeStep])

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div className={classes.content}>
            <Typography className={classes.instructions}>{getStepContent(activeStep, error, setError, setAnswer)}</Typography>
            <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            disabled={isNextStepAvailable(activeStep)}
            >
            {activeStep === steps.length - 1 ? 'Finish' : 'Tentar'}
            </Button>
        </div>
      </div>
    </div>
  );
}
