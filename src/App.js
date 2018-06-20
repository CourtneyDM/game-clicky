import React from 'react';
import Domino from './components/Domino/Domino';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import dominoes from './dominoes.json';

class App extends React.Component {
    // Set state of dominoes
    state = {
        dominoes
    };

    // TODO: Create a function that will randomly shuffle dominoes on the screen using Math.Random

    // shuffleDominoes = id => {
    //     const dominoes = this.state.dominoes();
    // };

    render() {
        return (
            <Wrapper>
                <Title>Watch That Domino</Title>
                { this.state.dominoes.map(domino => (
                    <Domino
                        // shuffleDominoes={ this.shuffleDominoes }
                        id={ domino.id }
                        key={ domino.id }
                        name={ domino.name }
                        image={ domino.image }
                    />
                )) }
            </Wrapper>
        );
    }
}

export default App;