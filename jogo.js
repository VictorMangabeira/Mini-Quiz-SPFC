/* JOGO - Mini quiz do SPFC - VERSÃO CORRIGIDA
*/

// Mensagem de boas-vindas
alert("Bem-vindo(a) ao Mini quiz do SPFC");

let jogar = prompt("Deseja jogar? (Digite Sim ou Não)");

// Verificamos se o jogador quer jogar. 
// Usamos .toUpperCase() para garantir que "sim", "Sim", "SIM" etc., funcionem.
if (jogar.toUpperCase() === "SIM")
    {
    
    // Mostra as regras do jogo de uma forma mais legível
    alert("REGRAS DO JOGO\n" + 
          "----------------------------------\n" +
          "Você tem 3 tentativas por pergunta.\n" +
          "Cada acerto vale 5 pontos.\n" +
          "Com um erro, você perde 1 ponto.\n" +
          "Com dois erros, você perde 3 pontos.\n" +
          "Com três erros (zerando as tentativas), você perde 5 pontos.");

    alert("Vamos começar!");

    // Declaração das variáveis principais do jogo
    let pontos = 0;
    
    // --- INÍCIO DA PRIMEIRA PERGUNTA ---

    // Variáveis que controlam o estado de cada pergunta
    let tentativasPrimeiraPergunta = 3;
    let acertouPrimeiraPergunta = false;

    // Este é o loop principal para a primeira pergunta.
    // Ele continuará rodando ENQUANTO o jogador tiver tentativas E AINDA NÃO tiver acertado.
    while (tentativasPrimeiraPergunta > 0 && acertouPrimeiraPergunta === false)
        {

        let primeiraPergunta = prompt("\nPRIMEIRA PERGUNTA:" + 
                                      "\nQual jogador do São Paulo foi o artilheiro isolado (ou co-artilheiro) do Campeonato Brasileiro Série A no ano em que o clube conquistou seu primeiro título nacional (1977)?" + 
                                      "\n(A) Careca" + 
                                      "\n(B) Serginho Chulapa" + 
                                      "\n(C) Dario (Dadá Maravilha)" + 
                                      "\n(D) Pedro Rocha");

        // Checa a resposta do usuário (convertida para maiúscula para evitar erros)
        switch (primeiraPergunta.toUpperCase())
        {
            
            case "C":
                // Se a resposta for a correta
                pontos = pontos + 5;
                acertouPrimeiraPergunta = true; // Muda a variável para sair do loop while
                alert("Resposta correta!!\nDario, o Dadá Maravilha, foi o co-artilheiro do Brasileirão de 1977 pelo São Paulo, empatado com Reinaldo do Atlético-MG.");
                alert("Parabéns, você fez " + pontos + " pontos.");
                break;

            case "A":
            case "B":
            case "D":
                // Se a resposta for uma das incorretas
                tentativasPrimeiraPergunta = tentativasPrimeiraPergunta - 1; // Diminui uma tentativa

                // Aplica a penalidade de pontos baseado em qual erro foi (primeiro, segundo ou terceiro)
                if (tentativasPrimeiraPergunta === 2)
                { // Este foi o primeiro erro
                    pontos = pontos - 1;
                    alert("Resposta incorreta! Você perdeu 1 ponto.");
                }
                else if (tentativasPrimeiraPergunta === 1)
                { // Este foi o segundo erro
                    pontos = pontos - 3;
                    alert("Resposta incorreta! Você perdeu 3 pontos.");
                } 
                else if (tentativasPrimeiraPergunta === 0)
                { // Este foi o terceiro erro
                    pontos = pontos - 5;
                    alert("Resposta incorreta! Você perdeu 5 pontos.");
                }

                // Avisa o usuário sobre as tentativas restantes
                if (tentativasPrimeiraPergunta > 0)
                {
                    alert("Você ainda tem " + tentativasPrimeiraPergunta + " tentativa(s).");
                } 
                else
                {
                    alert("Suas tentativas para esta pergunta acabaram!");
                }
                break;

            default:
                // Se o usuário digitar algo que não seja A, B, C ou D
                alert("Opção inválida! Por favor, responda com A, B, C ou D. Nenhuma tentativa foi gasta.");
                break;
        }
    }

    // Após sair do loop, se o jogador não acertou, significa que as tentativas acabaram.
    // Então, informamos a resposta correta.
    if (acertouPrimeiraPergunta === false)
    {
        alert("A resposta correta era a (C) Dario (Dadá Maravilha)." + "\nDario, o Dadá Maravilha, foi o co-artilheiro do Brasileirão de 1977 pelo São Paulo, empatado com Reinaldo do Atlético-MG.");
    }

    // --- FIM DA PRIMEIRA PERGUNTA ---

    alert("Vamos para a próxima pergunta!");

    
    // --- INÍCIO DA SEGUNDA PERGUNTA ---

    // Variáveis que controlam o estado de cada pergunta
    let tentativasSegundaPergunta = 3;
    let acertouSegundaPergunta = false;

    // Este é o loop principal para a primeira pergunta.
    // Ele continuará rodando ENQUANTO o jogador tiver tentativas E AINDA NÃO tiver acertado.
    while (tentativasSegundaPergunta > 0 && acertouSegundaPergunta === false)
    {

        let segundaPergunta = prompt("\nSEGUNDA PERGUNTA:" + 
                                      "\nQual clube da capital paulista cedeu seu patrimônio e foi incorporado em 1935, sendo crucial para que o São Paulo Futebol Clube fosse reestruturado e se estabelecesse definitivamente em sua história?" + 
                                      "\n(A) Sport Club Corinthians Paulista" + 
                                      "\n(B) Associação Atlética das Palmeiras" + 
                                      "\n(C) Clube Atlético Paulistano" + 
                                      "\n(D) São Paulo Railway Athletic Club");

        // Checa a resposta do usuário (convertida para maiúscula para evitar erros)
        switch (segundaPergunta.toUpperCase())
        {
            
            case "B":
                // Se a resposta for a correta
                pontos = pontos + 5;
                acertouSegundaPergunta = true; // Muda a variável para sair do loop while
                alert("Resposta correta!!\nA Associação Atlética das Palmeiras foi incorporada pelo clube em 1935, cedendo seu patrimônio (incluindo o estádio do Canindé) e sendo vital para a reorganização do São Paulo.");
                alert("Parabéns, você fez " + pontos + " pontos.");
                break;

            case "A":
            case "C":
            case "D":
                // Se a resposta for uma das incorretas
                tentativasSegundaPergunta = tentativasSegundaPergunta - 1; // Diminui uma tentativa

                // Aplica a penalidade de pontos baseado em qual erro foi (primeiro, segundo ou terceiro)
                if (tentativasSegundaPergunta === 2)
                { // Este foi o primeiro erro
                    pontos = pontos - 1;
                    alert("Resposta incorreta! Você perdeu 1 ponto.");
                } 
                else if (tentativasSegundaPergunta === 1)
                { // Este foi o segundo erro
                    pontos = pontos - 3;
                    alert("Resposta incorreta! Você perdeu 3 pontos.");
                } 
                else if (tentativasSegundaPergunta === 0)
                { // Este foi o terceiro erro
                    pontos = pontos - 5;
                    alert("Resposta incorreta! Você perdeu 5 pontos.");
                }

                // Avisa o usuário sobre as tentativas restantes
                if (tentativasSegundaPergunta > 0)
                {
                    alert("Você ainda tem " + tentativasSegundaPergunta + " tentativa(s).");
                } 
                else
                {
                    alert("Suas tentativas para esta pergunta acabaram!");
                }
                break;

            default:
                // Se o usuário digitar algo que não seja A, B, C ou D
                alert("Opção inválida! Por favor, responda com A, B, C ou D. Nenhuma tentativa foi gasta.");
                break;
        }
    }

    // Após sair do loop, se o jogador não acertou, significa que as tentativas acabaram.
    // Então, informamos a resposta correta.
    if (acertouSegundaPergunta === false) 
    {
        alert("A resposta correta era a (B) Associação Atlética das Palmeiras." + "\nA Associação Atlética das Palmeiras foi incorporada pelo clube em 1935, cedendo seu patrimônio (incluindo o estádio do Canindé) e sendo vital para a reorganização do São Paulo.");
    }

     // --- FIM DA SEGUNDA PERGUNTA ---

    alert("Vamos para a próxima pergunta!");

    // --- INÍCIO DA TERCEIRA PERGUNTA ---

    // Variáveis que controlam o estado de cada pergunta
    let tentativasTerceiraPergunta = 3;
    let acertouTerceiraPergunta = false;

    // Este é o loop principal para a primeira pergunta.
    // Ele continuará rodando ENQUANTO o jogador tiver tentativas E AINDA NÃO tiver acertado.
    while (tentativasTerceiraPergunta > 0 && acertouTerceiraPergunta === false)
    {

        let terceiraPergunta = prompt("\nTERCEIRA PERGUNTA:" + 
                                      "\nEm qual ano o São Paulo se tornou o primeiro (e até hoje único) clube brasileiro a conquistar o tri-campeonato mundial (Copa Intercontinental/Mundial de Clubes da FIFA), após vencer o Liverpool na final?" + 
                                      "\n(A) 2005" + 
                                      "\n(B) 1993" + 
                                      "\n(C) 2006" + 
                                      "\n(D) 1994" );

        // Checa a resposta do usuário (convertida para maiúscula para evitar erros)
        switch (terceiraPergunta.toUpperCase())
        {
            
            case "A":
                // Se a resposta for a correta
                pontos = pontos + 5;
                acertouTerceiraPergunta = true; // Muda a variável para sair do loop while
                alert("Resposta correta!!\nO tricampeonato mundial foi conquistado em 2005, no Japão, com uma vitória por 1 a 0 sobre o Liverpool na final do Mundial de Clubes da FIFA.");
                alert("Parabéns, você fez " + pontos + " pontos.");
                break;

            case "B":
            case "C":
            case "D":
                // Se a resposta for uma das incorretas
                tentativasTerceiraPergunta = tentativasTerceiraPergunta - 1; // Diminui uma tentativa

                // Aplica a penalidade de pontos baseado em qual erro foi (primeiro, segundo ou terceiro)
                if (tentativasTerceiraPergunta === 2)
                { // Este foi o primeiro erro
                    pontos = pontos - 1;
                    alert("Resposta incorreta! Você perdeu 1 ponto.");
                } 
                else if (tentativasTerceiraPergunta === 1)
                { // Este foi o segundo erro
                    pontos = pontos - 3;
                    alert("Resposta incorreta! Você perdeu 3 pontos.");
                } 
                else if (tentativasTerceiraPergunta === 0)
                { // Este foi o terceiro erro
                    pontos = pontos - 5;
                    alert("Resposta incorreta! Você perdeu 5 pontos.");
                }

                // Avisa o usuário sobre as tentativas restantes
                if (tentativasTerceiraPergunta > 0)
                {
                    alert("Você ainda tem " + tentativasTerceiraPergunta + " tentativa(s).");
                } 
                else
                {
                    alert("Suas tentativas para esta pergunta acabaram!");
                }
                break;

            default:
                // Se o usuário digitar algo que não seja A, B, C ou D
                alert("Opção inválida! Por favor, responda com A, B, C ou D. Nenhuma tentativa foi gasta.");
                break;
        }
    }

    // Após sair do loop, se o jogador não acertou, significa que as tentativas acabaram.
    // Então, informamos a resposta correta.
    if (acertouTerceiraPergunta === false) 
    {
        alert("A resposta correta era a (A) 2005." + "\nO tricampeonato mundial foi conquistado em 2005, no Japão, com uma vitória por 1 a 0 sobre o Liverpool na final do Mundial de Clubes da FIFA.");
    }

     // --- FIM DA TERCEIRA PERGUNTA ---

    alert("Vamos para a próxima pergunta!");

    // --- INÍCIO DA QUARTA PERGUNTA ---

    // Variáveis que controlam o estado de cada pergunta
    let tentativasQuartaPergunta = 3;
    let acertouQuartaPergunta = false;
    // Este é o loop principal para a primeira pergunta.
    // Ele continuará rodando ENQUANTO o jogador tiver tentativas E AINDA NÃO tiver acertado.
    while (tentativasQuartaPergunta > 0 && acertouQuartaPergunta === false) {

        let quartaPergunta = prompt("\nQUARTA PERGUNTA:" + 
                                      "\nDesconsiderando os gols de Rogério Ceni, qual jogador detém o recorde de maior artilheiro em campo da história do São Paulo Futebol Clube, com 242 gols marcados?" + 
                                      "\n(A) Terto" + 
                                      "\n(B) Raí" + 
                                      "\n(C) Müller" + 
                                      "\n(D) Serginho Chulapa" );

        // Checa a resposta do usuário (convertida para maiúscula para evitar erros)
        switch (quartaPergunta.toUpperCase())
        {
            
            case "D":
                // Se a resposta for a correta
                pontos = pontos + 5;
                acertouQuartaPergunta = true; // Muda a variável para sair do loop while
                alert("Resposta correta!!\nSerginho Chulapa detém o recorde de maior artilheiro da história do clube entre os jogadores de linha, com 242 gols.");
                alert("Parabéns, você fez " + pontos + " pontos.");
                break;

            case "B":
            case "C":
            case "A":
                // Se a resposta for uma das incorretas
                tentativasQuartaPergunta = tentativasQuartaPergunta - 1; // Diminui uma tentativa

                // Aplica a penalidade de pontos baseado em qual erro foi (primeiro, segundo ou terceiro)
                if (tentativasQuartaPergunta === 2)
                { // Este foi o primeiro erro
                    pontos = pontos - 1;
                    alert("Resposta incorreta! Você perdeu 1 ponto.");
                } 
                else if (tentativasQuartaPergunta === 1)
                { // Este foi o segundo erro
                    pontos = pontos - 3;
                    alert("Resposta incorreta! Você perdeu 3 pontos.");
                } 
                else if (tentativasQuartaPergunta === 0)
                { // Este foi o terceiro erro
                    pontos = pontos - 5;
                    alert("Resposta incorreta! Você perdeu 5 pontos.");
                }

                // Avisa o usuário sobre as tentativas restantes
                if (tentativasQuartaPergunta > 0)
                {
                    alert("Você ainda tem " + tentativasQuartaPergunta + " tentativa(s).");
                } 
                else
                {
                    alert("Suas tentativas para esta pergunta acabaram!");
                }
                break;

            default:
                // Se o usuário digitar algo que não seja A, B, C ou D
                alert("Opção inválida! Por favor, responda com A, B, C ou D. Nenhuma tentativa foi gasta.");
                break;
        }
    }

    // Após sair do loop, se o jogador não acertou, significa que as tentativas acabaram.
    // Então, informamos a resposta correta.
    if (acertouQuartaPergunta === false) 
    {
        alert("A resposta correta era a (D) Serginho Chulapa." + "\nSerginho Chulapa detém o recorde de maior artilheiro da história do clube entre os jogadores de linha, com 242 gols.");
    }

     // --- FIM DA QUARTA PERGUNTA ---

    alert("O Mini Quiz terminou! Sua pontuação final foi: " + pontos + " pontos.");


}
else 
{
    // Se o jogador não quis jogar
    alert("Que pena! Fica para a próxima. Obrigado!");
}