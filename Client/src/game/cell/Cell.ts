namespace game.cell 
{
	/**
	 *
	 * @author Ivan Lavoryk
	 *
	 */
	export class Cell 
	{
    	private _cellBase: egret.DisplayObjectContainer;
        private _cellDisplayObject: egret.Bitmap;
        private _cellType:game.CellType;
		public constructor() 
		{
            this._cellBase = new egret.DisplayObjectContainer();
            this._cellDisplayObject = new egret.Bitmap();
            this._cellBase.addChild(this._cellDisplayObject);
		}
		
        public get displayObject(): egret.DisplayObjectContainer
		{
		    return this._cellBase;
		}
		
		public set cellType(cellType: game.CellType)
		{
            if (this._cellType != cellType)
            {
                this._cellType = cellType;
                manager.Resource.instance.getAsset("Cell00", this.dataChanged, this);
            }            
		}
		
        public get cellType(): game.CellType 
        {
            return this.cellType;
        }		
		
        private dataChanged(data: any, source: string):void
		{
            this._cellDisplayObject.texture = data;
		}
	}
}
