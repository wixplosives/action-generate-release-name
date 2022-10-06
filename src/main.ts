import * as core from '@actions/core';
import { generateGreeting } from './helpers';
import { context } from '@actions/github';

async function run(): Promise<void> {
    const nameParam = core.getInput('name_param');
    const greeting = await generateGreeting({
        name: nameParam,
        jobName: context.job,
    });
    core.setOutput('greeting', greeting);
}

// eslint-disable-next-line github/no-then
run().catch((e) => {
    const fail = (core.getInput('fail_on_error') || 'false').toUpperCase() === 'TRUE';
    // eslint-disable-next-line no-console
    console.error(e);
    if (fail) {
        core.setFailed(e.message);
    } else {
        core.info(e.message);
    }
});
