namespace game.filedstate 
{
    /**
    *
    * @author Ivan Lavoryk
    *
    */
	export interface IFieldState
	{
        update(dt: Number):void;
        initialize(field:Field):void;
        deinitialize():void;        
	}
}
