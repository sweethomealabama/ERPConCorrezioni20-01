function funcFor(_day, _monthDays, _month, temp){
	var i=0;
	for(i = 0; i < 40; i++)
	{	
		var _dayElement = getObjById("cdrDay" + i);
		_dayElement.onmouseover = Function(this.Obj + ".onMouseOver(this)");
		_dayElement.onmouseout = Function(this.Obj + ".onMouseOut(this)");
		_dayElement.onclick = Function(this.Obj + ".onClick(this)");
		this.onMouseOut(_dayElement);	 		
		_dayElement.style.color = "";
		if(i < _startDay)
		{
			//获取上一个月的日期
			if(this.showMoreDay)
			{
				PreviDay();
			}else
			{
				_dayElement.innerHTML = "";
				_dayElement.title = "";
			}
		}
		else if(_day > _monthDays[_month])
		{
			//获取下个月的日期
			if(this.showMoreDay)
			{
				NextDay();
			}else
			{
				_dayElement.innerHTML = "";
				_dayElement.title = "";
			}
		}
		else if(i >= temp)
		{
			//获取本月日期
			CheckHoliday();
		}
		else
		{
			_dayElement.innerHTML = "";
			_dayElement.title = "";
		}	
	}
}
