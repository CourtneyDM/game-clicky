import React from 'react';
import Domino from './components/Domino';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import dominoes from './dominoes.json';

class App extends React.Component {
     state = {
          dominoes,
          message: 'Click on a domino to begin!',
          score: 0,
          topScore: 0
     };

     // Whent the user guesses incorrectly, end game
     endGame = () => {
          if (this.state.score > this.state.topScore) {
               this.setState({
                    topScore: this.state.score
               }, () => console.log(this.state.topScore));
          }

          this.state.dominoes.forEach(domino => {
               domino.count = 0;
          });

          alert("Game over. Want to play again?");
          this.setState({ score: 0 });
          return true;
     }

     // 
     clicked = id => {
          this.state.dominoes.find((key, index) => {
               if (key.id === id) {
                    if (dominoes[index].count === 0) {
                         dominoes[index].count = dominoes[index].count + 1;
                         this.setState({ score: this.state.score + 1 }, function () {
                              console.log(this.state.score);
                         });
                         this.state.dominoes.sort(() => Math.random() - 0.5)
                         return true;
                    } else {
                         this.endGame();
                    }
               }
          });
     }

     // Map over this.state.dominoes and render a Domino component for each domino object
     render() {
          return (
               <Wrapper>
                    <Title
                         message={ this.state.message }
                         score={ this.state.score }
                         topScore={ this.state.topScore }>Watch The Dominoes
                    </Title>
                    { this.state.dominoes.map(domino => (
                         <Domino
                              clicked={ this.clicked }
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