 /////////////////////////////////////////////////////////
 // YouTube API Elements
 /////////////////////////////////////////////////////////
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
 /////////////////////////////////////////////////////////
 // SONGTYPE ENUMS
 // Two Enums representing the types of tracks
 /////////////////////////////////////////////////////////
 const SongType = ['Song', 'Ambience', 'Sound'];
 const SongSubType = ['Default', 'Boss Fight', 'Calm', 'Cheery', 'Combat', 'Creepy', 'Dark', 'Mysterious', 'Mystical', 'Passive'];
 
 /////////////////////////////////////////////////////////
 // SONGHOLDER CLASS
 // Represents the data within one row
 /////////////////////////////////////////////////////////
 
 class SongHolder 
 {
	constructor()
	{
		this.selected = false;
		this.songTitle = "";
		this.songLink = "";
		this.songType = SongType[0];
		this.songSubtype = SongSubType[0];
		this.songNotes = "";
	}
	 
	getTitle()
	{
		return this.songTitle;
	}
	
	setTitle(title)
	{
		this.songTitle = title;
	}
	
	getLink()
	{
		return this.songLink;
	}
	
	setLink(link)
	{
		this.songLink = link;
	}
	
	getSongType()
	{
		return this.songType;
	}
	
	setSongType(type)
	{
		this.songType = type;
	}
	
	getSubtype()
	{
		return this.songSubtype;
	}
	
	setSubtype(type)
	{
		this.songSubtype = type;
	}
	
	getNotes()
	{
		return this.songNotes;
	}
	
	setNotes(notes)
	{
		this.songNotes = notes;
	}
	
	dataArray()
	{
		return [this.songTitle, this.songLink, this.songType, this.songSubtype,this.songNotes];
	}
 }
 
 /////////////////////////////////////////////////////////
 // NAV ELEMENTS
 /////////////////////////////////////////////////////////
 var saveButton = document.getElementById('saveButton');
 var loadButton = document.getElementById('loadButton');
 var adventureNameInput = document.getElementById('adventureNameInput');
 
 /////////////////////////////////////////////////////////
 // INFO ELEMENTS
 /////////////////////////////////////////////////////////
 var nameInput = document.getElementById('nameInput');
 var linkInput = document.getElementById('linkInput');
 var typeSelector = document.getElementById('types');
 var subtypeSelector = document.getElementById('subtypes');
 var notesArea = document.getElementById('notesInput');
 
 var infoThumbnailImage = document.getElementById('infoImage');
 
 var songIcon = "url('../htdocs/img/music-note.png')";
 var ambienceIcon = "url('../htdocs/img/ambience-icon.png')";
 var soundIcon = "url('../htdocs/img/sound-icon.png')";
 var imageLinkArray = [songIcon, ambienceIcon, soundIcon];
 
 /////////////////////////////////////////////////////////
 // SONGLIST ELEMENTS
 /////////////////////////////////////////////////////////
 var tracksLocation = document.getElementById("songList");
 var currentSongTrack;
 var currentAmbienceTrack;
 var currentSoundTrack;
 var videos = ['M7lc1UVf-VE', '6avJHaC3C2U', 'ecIWPzGEbFc'];
 var songNumber = 0;
 var trackArray = [];
 var htmlTrackArray = [];
 var selectedTrack;
 var selectedTrackIndex = -1;
 
 /////////////////////////////////////////////////////////
 // SONGLIST BUTTON ELEMENTS
 /////////////////////////////////////////////////////////
 var newTrackButton = document.getElementById("newTrackButton");
 var playButton = document.getElementById("playButton");
 var deleteButton = document.getElementById("deleteButton");
 
 /////////////////////////////////////////////////////////
 // MIXER ELEMENTS
 /////////////////////////////////////////////////////////
 var songSlider = document.getElementById("songRange");
 var ambienceSlider = document.getElementById("ambienceRange");
 var soundSlider = document.getElementById("soundRange");
 
 var songFadeButton = document.getElementById("songFade");
 var songPauseButton = document.getElementById("songPause");
 var songLoopButton = document.getElementById("songLoop");
 
 var ambienceFadeButton = document.getElementById("ambienceFade");
 var ambiencePauseButton = document.getElementById("ambiencePause");
 var ambienceLoopButton = document.getElementById("ambienceLoop");
 
 var soundFadeButton = document.getElementById("soundFade");
 var soundPauseButton = document.getElementById("soundPause");
 var soundLoopButton = document.getElementById("soundLoop");
 
 var loopSong = false;
 var loopAmbience = false;
 var loopSound = false;
 
 var songIsPlaying = false;
 var ambienceIsPlaying = false;
 var soundIsPlaying = false;
 
 /////////////////////////////////////////////////////////
 // MODAL ELEMENTS
 /////////////////////////////////////////////////////////
 var aboutButton = document.getElementById("aboutButton");
 var aboutModal = document.getElementById("aboutModal");
 var aboutCloseIcon = document.getElementById("aboutCloseIcon");
 var aboutIsOpen = false;
 
 var howToButton = document.getElementById("howToButton");
 var howToModal = document.getElementById("howToModal");
 var howToCloseicon = document.getElementById("howToCloseIcon");
 var howToIsOpen = false;
 
 var creditsButton = document.getElementById("creditsButton");
 var creditsModal = document.getElementById("creditsModal");
 var creditsCloseicon = document.getElementById("creditsCloseIcon");
 var creditsIsOpen = false;
 
  /////////////////////////////////////////////////////////
 // MODAL EVENTLISTENERS
 /////////////////////////////////////////////////////////
 aboutButton.addEventListener("click", function(){
	if (!aboutIsOpen)
	{
		aboutModal.style.display = "flex";
		aboutModal.style.animationName = "modalBlurIn";
		aboutModal.style.animationDuration = ".2s";
		
		var aboutModalContent = aboutModal.getElementsByClassName("modalContent")[0];
		aboutModalContent.style.animationName = "modalContentSlideIn";
		aboutModalContent.style.animationDuration = ".3s";
		setTimeout(function(){
				aboutIsOpen = true;
		}, 200);
	}
 });
 
 aboutCloseIcon.addEventListener("click", function(){
	if (aboutIsOpen)
	{
		aboutModal.style.animationName = "modalBlurOut";
		aboutModal.style.animationDuration = ".2s";
		
		var aboutModalContent = aboutModal.getElementsByClassName("modalContent")[0];
		aboutModalContent.style.animationName = "modalContentSlideOut";
		aboutModalContent.style.animationDuration = ".3s";
		setTimeout(function(){
				aboutModal.style.display = "none";
				aboutIsOpen = false;
		}, 200);
	}
 });
 
 howToButton.addEventListener("click", function(){
	if (!howToIsOpen)
	{
		howToModal.style.display = "flex";
		howToModal.style.animationName = "modalBlurIn";
		howToModal.style.animationDuration = ".2s";
		
		var howToModalContent = howToModal.getElementsByClassName("modalContent")[0];
		howToModalContent.style.animationName = "modalContentSlideIn";
		howToModalContent.style.animationDuration = ".3s";
		setTimeout(function(){
				howToIsOpen = true;
		}, 200);
	}
 });
 
 howToCloseIcon.addEventListener("click", function(){
	if (howToIsOpen)
	{
		howToModal.style.animationName = "modalBlurOut";
		howToModal.style.animationDuration = ".2s";
		
		var howToModalContent = howToModal.getElementsByClassName("modalContent")[0];
		howToModalContent.style.animationName = "modalContentSlideOut";
		howToModalContent.style.animationDuration = ".3s";
		setTimeout(function(){
				howToModal.style.display = "none";
				howToIsOpen = false;
		}, 200);
	}
 });
 
 creditsButton.addEventListener("click", function(){
	if (!creditsIsOpen)
	{
		creditsModal.style.display = "flex";
		creditsModal.style.animationName = "modalBlurIn";
		creditsModal.style.animationDuration = ".2s";
		
		var creditsContent = creditsModal.getElementsByClassName("modalContent")[0];
		creditsContent.style.animationName = "modalContentSlideIn";
		creditsContent.style.animationDuration = ".3s";
		setTimeout(function(){
				creditsIsOpen = true;
		}, 200);
	}
 });
 
 creditsCloseIcon.addEventListener("click", function(){
	if (creditsIsOpen)
	{
		creditsModal.style.animationName = "modalBlurOut";
		creditsModal.style.animationDuration = ".2s";
		
		var creditsContent = creditsModal.getElementsByClassName("modalContent")[0];
		creditsContent.style.animationName = "modalContentSlideOut";
		creditsContent.style.animationDuration = ".3s";
		setTimeout(function(){
				creditsModal.style.display = "none";
				creditsIsOpen = false;
		}, 200);
	}
 });
 
 /////////////////////////////////////////////////////////
 // NAV BUTTON EVENTLISTENERS
 /////////////////////////////////////////////////////////
 saveButton.addEventListener("click", function(){
	var filename = adventureNameInput.value + ".csv";
	var content = trackArrayToString();
	download(content, filename, 'text/plain');
 });
 
 loadButton.addEventListener("click", function(){
	var element = document.createElement('input');
	element.setAttribute("type","file");
	element.addEventListener("change", readTracksFromFile);
	element.click();
 });
 
 function readTracksFromFile()
 {
	const files = event.target.files;
	if (files.length == 0) return;
	
	selectedTrack = null;
	selectedTrackIndex = null;
	trackArray = [];
	while (htmlTrackArray[0])
	{
		htmlTrackArray[0].remove();
	}
	htmlTrackArray = [];
	songNumber = 0;
	
	var reader = new FileReader();
	reader.onload = function(){
		var text = reader.result;
		const lines = text.split("\r\n");
		for (let i = 0; i < lines.length - 1; i++)
		{
			const trackAttributes = lines[i].split(",");
			var newSong = new SongHolder();
			newSong.setTitle(trackAttributes[0]);
			newSong.setLink(trackAttributes[1]);
			newSong.setSongType(trackAttributes[2]);
			newSong.setSubtype(trackAttributes[3]);
			newSong.setNotes(trackAttributes[4]);
			trackArray.push(newSong);
			
			songList.innerHTML += "<div id=\"" + songNumber + "\"class=\"song\"><div class=\"songThumbnail\"></div><div class=\"songTitle\"><h4 class=\"songHeader\"></h4></div></div>";
			const currentTrack = document.getElementById(songNumber);
			const currentTrackHTML = currentTrack.getElementsByClassName("songHeader")[0];
			currentTrackHTML.innerText = trackAttributes[0];
			updateImage(currentTrack);
			songNumber++;
		}
       };	
	reader.readAsText(files[0]);	

 }
 
