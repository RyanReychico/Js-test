const data = require('./data');

const args = process.argv

function isFilled(arr) {
    return (Array.isArray(arr) && arr.length)
}

// This function filters out every animal that does not match the string pattern
const removeNonMatching = (searchedStr, person) => {
    return person.animals.map((animal) => {
        if (animal.name.includes(searchedStr)) {
            return animal;
        }
    }).filter(e => e)
}

const filter = (searchedStr) => {
    const newList = data.filter(q => {
        let newCountry = q
        newCountry.people = q.people.filter(p => {
            let newPerson = p
            newPerson.animals = removeNonMatching(searchedStr, p)

            // The 'animals' entry will be removed if there is nothing left inside
            return isFilled(newPerson.animals)
        })

        // The 'people' entry will be removed if there is nothing left inside
        return (isFilled(newCountry.people))
    });

    return newList
}

const count = (localData) => {
    const newList = localData.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
    return newList
}

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count



const execute = () => {
    try {
        const isFilterActive = args.some(arg => arg.includes('filter'));
        const isCountActive = args.some(arg => arg.includes('count'));
    
        if (isFilterActive && isCountActive) {
            const cmd = args.find(arg => arg.includes('filter')).split("=");
            const filteredData = filter(cmd[1]);
            const countData = count(filteredData);
            console.log(JSON.stringify(countData, null, 2));
        } else if (isFilterActive) {
            const cmd = args.find(arg => arg.includes('filter')).split("=");
            const filteredData = filter(cmd[1]);
            console.log(!isFilled(filteredData) ? 'Nothing found' : JSON.stringify(filteredData, null, 2));
        } else if (isCountActive) {
            const countData = count(data);
            console.log(JSON.stringify(countData, null, 2));
        } else {
            console.log('Wrong arguments');
        }
    } catch(err) {
        console.error(err);
    }
}


if (require.main === module) {
    execute();
}


module.exports = {
    count, filter
}
