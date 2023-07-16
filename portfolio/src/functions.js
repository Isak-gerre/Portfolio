import App from './firebase';
import { doc, updateDoc, increment, getFirestore } from 'firebase/firestore';

export const db = getFirestore(App);
export const views = async () => {
	const views = doc(db, 'Views', 'number');
	await updateDoc(views, {
		antal: increment(1)
	});
};
