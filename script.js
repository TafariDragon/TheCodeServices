 function mudarTema()
 {
    const select = document.getElementById('idSelectMode');
    const corpo = document.body;

    if (select.selectedIndex === 0) {
            corpo.style.backgroundColor = 'white';
    } else if (select.selectedIndex === 1) {
        // Restaure os estilos padrão se a opção for "Light Mode" ou outra coisa
        corpo.classList.add('darkMode')
    } 
 }
 
 function mudarIdioma()
 {
    let select = document.getElementById('idSelectLanguage')
    let titulo = document.getElementById('idH1')
    let texto = document.getElementById('idBiografiaTexto')
    let texto2 = document.getElementById('idBiografiaTexto2')
    let tecnologia = document.getElementById('idTexto')
    
    if(select.selectedIndex===0)
    {
         tecnologia.innerHTML= "Tecnology"
         titulo.innerText="PROGRAMMER PROFILE"
         texto.innerHTML="<strong>Tafari Francisco Vilanculos </strong> , University student"+
         "São Tómas of Mozambique Licensing the Development Course of Software."
         texto2.innerText=" He is 19 years old and is always willing to learn,new things pertaining to Technology, Mathematics, Philosophy and much more."
    }else if(select.selectedIndex==1)
    {
        tecnologia.innerHTML= "Tecnologia"
        titulo.innerHTML="PERFIL DO PROGRAMADOR"
        texto.innerHTML= "<strong>Tafari Francisco Vilanculos</strong> Estudante da Universidade"+
         " São Tómas de Moçambique Licenciando o Curso de Desenvolvimento de Software."

         texto2.innerText="Têm 19 anos e está sempre disposto a aprender, coisas novas referentes a Tecnologia, Matemática, Filosofia e muito mais."
    }


 }

 