import { ReactNode } from 'react';
import Navigation from '../Navigation';

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='relative min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] px-4 py-4 pt-[100px] flex flex-col'>
            <Navigation />
            <main className='bg-primary w-full h-full mx-auto rounded tablet:rounded-md desktop:rounded-lg max-w-[1408px] flex-1 flex flex-col'>
                {children}
            </main>
        </div>
    );
};

export default Wrapper;
