import MiddleNav from './MiddleNav';
import BottomNav from './BottomNav';

export default function NavBar() {
  return (
    <>
      <header className='w-full'>
        <div className='hidden lg:block'>
          <MiddleNav />
        </div>
        <BottomNav />
      </header>
    </>
  );
}
