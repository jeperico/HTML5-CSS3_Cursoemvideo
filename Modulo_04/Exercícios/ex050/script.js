const div = document.querySelector('#res')
function textaoslk(){

    div.innerHTML= `<span onselectstart='return false'>
        <p>Bom, chegou o exercício de número 50, um número bem redondinho e que caracteriza uma nova etapa, meia centena... Eu entrei nesse mundo dos Softwares fazem uns 3/4 meses, e desde lá minha vida vem ganhando novos significados. Basicamente, ela tem um novo pilar agora. São 4 grandes pilares, divididos em 7 tópicos principais. </p>
        <p>Até agora, eu já fiz, do Curso em Vídeo, HTML5 e CSS3 módulo [1, 2, 3, 4], JavaScript, Git e GitHub, Bases Numéricas, metade de PHP e algumas aulas de Java... Tenho alguns na fila, como World Press e Linux. Também estou aprendendo React com o canal Hora de Codar e rachei com o Maicon dois cursos de Java da Udemy, que vou assistir após acabar esse módulo.</p>
        <p>Meu plano principal é virar Programador Web FullStack. Para isso estou aprendendo, de front-end, HTML5 e CSS3, JavaScript e React. Já para o back-end, utilizarei Java e Node.js. Serão nessas tecnologias que farei a SA (Situação de aprendizagem) com o Maicon, no terceirão ano que vem.</p>
        <p>Meu plano de carreira é, quando eu me sentir pronto em relação ao desenvolvimento de sites sozinhos, começar a trabalhar para a minha irmã, mas caso apareça alguma boa oportunidade (Como por exemplo trabalhar com o Calvo), eu provavelmente irei aceitar.</p>
        <p>Estou cursando Técnico em Desenvolvimento de Sistemas, e pretendo fazer uma faculdade na área. Talvez após o EM eu tire um ou dois semestres sabáticos para entrar de cabeça nos estudos e trabalho. Por enquanto, em paralelo ao Ensino Médio, minha rotina é composta de 3 coisas: Academia, treinos de Vôlei e estudar Programação, e estou conseguindo conciliar bem até.</p>
    </span><input type="button" value="Ocultar texto especial" onclick="textaochau()" class="tex">`
}

function textaochau(){
    div.innerHTML=''
}