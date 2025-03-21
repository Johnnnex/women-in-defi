/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import DonationModal from '@/reusable components/donation-modal';
import Image from 'next/image';
import Link from 'next/link';
import EventsModal from '@/reusable components/events-modal';

const Header = () => {
	const { pathname, asPath, events } = useRouter();
	const [navState, toggleNavState] = useState(false);
	const [modalState, setmodalState] = useState({ donate: false, event: false });
	const header = useRef();
	const paths = [
		{
			path: '/',
			text: 'Home',
		},
		{
			path: '/#about',
			text: 'About',
		},
		{
			path: '/programs',
			text: 'Programs',
		},
		{
			path: '/donation',
			text: 'Partner',
		},
		{
			path: '/events',
			text: 'Event',
		},
		{
			path: '/chapters',
			text: 'Chapters',
		},
	];
	useEffect(() => {
		const onHashChangeStart = (url) => {
			toggleNavState(false);
		};

		events.on('hashChangeStart', onHashChangeStart);
		events.on('routeChangeStart', onHashChangeStart);

		return () => {
			events.off('hashChangeStart', onHashChangeStart);
			events.off('routeChangeStart', onHashChangeStart);
		};
	}, [events]);
	const links = paths.map(({ path, text }) => {
		return (
			<li
				key={text}
				className={`${
					asPath === path
						? 'text-[#0375F2] border-[#0375F2] border rounded-[.5rem]'
						: 'text-[#666481]'
				} hover:text-[#0673EF] p-[.75rem_1.5rem] transition-[.4s] font-[500]`}
			>
				<Link href={path}>{text}</Link>
			</li>
		);
	});
	const toggleNav = () => {
		toggleNavState(!navState);
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			header.current.classList.toggle('header-sticky', window.scrollY > 0);
		});
	}, []);
	const checkUrlChange = () => {
		const urlVal = window.location.search;
		const donate = new URLSearchParams(urlVal).get('donate');
		const event = new URLSearchParams(urlVal).get('event');

		if (donate == 'true') {
			setmodalState({
				...modalState,
				donate: true,
			});
		} else if (event == 'true') {
			setmodalState({
				...modalState,
				event: true,
			});
		} else {
			setmodalState({
				donate: false,
				event: false,
			});
		}
	};
	useEffect(() => {
		checkUrlChange();
	}, [pathname, asPath]);
	return (
		<>
			<header
				ref={header}
				className={`fixed z-[3] py-3 bg-white left-0 top-0 w-full`}
			>
				<section className='w-[90%] flex md:gap-[218px] justify-between items-center max-w-[1400px] mx-auto'>
					<figure className='w-[100px] ml-[2rem] md:ml-0 flex items-center justify-center relative z-[2] h-[80px]'>
						<Image
							src='/images/WID-Logo22.png'
							alt='logo'
							priority
							style={{
								maxHeight: '200px',
								width: '12.5rem',
								maxWidth: 'max-content',
							}}
							height={200}
							width={200}
						/>
					</figure>
					<nav
						className={`flex md:flex-1 h-[100vh] md:h-fit fixed top-0 w-full bg-[#ffffffee] transition-[.4s] pt-[20vh] md:pt-0 gap-[50px] left-0 md:relative ${
							navState ? 'translate-y-0' : 'translate-y-[-100%] md:translate-y-0'
						} items-center flex-col md:flex-row md:justify-between md:gap-[50px]`}
					>
						<ul className='flex flex-col md:gap-0 gap-[5vh] md:flex-row items-center'>
							{links}
						</ul>
						<a
							href='https://forms.gle/sVHUHnF9bz42BJui7'
							target='_blank'
							rel='noopener noreferrer'
							className='block md:hidden'
						>
							<button
								type='button'
								className='p-[.75rem_1.5rem] bg-[#0375F2] text-white rounded-[.5rem] w-full'
							>
								Join Community
							</button>
						</a>
					</nav>
					<a
						href='https://forms.gle/sVHUHnF9bz42BJui7'
						target='_blank'
						className='hidden md:block'
						rel='noopener noreferrer'
					>
						<button
							type='button'
							className='p-[.75rem_1.5rem] bg-[#0375F2] text-white rounded-[.5rem] w-full'
						>
							Join Community
						</button>
					</a>
					<button
						type='button'
						onClick={toggleNav}
						className={`z-[2] space-y-1 ${navState == true && 'activeBtn'} md:hidden`}
					>
						<svg
							width='21'
							className='transition-[.4s]'
							height='2'
							viewBox='0 0 21 2'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.38647 1H19.3865'
								stroke='#666481'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<svg
							width='21'
							className='transition-[.4s]'
							height='2'
							viewBox='0 0 21 2'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.38647 1H19.3865'
								stroke='#666481'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<svg
							width='21'
							className='transition-[.4s]'
							height='2'
							viewBox='0 0 21 2'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.38647 1H19.3865'
								stroke='#666481'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</section>
			</header>
			<DonationModal modalState={modalState.donate} />
			<EventsModal modalState={modalState.event} />
		</>
	);
};

export default Header;
