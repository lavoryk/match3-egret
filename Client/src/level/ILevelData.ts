namespace level
{
    /**
     *
     * @author Ivan Lavoryk
     *
     */
    export interface ILevelData 
    {
        offsetX: number;
        offsetY: number;
        rowCnt: number;
        colCnt: number;
        getCellType(row: number, col: number): game.CellType;
    }
}
