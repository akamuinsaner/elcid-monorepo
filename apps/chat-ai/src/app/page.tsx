import Navigation from './Navigation';
import SideBar from './SideBar';

export default function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.tailwind file.
     */
    return (
        <div className='pt-16 desktop:pt-0 pl-0 desktop:pl-60 min-h-screen flex flex-col items-center'>
            <div className='desktop:hidden'>
                <Navigation />
            </div>
            <div className='hidden desktop:block fixed left-0 inset-y-0 w-60 border-r border-solid border-primary shrink-0'>
                <SideBar />
            </div>
            <main className='flex-1 w-full px-4 pt-12 pb-6 tablet:px-8 max-w-[1072px] mx-auto desktop:px-[180px] desktop:pt-20 transition-all'></main>
        </div>
    );
}
