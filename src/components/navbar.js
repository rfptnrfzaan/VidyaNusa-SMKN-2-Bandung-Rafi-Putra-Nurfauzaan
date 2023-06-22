import 'animate.css';
import logo from '../assets/LSKK.png';

const Navigation = () => {
    return ( 
        <>
        <div className="shadow-2xl">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
            <div className='flex flex-row gap-3 items-center'>
            <img src={logo} className="h-10"/>
            <a className="text-2xl font-medium hover:text-cyan-500 transition-colors cursor-pointer">LSKK</a>
        </div>
            
            <ul className="flex items-center gap-5 isnav">
                <li><a className="hover:text-cyan-500 transition-colors" href="">home</a></li>
                <li><a className="hover:text-cyan-500 transition-colors" href="">Feature</a></li>
                <li><a className="hover:text-cyan-500 transition-colors" href="">Reviews</a></li>
            </ul>
        </div>
        </div>
        </>
     );
}
 
export default Navigation;