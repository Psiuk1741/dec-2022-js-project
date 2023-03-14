let div_wrap = document.getElementById('wrap')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((users) => {

            for (let user of users) {
                let div_block = document.createElement('div');
                div_block.classList = 'block animate__animated animate__bounce';

                div_block.innerText = `${user.id}  ${user.name}`;
                let a = document.createElement('a');
                a.innerText = 'інформація про юзера'
                a.href = `user-details page/user-details.html?id=${user.id}`;
                div_block.appendChild(a);
                div_wrap.appendChild(div_block);
            }
        }
    )