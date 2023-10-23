
// ABOUT1 팝업
const about = document.querySelector('.about')
const aboutPop = document.querySelector('.aboutPop')
const aboutPopClose = document.querySelector('.pop_close1')
const dark = document.querySelector('.dark')


// ABOUT 팝업 - 띄우기
about.addEventListener('click',()=>{
  aboutPop.style.display = 'block';
  dark.style.display = 'block';
})
console.log(about);

// ABOUT 팝업 - 닫기
  aboutPopClose.addEventListener('click', ()=>{
    aboutPop.style.display = 'none';
    dark.style.display = 'none'; 
  })

  dark.addEventListener('click', ()=>{
    aboutPop.style.display = 'none';
    dark.style.display = 'none'; 
  })



// ABOUT2 팝업
const about2 = document.querySelector('.about2')
const aboutPop2 = document.querySelector('.aboutPop2')
const aboutPopClose2 = document.querySelector('.pop_close2')

// ABOUT2 팝업 - 띄우기
about2.addEventListener('click',()=>{
  aboutPop2.style.display = 'block';
  dark.style.display = 'block';
})
console.log(about);

// ABOUT2 팝업 - 닫기
  aboutPopClose2.addEventListener('click', ()=>{
    aboutPop2.style.display = 'none';
    dark.style.display = 'none'; 
  })

  dark.addEventListener('click', ()=>{
    aboutPop2.style.display = 'none';
    dark.style.display = 'none'; 
  })
  


// ABOUT3 팝업
const about3 = document.querySelector('.about3')
const aboutPop3 = document.querySelector('.aboutPop3')
const aboutPopClose3 = document.querySelector('.pop_close3')

// ABOUT3 팝업 - 띄우기
about3.addEventListener('click',()=>{
  aboutPop3.style.display = 'block';
  dark.style.display = 'block';
})
console.log(about);

// ABOUT3 팝업 - 닫기
  aboutPopClose3.addEventListener('click', ()=>{
    aboutPop3.style.display = 'none';
    dark.style.display = 'none'; 
  })

  dark.addEventListener('click', ()=>{
    aboutPop3.style.display = 'none';
    dark.style.display = 'none'; 
  })


  //pop1 글자 띄우기
  const content = '" 안녕하세요. 저는 MAKER 개발자 팀의 한민희입니다. 저희는 다양한 게임 콘텐츠를 제공합니다. "';
  const text = document.querySelector(".text");
  text.textContent = " ";
  let txtIdx = 0;

  function typing(){
    let txt = content[txtIdx++];
    if (txt == undefined) return;
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (txtIdx > content.length) {
        txtIdx = 0;
    }else{
      setTimeout(typing, 150)
    }
  }

  // typing();
about.addEventListener('click', typing);

  //pop2 글자 띄우기
  const content2 = '" 안녕하세요. 저는 MAKER 개발자 팀의 조경훈입니다. 저희는 다양한 게임 콘텐츠를 제공합니다. "';
  const text2 = document.querySelector(".text2");
  text2.textContent = " ";
  let txtIdx2 = 0;

  function typing2(){
    let txt2 = content2[txtIdx2++];
    if (txt2 == undefined) return;
    text2.innerHTML += txt2=== "\n" ? "<br/>": txt2;
    if (txtIdx2 > content2.length) {
        txtIdx2 = 0;
    }else{
      setTimeout(typing2, 150)
    }
  }
  // typing2();
  about2.addEventListener('click', typing2);


  //pop2 글자 띄우기
  const content3 = '" 안녕하세요. 저는 MAKER 개발자 팀의 사유정입니다. 저희는 다양한 게임 콘텐츠를 제공합니다. "';
  const text3 = document.querySelector(".text3");
  text3.textContent = " ";
  let txtIdx3 = 0;

  function typing3(){
    let txt3 = content3[txtIdx3++];
    if (txt3 == undefined) return;
    text3.innerHTML += txt3=== "\n" ? "<br/>": txt3;
    if (txtIdx3 > content3.length) {
        txtIdx3 = 0;
    }else{
      setTimeout(typing3, 150)
    }
  }
  // typing3();
  about3.addEventListener('click', typing3);


  
