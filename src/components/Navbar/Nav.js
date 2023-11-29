import React from 'react';
import '.././Responsive.css';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './logo/logo.png';
import Button from '../OthersComponent/Button/Button';
import DarkMode from '../DarkMode/DarkMode';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const navigation = [
        { name: 'Home', href: '#home', current: true },
        { name: 'About', href: '#', current: false },
        { name: 'Skills', href: '#', current: false },
        { name: 'Certification', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Testimonier', href: '#', current: false },
        { name: 'Contact', href: 'contact', current: false }
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure as="nav" className="bg-black bg-opacity-50  fixed top-0 w-full z-50 nav-nav-nav  ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 navbar-head-parants">
                        <div className="relative flex h-16 items-center justify-between navbar-head-child">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start navbar-head-child1">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to='/'>
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="my logo"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block navbar-head-child2">
                                    <div className="flex space-x-4 navbar-head-child3">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 navbar-child-child">
                                <Link to='/contactpage'>
                                    <Button>Get A Free Consultation</Button>

                                </Link>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3 navbar-child-child2">

                                    {/* <DarkMode></DarkMode> */}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Nav;
