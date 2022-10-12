import { expect } from 'chai';
import { generateReleaseName } from '../src/helpers';

describe('generateReleaseName', () => {
    it('generate release name', () => {
        const baseName = 'my-build';
        const pkgJsonPath = './test/fixtures/package.json';
        const branchName = 'some-branch';
        const sha = 'af8798a';
        const result = generateReleaseName({
            baseName,
            pkgJsonPath,
            branchName,
            sha,
        });
        expect(result).to.equal(`${baseName}-0.0.1-${branchName}-${sha}`);
    });
    it('generate release name with slashes', () => {
        const baseName = 'my-build';
        const pkgJsonPath = './test/fixtures/package.json';
        const branchName = 'some/branch';
        const sha = 'af8798a';
        const result = generateReleaseName({
            baseName,
            pkgJsonPath,
            branchName,
            sha,
        });
        expect(result).to.equal(`${baseName}-0.0.1-some-branch-${sha}`);
    });
    it('generate release name with under line', () => {
        const baseName = 'my-build';
        const pkgJsonPath = './test/fixtures/package.json';
        const branchName = 'some_branch_under';
        const sha = 'af8798a';
        const result = generateReleaseName({
            baseName,
            pkgJsonPath,
            branchName,
            sha,
        });
        expect(result).to.equal(`${baseName}-0.0.1-some-branch-under-${sha}`);
    });
});
