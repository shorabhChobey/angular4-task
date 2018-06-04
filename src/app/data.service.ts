import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  findIndex(arr:any[],a:number,elementToFind:any,toFindInArray:any):any
	{
		for(var i=0; i< arr.length; i++)
		{
			if (elementToFind == arr[i].toFindInArray)
			{
				a=i;
			}
		}
		return a;  
	}

}


