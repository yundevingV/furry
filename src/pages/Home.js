import React , {useState} from 'react';

/* Header import */
import Header from '../components/Header/Header';

/* Top import */
import Top from '../components/Top/Top';

/* Nav import */
import Nav from '../components/Nav/Nav';

/* Item import */
import Item from '../components/Item/Item';

/* Footer import */
import Footer from '../components/Footer/Footer';

function Home(){

    const [pcategory , setPcategory] = useState('animal')

    const clickPcategory = (pcategory) => {
        setPcategory(pcategory)
    }    

    return(
    <>
        <Top />
        <Header />  
        <Nav pcategory={pcategory} clickPcategory={clickPcategory} />
        <Item pcategory={pcategory} />

        <Footer />
    </>
    )
}

export default Home;