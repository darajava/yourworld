import React, { Component } from 'react';
import Story from '../../views/Story/Story';

class PlayStory extends Component {

    constructor() {
      super();

      this.stories = [
        {
          title: 'Some quiet drinks',
          story: 'Harry goes to the bar and runs into Pierre. They speak quietly for a few hours and Harry leaves. Later that evening, Pierre is arrested.',
          answer: `They are in a speakeasy bar during prohibition. That's why they have to speak quietly. Pierre becomes very drunk because he has been drinking for so long.

On his way home he is loud and obnoxious. A police man spots him and can easily tell that he has been drinking so he arrests Pierre.`,
          hints: [
            'They were in America',
            'Pierre continued to drink after Harry left',
            'Pierre was arrested in 1928',
            'Alcohol was banned in America during this era',
            'You are retarded if you didn\'t get it by now',
          ],
          sound: new Audio('/crowd.mp3'),
          bg: 'bar.jpg',
        },
        {
          title: 'Time travel murder',
          story: `Detective Mahoney stood there bemused. He was now in the same room as the main suspect in Sarah Patterson's murder.
       Even though he could see that there were very evident struggle marks on her face, and all of the evidence he had pointed to her, Mahoney knew that Michelle was not the killer. `,
          answer: `Mahoney is in the morgue. Michelle was also murdered in an unrelated incident.
       Sarah's autopsy was performed in the same place as Michelle.
       They had used the same scissors on both victims for getting nail clippings. 
       Even though they had followed procedure and cleaned the scissors, some DNA evidence remained and was transferred from Michelle to Sarah.
       Michelle, who had been murdered over a month ago was the main suspect in Sarah's murder because the tests found traces of her DNA on Sarah because it was left on the scissors.`,
          hints: [
            'The girls did not know each other',
            'Michelle is dead',
            'Both girls were murdered',
            'Michelle died before Sarah was murdered',
            'Both murders were unsolved and needed forensic evidence ',
            'You are retarded if you didn\'t get it by now',
          ],
          sound: new Audio('/morgue.mp3'),
          bg: 'morgue.jpg',
        },
        {
          title: 'Bad lieutenant',
          story: `No one had called the police. Officer George Sklansky arrived at the house in an unmarked car. 
He entered the kitchen to see Melissa dead on the floor.
He opened the back door of the house and found Frank in the garden with blood on his hands and clothes.  
Frank had a large knife in his hand and was sweating a lot. 
George Skalinsky decided not to arrest Frank for murder.    `,
          answer: `George is a family friend of Frank and his wife Melissa.
 He arrives in an unmarked car because he is off duty and is going to the house to meet them.  
Frank was the only person in the house at the time Melissa had been killed but he was not the murderer.
She was killed by their dog Rover. Rover was a retired police dog who was given to them by Sklansky and who he knew had issues with attacking people.
Frank took the dog out the back and killed it because of what it had done to his wife...`,
          hints: [
            'Frank was the only person in the house when Melissa was killed',
            'Frank did not kill Mellisa',
            'Geroge Sklansky is a family friend',
            'Frank didn\'t call the police because he wanted to kill the dog first',
            'You are retarded if you didn\'t get it by now',
          ],
          sound: new Audio('/sirens.mp3'),
          bg: 'garden.jpg',
        },
        {
          title: 'Noisy stranger',
          story: `Jane was woken in the middle of the night by a loud angry knocking on the door. She was too afraid to answer it at first, but when she opened the door she apologised.`,
          answer: `Jane had come home from a long night out and ordered take out food at 2am. The restaurant was quite far away, but as it was the only one open, she decided to order the food. She was asleep when the delivery man arrived and he was waiting outside for 10 minutes.`,
          hints: [
            'Jane was drunk',
            'Jane was expecting this person',
            'Jane was hungry',
            'Jane was obese',
            'Jane was depressed',
            'Jane was unmarried',
            'You are retarded if you didn\'t get it by now',
          ],
          sound: new Audio('/snoring.mp3'),
          bg: 'door.jpg',
        },
      ];

    }

    componentDidMount() {

    }

    componentWillUnmount() {
      let index = parseInt(this.props.match.params.story) - 1;

      let story = this.stories[index];
      
      clearInterval(this.loudInterval);

      let interval = setInterval(() => {
        story.sound.volume -= 0.001;
        if (story.sound.volume - 0.001 < 0) {
          clearInterval(interval);
        } 
      }, 10);
    }

    render() {
      let index = parseInt(this.props.match.params.story) - 1;

      let story = this.stories[index];

      story.sound.play();
      story.sound.loop = true;
      story.sound.volume = 0;

      this.loudInterval = setInterval(() => {
        story.sound.volume += 0.0005;
        if (story.sound.volume > 0.15) {
          clearInterval(this.loudInterval);
        } 
      }, 10);


      return (
        <div>
          <Story story={story} />
        </div>
      );
    }

}

export default PlayStory;
