namespace game.filedstate 
{
    /**
    *
    * @author Ivan Lavoryk
    *
    */
    export class Fill implements IFieldState
    {
        public constructor()
        {
        }

        public initialize(field: Field): void
        {
            console.warn("Fill::initialize");
            field.level = new level.mockup.Level001();
        }

        public deinitialize(): void
        {
            console.warn("Fill::deinitialize");
        }

        public update(dt: Number): void
        {

        }
    }
}
