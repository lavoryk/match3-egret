namespace level.mockup
{
    /**
     *
     * @author Ivan Lavoryk
     *
     */
    export class Level001 implements ILevelData
    {
        private _cells: Array<game.CellType> = null;
        public constructor() 
        {
            this._cells = [
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0
            ];
            egret.assert(this._cells.length == this.rowCnt * this.colCnt);
        }
    
        public get offsetX(): number
        {
            return 100;
        }
    
        public get offsetY(): number
        {
            return 50;
        }
    
        public get rowCnt(): number
        {
            return 9;
        }
    
        public get colCnt(): number
        {
            return 9;
        }
    
        public getCellType(row: number, col: number): game.CellType
        {
            var res: game.CellType = game.CellType.None;
            if (!(row > this.rowCnt) && !(col > this.colCnt))
            {
                res = this._cells[row * this.colCnt + col];
            }
            return res;
        }    
    }
}