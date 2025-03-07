import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Footer = () => {
	const [dropDown, setDropDown] = useState(false);

	const { asPath } = useRouter();

	return (
		<footer className='md:pt-[100px] md:pb-[50px] py-[50px] bg-white'>
			<section className='max-w-[1272px] flex gap-[16px] md:gap-0 justify-between flex-col md:flex-row w-[85%] mx-auto'>
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
				<div className=''>
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
									stroke-width='0'
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
										stroke-width='2'
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
				<div className=''>
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
				<div className=''>
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
								Join our Discord Community
							</li>
						</a>
						<a
							href='https://twitter.com/womenindefi_org'
							target='_blank'
						>
							<li className={`hover:text-[#0673EF] mb-[16px] transition-[.4s]`}>
								Follow Us On Social Media
							</li>
						</a>
					</ul>
					<div className='flex items-center gap-[18px]'>
						<a
							href='https://twitter.com/womenindefi_org'
							className='hover:bg-[#00000020] transition-[.4s] rounded-[50%] p-1'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
							>
								<path
									d='M26.2033 6.99984C25.305 7.40817 24.3366 7.6765 23.3333 7.80484C24.36 7.1865 25.1533 6.2065 25.5266 5.02817C24.5583 5.6115 23.485 6.01984 22.3533 6.25317C21.4316 5.24984 20.1366 4.6665 18.6666 4.6665C15.925 4.6665 13.685 6.9065 13.685 9.6715C13.685 10.0682 13.7316 10.4532 13.8133 10.8148C9.65996 10.6048 5.96163 8.60984 3.49996 5.58817C3.0683 6.32317 2.8233 7.1865 2.8233 8.0965C2.8233 9.83484 3.6983 11.3748 5.05163 12.2498C4.2233 12.2498 3.4533 12.0165 2.77663 11.6665C2.77663 11.6665 2.77663 11.6665 2.77663 11.7015C2.77663 14.1282 4.5033 16.1582 6.78996 16.6132C6.36996 16.7298 5.92663 16.7882 5.47163 16.7882C5.15663 16.7882 4.84163 16.7532 4.5383 16.6948C5.1683 18.6665 6.99996 20.1365 9.20496 20.1715C7.50163 21.5248 5.3433 22.3182 2.98663 22.3182C2.58996 22.3182 2.1933 22.2948 1.79663 22.2482C4.0133 23.6715 6.64996 24.4998 9.4733 24.4998C18.6666 24.4998 23.7183 16.8698 23.7183 10.2548C23.7183 10.0332 23.7183 9.82317 23.7066 9.6015C24.6866 8.9015 25.5266 8.01484 26.2033 6.99984Z'
									fill='#0673EF'
									fillOpacity='0.8'
								/>
							</svg>
						</a>
						<a
							className='hover:bg-[#00000020] transition-[.4s] rounded-[50%] p-2'
							href='https://www.instagram.com/womenindefi_org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<path
									d='M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z'
									fill='#0673EF'
									fillOpacity='0.8'
								/>
							</svg>
						</a>
						<a
							href='https://youtube.com/@womenindefi'
							className='hover:bg-[#00000020] transition-[.4s] rounded-[50%] p-2'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
							>
								<path
									d='M11.6667 17.5002L17.7217 14.0002L11.6667 10.5002V17.5002ZM25.1534 8.36516C25.305 8.9135 25.41 9.6485 25.48 10.5818C25.5617 11.5152 25.5967 12.3202 25.5967 13.0202L25.6667 14.0002C25.6667 16.5552 25.48 18.4335 25.1534 19.6352C24.8617 20.6852 24.185 21.3618 23.135 21.6535C22.5867 21.8052 21.5834 21.9102 20.0434 21.9802C18.5267 22.0618 17.1384 22.0968 15.855 22.0968L14 22.1668C9.11171 22.1668 6.06671 21.9802 4.86504 21.6535C3.81504 21.3618 3.13837 20.6852 2.84671 19.6352C2.69504 19.0868 2.59004 18.3518 2.52004 17.4185C2.43837 16.4852 2.40337 15.6802 2.40337 14.9802L2.33337 14.0002C2.33337 11.4452 2.52004 9.56683 2.84671 8.36516C3.13837 7.31516 3.81504 6.6385 4.86504 6.34683C5.41337 6.19516 6.41671 6.09016 7.95671 6.02016C9.47337 5.9385 10.8617 5.9035 12.145 5.9035L14 5.8335C18.8884 5.8335 21.9334 6.02016 23.135 6.34683C24.185 6.6385 24.8617 7.31516 25.1534 8.36516Z'
									fill='#0673EF'
									fillOpacity='0.8'
								/>
							</svg>
						</a>
						<a
							className='hover:bg-[#00000020] transition-[.4s] rounded-[50%] p-2'
							href='https://www.facebook.com/womenindefi?mibextid=ZbWKwL'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<g clipPath='url(#clip0_310_439)'>
									<path
										d='M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z'
										fill='#0673EF'
										fillOpacity='0.8'
									/>
								</g>
								<defs>
									<clipPath id='clip0_310_439'>
										<rect
											width='20'
											height='20'
											fill='white'
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
						<a
							href='https://www.linkedin.com/company/womenindefi/'
							className='hover:bg-[#00000020] transition-[.4s] rounded-[50%] p-2'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<g clipPath='url(#clip0_310_440)'>
									<path
										d='M18.5236 0H1.47639C1.08483 0 0.709301 0.155548 0.432425 0.432425C0.155548 0.709301 0 1.08483 0 1.47639V18.5236C0 18.9152 0.155548 19.2907 0.432425 19.5676C0.709301 19.8445 1.08483 20 1.47639 20H18.5236C18.9152 20 19.2907 19.8445 19.5676 19.5676C19.8445 19.2907 20 18.9152 20 18.5236V1.47639C20 1.08483 19.8445 0.709301 19.5676 0.432425C19.2907 0.155548 18.9152 0 18.5236 0ZM5.96111 17.0375H2.95417V7.48611H5.96111V17.0375ZM4.45556 6.1625C4.11447 6.16058 3.7816 6.05766 3.49895 5.86674C3.21629 5.67582 2.99653 5.40544 2.8674 5.08974C2.73826 4.77404 2.70554 4.42716 2.77336 4.09288C2.84118 3.7586 3.0065 3.4519 3.24846 3.21148C3.49042 2.97107 3.79818 2.80772 4.13289 2.74205C4.4676 2.67638 4.81426 2.71133 5.12913 2.84249C5.44399 2.97365 5.71295 3.19514 5.90205 3.47901C6.09116 3.76288 6.19194 4.09641 6.19167 4.4375C6.19488 4.66586 6.15209 4.89253 6.06584 5.104C5.97959 5.31547 5.85165 5.50742 5.68964 5.66839C5.52763 5.82936 5.33487 5.95607 5.12285 6.04096C4.91083 6.12585 4.68389 6.16718 4.45556 6.1625ZM17.0444 17.0458H14.0389V11.8278C14.0389 10.2889 13.3847 9.81389 12.5403 9.81389C11.6486 9.81389 10.7736 10.4861 10.7736 11.8667V17.0458H7.76667V7.49306H10.6583V8.81667H10.6972C10.9875 8.22917 12.0042 7.225 13.5556 7.225C15.2333 7.225 17.0458 8.22083 17.0458 11.1375L17.0444 17.0458Z'
										fill='#0673EF'
										fillOpacity='0.8'
									/>
								</g>
								<defs>
									<clipPath id='clip0_310_440'>
										<rect
											width='20'
											height='20'
											fill='white'
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
