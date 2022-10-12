import fs from '@file-services/node';

export interface IParamsInterface {
    baseName: string;
    pkgJsonPath: string;
    branchName: string;
    sha: string;
}

export const generateReleaseName = ({ baseName, pkgJsonPath, branchName, sha }: IParamsInterface): string => {
    const fullPath = `${fs.resolve(fs.join(process.cwd(), pkgJsonPath))}`;
    // eslint-disable-next-line import/no-dynamic-require, @typescript-eslint/no-var-requires
    const version = (require(fullPath) as { version: string }).version;
    const name = `${baseName}-${version}-${branchName}-${sha}`;
    const re = '///gi';
    const result = name.replace(re, '_');
    return result;
};
