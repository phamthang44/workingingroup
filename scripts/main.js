
// Navbar element
const navbar = document.querySelector('.nav')
const ulElement = navbar.querySelector('ul')
const liList = ulElement.querySelectorAll('li')

//feedbackList element
const feedbackList = document.querySelectorAll('.feedback-item')

function scrollItem(items) {

    let moveLenght = 1170
    let iteration = 0;
    setInterval(move ,2000)

    function move() {
        items.forEach( (item) => {

            if (iteration != 5) {

                switch (iteration) {
                    case 0: 
                        item.style.transform = `translateX(-${moveLenght * iteration}px)`
                        break
                    case 1:
                        item.style.transform = `translateX(-${moveLenght * iteration}px)`
                        break
                    case 2:
                        item.style.transform = `translateX(-${moveLenght * iteration}px)`
                        break
                    case 3:
                        item.style.transform = `translateX(-${moveLenght * iteration}px)`
                        break
                    case 4:
                        item.style.transform = `translateX(-${moveLenght * iteration}px)`
                        break
                }

            } else {
                iteration = 0
                item.style.transform = `translateX(-${moveLenght * iteration}px)`

            }
            
        })
        
        iteration++

    }


    // var interval = setInterval(frame, 15)
    // let pos = 0

    // function frame() {

    //     items.forEach(item => {
    //         posLeght = (items.length - 1)*1170
    //         // console.log(pos)
    //         if (pos < posLeght) {
                
    //             pos++
    //             item.style.right = pos + 'px';

    //         } else {
    //             pos = 0
    //             item.style.right = pos + 'px';
                
    //         }
    //     })
        
    // }



}

function eventHandler (list) {
    for (let i = 0; i < list.length; i++) {

        let liItem = list[i]

        liItem.onclick = function() {

            list.forEach(li => {
                li.classList.remove('active')
            });

            this.classList.add('active')

        }
    }
}


scrollItem(Array.from(feedbackList))


eventHandler(Array.from(liList))



// console.log(123
//.nav li.active a::after
// 
