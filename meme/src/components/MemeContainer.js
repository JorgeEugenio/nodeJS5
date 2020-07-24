import React, { useState, useEffect } from 'react'
import Meme from './Meme'
import Title from './Title'
import Search from './Search'
import { getStatistics } from '../services/Covid'

class MemeContainer extends React.Component {    
    constructor(props){
        super(props)
        this.state = {
            covid:[],
            isFetch: true
        }
    }
    async componentDidMount(){
        const result = (await getStatistics()).data.data[0].region.cities
        this.setState({covid: result, isFetch:false})
        //console.log(result);
    }
    

    render(){
        const { isFetch, covid} = this.state
        //console.log(covid);
        if(isFetch){
            return 'Loading...'
        }
    return (
        <React.Fragment>
            <Title>Covid App</Title>
            <Search />
            <section className="memes-containers">
            {
                covid.map((covid)=><Meme 
                name={covid.name}
                lat={covid.lat}
                long={covid.long}
                key={covid.name}/>)
            }
        </section>
        </React.Fragment>
    )
    } 
}

export default MemeContainer