function trackArrayToString()
{
	var output = "";
	for (let i = 0; i < trackArray.length; i++)
	{
		const trackData = trackArray[i].dataArray();
		for (let e = 0; e < trackData.length; e++)
		{
			if (e > 0)
			{
				output = output.concat(",");
			}
			output = output.concat(trackData[e]);
		}
		output = output.concat("\r\n");
	}
	return output;
}

function download(content, filename, contentType)
{
	var a = document.createElement('a');
	a.style.display = 'none';
	const file = new Blob([content], {type: contentType});
	
	a.href= URL.createObjectURL(file);
	a.download = filename;
	a.click();

	URL.revokeObjectURL(a.href);
}

 /////////////////////////////////////////////////////////
 // SONGLIST BUTTON EVENTLISTENERS
 /////////////////////////////////////////////////////////
 newTrackButton.addEventListener("click", function(){
	var newTrack;
	if (selectedTrack)
	{
		newIndex = selectedTrackIndex;
		newIndex++;
		selectedTrack.insertAdjacentHTML('afterend', "<div id=\"" + newIndex + "\"class=\"song\"><div class=\"songThumbnail\"></div><div class=\"songTitle\"><h4 class=\"songHeader\"></h4></div></div>");
		trackArray.splice(newIndex, 0, new SongHolder());
		for (var i = 0; i < htmlTrackArray.length; i++)
		{	
			htmlTrackArray[i].setAttribute("id", i);
		}
		const newHTMLTrack = document.getElementById(newIndex);
		updateImage(newHTMLTrack);
	}
	else
	{
		songList.innerHTML += "<div id=\"" + songNumber + "\"class=\"song\"><div class=\"songThumbnail\"></div><div class=\"songTitle\"><h4 class=\"songHeader\"></h4></div></div>";
		selectedTrackIndex = 0;
		trackArray.push(new SongHolder());
	}
	htmlTrackArray = document.getElementsByClassName('song');
    newTrack = htmlTrackArray[selectedTrackIndex];
	newTrack.classList.add('selectedSong');
	selectedTrack = newTrack;
	//trackArray.push(new SongHolder());
	songNumber++;
	updateInfo();
 });
 
