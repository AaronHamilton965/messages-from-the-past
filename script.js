const quotes = { // holds all data and information about the 5 philosophers
    musashi: {
        name: "Miyamoto Musashi",
        about: 'Miyamoto Musashi, born in 1584, is widely regarded as one of Japan\'s greatest swordsmen and strategists. He is renowned for his exceptional skill in the martial arts and his undefeated record in over 60 duels. Musashi\'s philosophical treatise, "The Book of Five Rings," continues to inspire martial artists and strategists worldwide, offering profound insights into strategy, tactics, and the way of the warrior. His legend and teachings have left an indelible mark on Japanese history and continue to resonate with people seeking personal mastery and enlightenment.',
        allQuotes: ["Do nothing which is of no use.", "Perception is strong and sight weak. In strategy, it is important to see distant things as if they were close and to take a distanced view of close things.", "The true science of martial arts means practicing them in such a way that they will be useful at any time, and to teach them in such a way that they will be useful in all things.", "One thousand days of training to develop, ten thousand days of training to polish.", "Respect Buddha and the gods without counting on their help.", "In battle, if you make your opponent flinch, you have already won.", "Perceive that which cannot be seen with the eye.", "To win any battle, you must fight as if you are already dead.", "The warrior's way is not about defeating others, but about defeating the weaknesses within oneself.", "The mind of the beginner is empty, free from habits of the expert, ready to accept, to doubt, and to grow.", "Do not regret what you have done.", "It is essential to be able to observe and comprehend the movements of an opponent in the blink of an eye.", "Timing and rhythm are crucial in any endeavor.", "Study strategy over the years and achieve the spirit of the warrior.", "The ultimate aim of martial arts is not having to use them.", "To know ten thousand things, know one well.", "Do not fear death, for it is only through death that one truly begins to live.", "Do not be concerned with winning; focus on doing what is necessary.", "The path of the sword and the path of life are the same.", "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself."],
    },
    tzu: {
        name: "Sun Tzu",
        about: "Sun Tzu, an ancient Chinese military strategist, is celebrated as the author of \"The Art of War,\" a seminal work that remains relevant today. Born around the 6th century BCE, Sun Tzu's profound insights into warfare, strategy, and leadership have had a lasting impact on military tactics and beyond. His emphasis on understanding one's enemy, adapting to changing circumstances, and leveraging psychological factors has made \"The Art of War\" a timeless guide for success in various domains, from business to politics. Sun Tzu's wisdom continues to inspire and influence individuals seeking strategic mastery and a deeper understanding of the dynamics of conflict.",
        allQuotes: ["Appear weak when you are strong and strong when you are weak.", "The supreme art of war is to subdue the enemy without fighting.", "Opportunities multiply as they are seized.", "Know yourself and you will win all battles.", "If you know the enemy and know yourself, you need not fear the result of a hundred battles.", "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.", "In the midst of chaos, there is also opportunity.", "The greatest victory is that which requires no battle.", "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.", "Supreme excellence consists of breaking the enemy's resistance without fighting.", "To know your Enemy, you must become your Enemy.", "To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.", "When angry, use your anger to beget strength, not to drive you to reckless action.", "The art of war teaches us to rely not on the likelihood of the enemy's not coming, but on our own readiness to receive him.", "The wise warrior avoids the battle.", "He who knows when he can fight and when he cannot will be victorious.", "The skillful leader subdues the enemy's troops without any fighting; he captures their cities without laying siege to them; he overthrows their kingdom without lengthy operations in the field.", "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.", "When you surround an army, leave an outlet free. Do not press a desperate foe too hard.", "A leader leads by example, not by force."],
    },
    aristotle: {
        name: "Aristotle",
        about: "Aristotle was an ancient Greek philosopher and polymath who made significant contributions to many fields, including philosophy, science, politics, and ethics. He was a student of Plato and a teacher of Alexander the Great, and his writings continue to influence Western thought today. Aristotle's emphasis on reason, logic, and observation, along with his ideas about causation, ethics, and metaphysics, have had a profound impact on fields as diverse as biology, physics, ethics, and political science. His legacy as a philosopher, teacher, and scientist is a testament to his enduring influence on Western intellectual thought.",
        allQuotes: ["The more you know, the more you realize you don't know.", "We are what we repeatedly do. Excellence, then, is not an act but a habit.", "Happiness depends upon ourselves.", "Educating the mind without educating the heart is no education at all.", "It is the mark of an educated mind to be able to entertain a thought without accepting it.", "The roots of education are bitter, but the fruit is sweet.", "The whole is greater than the sum of its parts.", "Pleasure in the job puts perfection in the work.", "Friendship is a single soul dwelling in two bodies.", "The aim of art is to represent not the outward appearance of things, but their inward significance.", "Knowing yourself is the beginning of all wisdom.", "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.", "The worst form of inequality is to try to make unequal things equal.", "The one exclusive sign of thorough knowledge is the power of teaching.", "To avoid criticism, say nothing, do nothing, be nothing.", "Man is by nature a social animal.", "The energy of the mind is the essence of life.", "Patience is bitter, but its fruit is sweet.", "The educated differ from the uneducated as much as the living differ from the dead.", "Quality is not an act, it is a habit."],
    },
    plato: {
        name: "Plato",
        about: "Plato, an ancient Greek philosopher and one of the most influential figures in Western philosophy, was born around 427 BCE. As a student of Socrates and the teacher of Aristotle, his ideas laid the foundation for much of Western philosophical thought. Plato's philosophy explored various areas, including ethics, politics, metaphysics, and epistemology. His most famous work, \"The Republic,\" delved into the ideal state and the concept of justice, while his theory of Forms emphasized the existence of a higher realm of perfect, unchanging entities. Plato's enduring legacy continues to shape and inspire philosophical discourse and intellectual inquiry to this day.",
        allQuotes: ["Wise men speak because they have something to say; fools because they have to say something.", "The measure of a man is what he does with power.", "Ignorance, the root and stem of all evil.", "At the touch of love, everyone becomes a poet.", "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "Courage is knowing what not to fear.", "The first and greatest victory is to conquer yourself.", "The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.", "Ideas are the source of all things.", "We are twice armed if we fight with faith.", "The measure of a man is what he does with power.", "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers.", "The price good men pay for indifference to public affairs is to be ruled by evil men.", "The greatest wealth is to live content with little.", "Thinking: the talking of the soul with itself.", "Knowledge which is acquired under compulsion obtains no hold on the mind.", "Justice in the life and conduct of the state is possible only as it first resides in the hearts and souls of the citizens.", "For a man to conquer himself is the first and noblest of all victories.", "An unexamined life is not worth living.", "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything."],
    },
    socrates: {
        name: "Socrates",
        about: "Socrates, a classical Greek philosopher born around 469 BCE, is widely recognized as one of the founding figures of Western philosophy. He played a pivotal role in shaping the Socratic method, a form of inquiry that aimed at seeking truth through questioning and critical thinking. Renowned for his humility and relentless pursuit of wisdom, Socrates challenged conventional beliefs and encouraged self-reflection. Despite facing controversy and ultimately being sentenced to death, his teachings, as conveyed by his student Plato, have had a profound and lasting impact on philosophy, ethics, and the importance of examining one's own beliefs and values. Socrates' legacy continues to inspire intellectual curiosity and philosophical exploration to this day.",
        allQuotes: ["The only true wisdom is in knowing you know nothing.", "An unexamined life is not worth living.", "I cannot teach anybody anything. I can only make them think.", "To find yourself, think for yourself.", "True knowledge exists in knowing that you know nothing.", "He who is not a good servant will not be a good master.", "An honest man is always a child.", "Employ your time in improving yourself by other men's writings so that you shall gain easily what others have labored hard for.", "Wisdom begins in wonder.", "The unexamined life is not worth living for a human being.", "Beware the barrenness of a busy life.", "Education is the kindling of a flame, not the filling of a vessel.", "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.", "I know that I am intelligent because I know that I know nothing.", "The mind is everything; what you think, you become.", "The easiest and noblest way is not to be crushing others, but to be improving yourselves.", "Be slow to fall into friendship, but when you are in, continue firm and constant.", "Prefer knowledge to wealth, for the one is transitory, the other perpetual.", "The greatest way to live with honor in this world is to be what we pretend to be.", "By all means, marry. If you get a good wife, you'll become happy; if you get a bad one, you'll become a philosopher."],
    },
};

const randomQuote = () => { // Displays 1 random quote
    const philoNum = Math.floor(Math.random() * 5); // generates a random number from 0-4 that represents which philosopher we are picking from.
    const quoteNum = Math.floor(Math.random() * 20); // generates a random number from 0-19 which chooses the quote index from the quotes array.
    let name;
    let quote;
    switch (philoNum) {
        case 0:
            name = quotes.musashi.name;
            quote = quotes.musashi.allQuotes[quoteNum];
            break;
        case 1:
            name = quotes.tzu.name;
            quote = quotes.tzu.allQuotes[quoteNum];
            break;
        case 2:
            name = quotes.aristotle.name;
            quote = quotes.aristotle.allQuotes[quoteNum];
            break;
        case 3:
            name = quotes.plato.name;
            quote = quotes.plato.allQuotes[quoteNum];
            break;
        case 4:
            name = quotes.socrates.name;
            quote = quotes.socrates.allQuotes[quoteNum];
            break;        
    }
    return `"${quote}" - ${name}`;
};

const displayMenu = () => { // Displays Menu
    console.log("\nPlease choose an option below by entering the corresponding number:");
    console.log("1. List available philosophers");
    console.log("2. Learn about philosophers");
    console.log("3. Generate quotes");
    console.log("4. Filter quotes based on subject");
    console.log("5. Exit\n");
};

const listOfPhilosophers = () => { // Displays list of philosophers
    console.log(quotes.musashi.name);
    console.log(quotes.tzu.name);
    console.log(quotes.aristotle.name);
    console.log(quotes.plato.name);
    console.log(quotes.socrates.name);
};

// MAIN CODE
console.log("\nWelcome to Messages From The Past!\n");
console.log("Daily Quote:")
console.log(randomQuote());
let choice = 0;
while(choice !== "5") {
    displayMenu();
    const prompt = require('prompt-sync')();
    choice = prompt("Enter a valid option number: ");
    console.log();
    if (choice === "1") {
        listOfPhilosophers();
    }
};