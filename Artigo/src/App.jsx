
import './styles/App.css'
import image from './assets/images.jpeg'
import Content from './components/Content'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header />
      <h1 className='title'>Neymar de Volta ao Santos: O Retorno do Ídolo ao Clube que o Revelou</h1>
      <img src={image} alt="" />
      <Content>
        <section>
          <h2 className="section-title">Confirmação Oficial</h2>

          <p className='Text'>oi</p>

        </section>
      </Content>
    </>
  )
}

export default App
