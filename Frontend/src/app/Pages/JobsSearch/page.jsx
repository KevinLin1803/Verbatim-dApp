'use client'; // Make this a client component

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation'; // Correct import for routing
import JobListings from './testData';

// User and navigation data
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Home', href: '../Pages/HomePage', current: false },
  { name: 'Profile', href: '../Pages/Profile', current: false },
  { name: 'Jobs', href: '#', current: true },
  { name: 'About', href: '#', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

// Dummy value for selectedOption
const selectedOption = ''; // Update this with actual data or logic to get the selected option.

const formCardColor = () => {
  switch (selectedOption) {
    default:
      return 'bg-white'; // default white color
  }
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Job() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayJobs, setDisplayJobs] = useState(false)

  const router = useRouter();
  const handleEditProfileClick = () => {
    router.push('/Pages/Profile');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Trigger your external script using the searchTerm here
    console.log('Searching for:', searchTerm);
    // Example: router.push(`/search?query=${searchTerm}`);
  };

  return(
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-green-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-1">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-40 pt-1"
                        src="https://cdn.discordapp.com/attachments/901665601934749729/1299830562793722007/logo.png?ex=671ea10b&is=671d4f8b&hm=bab6fdaba48239450a291b2315662d3b91b4c8d0fb7014fe2a3194b29f52df49&"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-white text-green-900'
                                : 'text-white hover:bg-white hover:text-green-900 hover:bg-opacity-60',
                              'rounded-md px-3 py-1 text-l font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full text-sm hover:ring-2 hover:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="User profile picture" />
                        </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-indigo-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">{user.name}</div>
                      <div className="text-sm font-medium text-indigo-300">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
      </Disclosure>
      <div className="flex justify-center flex-grow items-center pt-20">
      {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center w-[48rem]"> {/* Use w-full to allow the form to fill the space */}
          <input
            type="text"
            className="rounded-md bg-white text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={(()=>setDisplayJobs(true))} type="submit" className="ml-1 rounded-md px-4 py-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none">
            Search
          </button>
          <button type="submit" className="ml-1 rounded-md min-w-[110px] px-4 py-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none whitespace-nowrap" onClick={handleEditProfileClick}>
            Edit Profile
          </button>
        </form>
      </div>
      <div>
          {displayJobs && <JobListings/>}
      </div>
    </div>
  );
}
