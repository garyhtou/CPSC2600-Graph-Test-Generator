import childProcess from 'child_process';
import { promisify } from 'util';

const exec = promisify(childProcess.exec);

export default async function testFile(fileName: string) {
	return await (await exec(`./hw5 ${fileName}`)).stdout.trim();
}
