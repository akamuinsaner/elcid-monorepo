import { Button, Input } from '@elcid-monorepo/widgets';

const SubscribeSection = () => {
    return (
        <section className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktopp:py-24 flex flex-col desktop:flex-row gap-8 desktop:items-start'>
            <div>
                <h3
                    role='heading'
                    className='text-xl font-semibold text-primary mb-2'
                >
                    Join our newsletter
                </h3>
                <p className='text-base text-secondary'>
                    We’ll send you a nice letter once per week. No spam.
                </p>
            </div>
            <div className='flex flex-col gap-4 tablet:flex-row desktop:ml-auto'>
                <Input
                    name='email'
                    placeholder='Enter your email'
                    className='flex-1 desktop:w-[270px] desktop:flex-auto'
                    aria-label='email'
                    aria-labelledby='subscribe'
                />
                <Button
                    name='subscribe'
                    aria-label='subscribe'
                    className='w-full tablet:w-auto'
                    size='sm'
                >
                    Subscribe
                </Button>
            </div>
        </section>
    );
};

export default SubscribeSection;
