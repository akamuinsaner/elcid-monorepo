'use client';
import {
    CSSProperties,
    FunctionComponent,
    memo,
    useEffect,
    useRef,
} from 'react';
import { FormContext, RTFormContext } from './context';
import { FormInstanceType, useForm } from './useForm';
import FormItem, { FormItemProps } from './FormItem';

export type FormProps = {
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
    initialValues?: { [name: string]: any };
    children: JSX.Element | JSX.Element[];
    onValuesChange?: (prev: any, cur: any) => void;
    onSubmit?: (values: any) => void;
    onSubmitFail?: (errors: any) => void;
    form?: FormInstanceType;
};

export type FormComponent<T> = FunctionComponent<T> & {
    useForm: () => FormInstanceType;
    Item: FunctionComponent<FormItemProps>;
};

const Form: FormComponent<FormProps> = ({
    style,
    className,
    disabled = false,
    form,
    children,
    initialValues = {},
    onValuesChange = () => {},
    onSubmit,
    onSubmitFail,
}) => {
    const instance = useRef<FormInstanceType>(useForm(form));

    useEffect(() => {
        instance.current.setFieldsValue(initialValues || {});
        instance.current.onValuesChange = onValuesChange;
    }, []);

    const submitForm = (e: any) => {
        e.preventDefault();
        instance.current.validates((errors, values) => {
            if (errors && onSubmitFail) onSubmitFail(errors);
            if (!errors && onSubmit) onSubmit(values);
        });
    };

    const contextValue: RTFormContext = {
        instance: instance.current,
        disabled,
    };

    return (
        <FormContext.Provider value={contextValue}>
            <form
                style={style}
                className={className}
                noValidate={true}
                onSubmit={submitForm}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
};

Form.Item = FormItem;
Form.useForm = useForm;

export default memo(Form);
