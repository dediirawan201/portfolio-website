import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import { webPortfolio,mobilePortfolio,designPortfolio } from '../../data';
import { useHistory } from 'react-router-dom';

const Portfolio = () => {
    const [selected,setSelected] = useState('web')
    const [data,setData] = useState([])
    const history = useHistory();

    const list = [
        {
           id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'design',
            title: 'Design'
        },
    ];

    useEffect(() => {
        switch(selected){
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break; 
            case "design":
                setData(designPortfolio);
                break;
                default:
                    setData(webPortfolio)
        }
    },[selected])

    // const Halaman = () => {

    // }
    return (
        <div className="portfolio" id="portfolio"> 
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={ selected === item.id} setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item" onClick={() => history.push(`/web/${d.id}`)}>
                    <img src={d.img}
                    alt="" />
                    <h3>{d.title}</h3> 
                </div>
                ))}
                
                
                </div>
            </div>
        
    ) 
}

export default Portfolio
