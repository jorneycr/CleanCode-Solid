(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    interface IMovie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({ title, description, rating, cast }: IMovie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    interface ICreateActor {
        fullName: string;
        birthdate: Date;
    }

    function createActor({ fullName, birthdate }: ICreateActor): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'jorney') return false;

        console.log('Crear actor');
        return true;

    }

})();

