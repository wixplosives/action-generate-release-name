import { expect } from 'chai';
import { generateGreeting } from '../src/helpers';

describe('generateGreeting()', () => {
    it('generate greeting', async () => {
        const testName = 'Yosi';
        const testJobName = 'test-job';
        const greeting = await generateGreeting({
            name: testName,
            jobName: testJobName,
        });
        expect(greeting).to.equal(`${testName} => ${testJobName}`);
    });
});
