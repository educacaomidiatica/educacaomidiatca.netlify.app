function submit(){

    let date = document.getElementById('date').value
    let main = document.getElementById('main')

    main.innerHTML = ""

    if (date.length == 0) { alert('Data invalida!') }

    date = date.split("-")
    main.innerHTML += date
    const ano = date[0]
    const mes = date[1]
    const dia = date[2]

    if        (mes == 12 && dia >= 22 && dia < 31 || mes == 01 && dia <= 20){
        main.innerHTML += " | Capricórnio: "
        main.innerHTML += "Avalie expectativas amorosas, desejos e ambições. A partir de hoje, Vênus elevará os sentimentos e trará generosidade de espírito. Amplie contatos e comunicações. Amizades inspirarão novas atividades e abrirão portas no trabalho. A rotina ficará mais disciplinada. Atividade física regular beneficiará a saúde e estabilizará o humor, que anda oscilante ultimamente. Planeje mudanças."
    } else if (mes == 01 && dia >= 21 && dia < 31 || mes == 02 && dia <= 19){
        main.innerHTML += " | Aquário: "
        main.innerHTML += "Uma oportunidade imperdível produzirá mudanças positivas em sua vida. Determine metas mais altas na carreira e assuma seu poder. O céu anuncia crescimento profissional e financeiro. Inicie amizades e crie novos vínculos. A vida social ficará mais animada, a partir de hoje. Vênus trará sintonia com a equipe, prazer nas atividades de grupo e envolvimento com a coletividade. Sucesso pela frente! "
    } else if (mes == 02 && dia >= 20 && dia < 28 || mes == 03 && dia <= 20){
        main.innerHTML += " | Peixes: "
        main.innerHTML += "Otimismo e cenário positivo para o futuro marcarão a entrada de Vênus na sua área da carreira, que aquecerá os relacionamentos profissionais e atrairá oportunidades de sucesso. Conte com mais prestígio e exposição. Você poderá retomar um projeto que andou parado e aumentar sua segurança. Uma viagem expandirá sua visão e proporcionará momentos encantadores no amor."
    } else if (mes == 03 && dia >= 21 && dia < 31 || mes == 04 && dia <= 20){
        main.innerHTML += " | Áries: "
        main.innerHTML += "A partir de hoje, Vênus se harmoniza com seu signo e amplia relações. Conte também com mais confiança no amor e conexões com estrangeiros ou pessoas de outras regiões. Encontros e interações de hoje criarão um panorama positivo para viagens e enriquecimento cultural. Algo maior se desenhará para o futuro. Assuma seu poder e promova as mudanças desejadas na carreira. "
    } else if (mes == 04 && dia >= 21 && dia < 30 || mes == 05 && dia <= 20){
        main.innerHTML += " | Touro: "
        main.innerHTML += "Descubra segredos e mistérios, revele desejos e intensifique o amor. A partir de hoje, Vênus aprofundará vínculos e esquentará o clima da vida íntima com cumplicidade. Aposte em mais privacidade e curta as delícias da intimidade. Apoio à família entrará no menu do dia, que trará notícias de alguém de longe, saudade e lindas lembranças. Amplie amizades; a vida social ficará mais gostosa. "
    } else if (mes == 05 && dia >= 21 && dia < 31 || mes == 06 && dia <= 20){
        main.innerHTML += " | Gêmeos: "
        main.innerHTML += "A entrada de Vênus na sua área afetiva trará harmonia e leveza nos relacionamentos próximos e no amor. Novas relações chegarão naturalmente. Aproveite a abertura para esclarecer dúvidas e expressar os sentimentos com mais emoção. Palavras carinhosas aproximarão quem anda distante. As comunicações estarão abertas. Uma decisão tomada anteriormente poderá ser revogada."
    } else if (mes == 06 && dia >= 21 && dia < 30 || mes == 07 && dia <= 22){
        main.innerHTML += " | Câncer: "
        main.innerHTML += "Insatisfações na área financeira inspirarão novos projetos e mais exposição. A partir de hoje, os relacionamentos de trabalho estarão aquecidos. Este também será um bom momento para tratamentos estéticos e corporais. A saúde ficará mais equilibrada; incorpore novos conceitos e invista no seu bem-estar. Uma viagem trará prazeres diferentes e chances para o amor, se estiver solteiro."
    } else if (mes == 07 && dia >= 23 && dia < 31 || mes == 08 && dia <= 22){
        main.innerHTML += " | Leão: "
        main.innerHTML += "Prazeres e entusiasmo estarão de volta. Vênus, que se harmonizará com seu signo a partir de hoje, intensificará o amor, aproximará os filhos e destacará seus talentos criativos. Brilhe, espalhe alegria por onde passar e siga seu coração. Planos de mudança ganharão força. Troque confidências com a família, elimine antigas pendências e encerre o passado. O ambiente social poderá mudar nesta fase. "
    } else if (mes == 08 && dia >= 23 && dia < 30 || mes == 09 && dia <= 22){
        main.innerHTML += " | Virgem: "
        main.innerHTML += "Conversas de hoje despertarão fantasias românticas. Se estiver em busca de fortes emoções, o dia trará encanto e magia num encontro especial. Caminhos docoração estarão abertos. Você poderá se apaixonar para valer, se estiver disponível. Deslocamentos e tarefas de trabalho serão cansativos. Intercale as atividades com momentos de relaxamento e silêncio. Casamento em alta!"
    } else if (mes == 09 && dia >= 23 && dia < 31 || mes == 10 && dia <= 22){
        main.innerHTML += " | Libra: "
        main.innerHTML += "Projetos pessoais ficarão mais definidos. Firme acordos financeiros, negocie o salário e equilibre as finanças. Planos de viagem poderão se concretizar. O dia trará iniciativas e convites que movimentarão a vida numa direção mais atraente. Ganhe prestígio e novas amizades. Conversas estimulantes e palavras motivadoras fortalecerão novas relações."
    } else if (mes == 10 && dia >= 23 && dia < 30 || mes == 11 && dia <= 22){
        main.innerHTML += " | Escorpião: "
        main.innerHTML += "O futuro estará em foco. Visualize onde quer chegar e crie novos planos. A partir de hoje, Vênus atrairá oportunidades financeiras. Conte com mais estabilidade e bons negócios. Compras de itens de beleza e objetos de desejo serão irresistíveis. Use o bom senso e tente não sobrecarregar o orçamento, nem fazer dívidas. Assuntos de família pedirão mudança de atitude e generosidade."
    } else if (mes == 11 && dia >= 22 && dia < 31 || mes == 12 && dia <= 21){
        main.innerHTML += " | Sagitário: "
        main.innerHTML += "A boa notícia de hoje é a entrada de Vênus em seu signo, situação que destacará seu carisma, beleza e simpatia. O bom humor estará de volta! Novas relações chegarão naturalmente, atraídas por seus encantos. Valerá renovar os looks, investir na imagem e apostar em novos começos. Expanda a consciência, se ligue na espiritualidade e finalize um longo ciclo. Em breve, você iniciará outro."
    } else{
        main.innerHTML += "| Error"
    }
    
    event.preventDefault();
}
