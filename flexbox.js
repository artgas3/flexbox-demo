$(document).ready(()=>{
	$("#detailparentdiv").hide();
		getDetails(detailsData);
        
});

let getDetails=(detailsData)=>{
	
	detailsData.forEach((item,index)=>{
           
		   let parentDiv = `<div id="flexbox${index}" class="flexboxcss">
							<div id="image${index}" class="divcss">
							<img src="${item.imgUrl}" class="imagecss">
							</div>
							</div>`
			$("#flexboxparent").append(parentDiv);
			let tempData = `<div id="details${index}" class="detailscss">
           					Category : ${item.category}<br>
           					Price : ${item.price}<br>
           					Shipping Charges : ${item.shippingCharges}<br>
           					<button id="submit" class="buttoncss">SEE MORE</button>
		                    </div>`
		   $(`#flexbox${index}`).append(tempData);
            $(`#flexbox${index}`)[0].addEventListener("click", function(){
	    	  
	        	$("#flexboxparent").hide();
	        	$("#detailparentdiv").show();
	        	$("a").removeClass("disabled");
	        	$("li").addClass("active");
	        	let detailData = `<div id = "detaildiv" class="detaildivcss">
			                     <div id = "detailfleximage" class="divcss">
			                     <img src="${item.imgUrl}" style="height:100%;width:250px">
			                     </div>`
	        	$("#detailparentdiv").append(detailData);
	         	let detailContents =   `<div id= "detaildivcontents" style="font-size:1.5rem"> PRODUCT DESCRIPTION
	         	                        <br>Category : ${item.category}<br>
	         							Price : ${item.price}<br>
           								Shipping Charges : ${item.shippingCharges}<br>
           								Available Size : ${item.availableSize}<br>
           								Available Color : ${item.availableColor}<br>
           								Please go to official website for placing order<br>
           								<button id="back" class="backbuttoncss">BACK</button>
           								</div>`
           		$("#detaildiv").append(detailContents);
           		$("#back").click(()=>{
            	$("#flexboxparent").show();
	        	$("#detailparentdiv").hide();
	        	$("#detaildiv").remove();
            });
		});

	});
}
let detailsData=[
	{
		category:"Western",
		price:"600",
		shippingCharges:"NO",
		imgUrl : "./fleximage1.jpg",
		availableSize : "S and M",
		availableColor : "Black"

	},
	{	category:"Casual",
		price:"700",
		shippingCharges:"NO",
		imgUrl : "./fleximage2.jpg",
		availableSize : "S,M and L",
		availableColor : "Single Color"
	},
	{	category:"Western",
		price:"700",
		shippingCharges:"YES",
		imgUrl : "./fleximage3.jpg",
		availableSize : "S,M and L",
		availableColor : "Blue"
	},
	{	category:"Western",
		price:"650",
		shippingCharges:"YES",
		imgUrl : "./fleximage4.jpg",
		availableSize : "S",
		availableColor : "Single Color"
	},
	{	category:"Western",
		price:"1050",
		shippingCharges:"NO",
		imgUrl : "./fleximage5.jpg",
		availableSize : "S,M,L and XL",
		availableColor : "Yellow"
	},
	{	category:"Western",
		price:"750",
		shippingCharges:"NO",
		imgUrl : "./fleximage10.jpg",
		availableSize : "S,M and L",
		availableColor : "Single Color"
	},
	{	
		category:"Casual",
		price:"550",
		shippingCharges:"YES",
		imgUrl : "./fleximage7.jpg",
		availableSize : "S and M",
		availableColor : "Single Color"
	},
	{
		category:"Western",
	    price:"950",
		shippingCharges:"NO",
		imgUrl : "./fleximage8.jpg",
		availableSize : "M and L",
		availableColor : "Single Color"
	},
	{	
		category:"Casual",
		price:"650",
		shippingCharges:"NO",
		imgUrl : "./fleximage9.jpg",
		availableSize : "S,M and L",
		availableColor : "Red"
	}
]