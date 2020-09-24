interface Result2 {
    periodLength: number;
    trainingDays: number;
    average: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
}

type MultiplyValues2 = Array<number>;


const parseArguments = (args: Array<string>): MultiplyValues2 => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.find((arg, i) => i > 2 && isNaN(Number(arg)))) {
        throw new Error('Provided values were not numbers!');
    }
    return args
        .filter((arg) => !isNaN(Number(arg)))
        .map((arg) => Number(arg));
};


export const calculateExercises = (excercises: Array<number>, target: number): Result2 => {
    const periodLength = excercises.length;
    const trainingDays = excercises.filter(day => day !== 0).length;
    const average = excercises.reduce((a, b) => a + b) / periodLength;
    const success = average >= target;
    const rating =
        average < target
            ? 1
            : average > target
                ? 3
                : 2;
    const ratingDescription =
        rating === 1
            ? 'bad'
            : rating === 3
                ? 'good'
                : 'ok';

    return { periodLength, trainingDays, success, rating, ratingDescription, target, average };
};

//const myExercises = [3, 0, 2, 4.5, 0, 3, 1];

//console.log(calculateExercises(myExercises, 2));

try {
    const [target, ...values] = parseArguments(process.argv);
    //console.log('TARGET:', target, 'VALUES:', values);
    console.log(calculateExercises(values, target));
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}