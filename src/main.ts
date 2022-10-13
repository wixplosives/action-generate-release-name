import * as core from '@actions/core';
import { generateReleaseName } from './helpers';

function run(): void {
    const pkgJsonPath = core.getInput('pkg_json_path');
    const branchName = core.getInput('branch_name');
    const sha = core.getInput('sha');
    const nameResult = generateReleaseName({
        pkgJsonPath,
        branchName,
        sha,
    });
    core.setOutput('result', nameResult);
}

run();
