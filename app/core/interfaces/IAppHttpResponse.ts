export interface IGenericResponse<T> {
	isValid: boolean;
	message: string;
	data: T;
	statusCode: number;
}
