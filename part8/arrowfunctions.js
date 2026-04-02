const functionName = (parameters) => {
    // code
};

const calYear = birthYear => 2027 - 2006;
console.log(calYear());

const yearUntilRetirment = (birthYear, firstName) =>{
    const age = 2026 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirment(2006,"Arti" ));

