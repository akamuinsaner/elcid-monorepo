import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='min-h-screen p-4 bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] relative flex flex-col'>
            <main className='bg-primary w-full h-full mx-auto rounded tablet:rounded-md desktop:rounded-lg max-w-[1408px] flex-1 flex flex-col'>
                {children}
            </main>
        </div>
    );
};

export default Wrapper;
