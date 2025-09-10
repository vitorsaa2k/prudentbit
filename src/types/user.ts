export type MedicalIssueType =
	| "fever"
	| "headache"
	| "sore throat"
	| "sprained ankle"
	| "rash"
	| "ear infection"
	| "sinusitis"
	| "allergic reaction"
	| "stomach ache"
	| "broken arm";

export interface Contact {
	address: string | null;
	number: string | null;
	email: string | null;
}

export interface User {
	age: number;
	contact: Contact[];
	patient_name: string;
	photo_url: string | null;
	patient_id: number;
	medical_issue: MedicalIssueType;
}
