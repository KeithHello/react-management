import service from ".";

export const CaptchaApiGet = (): Promise<CaptchaApiResult> =>
    service.get('/captcha');

export const LoginApiPost = (data: LoginApiRequest): Promise<LoginApiResult> =>
    service.post('/login', data);
    