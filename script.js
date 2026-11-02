/* BUFF STUDIO — 탭형 아이패드 체험 웹사이트. 모든 문구와 메뉴는 이 파일에서 수정할 수 있어요. */
const strengthResults = {
  focus:{title:'집중아 어디니?',sub:'흩어진 생각을 다시 모을 수 있는 힘',message:'해야 할 일은 분명한데 자꾸 다른 곳에 눈길이 가는 날이 있지. 잠깐 집중이 끊겼다고 오늘을 망친 건 아니야. 다시 돌아올 수 있다는 것만으로도 충분해.',tip:'잠깐 딴생각했다고 집중력이 사라진 건 아니니까.',tags:['#집중','#나만의속도','#다시시작']},
  rest:{title:'일단 좀 누울게',sub:'아무것도 하지 않는 시간을 즐길 수 있는 힘',message:'쉬는 순간에도 뭔가 해야 할 것 같아서 마음이 바쁠 때가 있지. 그렇지만 잠깐 멈춘다고 뒤처지는 건 아니야. 지금만큼은 무언가를 해내지 않아도 괜찮아.',tip:'아무것도 하지 않는 시간도 오늘의 일부야.',tags:['#잠깐멈춤','#여유','#쉼표']},
  confidence:{title:'나 제법 괜찮을지도?',sub:'스스로의 가능성을 조금 더 믿을 수 있는 힘',message:'잘하고 있는지 확신이 안 들 때가 있지. 그런데 지금까지 해온 일을 돌아보면 생각보다 많은 걸 해냈을 거야. 부족한 점만큼 이미 해낸 일도 봐줘.',tip:'오늘의 나, 생각보다 꽤 괜찮은데?',tags:['#자신감','#작은성취','#나다움']},
  refresh:{title:'소확행을 찾아서',sub:'평범한 하루에서 작은 즐거움을 발견하는 힘',message:'매일 비슷한 하루가 반복되면 괜히 지루해질 때가 있지. 특별한 일이 생겨야만 즐거운 건 아니야. 평소와 같은 풍경에서도 뜻밖의 재미가 기다리고 있을지 몰라.',tip:'별거 아닌 일이 오늘의 하이라이트가 될 수도 있어.',tags:['#기분전환','#작은행복','#새로운발견']},
  drive:{title:'일단 하고 쉬자',sub:'망설이던 일을 시작할 수 있는 힘',message:'해야 할 일을 알면서도 시작하기가 유난히 어려운 날이 있지. 처음부터 완벽하게 해낼 필요는 없어. 작은 시작 하나가 다음 움직임을 만들어 주니까.',tip:'시작했다면 이미 하나는 해낸 거야.',tags:['#첫걸음','#추진력','#시작의힘']},
  recovery:{title:'방전 이슈',sub:'소진된 에너지를 다시 채울 수 있는 힘',message:'평소에는 괜찮던 일도 오늘따라 버겁게 느껴질 수 있어. 그런 날에는 더 힘을 내지 않아도 돼. 이미 충분히 애썼으니까 남은 에너지를 지키는 것도 중요해.',tip:'오늘은 100%가 아니어도 괜찮아.',tags:['#회복','#에너지절약','#나를돌보기']},
  idea:{title:'머리 과부하 이슈',sub:'익숙한 생각에서 새로운 가능성을 발견하는 힘',message:'생각은 많은데 마음에 드는 답이 나오지 않을 때가 있지. 같은 고민을 계속하지 않아도 괜찮아. 조금 엉뚱한 시선에서 예상치 못한 실마리가 나올 수도 있으니까.',tip:'좋은 생각은 꼭 정답처럼 생기진 않았어.',tags:['#새로운시선','#아이디어','#호기심']}
};

