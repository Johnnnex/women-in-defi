import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

const Footer = () => {
	const [dropDown, setDropDown] = useState(false);

	const { asPath } = useRouter();

	return (
		<footer className='bg-white'>
			<section className='max-w-[1400px] py-[3.75rem] rounded-t-[1.25rem] px-[1rem] md:px-[2.5rem] border border-[#00000033] border-b-0 w-[90%] mx-auto'>
				<div className='flex gap-[2.5rem] border-b border-[#00000033] pb-[2.5rem] xl:gap-0 flex-col xl:flex-row'>
					<figure className='w-fit mx-auto xl:ml-0'>
						<Image
							src='/images/WID-Logo15.png'
							alt='logo'
							style={{
								maxHeight: '12.5rem',
								width: '9.5rem',
								maxWidth: 'max-content',
							}}
							height={150}
							width={150}
						/>
					</figure>
					<div className='flex justify-between w-[70%] mx-auto xl:w-[41%]'>
						<div className='flex flex-col xl:items-start items-center'>
							<h5 className='text-[1.5rem] font-[600] text-[#110138] mb-[1rem]'>
								Get Involved
							</h5>
							<ul className='text-[#666481] flex flex-col gap-[.5rem] items-center xl:items-start text-[1rem] font-[500]'>
								<Link href='/donation'>
									<li
										className={`hover:text-[#0673EF] ${
											asPath == '' && 'active'
										} transition-[.4s]`}
									>
										Partner With Us
									</li>
								</Link>
								<Link href='/donation#donation-tab'>
									<li
										className={`hover:text-[#0673EF] ${
											asPath == '' && 'active'
										} transition-[.4s]`}
									>
										Make A Donation
									</li>
								</Link>
								<button
									onClick={() => setDropDown((prev) => !prev)}
									className='flex gap-[4px] items-center'
								>
									Annual Reports
									<svg
										width='1.5rem'
										height='1.5rem'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={`${
											dropDown ? 'rotate-180' : 'rotate-0'
										} transition-all duration-[.4s]`}
									>
										<g
											id='SVGRepo_bgCarrier'
											strokeWidth='0'
										></g>
										<g
											id='SVGRepo_tracerCarrier'
											strokeLinecap='round'
											strokeLinejoin='round'
										></g>
										<g id='SVGRepo_iconCarrier'>
											{' '}
											<path
												d='M6 9L12 15L18 9M12 9H12.01'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											></path>{' '}
										</g>
									</svg>
								</button>
								<ul
									className={`flex flex-col ${
										dropDown ? 'max-h-max' : 'max-h-0'
									} overflow-hidden transition-all duration-[.4s]`}
								>
									<li>
										<a
											href='https://drive.google.com/file/d/1SAbv76eM6S4StD1dm5hqQVWlJgLjw5rf/view?usp=sharing'
											target='_blank'
											className='hover:text-[#0673EF] transition-[.4s]'
										>
											2024 Report
										</a>
									</li>
								</ul>
							</ul>
						</div>
						<div className='flex flex-col xl:items-start items-center'>
							<h5 className='text-[1.5rem] font-[600] text-[#110138] mb-[1rem]'>
								About Us
							</h5>
							<ul className='text-[#666481] flex flex-col gap-[.5rem] items-center xl:items-start text-[1rem] font-[500]'>
								<Link href='/code-of-conduct'>
									<li
										className={`hover:text-[#0673EF] ${
											asPath == '/code-of-conduct' && 'active'
										} transition-[.4s]`}
									>
										Code Of Conduct
									</li>
								</Link>
								<Link href='#about'>
									<li
										className={`hover:text-[#0673EF] ${
											asPath == '#about' && 'active'
										} transition-[.4s]`}
									>
										About Us
									</li>
								</Link>
								<Link href='/programs'>
									<li
										className={`hover:text-[#0673EF] ${
											asPath == '/programs' && 'active'
										} transition-[.4s]`}
									>
										Our Programs
									</li>
								</Link>
							</ul>
						</div>
					</div>
					<div className='w-fit mx-auto flex flex-col xl:items-start items-center'>
						<h5 className='text-[1.5rem] font-[600] text-[#110138] mb-[1rem]'>
							Community
						</h5>
						<ul className='text-[#666481] flex flex-col gap-[.5rem] items-center xl:items-start text-[1rem] font-[500]'>
							<Link href='/events'>
								<li
									className={`hover:text-[#0673EF] ${
										asPath == '/events' && 'active'
									} transition-[.4s]`}
								>
									Upcoming Event
								</li>
							</Link>
							<a
								href='https://forms.gle/sVHUHnF9bz42BJui7'
								target='_blank'
								rel='noopener noreferrer'
							>
								<li className={`hover:text-[#0673EF] transition-[.4s]`}>
									Discord Community
								</li>
							</a>
							<a
								href='https://twitter.com/womenindefi_org'
								target='_blank'
							>
								<li className={`hover:text-[#0673EF] mb-[1rem] transition-[.4s]`}>
									Follow Us On X
								</li>
							</a>
						</ul>
					</div>
				</div>
				<div className='flex pt-[2.5rem] justify-center md:justify-end gap-[2.5rem] items-center'>
					<a
						href='https://twitter.com/womenindefi_org'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ReactSVG src='/images/new-twitter-rectangle.svg' />
					</a>
					<a
						href='https://www.instagram.com/womenindefi_org/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ReactSVG src='/images/instagram.svg' />
					</a>
					<a
						href='https://www.linkedin.com/company/womenindefi/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ReactSVG src='/images/linkedin-01.svg' />
					</a>
					<a
						href='https://youtube.com/@womenindefi'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ReactSVG src='/images/youtube.svg' />
					</a>
					<a
						href='https://www.facebook.com/womenindefi?mibextid=ZbWKwL'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ReactSVG src='/images/facebook-01.svg' />
					</a>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
