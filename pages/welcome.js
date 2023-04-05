import Link from 'next/link';
import Head from 'next/head';


function welcome() {
  return (
    <div className="">
      <Head>
        <title>Sarah's Date Rate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex h-screen bg-[url('https://www.amtrakvacations.com/sites/amtrak/files/styles/hero/public/images/Destination-Yosemite.jpg?h=3a3df0c5&itok=rGMyppyy')] bg-cover bg-center">
          <div className="m-auto">
            <div>        
                <Link href={'/'}>
                    <button className='animate-bounce font-bold rounded-full z-30 text-white px-4 py-2 hover:bg-gradient-to-br from-purple-400 via-gray-800 to-purple-400 hover:rounded-full hover:shadow-lg transition duration-200 ease-out'
                    >Welcome Sarah 😊</button>
                </Link>             
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default welcome