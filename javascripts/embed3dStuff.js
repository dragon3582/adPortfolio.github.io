
	var modelArray = [];
	var index;

//take in content here
	function embeddedContent(model, name, overPic)
	{
		
		var modelInfo = {
			modelURL: "hi",
			nameURL: "lets",
			nameText: "go",
			modelOverview: "over"
			
		};
		
		//alert(modelInfo.nameText);
		
		
		var modelLinkArray = ["https://sketchfab.com/models/7f77833ff9b84733b4cb221bb37a2b60/embed",
							  "https://sketchfab.com/models/c9d049309b1447ae84212e52922bc562/embed",
							  "https://sketchfab.com/models/ed9471eb9bd147c59d996fc886370e7b/embed"
							  ];
		//alert(modelLinkArray[0]);	  
		var nameURLArray = ["https://sketchfab.com/models/7f77833ff9b84733b4cb221bb37a2b60?utm_medium=embed&utm_source=website&utm_campain=share-popup",
							"https://sketchfab.com/models/c9d049309b1447ae84212e52922bc562?utm_medium=embed&utm_source=website&utm_campain=share-popup",
							"https://sketchfab.com/models/ed9471eb9bd147c59d996fc886370e7b?utm_medium=embed&utm_source=website&utm_campain=share-popup"
							];
		
		var nameArray = ["Critical Mass Console",
						 "Energy Reading Console",
						 "Stylized small barrier"
						 ];
						 
		var overviewPicArray = ["images/ConsoleOverview.png",
								"images/ConsoleOverview.png",
								"images/WallOverview.png"
								];
		
		var theName;
		var name_LinkReplacement;
		var model_LinkReplacement;
		
		for(i = 0; i < modelLinkArray.length; i++)
		{
			modelArray[i] = {};
			modelArray[i].modelURL = modelLinkArray[i];
			modelArray[i].nameURL = nameURLArray[i];
			modelArray[i].nameText = nameArray[i];
			modelArray[i].modelOverview = overviewPicArray[i];
		}
		
		for(i = 0; i < modelLinkArray.length; i++)
		{
			if(model == modelLinkArray[i])
			{
				index = i;
			}
		}
		/*
		if(button == "nextButton")
		{
			index++;
			if(index >= modelArray.length)
			{
				index = 0;
			}
			//alert(modelArray[index].modelURL);
			return modelArray[index];
		}
		else if(button == "previousButton")
		{
			index--;
			if(index < 0)
			{
				index = modelArray.length-1;
			}
			return modelArray[index];
		}*/
		
	}
	
	function changeModel(Nbutton)
	{
		if(Nbutton == "nextButton")
		{
			index++;
			if(index >= modelArray.length)
			{
				index = 0;
			}
			//alert(modelArray[index].modelURL);
			return modelArray[index];
		}
		else if(Nbutton == "previousButton")
		{
			index--;
			if(index < 0)
			{
				index = modelArray.length-1;
			}
			return modelArray[index];
		}
		
	}