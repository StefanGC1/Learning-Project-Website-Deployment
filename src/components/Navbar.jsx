import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    // TODO: Figure out between sticky and maybe how to fix overscroll, or keep using fixed and use margin 18
    // or something else on everything "under" header
    return (
        <>
            <header className="fixed inset-x-0 top-0 flex h-18 w-full items-center justify-between z-30 bg-white/70 text-white p-4 backdrop-blur-sm shadow-sm">
                <Link to="/" className="flex items-center w-10">
                    <img src={logo} alt="Logo" className="h-10 w-auto"/>
                </Link>

                <nav className="hidden md:flex items-center">
                    <ul className="flex space-x-4">
                        <NavLink to="/" className="text-black hover:text-violet-300" activeClassName="font-bold">
                            Home
                        </NavLink>
                        <NavLink to="/menu" className="text-black hover:text-violet-300" activeClassName="font-bold">
                            Menu
                        </NavLink>
                    </ul>
                </nav>

                <button onClick={() => setIsOpen(!isOpen)} className='flex md:hidden' aria-label="Open menu">
                    <Menu className='text-black'/>
                </button>
            </header>
            {isOpen && (
                <>
                    <div 
                        className='fixed inset-0 z-31 bg-black/30 md:hidden'
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                        />
                </>
            )}

            <div
                className={`flex md:hidden flex-col items-end 
                            fixed inset-y-0 right-0 z-32 w-40 h-full 
                            bg-white shadow p-6 pt-7 space-y-8 
                            transition-transform duration-300 ease-in-out 
                            ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button>
                    <X className="text-black" />
                </button>
                <NavLink to="/" className="text-black hover:text-violet-300" activeClassName="font-bold">
                    Home
                </NavLink>
                <NavLink to="/menu" className="text-black hover:text-violet-300" activeClassName="font-bold">
                    Menu
                </NavLink>
            </div>
        </>
    )
}

export default Navbar