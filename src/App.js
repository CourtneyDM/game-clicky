import React from 'react';
import Domino from './components/Domino/Domino';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import dominoes from './dominoes.json';

class App extends React.Component {

    state = {
        dominoes
    };

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