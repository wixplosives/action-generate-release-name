export interface IExampleInterface {
    name: string;
    jobName: string;
}

const wait = async (milliseconds: number): Promise<string> => {
    return new Promise((resolve) => {
        if (isNaN(milliseconds)) {
            throw new Error('milliseconds not a number');
        }
        setTimeout(() => resolve('done!'), milliseconds);
    });
};

export const generateGreeting = async ({ name, jobName }: IExampleInterface): Promise<string> => {
    await wait(100);
    const result = `${name} => ${jobName}`;
    return result;
};
