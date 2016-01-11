module manager 
{
    /**
	 *
	 * @author Ivan Lavoryk
	 *
	 */
    export class GameObject
    {
        private static _instance: GameObject;
        public constructor() 
        {
        }

        public static get instance(): GameObject
        {
            if (GameObject._instance == null)
            {
                GameObject._instance = new GameObject();
            }
            return GameObject._instance;
        }

        public borrowCell(cellType: game.CellType): game.cell.Cell
        {
            var cell: game.cell.Cell = new game.cell.Cell();
            cell.cellType = cellType;
            return cell;
        }

        public returnCell(cell: game.cell.Cell)
        {
            // TODO:
        }
    }
}
