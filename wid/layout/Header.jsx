/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import DonationModal from '@/reusable components/donation-modal';
import Image from 'next/image';
import Link from 'next/link';
import EventsModal from '@/reusable components/events-modal';
import { ReactSVG } from 'react-svg';

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
			text: 'Events',
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
				<section className='w-[90%] flex xl:gap-[218px] justify-between items-center max-w-[1400px] mx-auto'>
					<figure className='relative z-[2] hidden md:block'>
						<ReactSVG src='/images/wid-bgless.svg' />
					</figure>
					<figure className='relative z-[2] md:hidden block'>
						<ReactSVG src='/images/wid-bgless-smol.svg' />
					</figure>
					<nav
						className={`flex xl:flex-1 h-[100vh] xl:h-fit fixed top-0 w-full bg-[#ffffffee] transition-[.4s] pt-[20vh] xl:pt-0 gap-[50px] left-0 xl:relative ${
							navState ? 'translate-y-0' : 'translate-y-[-100%] xl:translate-y-0'
						} items-center flex-col xl:flex-row xl:justify-between xl:gap-[50px]`}
					>
						<ul className='flex flex-col xl:gap-0 gap-[5vh] xl:flex-row items-center'>
							{links}
						</ul>
						<a
							href='https://forms.gle/sVHUHnF9bz42BJui7'
							target='_blank'
							rel='noopener noreferrer'
							className='block xl:hidden'
						>
							<button
								type='button'
								className='p-[.75rem_1.5rem] bg-[#0375F2] whitespace-nowrap text-white rounded-[.5rem] w-full'
							>
								Join Community
							</button>
						</a>
					</nav>
					<a
						href='https://forms.gle/sVHUHnF9bz42BJui7'
						target='_blank'
						className='hidden xl:block'
						rel='noopener noreferrer'
					>
						<button
							type='button'
							className='p-[.75rem_1.5rem] bg-[#0375F2] whitespace-nowrap text-white rounded-[.5rem] w-full'
						>
							Join Community
						</button>
					</a>
					<button
						type='button'
						onClick={toggleNav}
						className={`z-[2] space-y-1 ${navState == true && 'activeBtn'} xl:hidden`}
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
