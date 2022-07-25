(() => {

    // Aplicando el principio de responsabiidad unica.
    // Priorizar la composicion frente a la herencia.

    type Gender = 'M' | 'F';

    interface IPersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: IPersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    const newPerson = new Person(
        {
            name: 'Jorney', gender: 'M', birthdate: new Date('1995-04-26')
        }
    );

    console.log({ newPerson });

    interface IUserProps {
        email: string;
        role: string;
    }

    class User {
        public role: string;
        public email: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: IUserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredencials() {
            return true;
        }
    }

    interface ISettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Setting {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: ISettingProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface IUserSettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Setting;

        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthdate
            }: IUserSettingProps
        ) {
            this.person = new Person({
                name,
                gender,
                birthdate
            });

            this.user = new User({
                email,
                role
            });

            this.settings = new Setting({
                workingDirectory,
                lastOpenFolder
            });
        }

    }

    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            email: 'jorney@google.com',
            role: 'Admin',
            name: 'Jorney',
            gender: 'M',
            birthdate: new Date('1995-04-26'),
        }
    )

    console.log({ userSettings });

})();