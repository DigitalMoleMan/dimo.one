const pages = [
	{
		title: 'moSQuito',
		description: 'A music sequencer',
		link: 'https://digitalmoleman.github.io/moSQuito/index.html',		
		thumbnail: 'img/page_mosquito.png'
	}, {
		title: 'Learny',
		description: 'A chatbot built with brain.js',
		link: 'http://127.0.0.1:5500/',		
		thumbnail: 'img/page_learny.png'
	}, {
		title: 'Viz',
		description: 'Audio visualizer',
		link: 'http://127.0.0.1:5500/index.html',		
		thumbnail: 'img/page_viz.png'
	}
]

const pgs = document.getElementById('pages');

pages.forEach(page => {
	pgs.innerHTML += `<a href="${page.link}" class="card">
	<img class="thumb" src="${page.thumbnail}">
	<div class="text">
		<h2 class="title">${page.title}</h2>
		<p class="description">${page.description}</p>
	</div>`
})