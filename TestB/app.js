fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results);
        for(let i=0;i<data.results.length;i++) {
            document.querySelector('.container').insertAdjacentHTML("beforeend",`
                <div class="question">
                    <p>Câu${i+1}: ${data.results[i].question}</p>
                </div>
                <div class="ans">
                  <ol>
                    <li><p class="ans-${i}">${data.results[i].incorrect_answers[0]}</p></li>
                    <li><p class="ans-${i}">${data.results[i].incorrect_answers[1]}</p></li>
                    <li><p class="ans-${i}">${data.results[i].incorrect_answers[2]}</p></li>
                    <li><p class="ans-${i}">${data.results[i].correct_answer}</p></li>
                  </ol>
                </div>
                <input type="text" placeholder="ghi rõ đáp án(không dùng stt)" id="inp${i}">
                <div>
                    <p></p>
                </div>
            `)
        }
        document.getElementById('check').addEventListener('click',() => {
               let count = 0;
               let point = 0;
        for(let i=0; i<data.results.length; i++){
            var id = 'inp'+i;
            let choose = document.getElementById(id).value;
            if(choose == data.results[i].correct_answer){
                count++;
                point += 10;
            }
        }
        alert("số câu đúng là: " + count + "điểm là : " +point);
        })
     
    })



    