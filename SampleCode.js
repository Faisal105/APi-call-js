// Hoisting

// ==> ES6 concepts
// let & const
// var is global & function scope | And not block scope
// let is block scope

// Templat litreal
// let str1 = 'This is ';
// let str2 = 'a string';
// let finalStr = `<div>
//   <h1>${str1}</h1>
//   <p>${str2}</p>
// </div>`
// console.log(finalStr);

// default parameters
// function add(a = 0, b = 0) {
//   console.log(a + b);
// }
// add();

// Function vs arrow function
// let fun1 = function() {
//   // code we need
//   return 10;
// }

// let fun2 = () => 20;
// console.log(fun1());
// console.log(fun2());

// let obj = {
//   name: 'Anything',
//   fun: function() {
//     // this.name // Anything
//     setTimeout(function() {
//       console.log(this);
//       // function points to current scope
//       // (if new keyword used and object created) else it will
//       // point to window scope
//     }, 500);

//   },
//   arrfun: function() {
//     setTimeout(() => {
//       console.log(this); // arrow function points to parent scope
//     }, 500);
//   }
// };
// obj.fun();
// obj.arrfun();

// function sample() {
//   this.name = 'my name';
//   console.log(this);
// }
// sample();
// new sample();

// Promise

// console.log('start');
// for(let i = 0; i < 10000; i++) {
//   console.log('.');
// }
// console.log('end');

// console.log('start');
// setTimeout(() => {
//   console.log('middle')
// }, 0);
// for(let i = 0; i < 10000; i++) {
//   console.log('.');
// }
// console.log('end');

// Resolve
// Reject

// function promiseExample() {
//   let promise = new Promise((res, rej) => {
//     if (true) {
//       res('Success')
//     } else {
//       rej('Failed due to my code');
//     }
//   });
//   return promise;
// }
// promiseExample()
//   .then((data) => {
//     console.log(data);
//     return 'My new string to return';
//   })
//    .then(data => console.log(data)) //'My new string to return'
//   .catch((err) => {
//     console.error('Oopssssss! ' + err);
//   })
//   .finally(() => {
//     console.log('Promise is done!');
//   })

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(data => data.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

class Posts {
	hundredPosts = [];
	container;
	constructor() {
		this.container = document.getElementById('postlist');
		console.log(this.container);
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				this.hundredPosts = data;
				console.log('post', this.hundredPosts);
				this.constructHTML();
			})
			.catch((err) => console.error(err));
	}

	constructHTML() {
		console.log(this.hundredPosts);
		const posts = this.hundredPosts
			.map((post) => {
				return `
            

                <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card bg-secondary" style="width: 18rem;">
                           <img src="${post.thumbnailUrl}"}>
                            <div class="card-body">
                                <h5 class="card-title title">${post.title}</h5>
                                
    
                            </div>
                        </div>
                        </div>
                    
                
         
            
           

          
        `;
			})
			.join('');
		this.container.innerHTML = posts;
	}
}

const p = new Posts();
