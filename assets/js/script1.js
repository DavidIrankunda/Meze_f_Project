// the testimonies  connected with google reviews

const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Amanda',
        position: 'Marketing',
        photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXrjwB-QTCZDIPpGSR6miLdOLScW-g9hiEuNeWuqTf-eHpf1V0=w113-h113-p-rp-mo-ba6-br100',
        text: 'I am thoroughly enjoying this Mexican cuisine. The flavors are absolutely divine, and I would highly recommend that anyone who is reading this gives it a try. The food is scrumptious and the service is quick and efficient. Trust me, you will not be disappointed with the quality of the food here.'
    },
    {
        name: 'NonstopDan',
        position: 'Softwere Engr',
        photo: 'https://d1mvj2ulps5lli.cloudfront.net/avatars/125x125/24550915fc56e4c92b30.png?t=1606774348',
        text: 'Great alternative if you’re craving a burrito bowl in Kigali (the torillas taste more like pancakes so I advise against choosing those). Definitely not the best food you’ll ever have, but a nice option nonetheless.'
    },
    {
        name: 'Amanda Weilenmann',
        position: 'Data Entry',
        photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXrjwB-QTCZDIPpGSR6miLdOLScW-g9hiEuNeWuqTf-eHpf1V0=w113-h113-p-rp-mo-ba6-br100',
        text: 'Very delicious food that has great flavour. We came here twice and tried their burrito and quesadilla. The quesadilla is good but pretty messy, so we preferred their burrito. It\'s packed with delicious veggies and rice and a meat if you like. Their spicy sauce had a great kick to it. The people working here were friendly.'
    },
    {
        name: 'Ken wangwana',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'I LOVE their burritos, better than i have had anywhere in Europe... I recommend the pulled-pork ones. Great variety of toppings to \" design your own burrito".'
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text: 'This was the perfect place to grab some TxMex on our last day. The food was fresh and hot! The portion size was bigger than I expected.'
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    }

    
]

let idx = 1

function upadteTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(upadteTestimonial, 10000)