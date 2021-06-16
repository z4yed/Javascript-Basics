function specialMessage(greet, name) {
    function getFirstName(){
       if (name) return name.split(' ')[0];
       else return '';
    }

    console.log(greet, getFirstName());
}

specialMessage("Good Morning,", "Zayed Hassan")