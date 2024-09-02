import { request } from '@elcid-monorepo/utils';
import { APIS } from '@elcid-monorepo/constants';

export async function signUp(data: any) {
    const response = await request(
        `${APIS.BACKEND_ORIGIN}${APIS.SIGN_UP_API}`,
        { method: 'POST', data },
    );
    return response;
}

export async function signIn(data: any) {
    const response = await request(
        `${APIS.BACKEND_ORIGIN}${APIS.SIGN_IN_API}`,
        { method: 'POST', data },
    );
    return response;
}
