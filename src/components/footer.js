import logo from "../assets/LSKK.png";

const Footer = () => {
    return ( 
        <>
        <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-4 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 ">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <div className='flex flex-row gap-3 items-center'>
            <img src={logo} className="h-10"/>
            <a className="text-2xl font-medium hover:text-cyan-500 transition-colors cursor-pointer">LSKK</a>
        </div>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
            PT. Langgeng Sejahtera Kreasi Komputasi (PT.LSKK) merupakan perusahaan yang berkedudukan di Bandung yang didirikan pada tahun 2016. Berawal dari sebuah grup yang dimulai pada tahun 2008 sebagai subkontraktor Industri Pertahanan dan TI.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm col-span-2 flex flex-col justify-center">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Nomer telfon (Kantor utama) : </p>
            <a
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              (022) 7351 6650
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email : </p>
            <a
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              pt.lskk@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Alamat : </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263
            </a>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}
 
export default Footer;