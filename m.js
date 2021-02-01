const bodyElement = document.querySelector('body');

const wrapperElement = document.querySelector('.wrapper');
const checkElement1 = document.querySelector('.stone-form .form-input');
const checkElement2 = document.querySelector('.scissors-form .form-input');
const checkElement3 = document.querySelector('.paper-form .form-input');

let imageElement1 = document.querySelector('.stone-image');
let imageElement2 = document.querySelector('.scissors-image');
let imageElement3 = document.querySelector('.paper-image');

const stoneElement = document.querySelector('.image-stone');
const scissorsElement = document.querySelector('.image-scissors');
const paperElement = document.querySelector('.image-paper');

// create and unappear same stone element
const secondImageStone = document.querySelector('.stone-img_2');
const secondStoneElement = document.querySelector('.stone_2');
secondStoneElement.style.display = 'none';
secondImageStone.style.display = 'none';

// create and unappear same scissors element
const secondScissorsElement = document.querySelector('.scissors_2');
const secondImageScissors = document.querySelector('.scissors-img_2')
secondScissorsElement.style.display = 'none';
secondImageScissors.style.display = 'none';

// create and unappear same paper element
const secondPaperElement = document.querySelector('.paper_2');
const secondImagePaper = document.querySelector('.paper-img_2')
secondPaperElement.style.display = 'none';
secondImagePaper.style.display = 'none';

// stone
checkElement1.addEventListener('change', function(e){
    if (checkElement1.checked) {
        checkElement1.value = 1;
        // random image
        function appendToArray(img1,img2, img3) {
            let newArray = []
            newArray.push(img1,img2,img3);
            
            let array1 = newArray[0];
            let array2 = newArray[1];
            let array3 = newArray[2];

            if (array1 == newArray[Math.floor(Math.random() * newArray.length)]){
                img2.style.display = 'none';
                scissorsElement.style.display = 'none';
                img3.style.display = 'none';
                paperElement.style.display = 'none';

                // create same elements
                secondStoneElement.style.display = 'initial';
                secondImageStone.style.display = 'initial';

                // create congretulations
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Durang!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh');
                wrapperElement.prepend(refreshButton);
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })
            } else if (array2 == newArray[Math.floor(Math.random() * newArray.length)]){
                img3.style.display = 'none';
                paperElement.style.display = 'none';
                img2.style.display = 'initial';
                scissorsElement.style.display = 'initial';

                 // create congretulations
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Tabriklaymiz siz yutdingiz!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh');
                wrapperElement.prepend(refreshButton);
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })
            } else {
                img3.style.display = 'initial';
                img2.style.display = 'none';
                scissorsElement.style.display = 'none';

                // create sorry
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Afsus siz yutqazdingiz!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);
                
                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh')
                wrapperElement.prepend(refreshButton)
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })
            }
        }
        appendToArray(imageElement1,imageElement2,imageElement3)
    } else {
        checkElement1.value = 0;
    }
    // console.log(checkElement1.value);
})

// sciccors 
checkElement2.addEventListener('change', function(e){
    if (checkElement2.checked) {
        checkElement2.value = 1;
        // random image
        function appendToArray(img1,img2, img3) {
            let newArray = []
            newArray.push(img1,img2,img3);

            let array1 = newArray[0];
            let array2 = newArray[1];
            let array3 = newArray[2];

            if (array2 == newArray[Math.floor(Math.random() * newArray.length)]){
                img3.style.display = 'none';
                paperElement.style.display = 'none';
                img1.style.display = 'none';
                stoneElement.style.display = 'none';

                // create same elements 
                secondScissorsElement.style.display = 'initial';
                secondImageScissors.style.display = 'initial';

                // create congretulations
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Durang!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh');
                wrapperElement.prepend(refreshButton);
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })

            } else if (array1 == newArray[Math.floor(Math.random() * newArray.length)]){
                img3.style.display = 'none';
                paperElement.style.display = 'none';
                img1.style.display = 'initial';
                stoneElement.style.display = 'initial';

                 // create congretulations
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Afus siz yutqazdingiz!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh');
                wrapperElement.prepend(refreshButton);
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })
            } else {
                img3.style.display = 'initial';
                img1.style.display = 'none';
                stoneElement.style.display = 'none';

                // create sorry
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Tabriklaymiz siz yutdingiz!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh')
                wrapperElement.prepend(refreshButton)
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })
            }
        }
        appendToArray(imageElement1,imageElement2,imageElement3)
    } else {
        checkElement1.value = 0;
    }
    // console.log(checkElement1.value);
})

// paper
checkElement3.addEventListener('change', function(e){
      if (checkElement3.checked) {
        checkElement3.value = 1;
        // random image
        function appendToArray(img1, img2,img3) {
            let newArray = []
            newArray.push(img1,img2,img3);

            let array1 = newArray[0];
            let array2 = newArray[1];
            let array3 = newArray[2];

            if (array3 == newArray[Math.floor(Math.random() * newArray.length)]){
                img2.style.display = 'none';
                scissorsElement.style.display = 'none';
                img1.style.display = 'none';
                stoneElement.style.display = 'none';

                // create same elements
                secondPaperElement.style.display = 'initial';
                secondImagePaper.style.display = 'initial';

                // create congretulations
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Durang!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh')
                wrapperElement.prepend(refreshButton)
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })

            } else if (array2 == newArray[Math.floor(Math.random() * newArray.length)]){
                img2.style.display = 'none';
                scissorsElement.style.display = 'none';
                 // create congretulations
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Tabriklaymiz siz yutdingiz!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh')
                wrapperElement.prepend(refreshButton)
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";
                })
            } else {
                img2.style.display = 'initial';
                img1.style.display = 'none';
                stoneElement.style.display = 'none';

                // create sorry
                let result = document.createElement('div');
                result.classList.add('result');
                wrapperElement.appendChild(result);
                let resultTextYesElement = document.createElement('p');
                resultTextYesElement.textContent = 'Afsus siz yutqazdingiz!';
                result.appendChild(resultTextYesElement);
                resultTextYesElement.classList.add('result-text');

                // request to refresh 
                const requestElement = document.createElement('p');
                requestElement.textContent = `O'yin yakunlangach yangitdan o'ynash uchun "O'yinni yangilash" tugmasini bosing!`;
                requestElement.classList.add('game-reference');
                bodyElement.prepend(requestElement);

                // stop game and refresh
                const refreshButton = document.createElement('button');
                refreshButton.classList.add('refresh');
                wrapperElement.prepend(refreshButton);
                const refreshButtonText = document.createElement('p');
                refreshButtonText.textContent = `O'yinni yangilash.`;
                refreshButtonText.classList.add('refresh-text');
                refreshButton.appendChild(refreshButtonText);
                refreshButton.addEventListener('click', function(e){
                    window.location.href = "file:///C:/webdev/Lessons/web_lessons/lesson_12_JS/index.html";                })
            }
        }
        appendToArray(imageElement1,imageElement2,imageElement3)
    } else {
        checkElement1.value = 0;
    }
    // console.log(checkElement1.value);
})