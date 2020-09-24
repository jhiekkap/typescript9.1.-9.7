import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());
app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query; 
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        res.send({ weight, height, bmi: calculateBmi(height, weight) });
    } else {
        res.send({
            error: "malformatted parameters"
        });
    }
});

app.post('/exercises', (req, res) => {
    console.log('REQ BODY', req.body)
    const { daily_exercises, target } = req.body;
    if (!daily_exercises || !target) {
        res.send({
            error: "parameters missing"
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if (daily_exercises.find((exercise: any) => isNaN(Number(exercise)) || isNaN(Number(target)))) {
        res.send({
            error: "malformatted parameters"
        });
    } else {
        res.send(calculateExercises(daily_exercises, target));
    }
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});