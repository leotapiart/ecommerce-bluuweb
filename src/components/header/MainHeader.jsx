import LogoSneakers from '@/assets/images/logo.svg'
import Avatar from '@/assets/images/image-avatar.png'
import MainIcon from '@/components/icons/MainIcon'
import CardIcon from '@/components/icons/CardIcon'
import CloseIcon from '@/components/icons/CloseIcon'
import { useState } from 'react'
import NavLinkHeader from '@/components/header/NavLinkHeader'

const MainHeader = () => {

    const [navClass, setNavClass] = useState('hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto');

    const handleOpenMenu = () => {
        setNavClass("absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] font-bold bg-white p-8 md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto z-10");
    };

    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto")
    }

    return (
        <>
            <header className='flex container items-center mx-auto gap-6 p-4 md:p-0'>
                <button className='md:hidden' onClick={handleOpenMenu}>
                    <MainIcon />
                </button>
                <img
                    src={LogoSneakers}
                    alt="Logo Sneakers"
                    className='mr-auto md:mr-0 h-5 mb-1'
                />
                <nav className={navClass}>
                    <button
                        className='mb-6 md:hidden'
                        onClick={handleCloseMenu}
                    >
                        <CloseIcon />
                    </button>

                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />

                </nav>
                <div className='flex gap-4'>
                    <button className=''>
                        <CardIcon />
                    </button>
                    <img src={Avatar} alt="" className='w-10' />
                </div>
            </header>
            <span className='hidden container 
            mx-auto md:block h-[1px] w-full bg-grayish-blue'></span>
        </>
    )
}

export default MainHeader
