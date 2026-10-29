// BUFF STUDIO | 콘텐츠와 결과는 이 파일에서 수정하세요.
const datasets = {
  daily: {
    name: '오늘의 BUFF',
    questions: [
      {q:'지금 내 업무 상태는 어떤가요?', options:['해야 할 일이 많아 정리가 필요해요','집중이 잘 안 되고 자꾸 딴생각이 나요','잠깐의 여유가 필요해요','새로운 아이디어나 자극이 필요해요'], scores:[['focus','drive'],['focus','refresh'],['rest','recovery'],['idea','confidence']]},
      {q:'오늘 가장 듣고 싶은 말은?',options:['하나씩 해도 충분해요','조금만 더, 잘하고 있어요!','잠깐 쉬어도 괜찮아요','새로운 시도를 해봐도 좋아요'],scores:[['focus','rest'],['confidence','drive'],['rest','recovery'],['idea','confidence']]},
      {q:'지금 3분이 생긴다면?',options:['할 일을 정리하고 우선순위를 정해요','가볍게 몸을 움직여요','눈을 감고 잠깐 쉬어요','새로운 것을 찾아봐요'],scores:[['focus','drive'],['refresh','recovery'],['rest','recovery'],['idea','confidence']]},
      {q:'오늘의 나에게 가장 필요한 변화는?',options:['복잡한 생각을 단순하게 만들기','시작할 용기 얻기','마음의 여유 되찾기','기분을 환기하고 새롭게 보기'],scores:[['focus','rest'],['confidence','drive'],['recovery','rest'],['refresh','idea']]},
      {q:'오늘 업무 중 가장 자주 느낀 감정은?',options:['할 일이 쌓여 조금 조급해요','시작하기 전부터 망설여져요','반복되는 일에 지루함을 느껴요','잠깐 쉬면서 재정비하고 싶어요'],scores:[['focus','drive'],['confidence','drive'],['refresh','idea'],['recovery','rest']]},
      {q:'화면에 지금 하나의 버튼이 나타난다면?',options:['정리하기 · 복잡한 생각 줄이기','시작하기 · 미뤄둔 일에 도전하기','새로고침 · 새로운 자극 만나기','잠깐 멈춤 · 여유 찾기'],scores:[['focus','rest'],['drive','confidence'],['idea','refresh'],['rest','recovery']]},
      {q:'오늘 퇴근 전 가장 바라는 모습은?',options:['중요한 일 하나를 끝낸 나','용기 내서 새로운 일을 시도한 나','작은 즐거움을 발견한 나','무리하지 않고 나를 챙긴 나'],scores:[['focus','drive'],['confidence','idea'],['refresh','idea'],['recovery','rest']]}
    ],
    results: {
      focus:{title:'집중력 BUFF',subtitle:'흩어진 생각을 하나로 모을 시간',message:'머릿속에 해야 할 일이 한꺼번에 떠오르면 시작하는 것조차 어렵게 느껴질 수 있어요. 오늘은 모든 일을 완벽하게 처리하려 하기보다, 가장 중요한 일 하나에만 시선을 맞춰보세요. 작은 집중이 쌓이면 복잡했던 하루에도 분명한 흐름이 생길 거예요.',mission:'지금 할 일 중 가장 중요한 한 가지 적기',tags:['#집중','#우선순위','#작은시작']},
      rest:{title:'여유 BUFF',subtitle:'오늘은 속도보다 리듬이 필요한 날',message:'할 일이 많아 보여도 모든 순간을 바쁘게 채울 필요는 없어요. 잠깐 숨을 고르고 나면 보이지 않던 여유가 생기기도 하니까요. 오늘은 속도를 조금 늦추고 나만의 리듬을 찾아보세요. 짧은 쉼표 하나가 다음 일을 이어갈 힘이 되어줄 거예요.',mission:'화면에서 시선을 떼고 천천히 세 번 숨 쉬기',tags:['#여유','#쉼표','#리듬']},
      confidence:{title:'자신감 BUFF',subtitle:'작은 시도도 충분히 의미 있어요',message:'잘할 수 있을지 고민하는 동안에도 이미 많은 생각과 준비를 해왔을 거예요. 완벽한 순간을 기다리기보다 지금 할 수 있는 만큼 시작해 보세요. 오늘의 작은 도전이 내일의 자신감을 만드는 재료가 될 수 있어요.',mission:'미뤄둔 일 하나를 2분만 시작해 보기',tags:['#자신감','#도전','#첫걸음']},
      refresh:{title:'기분 전환 BUFF',subtitle:'잠깐 다른 장면을 만나볼 시간',message:'같은 화면을 오래 바라보다 보면 생각도 제자리에 머무는 것처럼 느껴질 수 있어요. 그럴 때는 잠시 고개를 들고 주변을 살펴보세요. 익숙한 공간에서도 새로운 색이나 소리를 발견할 수 있어요. 짧은 전환이 오늘의 기분을 가볍게 바꿔줄지도 몰라요.',mission:'자리에서 일어나 주변의 새로운 것 하나 발견하기',tags:['#기분전환','#새로운시선','#리프레시']},
      drive:{title:'추진력 BUFF',subtitle:'시작하는 순간부터 흐름이 만들어져요',message:'시작해야 할 일은 알고 있지만 첫걸음이 무겁게 느껴지는 날도 있죠. 오늘은 거창한 계획보다 아주 작은 행동 하나로 출발해 보세요. 시작한 뒤에야 보이는 다음 단계도 있으니까요. 당신의 오늘은 작은 움직임 하나로 충분히 달라질 수 있어요.',mission:'타이머를 3분 맞추고 첫 단계만 실행하기',tags:['#추진력','#실행','#시작']},
      recovery:{title:'회복 BUFF',subtitle:'충전도 오늘의 중요한 일정이에요',message:'계속 달리기만 하면 작은 피로도 크게 느껴질 수 있어요. 잠깐 멈추는 시간은 뒤처지는 시간이 아니라 다시 움직일 준비를 하는 순간이에요. 오늘은 스스로의 상태를 살피고 작은 휴식을 허락해 보세요. 다음을 위한 에너지는 그런 틈에서 천천히 채워질 수 있어요.',mission:'어깨와 손목을 가볍게 풀고 물 한 잔 마시기',tags:['#회복','#충전','#잠깐의쉼']},
      idea:{title:'아이디어 BUFF',subtitle:'익숙한 것을 다르게 보는 순간',message:'좋은 생각은 꼭 책상 앞에서만 떠오르지 않아요. 시선을 조금 바꾸거나 평소와 다른 순서로 생각해 보는 것만으로도 새로운 가능성이 보일 수 있죠. 오늘은 정답을 빨리 찾기보다 재미있는 질문 하나를 만들어 보세요. 작은 호기심이 다음 아이디어로 이어질 거예요.',mission:'익숙한 물건 하나의 새로운 사용법 상상하기',tags:['#아이디어','#호기심','#발견']}
    }
  },
  lunch: {
    name:'점심 메뉴 추천',
    questions:[
      {q:'오늘 점심은 어떤 기분으로 먹고 싶어?',options:['든든하게 에너지를 채우고 싶어','가볍고 산뜻하게 먹고 싶어','평소보다 특별한 한 끼가 좋아'],weights:[{hearty:3,comfort:1},{light:3,clean:2},{special:3,novel:1}]},
      {q:'지금 가장 끌리는 맛은?',options:['매콤하고 자극적인 맛','따뜻하고 편안한 맛','담백하고 깔끔한 맛','짭짤하고 감칠맛 나는 맛'],weights:[{spicy:4},{warm:4,comfort:2},{clean:4,light:1},{savory:4}]},
      {q:'오늘 점심시간은 어떤 상황이야?',options:['시간이 부족해서 빠르게 먹고 싶어','여유롭게 제대로 먹고 싶어','메뉴 고민 없이 익숙한 게 좋아'],weights:[{quick:4},{leisure:3,special:1},{familiar:4}]},
      {q:'지금 배고픔은 어느 정도야?',options:['밥 한 그릇은 든든히 먹고 싶어','적당히 배부르면 만족해','부담 없이 가볍게 먹고 싶어'],weights:[{hearty:3},{comfort:2,savory:1},{light:3,clean:1}]},
      {q:'오늘 점심에서 더 중요한 건?',options:['익숙하고 실패 없는 선택','새로운 메뉴를 먹는 재미','천천히 즐기는 편안함'],weights:[{familiar:3},{novel:3,special:2},{comfort:3,leisure:2}]},
      {q:'식사 후에는 어떤 기분이고 싶어?',options:['든든하게 오후를 시작하고 싶어','기분을 산뜻하게 바꾸고 싶어','따뜻하게 마음을 채우고 싶어'],weights:[{hearty:2},{clean:2,light:2},{warm:2,comfort:2}]},
      {q:'오늘 점심에 어울리는 분위기는?',options:['활기차고 확실한 맛','조용하고 편안한 한 끼','작지만 색다른 즐거움'],weights:[{spicy:2,hearty:1},{warm:2,comfort:2},{novel:3,special:2}]}
    ],
    results:[
      {title:'제육덮밥',image:'jeyuk.jpg',attrs:{hearty:3,spicy:3,familiar:2,quick:2},buffTitle:'활력 충전',subtitle:'매콤하고 든든한 한 끼',message:'오전 내내 집중하느라 지쳤다면 오늘은 매콤하고 든든한 제육덮밥이 어울려요. 익숙하지만 확실한 맛으로 점심시간을 즐겨보세요. 오후를 시작하기 전, 기분 좋은 활력을 채우는 시간이 될 거예요.',mission:'식사 후 잠깐 바깥 공기 쐬기',tags:['#매콤함','#든든함','#활력']},
      {title:'우동',image:'udon.jpg',attrs:{warm:3,comfort:3,light:2,quick:2},buffTitle:'따뜻한 위로',subtitle:'국물 한 모금의 작은 여유',message:'복잡했던 오전을 지나왔다면 오늘은 따뜻한 우동 한 그릇이 잘 어울려요. 부드러운 면과 따뜻한 국물을 천천히 즐기며 마음의 속도도 조금 낮춰보세요. 잠깐의 편안함이 오후의 시작을 부드럽게 만들어줄 거예요.',mission:'첫 세 입은 화면을 보지 않고 천천히 먹기',tags:['#따뜻함','#편안함','#여유']},
      {title:'샌드위치',image:'sandwich.jpg',attrs:{light:3,clean:3,quick:3},buffTitle:'산뜻한 시작',subtitle:'가볍고 경쾌한 점심시간',message:'오늘은 무겁지 않게 기분을 바꾸고 싶다면 샌드위치를 추천해요. 좋아하는 재료가 겹겹이 쌓인 한 입처럼 작은 즐거움도 차곡차곡 모아보세요. 바쁜 일정 속에서도 점심시간만큼은 나를 위한 시간이 될 수 있어요.',mission:'좋아하는 음료와 함께 짧은 휴식 즐기기',tags:['#산뜻함','#간편함','#가벼움']},
      {title:'닭갈비',image:'dakgalbi.jpg',attrs:{hearty:3,spicy:3,special:2,leisure:3},buffTitle:'에너지 폭발',subtitle:'평범한 점심에 강렬한 한 끼',message:'오늘은 조금 더 신나는 점심이 필요해 보여요. 매콤한 닭갈비처럼 확실한 맛으로 일상의 분위기를 바꿔보세요. 함께 먹는 사람이 있다면 이야기를 나누며 즐겨도 좋아요. 평범한 하루에 작은 이벤트가 될 거예요.',mission:'점심시간에 즐거웠던 순간 하나 기억하기',tags:['#매콤함','#특별함','#활력']},
      {title:'볶음밥',image:'fried-rice.jpg',attrs:{hearty:2,savory:3,familiar:3,quick:3},buffTitle:'든든한 안정',subtitle:'익숙해서 더 반가운 한 그릇',message:'메뉴 고민이 길어지는 날에는 익숙하고 든든한 볶음밥이 좋은 선택이에요. 여러 재료가 어우러지는 맛처럼 오늘의 작은 일들도 하나씩 자리를 찾아갈 거예요. 복잡한 선택은 잠시 내려놓고 편안한 점심을 즐겨보세요.',mission:'식사 후 가장 먼저 할 일 하나만 정하기',tags:['#고소함','#익숙함','#든든함']},
      {title:'짜장면',image:'jajangmyeon.jpg',attrs:{hearty:3,savory:3,familiar:3,leisure:1},buffTitle:'만족 충전',subtitle:'고민 끝에 만나는 익숙한 행복',message:'오늘은 누구나 아는 그 맛이 유난히 반가울 수 있어요. 진한 소스와 면이 어우러지는 짜장면으로 든든한 점심을 즐겨보세요. 꼭 새로운 선택이 아니어도 괜찮아요. 익숙한 만족이 하루를 기분 좋게 채워줄 때도 있으니까요.',mission:'점심을 먹으며 오늘의 작은 만족 하나 떠올리기',tags:['#감칠맛','#익숙함','#만족']},
      {title:'초밥',image:'sushi.jpg',attrs:{clean:3,light:2,special:3,leisure:2},buffTitle:'기분 전환',subtitle:'오늘은 조금 특별한 선택',message:'같은 점심이 반복되어 지루했다면 오늘은 초밥으로 작은 변화를 만들어보세요. 여러 가지 맛을 하나씩 발견하는 과정이 점심시간의 재미가 될 거예요. 평소와 조금 다른 선택만으로도 하루의 분위기는 달라질 수 있어요.',mission:'평소 고르지 않던 초밥 한 종류 시도하기',tags:['#깔끔함','#특별함','#발견']},
      {title:'국밥',image:'gukbap.jpg',attrs:{hearty:3,warm:3,comfort:3,familiar:2},buffTitle:'회복 충전',subtitle:'따뜻하고 든든하게 채우는 시간',message:'몸과 마음이 모두 바쁜 날에는 따뜻한 국밥 한 그릇이 어울려요. 뜨거운 국물을 천천히 즐기며 오전의 긴장을 잠깐 내려놓아 보세요. 든든한 점심과 짧은 휴식이 오후를 이어갈 여유를 만들어줄 거예요.',mission:'급하게 먹지 않고 잠시 천천히 쉬기',tags:['#따뜻함','#든든함','#회복']},
      {title:'알밥',image:'albap.jpg',attrs:{savory:3,novel:3,special:2,quick:2},buffTitle:'소소한 즐거움',subtitle:'톡톡 터지는 한 입의 재미',message:'오늘은 작은 재미가 숨어 있는 알밥을 추천해요. 톡톡 터지는 식감처럼 평범한 점심에도 의외의 즐거움이 있을 수 있어요. 익숙한 업무 사이에서 잠깐 웃을 수 있는 순간을 발견해 보세요.',mission:'오늘 발견한 사소한 즐거움 하나 기억하기',tags:['#감칠맛','#식감','#소확행']},
      {title:'비빔밥',image:'bibimbap.jpg',attrs:{hearty:2,clean:2,light:2,novel:1,leisure:2},buffTitle:'균형 충전',subtitle:'다양한 맛이 만드는 좋은 조화',message:'여러 가지를 동시에 신경 쓰느라 분주한 날이라면 비빔밥처럼 조화로운 한 그릇을 추천해요. 서로 다른 재료가 어우러져 하나의 맛을 만드는 것처럼, 오늘의 일들도 하나씩 균형을 찾아갈 거예요. 점심만큼은 편안하게 즐겨보세요.',mission:'오후 일정에서 중요한 일과 쉬는 시간 구분하기',tags:['#다채로움','#균형','#든든함']}
    ]
  }
};
let current=null,step=0,answers=[];
const screen=document.getElementById('screen'),homeBtn=document.getElementById('homeBtn'),headerCount=document.getElementById('headerCount');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function goHome(){current=null;step=0;answers=[];render()}
function start(key){current=key;step=0;answers=[];render()}
function choose(i){answers[step]=i;step++;render()}
function back(){if(step>0){step--;answers=answers.slice(0,step);render()}else goHome()}
function progress(total,done){return `<div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><div class="progress-fill" style="width:${done/total*100}%"></div></div><div class="progress-meta"><span>${Math.min(done+1,total)}/${total}</span><span>응답 ${done}개</span></div>`}
function getResult(){
 const d=datasets[current];
 if(current==='daily'){
  const scores=Object.fromEntries(Object.keys(d.results).map(k=>[k,0]));
  answers.forEach((choice,i)=>d.questions[i].scores[choice].forEach((key,j)=>scores[key]+=j===0?3:1));
  const best=Object.keys(scores).sort((a,b)=>scores[b]-scores[a])[0];return d.results[best];
 }
 const wants={};answers.forEach((choice,i)=>{Object.entries(d.questions[i].weights[choice]).forEach(([k,v])=>wants[k]=(wants[k]||0)+v)});
 const ranked=d.results.map((r,i)=>({r,i,score:Object.entries(wants).reduce((sum,[k,v])=>sum+v*(r.attrs[k]||0),0)})).sort((a,b)=>b.score-a.score);
 // 동점일 때 동일한 메뉴만 반복되지 않도록 선택 조합으로 안정적인 순서를 정합니다.
 const top=ranked.filter(x=>x.score===ranked[0].score);
 return top.length===1?top[0].r:top[answers.reduce((s,a,i)=>s+a*(i+3),0)%top.length].r;
}
function render(){
 homeBtn.style.display=current?'flex':'none';
 if(!current){
  headerCount.textContent='';screen.className='home-screen';
  screen.innerHTML=`<div class="intro"><p class="eyebrow">FIND YOUR BUFF</p><h1>오늘, 어떤 BUFF가 필요해?</h1><p class="subtitle">반복되는 하루에 작은 즐거움을 더하는 방법</p></div><div class="card-grid"><button class="choice-card" data-start="daily" aria-label="오늘의 BUFF 시작하기"><span class="choice-front"><img class="choice-icon-image" src="./images/icons/clover.png" alt="" aria-hidden="true"><span class="choice-title">오늘의 BUFF</span><span class="choice-desc">응원과 활력</span></span><span class="choice-hover" aria-hidden="true">시작하기 <span class="hover-arrow">→</span></span></button><button class="choice-card" data-start="lunch" aria-label="점메추 시작하기"><span class="choice-front"><img class="choice-icon-image" src="./images/icons/spoon-fork.png" alt="" aria-hidden="true"><span class="choice-title">점 메 추</span><span class="choice-desc">오늘의 한끼</span></span><span class="choice-hover" aria-hidden="true">시작하기 <span class="hover-arrow">→</span></span></button></div><p class="home-footer">콘텐츠를 선택하고 나만의 BUFF를 획득해 보세요.</p>`;
  screen.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.start)));return;
 }
 const d=datasets[current],total=d.questions.length;headerCount.textContent=`${Math.min(step+1,total)}/${total}`;
 if(step<total){
  screen.className='quiz-screen';const q=d.questions[step];
  screen.innerHTML=`${progress(total,step)}<h1 class="section-title">${escapeHTML(d.name)}</h1><div class="quiz-layout"><div class="question-box"><span class="question-label">질문 ${step+1}</span><h2>${escapeHTML(q.q)}</h2></div><div class="answers">${q.options.map((a,i)=>`<button class="answer" data-answer="${i}"><span class="number">${i+1}</span><span>${escapeHTML(a)}</span></button>`).join('')}</div></div><div class="back-row"><button id="prevBtn">← ${step===0?'처음으로':'이전 질문'}</button></div>`;
  screen.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>choose(Number(b.dataset.answer))));document.getElementById('prevBtn').onclick=back;
 }else{
  const r=getResult(),lunch=current==='lunch';headerCount.textContent=`${total}/${total}`;screen.className=`result-screen ${lunch?'result-lunch':'result-other'}`;
  const photo=lunch?`<img class="food-photo" src="./images/lunch/${encodeURIComponent(r.image)}" alt="${escapeHTML(r.title)} 음식 이미지">`:'';
  screen.innerHTML=`<div class="progress-track"><div class="progress-fill" style="width:100%"></div></div><div class="progress-meta"><span></span><span>응답 ${total}개</span></div><h1 class="section-title">결과</h1><div class="result-card"><span class="result-label">${lunch?'오늘의 추천 메뉴':'오늘의 BUFF'}</span><h2>${escapeHTML(r.title)}</h2>${photo}<p class="result-subtitle">${escapeHTML(r.subtitle)}</p><div class="buff-message"><span class="buff-kicker">${lunch?'':''}</span>${lunch?`<h3>${escapeHTML(r.buffTitle)}</h3>`:''}<p>${escapeHTML(r.message)}</p></div><div class="result-tags">${r.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></div><div class="mission-box"><strong>${lunch?'점심시간 작은 미션':'오늘의 작은 미션'}</strong><p>${escapeHTML(r.mission)}</p></div><div class="result-actions"><button class="pill" id="otherBtn">다른 BUFF 찾기</button><button class="pill primary" id="againBtn">다시 테스트하기</button></div>`;
  document.getElementById('otherBtn').onclick=goHome;document.getElementById('againBtn').onclick=()=>start(current);
 }
}
homeBtn.onclick=goHome;render();
