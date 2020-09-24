import React from 'react'
import {Link} from 'react-router-dom'
import { 
    InfoSec,
    InfoRow,
    InfoColumn, 
    TextWrapper,
    Heading,
    TopLine,
    Subtitle,
    ImgWrapper,
    Img 
} from './InfoSection.elements';
import { Container, Button } from '../../globalStyles'

const InfoSection = ({ 
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description,
    headLine, 
    lightText, 
    topLine,
    start,
    img,
    alt 
}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to="/sign-up">
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
              </Container>
          </InfoSec>  
        </>
    )
}

export default InfoSection