/* 10문항. 각 선택지의 keys가 결과별 점수를 결정해요. */
const strengthQuestions = [
 {q:'출근길, 눈앞에서 버스가 떠났다.\n나의 반응은?',a:[['다음 버스에서 앉아 갈 수 있겠는데? 개이득','refresh','confidence'],['역시 오늘도 쉽지 않군. 잠깐 쉬고 싶다','rest','recovery'],['택시 탈까? 통장 잔고 확인부터.','drive','focus']]},
 {q:'출근해서 컴퓨터를 켰는데,\n제일 먼저 드는 생각은?',a:[['오늘 할 일부터 하나씩 정리해야지.','focus','drive'],['일단 커피부터 마시고 싶어.','rest','recovery'],['오늘은 뭔가 다른 일이 생겼으면!','refresh','idea']]},
 {q:'일이 좀처럼 풀리지 않을 때,\n내 모습에 가장 가까운 건?',a:[['시작을 미루고 괜히 다른 일을 해.','drive','focus'],['같은 방법만 반복하다 머리가 복잡해져.','idea','focus'],['나만 잘 못하는 것 같아서 걱정돼.','confidence','recovery']]},
 {q:'점심시간까지 10분 남았다.\n뭘 하고 싶어?',a:[['잠깐 멍때리면서 머리를 비울래.','rest','recovery'],['작은 일 하나만 끝내놓고 갈래.','focus','drive'],['재밌는 영상이나 새로운 소식 좀 볼래.','refresh','idea']]},
 {q:'오늘 나를 가장 지치게 하는 건?',a:[['계속 쌓이는 업무와 피곤함.','recovery','rest'],['잘하고 있는지 확신이 없는 마음.','confidence','drive'],['비슷한 일만 반복되는 하루.','refresh','idea']]},
 {q:'갑자기 초능력 하나가 생긴다면\n어떤 게 좋을까?',a:[['산만한 생각을 한 번에 정리하는 능력.','focus','idea'],['원할 때 바로 에너지를 회복하는 능력.','recovery','rest'],['망설임 없이 시작하는 능력.','drive','confidence']]},
 {q:'오늘 가장 듣고 싶은 말은?',a:[['지금도 충분히 잘하고 있어.','confidence','recovery'],['잠깐 쉬어도 괜찮아.','rest','recovery'],['생각보다 잘 풀릴 수도 있어!','idea','refresh']]},
 {q:'잠깐 자유시간이 생겼어.\n제일 끌리는 건?',a:[['새로운 아이디어를 낙서해 보기.','idea','refresh'],['아무 생각 없이 가만히 있기.','rest','recovery'],['미뤄둔 일의 첫 줄만 써보기.','drive','focus']]},
 {q:'오늘 업무에서 가장 필요한 건?',a:[['딴생각 없이 한 가지에 몰입하는 시간.','focus','drive'],['내 선택을 믿는 자신감.','confidence','idea'],['작게라도 웃을 수 있는 재미.','refresh','rest']]},
 {q:'퇴근할 때 어떤 기분이면 좋겠어?',a:[['중요한 일을 하나는 끝낸 기분.','focus','drive'],['나 자신에게 좀 더 너그러워진 기분.','confidence','recovery'],['하루가 생각보다 재밌었다는 기분.','refresh','idea'],['푹 쉬고 내일을 맞을 수 있을 것 같은 기분.','rest','recovery']]}
];

