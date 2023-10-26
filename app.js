let slideIndex = 0
let slideItem = [
    { img: 'asseets/jetthalal.jpg', name: 'jethallal', designation : 'Actor', description : '"Jethalal Champaklal Gada is a resident of the Gokuldham society. He is not very tall, overweight, illiterate, and has a small moustache. Though he is an honest businessman, an ideal son, a perfect husband, and a caring father, Jethalal is quite careless and lazy (evident by the fact that he is a late riser). He is a foodie and loves to"' },
    { img: 'asseets/R.jpeg', name: 'popatlal', designation: 'Reporter', description: 'Popatlal’s role is of a reporter, of the newspaper called Toofan Express. His Character is seen, as always searching for a bride because he is unmarried. He is always seen carry"' },
    { img: 'asseets/hqdefault.jpg', name: '321 pilay', designation: 'ticktoker', description: 'fazool bnda ha but log pata nhi q lik ekrty hai isy' },
    { img: 'asseets/OIP.jpeg', name: 'paresh rawal', designation: 'Actor ', description: ' Paresh Rawal is an Indian actor, comedian, film producer and politician known for his works primarily in Hindi films. He has appeared in over 240 films and is the recipient of various accola…'}
]

let slideImg = document.querySelector('#slideImg')
let slideName = document.querySelector('#name')
let slideDesignation = document.querySelector('#designation')
let slideDec = document.querySelector('#description')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextvBtn')




slideImg.src = slideItem[slideIndex].img
slideName.textContent = slideItem[slideIndex].name
slideDesignation.textContent = slideItem[slideIndex].designation
slideDec.textContent = slideItem[slideIndex].description


function nextHandler() {
    if (slideIndex < slideItem.length - 1) {
        slideIndex++
        slideImg.src = slideItem[slideIndex].img
        slideName.textContent = slideItem[slideIndex].name
        slideDesignation.textContent = slideItem[slideIndex].designation
        slideDec.textContent = slideItem[slideIndex].description
    }
}

function prevHandler() {
    if (slideIndex > 0) {
        slideIndex--
        slideImg.src = slideItem[slideIndex].img
        slideName.textContent = slideItem[slideIndex].name
        slideDesignation.textContent = slideItem[slideIndex].designation
        slideDec.textContent = slideItem[slideIndex].description
    }
}