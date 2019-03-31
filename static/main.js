class Profile {
    constructor(username, password) {
        this.username = username,
        this.name = {},
        this.password = password,
        this.wallet = {}
    };

    addUsersData(firstname, lastname){
        //добавляем имя пользователя
        if ((this.name[firstname] === undefined) && (this.name[lastname] === undefined)){
            this.name[firstname] = firstname;
            this.name[lastname] = lastname;
        };    
        return this.name;
    };

    greating(username, password){
       //функция авторизации
        const answer = ((this.username === username) && (this.password === password)) ? `${this.username} is autorizing!` : 'Error username or password';
        return console.log(answer);
    };   
};

function main(username, firstname, lastname, password){
    // создаем пользователя
    console.log(`Creating user ${username}`);
    const user = new Profile(username, password);
    user.addUsersData(firstname, lastname);
    console.log(`${username} is created`);
  
    //авторизуем пользователя
    console.log(`Authorising user ${username}`);
    user.greating(username, password);
};

main('Vanya', 'Ivan', 'Ivanov', 'ksdjfgnklf');
main('Dashu', 'Dasha', 'Petrova', 'ksdjfgnklf');
main();
main('Vanya', 'Ivan', 'Ivanov', 'ksdjfgnklf');