document.addEventListener("click", function(event){
	targetParent = event.target.parentNode;
	targetGrandparent = targetParent.parentNode;
	if (targetParent.matches('.song'))
	{
		changeSelectedTrack(targetParent);
		updateInfo();
	}
	else if (targetGrandparent.matches('.song'))
	{
		changeSelectedTrack(targetGrandparent);
		updateInfo();
	}	
});

function changeSelectedTrack(newSelection)
{
	if (selectedTrack)
	{
		selectedTrack.classList.remove('selectedSong');
	}
	newSelection.classList.add('selectedSong');
	selectedTrack = newSelection;
	selectedTrackIndex = newSelection.id;
}
 
 playButton.addEventListener("click", function(){
	if (selectedTrack)
	{
		const currentIndex = selectedTrack.id;
		const currentTrack = trackArray[currentIndex];
		
		if (currentTrack.getSongType() == SongType[0])
		{
			console.log(SongType[0]);
			if (currentSongTrack)
			{
				currentSongTrack.destroy();
			}
			
			currentSongTrack = new YT.Player("songPlayer", {
				height: '390',
				width: '640',
				videoId:  currentTrack.getLink(),
				events: {
					'onReady': onPlayerReady,
					'onStateChange': songVideoStateChange
				}		
			});
			songIsPlaying = true;
			songPauseButton.src = "../htdocs/img/pause-icon-empty.png";
			songPauseButton.classList.add("playing");
		}
		else if (currentTrack.getSongType() == SongType[1])
		{
			console.log(SongType[1]);
			if (currentAmbienceTrack)
			{
				currentAmbienceTrack.destroy();
			}
			
			currentAmbienceTrack = new YT.Player("ambiencePlayer", {
				height: '390',
				width: '640',
				videoId:  currentTrack.getLink(),
				events: {
					'onReady': onPlayerReady,
					'onStateChange': ambienceVideoStateChange
				}		
			});
			ambiencePauseButton.src = "../htdocs/img/pause-icon-empty.png";
			ambiencePauseButton.classList.add("playing");
		}
		else if (currentTrack.getSongType() == SongType[2])
		{
			console.log(SongType[2]);
			if (currentSoundTrack)
			{
				currentSoundTrack.destroy();
			}
			
			currentSoundTrack = new YT.Player("soundPlayer", {
				height: '390',
				width: '640',
				videoId:  currentTrack.getLink(),
				events: {
					'onReady': onPlayerReady,
					'onStateChange': soundVideoStateChange
				}		
			});
			soundPauseButton.src = "../htdocs/img/pause-icon-empty.png";
			soundPauseButton.classList.add("playing");
		}	
	}
 });
 
 deleteButton.addEventListener("click", function(){
	if (selectedTrack)
	{
		selectedTrack.remove();
		selectedTrack = null;
		trackArray.splice(selectedTrackIndex, 1);
		htmlTrackArray = document.getElementsByClassName('song');
		songNumber--;
	
		for (var i = 0; i < htmlTrackArray.length; i++)
		{	
			htmlTrackArray[i].setAttribute("id", i);
		}
		
		if (htmlTrackArray.length > 0)
		{
			if (trackArray.length == selectedTrackIndex)
			{
				selectedTrackIndex--;
				selectedTrack = htmlTrackArray[selectedTrackIndex];
				htmlTrackArray[selectedTrackIndex].classList.add('selectedSong');
			}
			else
			{
				selectedTrack = htmlTrackArray[selectedTrackIndex];
				htmlTrackArray[selectedTrackIndex].classList.add('selectedSong');	
			}
			updateInfo();
		}	
	}
 });

 
 /////////////////////////////////////////////////////////
 // INFO EVENTLISTENERS
 /////////////////////////////////////////////////////////
 nameInput.addEventListener("change", function(){
	if (selectedTrack)
	{
		const currentTrack = trackArray[selectedTrack.id];
		const currentTrackHTML = document.getElementById(selectedTrack.id).getElementsByClassName("songHeader")[0];
		currentTrack.setTitle(nameInput.value);
		currentTrackHTML.innerText = nameInput.value;
	}
 });
 
 linkInput.addEventListener("change", function(){
	if (selectedTrack)
	{
		const currentIndex = selectedTrack.id;
		const currentTrack = trackArray[currentIndex];
		currentTrack.setLink(linkInput.value);
	}
 });
 
 typeSelector.addEventListener("change", function(){
	if (selectedTrack)
	{
		const currentIndex = selectedTrack.id;
		const currentTrack = trackArray[currentIndex];
		currentTrack.setSongType(typeSelector.value);
		updateImage(selectedTrack);
	}
 });
 
 subtypeSelector.addEventListener("change", function(){
	if (selectedTrack)
	{
		const currentIndex = selectedTrack.id;
		const currentTrack = trackArray[currentIndex];
		currentTrack.setSubtype(subtypeSelector.value);
	}
 });
 
 notesArea.addEventListener("change", function(){
	if (selectedTrack)
	{
		const currentIndex = selectedTrack.id;
		const currentTrack = trackArray[currentIndex];
		currentTrack.setNotes(notesArea.value);
	}
 });

 /////////////////////////////////////////////////////////
 // INFO FUNCTIONS
 /////////////////////////////////////////////////////////
 // Updates the values listed in the info sections based on the selectedTrack
 function updateInfo()
 {
	if (selectedTrack)
	{
		const currentTrack = trackArray[selectedTrackIndex];
		const currentSongType = currentTrack.getSongType();
		//const selectedSongThumbnail = selectedTrack.getElementsByClassName("songThumbnail")[0];
		nameInput.value = currentTrack.getTitle();
		linkInput.value = currentTrack.getLink();
		typeSelector.value = currentSongType;
		subtypeSelector.value = currentTrack.getSubtype();
		notesArea.value = currentTrack.getNotes();
		updateImage(selectedTrack);
	}
	else
	{
		nameInput.value = '';
		linkInput.value = '';
		typeSelector.value = SongType[0];
		subtypeSelector.value = SongSubType[0];
		notesArea.value = '';
	}
	
 }
 
 function updateImage(htmlTrack) {
	 const currentTrack = trackArray[htmlTrack.id];
	 const currentSongType = currentTrack.getSongType();
	 const selectedSongThumbnail = htmlTrack.getElementsByClassName("songThumbnail")[0];
	 
	 if (currentSongType == "Song")
		{
			infoThumbnailImage.style.backgroundImage = songIcon;
			selectedSongThumbnail.style.backgroundImage = songIcon;
		}
		else if (currentSongType == "Ambience")
		{
			infoThumbnailImage.style.backgroundImage = ambienceIcon;
			selectedSongThumbnail.style.backgroundImage = ambienceIcon;
		}
		else if (currentSongType == "Sound")
		{
			infoThumbnailImage.style.backgroundImage = soundIcon;
			selectedSongThumbnail.style.backgroundImage = soundIcon;
		}
 }

 /////////////////////////////////////////////////////////
 // MIXER EVENTS
 /////////////////////////////////////////////////////////
 // Song Events
 songFadeButton.addEventListener("click", function(){
	if (currentSongTrack)
	{
		//currentSongTrack.playVideo();
		songSlider.value = songSlider.value - 1;
		const tester  = songSlider.value;
		for (let i = 1; i < tester; i++)
		{
			setTimeout(function(){
				songSlider.value = songSlider.value - 1;
				currentSongTrack.setVolume(songSlider.value);
				songSlider.style.backgroundColor = "rgba(255,215,0," + (songSlider.value / 75) + ")";
			}, 50 * i);
		}
	}
 })
 
 songPauseButton.addEventListener("click", function(){
	if (currentSongTrack)
	{
		if (currentSongTrack.getPlayerState() ==  1)
		{
			currentSongTrack.pauseVideo();
			songPauseButton.src = "../htdocs/img/pause-icon-empty.png";
			songPauseButton.classList.remove("playing");
			songIsPlaying = false;
		}
		else if (currentSongTrack.getPlayerState() == 2)
		{
			currentSongTrack.playVideo();
			songPauseButton.src = "../htdocs/img/play-icon-empty.png";
			songPauseButton.classList.add("playing");
			songIsPlaying = true;
		}
	}
 });
 
 
 songLoopButton.addEventListener("click", function(){
	loopSong = !loopSong;
	if (loopSong)
	{	
		songLoopButton.classList.add("looping");
	}
	else
	{
		songLoopButton.classList.remove("looping");
	}
 });
 
 // Ambience Events
 ambienceFadeButton.addEventListener("click", function(){
	if (currentAmbienceTrack)
	{
		//currentSongTrack.playVideo();
		ambienceSlider.value = ambienceSlider.value - 1;
		const tester  = ambienceSlider.value;
		for (let i = 1; i < tester; i++)
		{
			setTimeout(function(){
				ambienceSlider.value = ambienceSlider.value - 1;
				currentAmbienceTrack.setVolume(ambienceSlider.value);
				ambienceSlider.style.backgroundColor = "rgba(255,215,0," + (ambienceSlider.value / 75) + ")";
			}, 50 * i);
		}
	}
 })
 
 ambiencePauseButton.addEventListener("click", function(){
	if (currentAmbienceTrack)
	{
		if (currentAmbienceTrack.getPlayerState() ==  1)
		{
			currentAmbienceTrack.pauseVideo();
			ambiencePauseButton.src = "../htdocs/img/pause-icon-empty.png";
			ambiencePauseButton.classList.remove("playing");
		}
		else if (currentAmbienceTrack.getPlayerState() == 2)
		{
			currentAmbienceTrack.playVideo();
			ambiencePauseButton.src = "../htdocs/img/play-icon-empty.png";
			ambiencePauseButton.classList.add("playing");
		}
	}
 });
 
 ambienceLoopButton.addEventListener("click", function(){
	loopAmbience = !loopAmbience;
	if (loopAmbience)
	{	
		ambienceLoopButton.classList.add("looping");
	}
	else
	{
		ambienceLoopButton.classList.remove("looping");
	}
 });
 
 // Sound Events
  soundFadeButton.addEventListener("click", function(){
	if (currentSoundTrack)
	{
		//currentSongTrack.playVideo();
		soundSlider.value = soundSlider.value - 1;
		const tester  = soundSlider.value;
		for (let i = 1; i < tester; i++)
		{
			setTimeout(function(){
				soundSlider.value = soundSlider.value - 1;
				currentSoundTrack.setVolume(soundSlider.value);
				soundSlider.style.backgroundColor = "rgba(255,215,0," + (soundSlider.value / 75) + ")";
			}, 50 * i);
		}
	}
 })
 
 soundPauseButton.addEventListener("click", function(){
	if (currentSoundTrack)
	{
		if (currentSoundeTrack.getPlayerState() ==  1)
		{
			currentSoundTrack.pauseVideo();
			soundPauseButton.src = "../htdocs/img/pause-icon-empty.png";
			soundPauseButton.classList.remove("playing");
		}
		else if (currentSoundTrack.getPlayerState() == 2)
		{
			currentSoundTrack.playVideo();
			soundPauseButton.src = "../htdocs/img/play-icon-empty.png";
			soundPauseButton.classList.add("playing");
		}
	}
 });
 
 soundLoopButton.addEventListener("click", function(){
	loopSound = !loopSound;
	if (loopSound)
	{	
		soundLoopButton.classList.add("looping");
	}
	else
	{
		soundLoopButton.classList.remove("looping");
	}
 });
 
 //Slider Events
 
 songSlider.addEventListener("change", function(){
	songSlider.style.backgroundColor = "rgba(255,215,0," + (songSlider.value / 75) + ")";
	if (currentSongTrack)
	{
		//console.log("background: rgba(255,215,0," + (songSlider.value / 100) + ");");
		
		currentSongTrack.setVolume(songSlider.value);
	}
 });
 
 ambienceSlider.addEventListener("change", function(){
	ambienceSlider.style.backgroundColor = "rgba(255,215,0," + (ambienceSlider.value / 75) + ")";
	if (currentAmbienceTrack)
	{
		currentAmbienceTrack.setVolume(ambienceSlider.value);
	}
 });
 
 soundSlider.addEventListener("change", function(){
	soundSlider.style.backgroundColor = "rgba(255,215,0," + (soundSlider.value / 75) + ")";
	if (currentSoundTrack)
	{
		currentSoundTrack.setVolume(soundSlider.value);
	}
 });

 /////////////////////////////////////////////////////////
 // YOUTUBE API FUNCTIONS
 /////////////////////////////////////////////////////////
 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
	 /*
	var playersChildren = playerLocation.childNodes;
	var buttonsChildren = buttonsLocation.childNodes;
	for (var i = 0; i < playersChildren.length; i++)
	{
		const temp = new YT.Player("player" + i, {
			height: '390',
			width: '640',
			videoId: videos[i],
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}		
		});
		
		buttonsChildren[i].addEventListener("click", function(){
			temp.playVideo();
		});
	}  */

 }
 
 function onPlayerReady(event) {
	if (currentSongTrack)
	{
		currentSongTrack.setVolume(songSlider.value);
	}
	
	if (currentAmbienceTrack)
	{
		currentAmbienceTrack.setVolume(ambienceSlider.value);
	}
	
	if (currentSoundTrack)
	{
		currentSoundTrack.setVolume(soundSlider.value);
	}
	
	event.target.playVideo();
 }
 
 function songVideoStateChange(event) {
	if (event.data == YT.PlayerState.ENDED && loopSong) {
		
		currentSongTrack.seekTo(0, true)
    } 
 }
 
 function ambienceVideoStateChange(event) {
	 if (event.data == YT.PlayerState.ENDED && loopAmbience) {
		currentAmbienceTrack.seekTo(0, true)
    } 
 }
 
 function soundVideoStateChange(event) {
	if (event.data == YT.PlayerState.ENDED && loopSound) {
		currentSoundTrack.seekTo(0, true)
    } 
 }

 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.ENDED && loopSong) {
		
		currentSongTrack.seekTo(0, true)
   }
 }
 function stopVideo() {
   player.stopVideo();
 }
	  
	  
	  
	  
	  
