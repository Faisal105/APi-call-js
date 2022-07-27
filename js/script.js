class Posts {
	hundredPosts = [];
	ul;
	constructor() {
		this.ul = document.getElementsByClassName('row');
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				this.hundredPosts = data;
				this.constructHTML();
			})
			.catch((err) => console.error(err));
	}

	constructHTML() {
		console.log(this.hundredPosts);
		const posts = this.hundredPosts
			.map((post) => {
				return `

                <div class="card bg-secondary" style="width: 18rem;">
                    <img src="${post.thumbnailUrl}" class="card-img-top img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title title">${post.title}</h5>
                      

                    </div>
                </div>
         
        
        `;
			})
			.join('');
		this.ul.innerHTML = posts;
	}
}

const p = new Posts();
