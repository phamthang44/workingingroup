const navbar = document.querySelector('.nav')
const ulElement = navbar.querySelector('ul')
const liList = ulElement.querySelectorAll('li')

function eventHandler (list) {
    for (let i = 0; i < list.length; i++) {

        let liItem = list[i]

        liItem.onclick = function() {

            list.forEach(li => {
                li.classList.remove('active')
            });

            this.classList.add('active'), 1000

        }
    }
}

eventHandler(Array.from(liList))

// console.log(123
//.nav li.active a::after
// 