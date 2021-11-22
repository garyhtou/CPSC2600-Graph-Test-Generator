import dotenv from 'dotenv';
dotenv.config(); // Load envrionment variables from .env file

import generateTextGraph from './helpers/generateGraph';
import serializeGraph from './helpers/serializeGraph';

import testFile from './helpers/testFile';

import fs from 'fs';
import uploadTest from './helpers/uploadTest';

const DIR = './autoTests';
const TEST_PREFIX = 'testGraph';

async function testBatch() {
	fs.mkdirSync(DIR, { recursive: true });
	const CURR_TIME = new Date().getTime();

	for (let i = 0; i < 3; i++) {
		// generate a graph
		const graph = generateTextGraph();

		const testName = `${TEST_PREFIX}_${CURR_TIME}_${i}`;

		// write the graph
		const testFileName = `${DIR}/${testName}.txt`;
		const serializedGraph = serializeGraph(graph);
		fs.writeFileSync(testFileName, serializedGraph);

		// test the graph
		const results = await testFile(testFileName);

		const testResultsFileName = `${DIR}/${testName}_results.txt`;
		fs.writeFileSync(testResultsFileName, results);

		console.log(serializedGraph);
		console.log(results);

		// await uploadTest(testName, serializedGraph, results);
	}
}

testBatch();
