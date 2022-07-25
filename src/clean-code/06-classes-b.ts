(() => {

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
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public role: string;
        public email: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: IUserProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
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

    class UserSetting extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: IUserSettingProps) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSetting(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            email: 'jorney@google.com',
            role: 'Admin',
            name: 'Jorney',
            gender: 'M',
            birthdate: new Date('1995-04-26')
        }
    )

    console.log({ userSettings });

})();