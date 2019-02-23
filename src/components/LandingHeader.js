import React from 'react';
import { Heading, Flex, Box } from 'rebass';
import styled from 'styled-components';
import MarioImage from './images/mario_arranz.png';
import SocialLinks from './SocialLinks';

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const LandingHeader = () => {
    return (
        <div>
            <Heading
                display= 'flex'
                flexDirection= 'column'
                justifyContent= 'center'
                alignItems= 'center'
                textAlign="center"
                fontSize= '30px'
            >
                <div>
                    <h1>Hi, I&apos;m Mario Arranz 👋</h1>
                    <Flex justifyContent="center" alignItems="center">
                        <Box>
                            <a href="#">
                                <Image src={MarioImage} alt="Mario Arranz" />
                            </a>
                        </Box>
                    </Flex>
                    <p
                        style={{
                            marginTop: '50px',
                        }}
                    >
                        Backend Developer
                    </p>
                    {/* <p
            style={{
              fontSize: '15px'
            }}
          >
            Mario Arranz IT Solutions
          </p> */}
                </div>
            </Heading>
            <div
                style={{
                    marginBottom: '20px',
                    marginTop: '30px',
                    paddingBottom: '30px'
                }}>
                <SocialLinks includeCV={true}/>
            </div>
        </div>
    )
}

export default LandingHeader
