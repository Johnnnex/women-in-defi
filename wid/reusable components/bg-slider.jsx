/* eslint-disable @next/next/no-img-element */

'use client';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

const bgImgUrls = ['hero-one', 'hero-two'];

const BgSlider = () => {
	const [emblaRef, _] = useEmblaCarousel(
		{ loop: true, dragFree: false, align: 'center' },
		[Autoplay({ stopOnInteraction: false })]
	);

	return (
		<div
			style={{ height: '100%', width: '100%', overflow: 'hidden' }}
			className='embla hero-slider'
			ref={emblaRef}
		>
			<div className='embla__container flex h-full w-full'>
				{bgImgUrls.map((e, index) => (
					<img
						key={'image__' + index}
						src={`/images/${e}.png`}
						className='object-cover flex-shrink-0 flex-grow-0 basis-[100%] embla__slide w-full h-full'
						alt='Home Page Image'
					/>
				))}
			</div>
		</div>
	);
};

export default BgSlider;
