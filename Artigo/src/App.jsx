
import './styles/App.css'
import image from './assets/download.jpeg'
import image2 from './assets/neymar.jpg'

import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <section>
        <Content>
          <h1 className='title'>Neymar de Volta ao Santos: O Retorno do Ídolo ao Clube que o Revelou</h1>
          <img src={image} alt="" />
        </Content>
        <Content>
          <h2 className="section-title">Confirmação Oficial</h2>

          <p className='Text'>O Santos anunciou oficialmente a contratação de Neymar, encerrando anos de especulações e alimentando o sonho da torcida santista. A revelação foi feita por meio de um grande evento na Vila Belmiro, onde torcedores, dirigentes e imprensa se reuniram para presenciar o momento histórico. Além disso, as redes sociais do clube foram inundadas com vídeos e homenagens marcando a volta do ídolo. Durante o anúncio, Neymar se mostrou extremamente emocionado e afirmou que retornar ao Santos é um momento especial em sua carreira, um verdadeiro reencontro com suas raízes e com a torcida que sempre o apoiou.</p>
        </Content>

        <Content>
          <h2 className="section-title">Contexto Histórico</h2>
          <img src={image2} alt="" />
          <p className="Text">A trajetória de Neymar no Santos é lendária. Foi no clube que ele despontou para o mundo, conquistando títulos importantes, como a Copa Libertadores de 2011, e encantando com seu futebol irreverente e habilidoso. Seu retorno ao clube carrega um forte significado emocional, tanto para ele quanto para a torcida santista, que sempre sonhou em vê-lo novamente vestindo a camisa alvinegra. Desde que deixou o clube para atuar no futebol europeu, Neymar nunca escondeu o desejo de um dia voltar, e agora esse sonho finalmente se tornou realidade.</p>
        </Content>

        <Content>
          <h2 className="section-title">Detalhes da Negociação</h2>
          <p className="Text">A negociação para trazer Neymar de volta envolveu diversos fatores. O contrato firmado tem duração de seis meses, com um salário fixo de R$ 1 milhão por mês, além de 90% dos seus direitos de imagem. Com isso, seus ganhos mensais podem chegar a R$ 6 milhões, tornando-se o maior salário do futebol brasileiro na atualidade. O acordo prevê que Neymar atue por apenas 24 jogos no período contratado. Para viabilizar financeiramente a negociação, o Santos contou com apoio de patrocinadores e parceiros comerciais, garantindo que o clube pudesse arcar com os custos da operação sem comprometer suas finanças.</p>
        </Content>

        <Content>
          <h2 className="section-title">Impacto Imediato No Santos</h2>
          <p className="Text">A chegada de Neymar ao Santos representa um impacto imediato para o clube, tanto dentro quanto fora de campo. Financeiramente, o aumento na receita com vendas de camisas, ingressos e patrocínios já é perceptível, com a torcida ansiosa para adquirir qualquer produto relacionado ao ídolo. No aspecto esportivo, a presença do jogador pode transformar o desempenho da equipe em competições nacionais e internacionais, elevando o nível técnico do elenco e motivando seus companheiros. O ambiente no clube já demonstra uma nova energia, com os jogadores sentindo o peso positivo da presença de um dos maiores nomes da história recente do futebol brasileiro</p>
        </Content>

        <Content>
          <h2 className="section-title">Reações da Torcida e do Futebol Brasileiro</h2>
          <p className="Text">A repercussão da notícia foi estrondosa entre os torcedores do Santos, que comemoraram nas redes sociais e fizeram filas para garantir ingressos para a reestreia do craque. O futebol brasileiro como um todo também se agitou com a novidade, com torcedores de outros clubes demonstrando respeito e admiração pela decisão de Neymar. Ex-jogadores e personalidades do esporte se manifestaram, enaltecendo a importância desse retorno não apenas para o Santos, mas para todo o cenário esportivo do país. Com Neymar novamente atuando no Brasil, o campeonato nacional ganha ainda mais visibilidade e atrai os olhares do mundo para o futebol brasileiro.</p>
        </Content>
        <Content>
          <h2 className="section-title">Expectativa Para o Futuro</h2>
          <p className="Text">O futuro de Neymar no Santos promete ser repleto de expectativas. A torcida espera que ele assuma um papel de liderança dentro de campo, guiando o time para novas conquistas e ajudando a revelar novos talentos, assim como ele foi revelado no passado. Existe uma grande curiosidade sobre quanto tempo ele permanecerá no clube e se essa volta representa um passo final antes da aposentadoria ou apenas uma nova fase em sua carreira. Independentemente do que venha a acontecer, a presença do craque reacende a esperança de dias gloriosos para o Santos.</p>
        </Content>

        <Content>
          <h2 className="section-title">Curiosidade e Simbolismo</h2>
          <p className="Text">O retorno de Neymar ao clube também traz um forte simbolismo. Ele volta para o mesmo estádio onde construiu sua idolatria, a Vila Belmiro, e vestirá novamente a camisa que o projetou para o mundo. Ainda não foi confirmado se ele usará o número 10, mas qualquer que seja sua escolha, o significado será imenso para os torcedores. Comparações com outros ídolos que retornaram aos seus clubes de origem, como Ronaldinho Gaúcho no Grêmio e Ronaldo no Corinthians, são inevitáveis, mostrando que grandes craques sempre buscam voltar para onde tudo começou. Assim, Neymar escreve mais um capítulo emocionante em sua história com o Santos, um reencontro que promete marcar época no futebol brasileiro.</p>
        </Content>
      </section>
      <Footer />
    </>
  )
}

export default App
