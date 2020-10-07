const modules = require('./fifa.js');
const fifaData = modules.fifaData;

// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final */

fifaData.filter(game => {
if (game.Year === 2014 && game.Stage === `Final`) {
console.log(game[`Home Team Name`])
return game;
}
})

// (b) Away Team name for 2014 world cup final

fifaData.filter(game => {
    if (game.Year === 2014 && game.Stage === `Final`) {
    console.log(game[`Away Team Name`])
    return game;
    }
    })

// (c) Home Team goals for 2014 world cup final

fifaData.filter(game => {
    if (game.Year === 2014 && game.Stage === `Final`) {
    console.log(game[`Home Team Goals`])
    return game;
    }
    })

// (d) Away Team goals for 2014 world cup final

fifaData.filter(game => {
if (game.Year === 2014 && game.Stage === `Final`) {
console.log(game[`Away Team Goals`])
return game;
}
})

// (e) Winner of 2014 world cup final 
console.log('task e');
fifaData.filter(game => {
    if (game.Year === 2014 && game.Stage === `Final`) { 
        if (game[`Home Team Goals`] > game[`Away Team Goals`]) {
            console.log(game[`Home Team Name`])
        } else if (game[`Home Team Goals`] < game[`Away Team Goals`]) {
            console.log(game[`Away Team Name`])
        } if (game[`Home Team Goals`] === game[`Away Team Goals`]) {
            console.log(game[`Win conditions`])
        }
    }
    })


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
const finalData = data.filter(game => {
if (game.Stage === `Final`) {
    return game;
}
})
return finalData;
};
// console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
const finalGames = cb(fifaData)

const yearData = finalGames.map(info => {
    return info.Year;
})
return yearData;
};

// console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
const finalWinners = cb(fifaData);

const winnerData = finalWinners.map(game => {
        if (game[`Home Team Goals`] > game[`Away Team Goals`]) {
            return(game[`Home Team Name`])
        } else if (game[`Home Team Goals`] < game[`Away Team Goals`]) {
            return(game[`Away Team Name`])
        } else if (game[`Home Team Goals`] === game[`Away Team Goals`]) {
            return(game[`Win conditions`].split(' ')[0])
        }
});
return winnerData;
};
    

// console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
const winnerData = cb1(getFinals);
const yearsData = cb2(getFinals);

yearsData.forEach((year, idx) => {
    console.log(`"In ${year}, ${winnerData[idx]} won the world cup!`)
})
};

getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals 
and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const totalPoints = data.reduce((accumulator, game) => {
    return accumulator + game[`Home Team Goals`] + game[`Away Team Goals`];
}, 0)
return totalPoints / data.length;
};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function finalWinner(ti, game) {
    if (game[`Home Team Goals`] > game[`Away Team Goals`]) {
        if (game[`Home Team Initials`] === ti) {
            return true;
        }
    } else if (game[`Home Team Goals`] < game[`Away Team Goals`]) {
        if (game[`Away Team Initials`] === ti) {
            return true;
        }
    }
    return false;
}

function getCountryWins(data, ti) {
const finalGames = getFinals(data);
const teamWins = finalGames.reduce((accumulator, game) => {
    if (finalWinner(ti, game)) {
        accumulator++;
    }
    return accumulator;
}, 0)
return teamWins;
};

console.log(getCountryWins(fifaData, 'BRA'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
