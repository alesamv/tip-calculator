
    //Get bill
    const bill = document.getElementById("bill");
    bill.addEventListener('change', () => {
        billValue = bill.value;
        console.log(billValue);
        return billValue;
    });

    //Get tip


    //Get people
    const people = document.getElementById("people");
    people.addEventListener('change', () => {
        peopleValue = people.value;
        console.log(peopleValue);
        return peopleValue;
    });

    //Split the bill
    console.log("si");
    console.log(billValue / peopleValue);