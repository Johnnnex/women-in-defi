import React from 'react';
import HeadComp from '@/layout/HeadComp';
import EventCard from '@/reusable components/events-toggle';
import BgSlider from '@/reusable components/bg-slider';
import { ReactSVG } from 'react-svg';

const Events = () => {
	return (
		<>
			<HeadComp title='Women In DeFi || Events' />
			<main className=''>
				<section className='md:pt-[2.5rem] h-[100vh] w-[100%] relative pt-[5.625rem]'>
					<BgSlider />
					<div className='absolute flex p-[2.5rem] items-center flex-col justify-center w-full text-white h-full bg-[#000000BF] top-0 left-0'>
						<div className='relative w-fit text-white'>
							<div className='h-[2px] md:h-[4px] bg-white w-[1.5rem] md:w-[5rem] left-0 translate-x-[-110%] absolute top-1/2 mx-auto -translate-y-1/2' />
							<div className='h-[2px] md:h-[4px] bg-white w-[1.5rem] md:w-[5rem] right-0 translate-x-[110%] absolute top-1/2 mx-auto -translate-y-1/2' />
							<div className='flex relative z-[19] items-center gap-[.5rem] ~text-[.875rem]/[1.25rem] font-[500]'>
								<ReactSVG src='/images/calendar-01.svg' />
								April 26th
							</div>
						</div>
						<h1 className='text-white mt-[1.25rem] font-[700] text-center ~text-[40px]/[80px]'>
							Women in DeFi Summit 2025
						</h1>
						<div className='relative mt-[1.25rem] w-fit text-white'>
							<div className='h-[1px] md:h-[4px] bg-white w-[1.5rem] md:w-[5rem] left-0 translate-x-[-110%] absolute top-1/2 mx-auto -translate-y-1/2' />
							<div className='h-[1px] md:h-[4px] bg-white w-[1.5rem] md:w-[5rem] right-0 translate-x-[110%] absolute top-1/2 mx-auto -translate-y-1/2' />
							<div className='flex relative z-[19] items-center gap-[.5rem] ~text-[.875rem]/[1.25rem] font-[500]'>
								<ReactSVG src='/images/location-05.svg' />
								Lagos, Nigeria
							</div>
						</div>
						<div className='mt-[3.75rem]'>
							<div className='mb-[2.5rem] mx-auto w-fit'>
								<a
									href='https://tix.africa/discover/widsummit'
									target='_blank'
								>
									<button className='border border-[#0375F2] bg-[#0375F2] p-[.75rem_1.5rem] rounded-[.5rem] text-[.875rem] md:text-[1rem]'>
										Register here
									</button>
								</a>
							</div>
							<div className='flex items-center gap-[1rem] md:gap-[2.5rem]'>
								<a href='mailto:partnership@womenindefi.org'>
									<button className='border border-[#0375F2] p-[.75rem_1.5rem] rounded-[.5rem] text-[.875rem] md:text-[1rem]'>
										Become a Sponsor
									</button>
								</a>
								<a
									href='https://forms.gle/8a4V4dsYx19Be4i5A'
									target='_blank'
								>
									<button className='border border-[#0375F2] p-[.75rem_1.5rem] rounded-[.5rem] text-[.875rem] md:text-[1rem]'>
										Apply to speak
									</button>
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className='py-[3.375rem] bg-white'>
					<h3 className='text-[#110138] font-[600] text-[2.5rem] leading-[3.25rem] text-center mb-[1rem]'>
						Previous Events
					</h3>
					<p className='md:leading-[1.625rem] leading-[1.875rem] md:w-[30%] w-[90%] mx-auto font-[400] text-[1rem] md:text-[1.125rem] text-[#666481] text-center mb-[1.5rem] md:mb-[3.5625rem]'>
						View some of our amazing events and the amazing moments
					</p>
					<EventCard />
					<div className='w-[90%] mt-[2.5rem] mx-auto'>
						<div className='mx-auto w-fit'>
							<a
								href='https://drive.google.com/drive/folders/1oglXz-N4YJRUwSpGSwvTF2HfZ80SaV0i'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className='p-[.75rem_1.25rem] gap-[.5rem] bg-[#0375F2] text-white rounded-[.5rem] flex items-center'>
									View More Pictures
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='25'
										viewBox='0 0 24 25'
										fill='none'
									>
										<path
											d='M8.91003 20.4201L15.43 13.9001C16.2 13.1301 16.2 11.8701 15.43 11.1001L8.91003 4.58008'
											stroke='#fff'
											strokeWidth='1.5'
											strokeMiterlimit='10'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
							</a>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Events;
