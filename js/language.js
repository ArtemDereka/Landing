languageBtnE = document.querySelector('.language__btnE')
languageBtnR = document.querySelector('.language__btnR')
headerMenuLink1 = document.querySelector('.header__menu-link1')
headerMenuLink2 = document.querySelector('.header__menu-link2')
headerMenuLink3 = document.querySelector('.header__menu-link3')
contactsSubmitt = document.querySelector('.contacts__submitt')
contactsSubmit = document.querySelector('.contacts__submit')
contactsSubmitEng = document.querySelector('.contacts__submitEng')
contactsName = document.querySelector('.contacts__name')
contactsCity = document.querySelector('.contacts__city')
headerName = document.querySelector('.header__name-title')
textObz1 = document.querySelector('.about__textobz')
textObz2 = document.querySelector('.about__textobz2')
aboutOne = document.querySelector('.about__text-one')
aboutTwo = document.querySelector('.about__text-two')
liLast = document.querySelector('.about__text-liLast')
text = document.querySelector('.about__text')
textEng = document.querySelector('.about__textENG')
mainText = document.querySelector('.main__text')
mainWord = document.querySelector('.main__word')
contactsNameM = document.querySelector('.contacts__nameM')


contactsApplication1 = document.querySelector('.contacts__application1')
contactsApplication2 = document.querySelector('.contacts__application3')
contactsApplication3 = document.querySelector('.contacts__application2')
contactsApplicationComment = document.querySelector('.contacts__application-comment')

contactsApplication1E = document.querySelector('.contacts__application1E')
contactsApplication2E = document.querySelector('.contacts__application3E')
contactsApplication3E = document.querySelector('.contacts__application2E')
contactsApplicationCommentE = document.querySelector('.contacts__application-commentE')



languageBtnE.addEventListener('click', function () {
    
    headerName.innerHTML = "Artem Dereka"
    headerMenuLink1.innerHTML = "Home"
    headerMenuLink2.innerHTML = "About me"
    headerMenuLink3.innerHTML = "Сontacts"
    contactsSubmitt.innerHTML = "Сontact"
    // contactsSubmit.innerHTML = "Submit"
    contactsName.innerHTML = "СONTACT <br> WITH ME"
    contactsNameM.innerHTML = "СONTACT <br> WITH ME"
    contactsCity.innerHTML = "Kharkov, Ukraine"
    textObz1.innerHTML = " Hi. I’m Artem, front-end developer. I have been a valuable asset as a front end using emerging technology to design websites and related materials. "
    textObz2.innerHTML = " I am proficient in JavaScript, CSS and have robust HTML skills. Included in my front end developer skill set are a range of tools and resources for building landing pages, websites and game resources. "
    aboutOne.innerHTML = "About:"
    aboutTwo.innerHTML = "In details:"
    liLast.innerHTML = "Adaptive layout"
    textEng.innerHTML = "I am familiar with the technical specifications for designing prototypes and guides. I have operated both independently and on teams, both onsite and mobile. Juggling an entire project or working alongside others has honed time management skills for effective planning and organisation estimating budgets and completing tasks on deadline every time."
    mainText.innerHTML = "SUCCESS — IT IS A SCIENCE, IF YOU HAVE CONDITIONS, YOU WILL RECEIVE"
    mainWord.innerHTML = "RESULT"

    languageBtnR.classList.add('display_block')
    languageBtnE.classList.add('display_none')

    contactsSubmitEng.classList.add('display_inlinebloke')
    contactsApplication1E.classList.add('display_block')
    contactsApplication2E.classList.add('display_block')
    contactsApplication3E.classList.add('display_block')
    contactsApplicationCommentE.classList.add('display_block')
    contactsSubmit.classList.add('display_none')
    contactsApplication1.classList.add('display_none')
    contactsApplication2.classList.add('display_none')
    contactsApplication3.classList.add('display_none')
    contactsApplicationComment.classList.add('display_none')
    text.classList.add('display_none')
    
    
})

languageBtnR.addEventListener('click', function () {
    
    headerName.innerHTML = "Артем Дерека"
    headerMenuLink1.innerHTML = "Главная"
    headerMenuLink2.innerHTML = "Обо мне"
    headerMenuLink3.innerHTML = "Контакты"
    contactsSubmitt.innerHTML = "Связаться"
    // contactsSubmit.innerHTML = "Отправить"
    contactsName.innerHTML = "СВЯЖИТЕСЬ <br> СО МНОЙ"
    contactsNameM.innerHTML = "СВЯЖИТЕСЬ <br> СО МНОЙ"
    contactsCity.innerHTML = "Харьков, Украина" 
    textObz1.innerHTML = "Я понимаю, что эта информация скорее всего не вызывает у тебя доверия, мой важный и ценный потенциальный заказчик."
    textObz2.innerHTML = "Ты боишься, что я могу быть рукажоп или что у меня просто недостаточно жизненного опыта."
    aboutOne.innerHTML = "Обо мне:"
    aboutTwo.innerHTML = "Более детально о моих навыках:"
    liLast.innerHTML = "Адаптивная верстка"
    textEng.innerHTML = "Но! А это, как ты уже понял, самое важное- я уже 2 года изучаю software development, сделал несколько проектов (включая тот, что ты сейчас просматриваешь) и всегда максимально сосредоточен на поставленных задачах."
    mainText.innerHTML = "УСПЕХ — ЭТО НАУКА, ЕСЛИ У ВАС ЕСТЬ УСЛОВИЯ, ВЫ ПОЛУЧИТЕ"
    mainWord.innerHTML = "РЕЗУЛЬТАТ"

    languageBtnR.classList.remove('display_block')
    languageBtnE.classList.remove('display_none')

    contactsApplication1E.classList.remove('display_block')
    contactsApplication2E.classList.remove('display_block')
    contactsApplication3E.classList.remove('display_block')
    contactsApplicationCommentE.classList.remove('display_block')
    contactsApplication1.classList.remove('display_none')
    contactsApplication2.classList.remove('display_none')
    contactsApplication3.classList.remove('display_none')
    contactsApplicationComment.classList.remove('display_none')
    text.classList.remove('display_none')
    contactsSubmitEng.classList.remove('display_inlinebloke')
    contactsSubmit.classList.remove('display_none')
    
})




