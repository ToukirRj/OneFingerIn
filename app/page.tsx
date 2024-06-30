// app/page.tsx

import Header from './components/Header';
import HomeContent from './components/Home/Home'; // Rename Home to HomeContent or something else

export default function Page() {
  return (
    <div>
      <main className='bg-[#EBEAE6] min-h-[100vh] py-5 px-6'>
        <div className='max-w-7xl mx-auto w-full bg-white rounded-3xl px-8 py-4'>
          <Header/>
          <HomeContent/>
        </div>
      </main>
    </div>
  );
}
