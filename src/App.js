import Title from './components/Title';
import {Content, Content2} from'./components/Content'
function App() {
  return (
    <>
    <Title 작명="뉴스" 서브="뉴스타이틀"/>
    <Content/>
      {/* <p className='text-center bg-orange-300'>lorem5</p>
      <p className='text-center bg-orange-300'>lorem5</p> */}
      <Title 작명="인기순위"서브="인기순위 타이틀"/>
    </>
      
    
    
  );
}

export default App;
