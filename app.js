let div = document.getElementById('colorpalette')
let color_arr = ["#ffd700", "#ff69b4", "#87ceeb", "#ff6347", "#20b2aa", "#ffa07a", "#add8e6", "#98fb98", "#ffdab9", "#ffe4b5", "#b0c4de", "#87cefa", "#f08080", "#ffffe0", "#e0ffff", "#f0e68c", "#fffacd", "#ffe4e1", "#fafad2", "#7f8c8d"];


let color_names = [
    "Gold","Hot Pink", "Sky Blue","Tomato","Light Sea Green","Light Salmon","Light Blue","Pale Green","Pale Turquoise","Peach Puff","Moccasin","Light Steel Blue","Light Peach","Light Coral", "Light Yellow", "Light Cyan", "Khaki","Lemon Chiffon","Light Goldenrod Yellow","Asbestos"
];


for(let i =  0 ; i <color_arr.length ; i++){
   div.innerHTML +=`<div class="colors" style="background-color:${color_arr[i]}" onclick="copy_code('${color_arr[i]}');">

   ${color_names[i]}

   </div>`

}
function copy_code(text){
   
    navigator.clipboard.writeText(text)
    Swal.fire({
        title: "COLOR COPIED!",
        text: text,
        icon: "success"
      });
}
