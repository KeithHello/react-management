import Mock from 'mockjs'
import captcha from './captcha.png'

Mock.mock('/captcha', 'get', (): CaptchaApiResult => {

    return {
        msg: 'success',
        img: captcha,
        code: 200,
        captchaEnabled: true,
        uuid: 'uuid-123456'
    }
})

Mock.mock('/login', 'post', (data: LoginApiRequest) => {
    console.log(data);

    return {
        msg: 'success',
        code: 200,
        token: 'token-123456'
    }
})