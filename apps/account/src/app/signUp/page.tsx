'use client';
import {
    Button,
    Checkbox,
    Form,
    FormItem,
    Input,
    Link,
} from '@elcid-monorepo/widgets';
import {
    RiCheckboxCircleFill,
    RiEyeCloseLine,
    RiEyeLine,
} from '@remixicon/react';
import { useForm } from 'packages/widgets/src/lib/Form/useForm';
import { memo, useCallback, useRef, useState } from 'react';
import { REGEX, MESSAGE } from '@elcid-monorepo/constants';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const PASSWORD_RULES = [
    {
        rule: '8 - 64 characters ',
        validator: (pwd: string) => /^.{8,64}$/.test(pwd),
    },
    {
        rule: 'One uppercase letter',
        validator: (pwd: string) => /^[A-Z]$/.test(pwd),
    },
    {
        rule: 'One lowercase letter',
        validator: (pwd: string) => /^[a-z]$/.test(pwd),
    },
    { rule: 'One number', validator: (pwd: string) => /^[0-9]$/.test(pwd) },
    {
        rule: 'One special character (e.g., ! @ # $ % ^ & *)',
        validator: (pwd: string) => /^[\!\@\#\$\%\^\&\*]$/.test(pwd),
    },
];

const SignUp = () => {
    const [pwdVisible, setPwdVisible] = useState<boolean>(false);
    const [agreed, setAgreed] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const form = useRef(useForm());

    const onSubmit = useCallback(() => {
        if (!agreed) return;
        form.current.validates((errors, values) => {
            if (errors) return;
            console.log(values);
        });
    }, [agreed]);

    return (
        <div className='flex-1 flex flex-col justify-center items-center px-3 w-full  mx-auto desktop:flex-row desktop:gap-8 desktop:px-24 desktop:py-8'>
            <div className='gap-6 flex-1 flex flex-col justify-center w-full tablet:w-[456px] desktop:h-[672px] desktop:px-[102px] desktop:flex-none desktop:w-[592px]'>
                <h3
                    role='heading'
                    className='text-3xl font-semibold text-primary '
                >
                    Create your account
                </h3>
                <Form
                    className='flex flex-col gap-6'
                    form={form.current}
                    onValuesChange={(_, cur) => {
                        setPassword(cur.password || '');
                    }}
                >
                    <FormItem
                        name='email'
                        label='Email'
                        rules={[
                            {
                                required: true,
                                msg: MESSAGE.EMAIL_REQUIRED,
                            },
                            {
                                regex: REGEX.EMAIL_REGEX,
                                msg: MESSAGE.EMAIL_WRONG_FORMAT,
                            },
                        ]}
                    >
                        <Input name='email' aria-labelledby='email' />
                    </FormItem>
                    <FormItem
                        name='password'
                        label='Password'
                        rules={[
                            { required: true, msg: MESSAGE.PASSWORD_REQUIRED },
                            {
                                regex: REGEX.PASSWORD_REGEX,
                                msg: MESSAGE.PASSWORD_WRONG_FORMAT,
                            },
                        ]}
                    >
                        <Input
                            name='password'
                            aria-labelledby='password'
                            type={pwdVisible ? 'text' : 'password'}
                            suffix={
                                pwdVisible ? (
                                    <RiEyeLine
                                        onClick={() => setPwdVisible(false)}
                                    />
                                ) : (
                                    <RiEyeCloseLine
                                        onClick={() => setPwdVisible(true)}
                                    />
                                )
                            }
                        />
                    </FormItem>
                </Form>
                <ul className='flex flex-col gap-2'>
                    {PASSWORD_RULES.map(rule => {
                        const classes = twMerge(
                            'w-5 h-5 text-tertiary',
                            classNames({
                                'text-success': rule.validator(password),
                            }),
                        );
                        return (
                            <li
                                className='flex gap-3 items-center'
                                key={rule.rule}
                            >
                                <RiCheckboxCircleFill className={classes} />
                                <span className='text-xs text-secondary'>
                                    {rule.rule}
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <div className='flex items-center gap-3'>
                    <Checkbox
                        checked={agreed}
                        onChange={e => setAgreed(e.target.checked)}
                    />
                    <span className='text-xs text-secondary'>
                        I agree with CodePulse{' '}
                        <Link
                            className='text-xs text-brand hover:text-brand'
                            name='Terms of Service'
                            aria-label='Terms of Service'
                        >
                            Terms of Service
                        </Link>
                    </span>
                </div>
                <Button
                    className='w-full'
                    name='Create account'
                    aria-label='Create account'
                    size='sm'
                    onClick={onSubmit}
                >
                    Create account
                </Button>
                <div className='text-center text-xs font-medium text-primary'>
                    Already have an account?{' '}
                    <Link
                        className='text-xs text-brand hover:text-brand'
                        name='Sign in'
                        aria-label='Sign in'
                    >
                        Sign in
                    </Link>{' '}
                </div>
            </div>
            <div className='hidden desktop:block flex-1 h-[672px]'>
                <img
                    alt='signup'
                    src='/signup.webp'
                    className='w-full h-full object-center object-cover'
                    loading='lazy'
                />
            </div>
        </div>
    );
};

export default memo(SignUp);
