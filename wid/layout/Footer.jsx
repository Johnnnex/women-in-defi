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
				<div className='flex gap-[1rem] border-b border-[#00000033] pb-[2.5rem] md:gap-0 justify-between flex-col md:flex-row'>
					<figure className='md:w-[100px] hidden md:block w-[58px] h-[58px] md:h-[100px] relative'>
						<Image
							src='/images/WID-Logo15.png'
							alt='logo'
							style={{
								maxHeight: '200px',
								width: '9.5rem',
								maxWidth: 'max-content',
							}}
							height={150}
							width={150}
						/>
					</figure>
					<div>
						<h5 className='text-[24px] font-[600] text-[#110138] mb-[16px]'>
							Get Involved
						</h5>
						<ul className='text-[#666481] flex flex-col gap-[8px] pl-[10px] md:pl-0 text-[16px] font-[500]'>
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
									width='24px'
									height='24px'
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
					<div>
						<h5 className='text-[24px] font-[600] text-[#110138] mb-[16px]'>
							About Us
						</h5>
						<ul className='text-[#666481] pl-[10px] md:pl-0 text-[16px] font-[500]'>
							<Link href='/code-of-conduct'>
								<li
									className={`hover:text-[#0673EF] ${
										asPath == '/code-of-conduct' && 'active'
									} mb-[8px] transition-[.4s]`}
								>
									Code Of Conduct
								</li>
							</Link>
							<Link href='#about'>
								<li
									className={`hover:text-[#0673EF] ${
										asPath == '#about' && 'active'
									} mb-[8px] transition-[.4s]`}
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
					<div>
						<h5 className='text-[24px] font-[600] text-[#110138] mb-[16px]'>
							Community
						</h5>
						<ul className='text-[#666481] pl-[10px] md:pl-0 text-[16px] font-[500]'>
							<Link href='/events'>
								<li
									className={`hover:text-[#0673EF] ${
										asPath == '/events' && 'active'
									} mb-[8px] transition-[.4s]`}
								>
									Upcoming Event
								</li>
							</Link>
							<a
								href='https://forms.gle/sVHUHnF9bz42BJui7'
								target='_blank'
								rel='noopener noreferrer'
							>
								<li className={`hover:text-[#0673EF] mb-[8px] transition-[.4s]`}>
									Discord Community
								</li>
							</a>
							<a
								href='https://twitter.com/womenindefi_org'
								target='_blank'
							>
								<li className={`hover:text-[#0673EF] mb-[16px] transition-[.4s]`}>
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
