// Practice: 

/*একটা অ্যারে বানা fruits নামে, যেখানে উপাদানগুলো Apple, Banana, Cherry, Date। এবার slice ব্যবহার করে Banana থেকে Cherry পর্যন্ত বের করে আলাদা অ্যারেতে রাখ।
 */
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const copyFruits = fruits.slice(1, 3);
console.log("some fruits copy from main one", copyFruits);

/*cars নামে একটা অ্যারে আছে, যার মধ্যে Tesla, BMW, Toyota, Ford আছে। slice দিয়ে শুধু Tesla আর BMW রাখ।
 */
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const removeCars = cars.splice(0, 2);
console.log("remove cars from main one", removeCars);

/*movieList নামে একটা অ্যারে, যেখানে Inception, Titanic, Joker, Avatar, Interstellar আছে। splice দিয়ে Joker আর Avatar বাদ দিয়ে তার জায়গায় Batman আর Superman যোগ কর।
 */
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
const addMovies = movieList.splice(2, 2, 'Batman', 'Superman');
console.log("remove couple of movies: ", addMovies);
console.log("remove couple of movies: ",movieList)

/*
players নামে একটা অ্যারে, যার উপাদান Messi, Ronaldo, Neymar, Mbappe। splice ব্যবহার করে Neymar বাদ দিয়ে Halland যোগ কর। */

const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const removeNeymar = players.splice(2, 1, 'Halland');
console.log("Remove neymar from players list: ", removeNeymar);
console.log("add halland in players list: ", players);