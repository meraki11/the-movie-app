//source for example media: iMDb
import movieOne from './movieOne.jpg'
import movieTwo from './movieTwo.jpg'
import movieThree from './movieThree.jpg'
import movieFour from './movieFour.jpg'
import movieFive from './movieFive.jpg'
import movieSix from './movieSix.jpg'
import movieSeven from './movieSeven.jpg'
import movieEight from './movieEight.jpg'
import aveStars from './aveStars'

//array for pre-generated movie data, similar to pulling from an API database
//issue with images not displaying, tried HTML links as well as importing image files into source folder
const movieData = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's Stone",
        rating: "starPlaceholder: this should be average of all ratings per movie",
        synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        imageUrl: "movieOne.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 1: Harry Potter and the Sorcerer's Stone"
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        rating: "starPlaceholder",
        synopsis: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
        imageUrl: "movieTwo.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 2: Harry Potter and the Chamber of Secrets" 
    },
    {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        rating: "starPlaceholder",
        synopsis: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
        imageUrl: "movieThree.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 3: Harry Potter and the Prisoner of Azkaban" 
    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        rating: "starPlaceholder",
        synopsis: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
        imageUrl: "movieFour.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 4: Harry Potter and the Goblet of Fire" 
    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        rating: "starPlaceholder",
        synopsis: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
        imageUrl: "movieFive.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 5: Harry Potter and the Order of the Phoenix" 
    },
    {
        id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        rating: "starPlaceholder",
        synopsis: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
        imageUrl: "movieSix.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 6: Harry Potter and the Half-Blood Prince" 
    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows:Part 1",
        rating: "starPlaceholder",
        synopsis: "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
        imageUrl: "movieSeven.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 7: Harry Potter and the Deathly Hallows:Part 1" 
    },
    {
        id: 8,
        title: "Harry Potter and the Deathly Hallows:Part 2",
        rating: "starPlaceholder",
        synopsis: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        imageUrl: "movieEight.jpg",
        altDescribe: "Movie Poster for Harry Potter Movie 8: Harry Potter and the Deathly Hallows:Part 2" 
    },
];

export default movieData




