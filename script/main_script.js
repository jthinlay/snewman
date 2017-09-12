
var wss_i = 0;
//var wss_array = ["Cute", "Happy", "Playful", "Smart", "Loyal"];
var wss_array = [
"<img src='file:///Users/qiangbarejie/Documents/clients/snewman/snewmans_website/new_website/snewman_boostrap_website/images/Blue%20Grass%2030h%20x%2036w_smaller.jpg' alt='tsarong family' style='width:70%;height:auto;'>",  
"<img src='file:///Users/qiangbarejie/Documents/clients/snewman/snewmans_website/new_website/snewman_boostrap_website/images/Half%20Court%2024h%20x%2030w_smaller.jpg' alt='tsarong family' style='width:70%;height:auto;'>", 
"<img src='file:///Users/qiangbarejie/Documents/clients/snewman/snewmans_website/new_website/snewman_boostrap_website/images/What%20A%20Wonderful%20World%2024h%20x%2036w_smaller.jpg' alt='tsarong family' style='width:70%;height:auto;'>"];
var wss_elem;
function wssNext(){
	wss_i++;	
	wss_elem.style.opacity = 0;	
	if(wss_i > (wss_array.length - 1)){
	  wss_i = 0;
	}
	setTimeout('wssSlide()', 3000);
}
function wssSlide(){
	wss_elem.innerHTML = wss_array[wss_i];
	wss_elem.style.opacity = 1;
	setTimeout('wssNext()', 2000);
}
var caption_i = 0;
var caption_array = [
	"Blue Grass 30h x 36w",
	"Half Court 24h x 30w",
	"What A Wonderful World 24h x 36w"];

var caption_elem;
function captionNext(){
	caption_i++;	
	caption_elem.style.opacity = 0;	
	if(caption_i > (caption_array.length - 1)){
	  caption_i = 0;
	}
	setTimeout('captionSlide()', 3000);
}
function captionSlide(){
	caption_elem.innerHTML = caption_array[caption_i];
	caption_elem.style.opacity = 1;
	setTimeout('captionNext()', 2000);
}

//document.getElementById('button').addEventListener('click', loadUsers);
            
function statements(){   
	
	fetch('statement.txt')
	.then((res) => res.text())
	.then((data) => {
		document.getElementById('statementDisplay').innerHTML = "<div class='mb-4'>"+data +"</div>";
	})
	.catch((err) => console.log(err))

	$('#wss').remove();
	$('#caption').remove();
	

}
// fetch selection exhibtion section
function exhibition(){
	
	fetch('selectedExhibitions.json')
	.then((res) => res.json())
	.then((data) => {

		document.getElementById('exhibitionDisplay').innerHTML=data;
    
		// `
		// 	<table>
		// 		<tr>
		// 			<th>SELECTED EXHIBITIONS PAST, PRESENT, & FUTURE</th>
		// 		</tr>
		// 		<tr>
		// 			<td>EXHIBITION LOCATION</td>
		// 			<td></td>
		// 			<td>TIME</td>
		// 		</tr>
		// 		<tr>
		// 			<td>1</td>
		// 			<td>2</td>
		// 			<td>3</td>
		// 		</tr>
		// 	</table>
		// `	
		
	})
	.catch ((err) => console.log(err))
	$('#wss').remove();
	$('#caption').remove();	
	
}