const lunchResults = [
 {title:'제육덮밥',image:'jeyuk.png',attrs:{hearty:3,spicy:4,familiar:3,quick:2},sub:'매콤하고 든든한 한 끼가 필요한 너에게',message:'돼지고기의 비타민 B1은 탄수화물을 에너지로 바꾸는 데 관여해.\n기운이 부족한 오늘, 오후를 위한 에너지를 채우는 데 도움이 될 수 있어.',tip:'오늘은 익숙하지만 확실한 맛으로 기분 좋게!',tags:['#밥','#한식','#매콤','#든든']},
 {title:'우동',image:'udon.png',attrs:{warm:4,comfort:4,light:2,quick:2},sub:'따뜻한 국물로 잠깐 쉬어가고 싶은 너에게',message:'우동 면의 탄수화물은 몸과 뇌가 사용하는 에너지원이야.\n바빴던 오전을 보낸 너에게 필요한 에너지를 보충할 수 있어.',tip:'따뜻한 국물 한 모금만큼은 천천히 즐겨봐.',tags:['#면','#국물','#따뜻함','#편안함']},
 {title:'샌드위치',image:'sandwich.png',attrs:{light:4,clean:4,quick:4},sub:'가볍고 산뜻한 한 끼가 필요한 너에게',message:'통곡물 빵의 식이섬유는 포만감 유지에 도움을 줄 수 있어.\n바쁜 너도 채소와 단백질 재료를 함께 먹으면 영양을 골고루 챙길 수 있어.',tip:'가볍게 먹고 남은 점심시간은 너를 위해 써봐.',tags:['#간편','#산뜻','#가벼움']},
 {title:'닭갈비',image:'dakgalbi.png',attrs:{hearty:3,spicy:4,special:4,leisure:4},sub:'평범한 점심을 작은 이벤트로 만들고 싶은 너에게',message:'닭고기의 단백질과 비타민 B6는 몸의 정상적인 에너지 대사에 관여해.\n의욕이 떨어진 오늘, 필요한 영양을 든든하게 챙기는 데 도움이 될 수 있어.',tip:'맛있는 한 끼가 오늘의 재밌는 기억이 될지도!',tags:['#매콤','#특별한한끼','#함께']},
 {title:'볶음밥',image:'fried-rice.png',attrs:{hearty:3,savory:4,familiar:4,quick:4},sub:'고민 없이 편안하게 먹고 싶은 너에게',message:'달걀에 들어 있는 콜린은 기억과 신경 신호 전달에 관여해.\n머리를 많이 쓰는 오늘, 밥과 달걀로 에너지와 단백질도 함께 챙길 수 있어.',tip:'선택이 어려운 날에는 익숙한 맛도 좋은 답이야.',tags:['#한그릇','#고소함','#익숙함']},
 {title:'짜장면',image:'jajangmyeon.png',attrs:{hearty:4,savory:4,familiar:4,comfort:2},sub:'실패 없는 익숙한 맛이 끌리는 너에게',message:'짜장면 면의 탄수화물은 몸이 활동할 때 사용하는 주요 에너지원이야.\n할 일이 많은 오후를 앞둔 너에게 필요한 에너지를 공급할 수 있어.',tip:'오래 고민하지 말고 먹고 싶은 걸 골라도 돼.',tags:['#면','#감칠맛','#익숙한행복']},
 {title:'초밥',image:'sushi.png',attrs:{clean:4,light:3,special:4,leisure:3},sub:'조금 특별한 선택으로 기분을 바꾸고 싶은 너에게',message:'연어나 등푸른생선에 들어 있는 오메가3는 뇌의 정상적인 기능에 중요한 지방산이야.\n생각이 많은 오늘, 이런 생선이 들어간 초밥으로 영양을 챙길 수 있어.',tip:'평소에 안 먹던 종류를 하나 골라보는 건 어때?',tags:['#깔끔','#특별함','#새로운맛']},
 {title:'국밥',image:'gukbap.png',attrs:{hearty:4,warm:4,comfort:4,familiar:3},sub:'따뜻하고 든든하게 채우고 싶은 너에게',message:'국밥 속 고기의 단백질은 근육과 신체 조직을 유지하는 데 필요해.\n지친 오늘, 밥과 고기로 에너지와 단백질을 함께 보충할 수 있어.',tip:'오늘 점심만큼은 급하게 먹지 않아도 괜찮아.',tags:['#국물','#든든','#따뜻함']},
 {title:'알밥',image:'albap.png',attrs:{savory:4,novel:4,special:3,quick:3},sub:'작은 재미가 있는 한 끼를 찾는 너에게',message:'생선알의 비타민 B12는 정상적인 신경 기능에 필요한 영양소야.\n집중이 흐트러지는 오늘, 단백질과 함께 챙기기 좋은 한 끼야.',tip:'사소한 재미 하나가 점심시간을 바꿀 수도 있어.',tags:['#톡톡','#식감','#소확행']},
 {title:'비빔밥',image:'bibimbap.png',attrs:{hearty:3,clean:3,light:2,leisure:3,comfort:2},sub:'여러 맛을 골고루 즐기고 싶은 너에게',message:'여러 채소에 들어 있는 식이섬유는 소화와 혈당 관리에 도움을 줄 수 있어.\n정신없이 바쁜 오늘, 다양한 재료로 영양소를 골고루 챙길 수 있어.',tip:'오늘은 여러 가지 맛을 천천히 즐겨봐.',tags:['#한식','#다채로움','#든든함']}
];
const lunchQuestions = [
 {q:'오늘 점심, 어떤 기분으로 먹고 싶어?',a:[['배부르게 든든하게!','hearty','familiar'],['가볍고 산뜻하게.','light','clean'],['평소보다 특별하게!','special','novel']]},
 {q:'지금 가장 당기는 맛은?',a:[['매콤하고 확실한 맛.','spicy','hearty'],['따뜻하고 편안한 맛.','warm','comfort'],['담백하고 깔끔한 맛.','clean','light'],['짭짤하고 감칠맛 나는 맛.','savory','familiar']]},
 {q:'점심시간이 얼마나 여유로워?',a:[['빨리 먹고 쉬고 싶어.','quick','familiar'],['천천히 즐길 수 있어.','leisure','comfort'],['시간을 내서라도 맛있는 걸 먹을래.','special','hearty']]},
 {q:'지금 배고픔은 어느 정도야?',a:[['밥 한 그릇은 든든히 먹어야지.','hearty','warm'],['적당히 배부르면 만족해.','comfort','savory'],['가볍게 먹고 싶어.','light','clean']]},
 {q:'오늘 메뉴를 고를 때 중요한 건?',a:[['실패 없는 익숙한 맛.','familiar','comfort'],['안 먹어 본 메뉴의 재미.','novel','special'],['먹기 편하고 빠른 메뉴.','quick','light']]},
 {q:'식사 후 어떤 기분이면 좋겠어?',a:[['든든하게 오후를 시작하고 싶어.','hearty','savory'],['기분이 산뜻해졌으면 좋겠어.','clean','light'],['따뜻하게 마음이 풀렸으면 좋겠어.','warm','comfort']]},
 {q:'오늘 점심에 어울리는 분위기는?',a:[['활기차고 신나는 식사.','spicy','special'],['조용하고 편안한 식사.','warm','comfort'],['작지만 색다른 즐거움.','novel','savory']]},
 {q:'동료가 메뉴를 추천한다면?',a:[['늘 먹던 맛집 가자!','familiar','hearty'],['오늘은 새로운 데 가보자!','special','novel'],['가까운 곳에서 간단히 먹자!','quick','light']]},
 {q:'점심 한 끼에 가장 기대하는 건?',a:[['확실한 포만감.','hearty','warm'],['새로운 맛과 식감.','novel','savory'],['속 편하고 가벼운 느낌.','clean','light']]},
 {q:'마지막으로, 지금 더 끌리는 건?',a:[['밥이 있는 든든한 한 그릇.','hearty','familiar'],['따뜻한 면이나 국물.','warm','comfort'],['특별하고 깔끔한 한 끼.','special','clean'],['빠르게 먹을 수 있는 메뉴.','quick','savory']]}
];

