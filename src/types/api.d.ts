// define api parameters

interface CaptchaApiResult {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}

interface LoginApiRequest {
    username: string;
    password: string;
    captcha: string;
    uuid: string;
}

interface LoginApiResult {
    msg: string;
    code: number;
    token: string;
}