const btn = document.querySelector('button');
const box = document.querySelector('article');

/*
  new Anime(선택자, {변경할 속성객체}, {duration:시간, easeType: 가속도타입, callback: 완료함수})

  left, top, width, height, opacity, scroll
*/

btn.addEventListener('click', () => {
	new Anime(
		box,
		{ left: '80%', height: 200 },
		{
			duration: 500,
			easeType: 'linear',
			callback: () => {
				new Anime(
					box,
					{ backgroundColor: '#ff69b4' },
					{
						duration: 2000,
						callback: () => {
							new Anime(box, { opacity: 0 });
						},
					}
				);
			},
		}
	);
});
