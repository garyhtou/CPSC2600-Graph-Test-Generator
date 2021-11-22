import admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

export const app = initializeApp({
	credential: admin.credential.cert(
		JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as string)
	),
	databaseURL: process.env.FIREBASE_DATABASE_URL as string,
});

export const database = getDatabase(app);
