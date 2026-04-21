function jourTravaille(date) {

    let joursFeries = [
        "2024-01-01",
        "2024-05-01",
        "2024-12-25"
    ];

    let dateString = date.toISOString().split('T')[0];

    if (joursFeries.includes(dateString)) {
        console.log("Le " + dateString + " est un jour férié");
    }
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + dateString + " est un week-end");
    }
    else {
        console.log("Oui, " + dateString + " est un jour travaillé");
    }
}

jourTravaille(new Date("2024-05-01")); // férié
jourTravaille(new Date("2024-05-04")); // samedi
jourTravaille(new Date("2024-05-02")); // travaillé