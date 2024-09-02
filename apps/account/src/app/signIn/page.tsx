'use client';
import { MESSAGE, REGEX } from '@elcid-monorepo/constants';
import { Button, Form, FormItem, Input, Link } from '@elcid-monorepo/widgets';
import { RiEyeCloseLine, RiEyeLine } from '@remixicon/react';
import { useForm } from 'packages/widgets/src/lib/Form/useForm';
import { useCallback, useRef, useState } from 'react';
import { accountApi } from '@elcid-monorepo/apis';
import { message, MessageProvider } from '@elcid-monorepo/widgets';

const SignIn = () => {
    const [pwdVisible, setPwdVisible] = useState<boolean>(false);
    const form = useRef(useForm());

    const onSubmit = useCallback(() => {
        form.current.validates(async (errors, values) => {
            if (errors) return;
            const data = await accountApi.auth.signIn(values);
            if (data) {
                message.success(MESSAGE.SIGN_IN_SUCCESS);
            }
        });
    }, []);
    return (
        <MessageProvider>
            <div className='flex-1 flex flex-col justify-center items-center px-3 w-full  mx-auto desktop:flex-row desktop:gap-8 desktop:px-24 desktop:py-8'>
                <div className='gap-6 flex-1 flex flex-col justify-center w-full tablet:w-[456px] desktop:h-[672px] desktop:px-[102px] desktop:flex-none desktop:w-[592px]'>
                    <h3
                        role='heading'
                        className='text-3xl font-semibold text-primary '
                    >
                        Log in to your account
                    </h3>
                    <Form className='flex flex-col gap-6' form={form.current}>
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
                                {
                                    required: true,
                                    msg: MESSAGE.PASSWORD_REQUIRED,
                                },
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
                    <Button
                        className='w-full'
                        name='Submit'
                        aria-label='Submit'
                        size='sm'
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                    <div className='text-center text-xs font-medium text-primary'>
                        Don’t have an account?{' '}
                        <Link
                            className='text-xs text-brand hover:text-brand'
                            name='Sign in'
                            aria-label='Sign in'
                            href='/signUp'
                        >
                            Sign up
                        </Link>{' '}
                    </div>
                </div>
                <div className='hidden desktop:block flex-1 h-[672px]'>
                    <img
                        alt='signIn'
                        src='/signIn.webp'
                        className='w-full h-full object-center object-cover'
                        loading='lazy'
                    />
                </div>
            </div>
        </MessageProvider>
    );
};

export default SignIn;
