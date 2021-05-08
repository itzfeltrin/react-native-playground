import React, {createRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
// components
import {Container} from '../../common';
import {SCREEN_WIDTH} from '../../constants';
import {Switches, Switch, SwitchText, Contents, Content, ContentText, ContentTitle} from './styles';

const AnimatableContent = Animatable.createAnimatableComponent(Content);

const AnimatableScreen = (): JSX.Element => {
    const [selected, setSelected] = useState<number>(0);

    const firstContentRef = createRef<typeof AnimatableContent>();

    const isFirstSelected = selected === 0;

    const slideInFromLeft = {
        from: {
            // transform: [{translateX: -SCREEN_WIDTH}],
            opacity: 0,
        },
        to: {
            // transform: [{translateX: 0}],
            opacity: 1,
        },
    };

    const slideInFromRight = {
        from: {
            // transform: [{translateX: SCREEN_WIDTH}],
            opacity: 0,
        },
        to: {
            // transform: [{translateX: 0}],
            opacity: 1,
        },
    };

    return (
        <Container>
            <Switches>
                <Switch style={{marginRight: 8}} onPress={() => setSelected(0)}>
                    <SwitchText>Cartão de crédito</SwitchText>
                </Switch>
                <Switch style={{marginLeft: 8}} onPress={() => setSelected(1)}>
                    <SwitchText>Boleto</SwitchText>
                </Switch>
            </Switches>
            <Contents>
                {isFirstSelected ? (
                    <AnimatableContent animation="rubberBand" iterationCount="infinite" duration={3000} >
                        <ContentTitle>Cartão de Crédito</ContentTitle>
                        <ContentText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, et.</ContentText>
                        <ContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus consectetur fuga
                            maiores voluptas praesentium debitis dicta aliquid quam, unde fugiat sint tempora, numquam
                            reprehenderit distinctio voluptate minus, voluptatibus laudantium!
                        </ContentText>
                        <ContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea dolorum ab laudantium
                            aspernatur libero sunt quis eveniet voluptas vero hic vitae quibusdam nesciunt, aliquam at
                            facilis quo impedit soluta sed? Ipsum provident dolorum earum, voluptatum nemo accusantium
                            excepturi harum.
                        </ContentText>
                        <ContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam magni,
                            dignissimos amet illum dolore consequuntur ab quo inventore aut atque! Odit laborum
                            accusamus alias veritatis assumenda reprehenderit, minima expedita! Alias itaque tempore
                            esse, modi enim reiciendis doloremque excepturi, nesciunt sit aut quod ab? Modi fugit
                            possimus asperiores placeat. Deleniti.
                        </ContentText>
                        <ContentText>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore explicabo hic
                            laudantium dolorum est quibusdam officia expedita, eveniet quis corrupti consequuntur, nulla
                            similique. Porro saepe soluta veritatis ad libero odio fugit iure dignissimos ullam enim
                            harum repellat reiciendis magni nesciunt quis sint, hic, vero incidunt suscipit ipsa
                            consectetur. Quidem quos corrupti optio, culpa eius error. Eius optio doloribus consectetur.
                            ipsum dolor sit amet consectetur, adipisicing elit. Modi, et.
                        </ContentText>
                    </AnimatableContent>
                ) : (
                    <AnimatableContent animation="fadeIn">
                        <ContentTitle>Boleto</ContentTitle>
                        <ContentText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, et.</ContentText>
                        <ContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus consectetur fuga
                            maiores voluptas praesentium debitis dicta aliquid quam, unde fugiat sint tempora, numquam
                            reprehenderit distinctio voluptate minus, voluptatibus laudantium!
                        </ContentText>
                        <ContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea dolorum ab laudantium
                            aspernatur libero sunt quis eveniet voluptas vero hic vitae quibusdam nesciunt, aliquam at
                            facilis quo impedit soluta sed? Ipsum provident dolorum earum, voluptatum nemo accusantium
                            excepturi harum.
                        </ContentText>
                        <ContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam magni,
                            dignissimos amet illum dolore consequuntur ab quo inventore aut atque! Odit laborum
                            accusamus alias veritatis assumenda reprehenderit, minima expedita! Alias itaque tempore
                            esse, modi enim reiciendis doloremque excepturi, nesciunt sit aut quod ab? Modi fugit
                            possimus asperiores placeat. Deleniti.
                        </ContentText>
                        <ContentText>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore explicabo hic
                            laudantium dolorum est quibusdam officia expedita, eveniet quis corrupti consequuntur, nulla
                            similique. Porro saepe soluta veritatis ad libero odio fugit iure dignissimos ullam enim
                            harum repellat reiciendis magni nesciunt quis sint, hic, vero incidunt suscipit ipsa
                            consectetur. Quidem quos corrupti optio, culpa eius error. Eius optio doloribus consectetur.
                            ipsum dolor sit amet consectetur, adipisicing elit. Modi, et.
                        </ContentText>
                    </AnimatableContent>
                )}
            </Contents>
        </Container>
    );
};

export default AnimatableScreen;
