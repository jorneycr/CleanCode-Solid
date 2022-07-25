(() => {

    type Gender = 'M' | 'F';

    class Person {
        constructor(public name: string, public gender: Gender, public brithdate: Date) { }
    }

    // const newPerson = new Person('Jorney', 'M', new Date('1995-04-26'));

    // console.log({ newPerson });


    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSetting(
        '/usr/home',
        '/home',
        'jorney@google.com',
        'Admin',
        'Jorney',
        'M',
        new Date('1995-04-26')
    )

    console.log({ userSettings });


})();