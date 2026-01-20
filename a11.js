//Movie Streaming Platform

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

/* Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

const sm=movies.filter(ele=>ele.genre==="Sci-Fi")
console.log("Sci-Fi Movies:", sm);

const m=movies.map(ele=>`${ele.title} (${ele.rating})`);
console.log("Movies with Ratings:", m);

const avgmovie=movies.reduce((acc,ele)=>acc+ele.rating,0)/movies.length;
console.log("Average Movie Rating:", avgmovie); 

const j=movies.find(ele=>ele.title==="Joker")
console.log("Movie Joker:", j);

const a=movies.findIndex(ele=>ele.title==="Avengers")
console.log("Index of Avengers:", a);
