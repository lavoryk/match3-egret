module manager 
{
	/**
	 *
	 * @author Ivan Lavoryk
	 *
	 */
	export class Resource 
	{
        private static _instance:Resource; 
		public constructor() 
		{
		}
		
		public static get instance():Resource
		{
		    if (Resource._instance == null)
            {
                Resource._instance = new Resource();
            }
            return Resource._instance;
		}
		
        public getAsset(source: string, compFunc: Function, thisObject: any): void
        {
            function onGetRes(data: any): void
            {
                compFunc.call(thisObject, data, source);
            }
            if (RES.hasRes(source))
            {
                var data = RES.getRes(source);
                if (data)
                {
                    onGetRes(data);
                }
                else
                {
                    RES.getResAsync(source, onGetRes, this);
                }
            }
            else
            {
                RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
            }
        }
	}
}
