namespace util
{
    /**
     *
     * @author Ivan Lavoryk
     *
     */
    export class ItemPos 
    {
        public row: number = -1;
        public col: number = -1;
    
        public constructor(row: number = -1, col: number = -1)
        {
            this.row = row;
            this.col = col;
        }
    
        public isEvenRow(): boolean
        {
            return (Math.abs(this.row) % 2 == 0);
        }
    
        public getHashCode(): number
        {
    
            return this.row * 32767 + this.col;
        }
    
        public toString(): string
        {
            return "[ItemPos] row = " + this.row + "; col = " + this.col;
        }
    }
}
