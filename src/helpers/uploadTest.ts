import { database, database as db } from '../utils/firebase';

export default async function uploadTest(
	testName: string,
	test: string,
	result: string
) {
	return await database.ref(`/tests/${testName}`).set({
		test: test,
		results: {
			gary: result,
			others: [],
		},
	});
}
