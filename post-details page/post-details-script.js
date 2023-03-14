let url = new URL(location.href);
let id = url.searchParams.get('id');


let divforPost = document.createElement('div');
divforPost.classList = 'post';
let divforWrap = document.createElement('div');
divforWrap.classList = 'wrap';
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(value => {
            let value_keys = Object.keys(value);
            for (let i = 0; i < value_keys.length; i++) {
                let h2 = document.createElement('h2');
                h2.innerText = `${value_keys[i]}: ${value[value_keys[i]]}`;

                divforPost.appendChild(h2);
                document.body.appendChild(divforPost);
            }
        }
    ).then(() => {


    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(resp => resp.json())
        .then(values => {
            let h1Comm = document.createElement('h1');
            h1Comm.id = 'h1Comm';
            h1Comm.classList = ' animate__animated animate__bounceInDown'
            h1Comm.innerText = 'Коментарі'

            for (const value of values) {
                let divforComment = document.createElement('div');
                divforComment.classList = 'comm  animate__animated animate__fadeInLeftBig';


                let value_keys1 = Object.keys(value);
                for (let i = 0; i < value_keys1.length; i++) {
                    let h2 = document.createElement('h2');

                    h2.innerText = `${value_keys1[i]}: ${value[value_keys1[i]]}`;
                    divforComment.append(h2);
                }
                divforWrap.appendChild(divforComment);
            }
            document.body.append(h1Comm, divforWrap);

        })
})