const screen=document.getElementById('screen');
const tabs=[...document.querySelectorAll('[data-tab]')];
let current='home',step=0,answers=[],timer=null,token=0;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function cancelLoading(){token++;if(timer!==null){clearTimeout(timer);timer=null;}}
function go(section='home'){cancelLoading();current=section;step=0;answers=[];render();}
function pick(index){answers[step]=index;step++;if(step===getQuestions().length)showLoading();else render();}
function previous(){if(step>0){step--;answers=answers.slice(0,step);render();}else go('home');}
function getQuestions(){return current==='daily'?strengthQuestions:lunchQuestions;}
function resultFor(){
 if(current==='daily'){
  const scores=Object.fromEntries(Object.keys(strengthResults).map(k=>[k,0]));
  strengthQuestions.forEach((q,i)=>{const a=q.a[answers[i]];scores[a[1]]+=3;scores[a[2]]+=1;});
  const keys=Object.keys(scores);const best=keys.sort((a,b)=>scores[b]-scores[a] || Object.keys(strengthResults).indexOf(a)-Object.keys(strengthResults).indexOf(b))[0];
  return strengthResults[best];
 }
 const scores={};lunchQuestions.forEach((q,i)=>{const a=q.a[answers[i]];scores[a[1]]=(scores[a[1]]||0)+3;scores[a[2]]=(scores[a[2]]||0)+1;});
 const ranked=lunchResults.map((r,i)=>({r,i,score:Object.entries(scores).reduce((sum,[key,v])=>sum+v*(r.attrs[key]||0),0)})).sort((a,b)=>b.score-a.score);
 const top=ranked.filter(x=>x.score===ranked[0].score);return top[answers.reduce((sum,a,i)=>sum+a*(i+1),0)%top.length].r;
}
function updateTabs(){tabs.forEach(t=>{const active=t.dataset.tab===current;t.classList.toggle('active',active);t.setAttribute('aria-current',active?'page':'false');});}
function progress(done,total){return `<div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><div class="progress-fill" style="width:${done/total*100}%"></div></div><div class="progress-info"><span>${done<total?`${done+1}/${total}`:''}</span><span class="right">응답 ${done}개</span></div>`;}
function render(){
 updateTabs();screen.className='panel'+(current==='home'?' home-panel':'');
 if(current==='home'){
  screen.innerHTML=`<section class="home-view"><div class="intro"><p class="eyebrow">FIND YOUR BUFF</p><h1>오늘, 어떤 BUFF가 필요해?</h1><p class="sub">반복되는 하루에 작은 즐거움을 더하는 방법</p></div><div class="home-cards"><button class="home-card" data-open="daily"><img src="./clover-sky.png" alt="클로버"><span class="card-title">오늘의 힘</span><span class="card-sub">지금 나에게 필요한 작은 응원</span></button><button class="home-card" data-open="lunch"><img src="./lunch-sky.png" alt="수저"><span class="card-title">오늘의 점메추</span><span class="card-sub">지금 기분에 어울리는 한 끼</span></button></div><p class="home-foot">콘텐츠를 선택하고 오늘의 작은 즐거움을 찾아봐.</p></section>`;
  screen.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>go(b.dataset.open));return;
 }
 const qs=getQuestions(),total=qs.length;
 if(step<total){
  const q=qs[step];screen.innerHTML=`<section class="quiz-view">${progress(step,total)}<div class="quiz-body"><button class="quiz-home" id="quizHome">← 처음으로</button><h1 class="quiz-title">질문 ${step+1}</h1><div class="question-area"><div class="question-card"><span class="label">오늘의 질문</span><h2>${esc(q.q)}</h2></div><div class="answer-list">${q.a.map((a,i)=>`<button class="answer" data-answer="${i}"><span class="answer-num">${i+1}</span><span>${esc(a[0])}</span></button>`).join('')}</div><button class="quiz-back" id="backBtn">← ${step===0?'처음으로':'이전'}</button></div></div></section>`;
  screen.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>pick(Number(b.dataset.answer)));screen.querySelector('#quizHome').onclick=()=>go('home');screen.querySelector('#backBtn').onclick=previous;return;
 }
 renderResult(resultFor());
}
function showLoading(){
 cancelLoading();const myToken=token;const result=resultFor();const total=getQuestions().length;
 updateTabs();screen.className='panel';screen.innerHTML=`<section class="loading-view">${progress(total,total)}<img class="loading-logo" src="./loading-logo.png" alt="결과를 준비하는 중"><p class="loading-tip">${esc(result.tip)}</p></section>`;
 timer=setTimeout(()=>{timer=null;if(myToken===token)renderResult(result);},1500);
}
function renderResult(r){
 updateTabs();const lunch=current==='lunch',total=getQuestions().length;screen.className='panel';
 const photo=lunch?`<img class="food-photo" src="./images/lunch/${encodeURIComponent(r.image)}" alt="${esc(r.title)} 실제 음식 사진">`:'';
 screen.innerHTML=`<section class="result-view ${lunch?'lunch':'daily'}">${progress(total,total)}<div class="result-body"><h1 class="result-title">결과</h1><article class="result-card"><p class="result-kicker">${lunch?'오늘 추천하는 점심 메뉴는':'오늘 너에게 필요한 힘은'}</p><h2 class="result-main">【 ${esc(r.title)} 】</h2>${photo}<p class="result-sub">${esc(r.sub)}</p>${lunch?'<span class="match">✓ 오늘의 추천 메뉴</span>':''}<p class="result-message">${esc(r.message)}</p><div class="tags">${r.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></article><p class="tip">${lunch?'TIP!':'오늘의 한마디'} ${esc(r.tip)}</p><div class="actions"><button class="pill" id="homeAgain">다른 콘텐츠 보기</button><button class="pill primary" id="again">다시 테스트하기</button></div></div></section>`;
 if(lunch){
  const foodImg=screen.querySelector('.food-photo');
  foodImg.addEventListener('error',()=>{
   foodImg.remove();
   const note=document.createElement('p');
   note.className='photo-error';
   note.textContent='음식 사진을 불러오지 못했어. images/lunch 폴더의 파일명과 확장자를 확인해 줘.';
   screen.querySelector('.result-sub').before(note);
  },{once:true});
 }
 screen.querySelector('#homeAgain').onclick=()=>go('home');screen.querySelector('#again').onclick=()=>go(current);
}
tabs.forEach(t=>t.onclick=()=>go(t.dataset.tab));render();
