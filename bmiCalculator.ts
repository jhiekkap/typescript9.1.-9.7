
type Result1 = string;

type MultiplyValues1 = Array<number>;


const parseArguments1 = (args: Array<string>): MultiplyValues1 => {
    if (args.length !== 4) throw new Error('2 arguments required!');
    if (args.find((arg, i) => i > 1 && isNaN(Number(arg)))) {
        throw new Error('Provided values were not numbers!');
    }
    return args
        .filter((arg) => !isNaN(Number(arg)))
        .map((arg) => Number(arg));
};

export const calculateBmi = (height: number, weight: number): Result1 => {
    const bmi = (weight / ((height / 100) ** 2));
    //console.log(bmi)
    if (bmi < 15) {
        return 'Very severely underweight';
    } else if (bmi < 16) {
        return 'Severely underweight';
    } else if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal (healthy weight)';
    } else if (bmi < 30) {
        return 'Overweight';
    } else if (bmi < 35) {
        return 'Obese Class I (Moderately obese)';
    } else if (bmi < 40) {
        return 'Obese Class II (Severely obese)';
    } else {
        return 'Obese Class III (Very severely obese)';
    }
};


try {
    const [value1, value2] = parseArguments1(process.argv);
    console.log('VALUES:', value1, value2);
    console.log(calculateBmi(value1, value2));
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}

//console.log(calculateBmi(180, 74))

//calculateExercisesmodule.exports = calculateBmi;