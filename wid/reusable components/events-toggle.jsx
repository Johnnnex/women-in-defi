import React, { useState } from 'react';
import Image from 'next/image';
import ImgSlider from './imgSlider';

const EventCard = () => {
	const [events, setEventState] = useState('one');
	const imgArrOne = [
		{
			key: 1,
			imgSrc: '/images/frame-cr-6.png',
		},
		{
			key: 2,
			imgSrc: '/images/frame-cr-3.png',
		},
	];
	const imgArrTwo = [
		{
			key: 1,
			imgSrc: '/images/frame-cr-5.png',
		},
		{
			key: 2,
			imgSrc: '/images/frame-cr-2.png',
		},
	];
	const imgArrThr = [
		{
			key: 1,
			imgSrc: '/images/frame-cr-4.png',
		},
		{
			key: 2,
			imgSrc: '/images/frame-cr-1.png',
		},
	];
	const imgArrFour = [
		{
			key: 1,
			imgSrc: '/images/ccc-cr-6.png',
		},
		{
			key: 2,
			imgSrc: '/images/ccc-cr-3.png',
		},
	];
	const imgArrFive = [
		{
			key: 1,
			imgSrc: '/images/ccc-cr-5.png',
		},
		{
			key: 2,
			imgSrc: '/images/ccc-cr-2.png',
		},
	];
	const imgArrSix = [
		{
			key: 1,
			imgSrc: '/images/ccc-cr-4.png',
		},
		{
			key: 2,
			imgSrc: '/images/ccc-cr-1.png',
		},
	];
	return (
		<section className='max-w-[1272px] w-[85%] mx-auto'>
			<div className='flex flex-col md:flex-row p-[.625rem] w-full md:w-fit mx-auto mb-[3.5625rem] rounded-[1.25rem] md:rounded-[12.5rem] justify-between bg-[#F9F9FF]'>
				<button
					onClick={() => setEventState('one')}
					className={`px-[2rem] ${
						events == 'one'
							? 'text-[#110138] font-[500] bg-white bx-shadw rounded-[12.5rem]'
							: 'font-[400] text-[#666481]'
					} py-[1rem] leading-[1.5rem]`}
				>
					Codes Charts and Cocktails Edo 2022
				</button>
				<button
					onClick={() => setEventState('two')}
					className={`px-[2rem] ${
						events == 'two'
							? 'text-[#110138] font-[500] bg-white bx-shadw rounded-[12.5rem]'
							: 'font-[400] text-[#666481]'
					} py-[1rem] leading-[1.5rem]`}
				>
					International Women&apos;s Day Celebration 2023
				</button>
				<button
					onClick={() => setEventState('three')}
					className={`px-[2rem] ${
						events == 'three'
							? 'text-[#110138] font-[500] bg-white bx-shadw rounded-[12.5rem]'
							: 'font-[400] text-[#666481]'
					} py-[1rem] leading-[1.5rem]`}
				>
					Codes Charts and Cocktails 2023
				</button>
			</div>
			<section
				className={`${events != 'one' ? 'hidden' : ''} space-y-[1rem] md:space-y-0`}
			>
				<div className='md:grid hidden grid-cols-3 gap-y-[1rem] gap-x-[1.5rem]'>
					<figure className="rounded-[1rem] bg-no-repeat bg-[url('/images/frame-cr-6.png')] bg-cover bg-center overflow-hidden w-full relative h-[28.25rem]"></figure>
					<figure className="rounded-[1rem] bg-no-repeat bg-[url('/images/frame-cr-5.png')] bg-cover bg-center overflow-hidden w-full relative h-[28.25rem]"></figure>
					<figure className="rounded-[1rem] bg-no-repeat bg-[url('/images/frame-cr-4.png')] bg-cover bg-center overflow-hidden w-full relative h-[28.25rem]"></figure>
					<figure className="rounded-[1rem] bg-no-repeat bg-[url('/images/frame-cr-3.png')] bg-cover bg-center overflow-hidden w-full relative h-[28.25rem]"></figure>
					<figure className="rounded-[1rem] bg-no-repeat bg-[url('/images/frame-cr-2.png')] bg-cover bg-center overflow-hidden w-full relative h-[28.25rem]"></figure>
					<figure className="rounded-[1rem] bg-no-repeat bg-[url('/images/frame-cr-1.png')] bg-cover bg-center overflow-hidden w-full relative h-[28.25rem]"></figure>
				</div>
				<ImgSlider
					imgArr={imgArrOne}
					preferredEffect='fade'
					wantsNav={false}
				/>
				<ImgSlider
					imgArr={imgArrTwo}
					preferredEffect='coverflow'
					wantsNav={false}
				/>
				<ImgSlider
					imgArr={imgArrThr}
					preferredEffect='flip'
					wantsNav={false}
				/>
			</section>
			<section className={events != 'two' ? 'hidden' : ''}>
				<div
					className={`grid grid-cols-1 md:grid-cols-3 gap-y-[1rem] md:gap-x-[1.5rem]`}
				>
					<figure className="w-full relative bg-no-repeat bg-[url('/images/wid-event-cr-1.jpeg')] bg-cover bg-center overflow-hidden rounded-[1rem] h-[28.25rem]"></figure>
					<figure className="w-full relative bg-no-repeat bg-[url('/images/wid-event-cr-2.jpeg')] bg-cover bg-center overflow-hidden rounded-[1rem] h-[28.25rem]"></figure>
					<figure className="w-full relative bg-no-repeat bg-[url('/images/wid-event-cr-3.jpeg')] bg-cover bg-center overflow-hidden rounded-[1rem] h-[28.25rem]"></figure>
				</div>
			</section>
			<section
				className={`${
					events != 'three' ? 'hidden' : ''
				} space-y-[1rem] md:space-y-0`}
			>
				<div className='md:grid hidden grid-cols-3 gap-y-[1rem] gap-x-[1.5rem]'>
					<figure className="w-full overflow-hidden bg-no-repeat bg-[url('/images/hero-img-q-1-cr.png')] bg-cover bg-center rounded-[1rem] relative h-[28.25rem]">
						<Image
							src='/images/ccc-cr-6.png'
							alt='event_images'
							sizes='(max-width: 48rem) 100%, 33.75rem'
							fill
						/>
					</figure>
					<figure className="w-full overflow-hidden bg-no-repeat bg-[url('/images/hero-img-q-1-cr.png')] bg-cover bg-center rounded-[1rem] relative h-[28.25rem]">
						<Image
							src='/images/ccc-cr-5.png'
							alt='event_images'
							sizes='(max-width: 48rem) 100%, 33.75rem'
							fill
						/>
					</figure>
					<figure className="w-full overflow-hidden bg-no-repeat bg-[url('/images/hero-img-q-1-cr.png')] bg-cover bg-center rounded-[1rem] relative h-[28.25rem]">
						<Image
							src='/images/ccc-cr-4.png'
							alt='event_images'
							sizes='(max-width: 48rem) 100%, 33.75rem'
							fill
						/>
					</figure>
					<figure className="w-full overflow-hidden bg-no-repeat bg-[url('/images/hero-img-q-1-cr.png')] bg-cover bg-center rounded-[1rem] relative h-[28.25rem]">
						<Image
							src='/images/ccc-cr-3.png'
							alt='event_images'
							sizes='(max-width: 48rem) 100%, 33.75rem'
							fill
						/>
					</figure>
					<figure className="w-full overflow-hidden bg-no-repeat bg-[url('/images/hero-img-q-1-cr.png')] bg-cover bg-center rounded-[1rem] relative h-[28.25rem]">
						<Image
							src='/images/ccc-cr-2.png'
							alt='event_images'
							sizes='(max-width: 48rem) 100%, 33.75rem'
							fill
						/>
					</figure>
					<figure className="w-full overflow-hidden bg-no-repeat bg-[url('/images/hero-img-q-1-cr.png')] bg-cover bg-center rounded-[1rem] relative h-[28.25rem]">
						<Image
							src='/images/ccc-cr-1.png'
							alt='event_images'
							sizes='(max-width: 48rem) 100%, 33.75rem'
							fill
						/>
					</figure>
				</div>
				<ImgSlider
					imgArr={imgArrFour}
					preferredEffect='fade'
					wantsNav={false}
				/>
				<ImgSlider
					imgArr={imgArrFive}
					preferredEffect='slide'
					wantsNav={false}
				/>
				<ImgSlider
					imgArr={imgArrSix}
					preferredEffect='flip'
					wantsNav={false}
				/>
			</section>
		</section>
	);
};

export default EventCard;
