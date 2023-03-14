let url = new URL(location.href);

let id = url.searchParams.get('id');

let div = document.getElementById('user-info');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(value => {
        let print = function (value) {

            let value_keys = Object.keys(value);
            for (let i = 0; i < value_keys.length; ++i) {
                let h2 = document.createElement('h2');
                if (typeof value[value_keys[i]] !== 'object') {
                    h2.innerText = `${value_keys[i]}: ${value[value_keys[i]]}`;
                    div.appendChild(h2);

                } else {
                    h2.innerText = `${value_keys[i]}:`;
                    div.appendChild(h2);

                    let value1 = value[value_keys[i]];
                    print(value1);
                }
            }
        }
        print(value);

    });

let divforBut = document.createElement('div');
divforBut.classList = 'but';
let but = document.createElement('button');
but.innerText = 'post of current user';
divforBut.appendChild(but);

document.body.appendChild(divforBut);

let divforPost = document.createElement('div');
divforPost.classList = 'posts';


but.onclick = function (e) {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(resp => resp.json())
        .then(posts => {
            for (const post of posts) {
                let divPost = document.createElement('div');
                divPost.innerText = `${post.title}`;
                divPost.classList = 'post'
                let a = document.createElement('a');
                a.innerText = 'інформація про пост'
                a.href = `../post-details page/post-details.html?id=${post.id}`;
                divPost.appendChild(a);
                divforPost.appendChild(divPost);
            }
            but.disabled = true;
            document.body.appendChild(divforPost)

        })
}




