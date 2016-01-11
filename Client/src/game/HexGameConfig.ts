namespace game 
{
    /**
    *
    * @author Ivan Lavoryk
    *
    */
    import ItemPos = util.ItemPos;
    export class HexGameConfig 
    {
    	private static _instance:HexGameConfig = null;
    	
        private itemSize:number = 74.0;
        private stepRow:number;
        private stepCol:number;
        private scaleFactor:number = 1.0;       
    	
        public constructor() 
        {
            this.recalc();    		
        }
		
        public static get instance():HexGameConfig
        {
		    if (HexGameConfig._instance == null)
            {
                HexGameConfig._instance = new HexGameConfig();
            }
            return HexGameConfig._instance;
        }
		
        private recalc(): void
        {            
            this.stepRow = this.itemSize * 3.0 / 4.0 * this.scaleFactor;
            this.stepCol = Math.sqrt(3.0) * this.itemSize / 2.0  * this.scaleFactor;                        
        }
        
        public itemPos2Point(itemPos:ItemPos): egret.Point 
        {
            var point: egret.Point = new egret.Point();
            point.x = itemPos.col * this.stepCol;
            point.y = itemPos.row * this.stepRow;            
            if (!itemPos.isEvenRow())
            {
                point.x += this.stepCol / 2.0;
            }            
            return point;
        }
        
        public getItemSize(): number 
        {
            return this.itemSize;
        }
        
        public getStepCol(): number 
        {
            return this.stepCol;
        }
    }
}
