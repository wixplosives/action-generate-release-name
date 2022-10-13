import fs from '@file-services/node';

export interface IParamsInterface {
    pkgJsonPath: string;
    branchName: string;
    sha: string;
}

export const generateReleaseName = ({ pkgJsonPath, branchName, sha }: IParamsInterface): string => {
    const fullPath = `${fs.resolve(fs.join(process.cwd(), pkgJsonPath))}`;
    // eslint-disable-next-line import/no-dynamic-require, @typescript-eslint/no-var-requires
    const version = (require(fullPath) as { version: string }).version;
    const name = `${version}-${branchName}-${sha}`;
    const result = name.replace(/[/_]/g, '-');
    return result;
};
