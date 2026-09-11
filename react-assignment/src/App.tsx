import Nav from './components/Nav';
import Banner from './components/Banner';
import Content from './components/Content';
import type { ContentType } from './datatype/dataType';
import { Suspense } from 'react';




const techFetch = async ():Promise<ContentType[]> =>{
    const res = await fetch('/data.json')
    const data = await res.json();
    return data;
  } 

  const data = techFetch();
  
function App() {
    
  return (
    <>
      <Nav />
      <Banner />
      

      <Suspense fallback={<h2>Loading...</h2>}>
            <Content data={data}/>
      </Suspense>
    </>
  );
}

export default App;
