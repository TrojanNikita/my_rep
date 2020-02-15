//import { VERSION, API_URL } from 'src/config';

function apiRequest(input: RequestInfo, init?: Omit<RequestInit, 'body'> & {body?: object | BodyInit | null}): Promise<Response>
function apiRequest(input: RequestInfo, init?: RequestInit): Promise<Response>
function apiRequest(input: any, init: any = {}) {
	let requestBody = init.body;
	const hasObjectInBody = typeof requestBody === 'object';
	if (hasObjectInBody) requestBody = JSON.stringify(requestBody);

	return fetch(
		typeof input === 'string' ? `${input}` : input,
		{
			...init,
			headers: {
				...hasObjectInBody ? { 'Content-Type': 'application/json' } : {},
				...(init.headers || {}),
			},
			...hasObjectInBody ? { body: requestBody } : {},
		},
	);
}

export default apiRequest;