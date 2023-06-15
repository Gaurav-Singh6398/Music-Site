let songindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let myProgress=document.getElementById('myProgress');

let gif = document.getElementById('1');

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg",duration:"4:55"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg",duration:"4:35"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg",duration:"4:05"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg",duration:"3:35"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg",duration:"3:45"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg",duration:"3:20"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg",duration:"3:50"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg",duration:"2:55"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg",duration:"3:10"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg",duration:"5:01"}
]
songitem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
    element.getElementsByClassName('timestamp')[0].innerText=songs[i].duration
    
})

masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        gif.style.opacity=0;
    }
    

})

audioElement.addEventListener('timeupdate', ()=>{ 
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgress.value = progress;
})
myProgress.addEventListener('change',()=>{
    audioElement.currentTime=myProgress.value * audioElement.duration/100
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songindex=parseInt(e.target.id)
         makeAllPlays();
        
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        mastersongname.innerText=songs[songindex-1].songName; 
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=10)
    {
        songindex=1
    }
    else{
        songindex=songindex+1
    }
    audioElement.src=`songs/${songindex}.mp3`
        audioElement.currentTime = 0;
        mastersongname.innerText=songs[songindex-1].songName; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1)
    {
        songindex=10
    }
    else{
        songindex=songindex-1
    }
    audioElement.src=`songs/${songindex}.mp3`
        audioElement.currentTime = 0;
        mastersongname.innerText=songs[songindex-1].songName;        audioElement.play();
        
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})
@media only screen and (max-width : 1100px){

}