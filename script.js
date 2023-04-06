let listStudents = [
    {
        name: 'Marcos',
        testOne: 7,
        testTwo: 8
    },
    {
        name: 'Ana',
        testOne: 4,
        testTwo: 2
    },
    {
        name: 'Maria',
        testOne: 9,
        testTwo: 6
    },
    {
        name: 'Carlos',
        testOne: 3,
        testTwo: 4
    }
]

for (let index = 0; index < listStudents.length; index++ ) {
    let avarage = (listStudents[index].testOne + listStudents[index].testTwo) / 2
    if (avarage >= 6) {
        alert(`   A média do(a) aluno(a) ${listStudents[index].name} é : ${avarage} 
   Parabéns ${listStudents[index].name}! Você foi aprovado(a) no concurso! `)
    }else{
        alert(`   A média do(a) aluno(a) ${listStudents[index].name} é : ${avarage} 
   Não foi dessa vez ${listStudents[index].name}, tente novamente!`)
    }
}