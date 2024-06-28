import axios from 'axios';
import { useState } from 'react'

import styled from "styled-components";
import { iData } from '../../interface/Interface';


const Hero = () => {

    const [loading, setLoading] = useState(false)

    const [allData, setAllData] = useState<iData[]>([])

    async function getData () {
        try {
            const responseData = await axios.get('https://fakestoreapi.com/products');

            console.log(responseData.data)

            setAllData(responseData.data)

            setLoading(false)
        } catch (error) {
            console.error('data not gotten')
        }
    }

    getData();

  return (
    <Herro>
        <HeroContainer>
            { loading ?
                <>Loading...</> 
            :
            <>
                { allData.map((all : iData) => (
                <Card key={all.id}>
                    <CardImg src={all.image} />

                    <TitleCon>
                        <Title>{all.title.slice(0, 20)}</Title>

                        <Cate><span style={{fontWeight:"600"}}>Category:</span> {all.category.toUpperCase()}</Cate>

                        <Price><span style={{fontWeight:"600"}}>Price:</span> ${all.price}</Price>

                        {/* <Des>{all.description}</Des> */}

                        <Rating>
                            <Rate><span style={{fontWeight:"600"}}>Rating:</span> {all.rating.rate}</Rate>
                            <Count><span style={{fontWeight:"600"}}>Count:</span> {all.rating.count}</Count>
                        </Rating>
                    </TitleCon>
                </Card>
                ))}
            </>
            }

        </HeroContainer>
    </Herro>
  )
}

export default Hero

const Herro = styled.div`
width: 100%;
min-height: 85vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: gray; */
`;

const HeroContainer = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
gap: 15px;
padding-bottom: 30px;
justify-content: space-between;
padding-top:40px;
`;

const Card = styled.div`
width: 250px;
height: 350px;
box-shadow: 0 0 3px gray;
display: flex;
flex-direction: column;
gap: 10px;
background-color: #f7f0f0;
border-radius: 7px;
/* padding: 10px; */
`;

const CardImg = styled.img`
width: 100%;
height: 60%;
background-color: #353434;
`;

const TitleCon = styled.div`
padding: 15px;
font-size: 12px;
font-weight: 600;
`;

const Title = styled.div`
font-weight: 600;
font-size: 13px;
`;

const Cate = styled.div``;

const Price = styled.div``;

// const Des = styled.div``;

const Rating = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Rate = styled.div``;

const Count = styled.div``;
