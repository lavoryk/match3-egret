namespace game
{
    /**
     *
     * @author Ivan Lavoryk
     *
     */
    export class Field
    {
        private _fieldDisplayObject: egret.DisplayObjectContainer;
        private _cellParent: egret.DisplayObjectContainer;
        private _itemParent: egret.DisplayObjectContainer;
        private _state:filedstate.IFieldState;
        private _level: level.ILevelData;
        private _cellList:Array<game.cell.Cell>;
        private _displayDebugInfo:Boolean = true;
    	  public constructor()
    	  {
              egret.Ticker.getInstance().register(this.onTick, this);
              this._cellParent = new egret.DisplayObjectContainer();
              this._itemParent = new egret.DisplayObjectContainer();
    	  }
    	
        public set fieldDisplayObject(newFieldDisplayObject: egret.DisplayObjectContainer) 
        {
            if (this._fieldDisplayObject)
            {
                this._fieldDisplayObject.removeChild(this._cellParent);
                this._fieldDisplayObject.removeChild(this._itemParent);
            }                           
            this._fieldDisplayObject = newFieldDisplayObject;
            if (this._fieldDisplayObject)
            {
                this._fieldDisplayObject.addChild(this._cellParent);
                this._fieldDisplayObject.addChild(this._itemParent);
            }
        }
        
        public get fieldDisplayObject(): egret.DisplayObjectContainer 
        {                      
            return this._fieldDisplayObject;
        }
        
        public set state(newState:filedstate.IFieldState)
        {
            if (this._state)
            {
                this._state.deinitialize();
            }
            this._state = newState;
            if (this._state)
            {
                this._state.initialize(this);
            }
        }
        
        public set level(level:level.ILevelData)
        {
            egret.assert(this._level == null);
            this._level = level;
            var gc: HexGameConfig = HexGameConfig.instance;
            var managerGameObject:manager.GameObject = manager.GameObject.instance;
            
            // TODO:
            // 1. clear old cells items, their display objects and etc while level is changed 
            
            this._cellParent.x = level.offsetX;
            this._cellParent.y = level.offsetY;
            
            this._itemParent.x = level.offsetX;
            this._itemParent.y = level.offsetY;
            
            this._cellList = new Array<game.cell.Cell>();
            
            var itemPos: util.ItemPos = new util.ItemPos();
            for (itemPos.row = 0; itemPos.row < this._level.rowCnt; ++itemPos.row)
            {
                for (itemPos.col = 0; itemPos.col < this._level.colCnt; ++itemPos.col)
                {
                    var cellType: game.CellType = this._level.getCellType(itemPos.row, itemPos.col);
                    if (cellType != game.CellType.None)
                    {
                        var point:egret.Point = gc.itemPos2Point(itemPos);
                        var cell:game.cell.Cell = managerGameObject.borrowCell(cellType);
                        cell.displayObject.x = point.x;
                        cell.displayObject.y = point.y;
                        this._cellParent.addChild(cell.displayObject);
                        this._cellList.push(cell);
                        if (this._displayDebugInfo)
                        {
                            var colorLabel: egret.TextField = new egret.TextField();
                            colorLabel.textColor = 0xff0000;
                            colorLabel.textAlign = "center";
                            colorLabel.text = "row:" + itemPos.row + "\ncol:" + itemPos.col;
                            colorLabel.size = 15;
                            colorLabel.x = gc.getStepCol() / 4;
                            colorLabel.y = gc.getItemSize() / 3;
                            cell.displayObject.addChild(colorLabel);
                        }
                    }
                    else
                    {
                        this._cellList.push(null);                        
                    }
                }
            }
        }
        
        private onTick(dt: Number): void  
        {
            // dt is the time interval between frames in milliseconds
            if (this._state)
            {
                this._state.update(dt);
            }            
        }
        
    }
}
