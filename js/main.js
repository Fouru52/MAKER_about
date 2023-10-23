// 헤더 버튼
  const menuItems = document.querySelectorAll('nav ul > li > a')

  menuItems.forEach(function(item,idx){
    item.onclick = function(e){ //a의 가상태그로 인해 맨위로 올라가는것을 막아줌
      e.preventDefault();
      document.querySelector(`#s${idx+1}`).scrollIntoView({
        behavior:'smooth'
      });
    }
  })


  // 모바일 상태에서 메뉴 슬라이드
  const triggerBtn = document.querySelector('.trigger')
  const moNav = document.querySelector('nav')
  const closeBtn = document.querySelector('.close')

  triggerBtn.addEventListener('click', function(e){
    e.preventDefault();
    moNav.classList.add('active');
  })

  closeBtn.addEventListener('click', function(){
    moNav.classList.remove('active');
  })

