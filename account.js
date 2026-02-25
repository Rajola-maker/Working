const countries = [
  {name:"Afghanistan", code:"+93", flag:"🇦🇫"},
  {name:"Albania", code:"+355", flag:"🇦🇱"},
  {name:"Algeria", code:"+213", flag:"🇩🇿"},
  {name:"Andorra", code:"+376", flag:"🇦🇩"},
  {name:"Angola", code:"+244", flag:"🇦🇴"},
  {name:"Argentina", code:"+54", flag:"🇦🇷"},
  {name:"Armenia", code:"+374", flag:"🇦🇲"},
  {name:"Australia", code:"+61", flag:"🇦🇺"},
  {name:"Austria", code:"+43", flag:"🇦🇹"},
  {name:"Azerbaijan", code:"+994", flag:"🇦🇿"},

  {name:"Bahamas", code:"+1-242", flag:"🇧🇸"},
  {name:"Bahrain", code:"+973", flag:"🇧🇭"},
  {name:"Bangladesh", code:"+880", flag:"🇧🇩"},
  {name:"Barbados", code:"+1-246", flag:"🇧🇧"},
  {name:"Belarus", code:"+375", flag:"🇧🇾"},
  {name:"Belgium", code:"+32", flag:"🇧🇪"},
  {name:"Belize", code:"+501", flag:"🇧🇿"},
  {name:"Benin", code:"+229", flag:"🇧🇯"},
  {name:"Bhutan", code:"+975", flag:"🇧🇹"},
  {name:"Bolivia", code:"+591", flag:"🇧🇴"},
  {name:"Bosnia", code:"+387", flag:"🇧🇦"},
  {name:"Botswana", code:"+267", flag:"🇧🇼"},
  {name:"Brazil", code:"+55", flag:"🇧🇷"},
  {name:"Brunei", code:"+673", flag:"🇧🇳"},
  {name:"Bulgaria", code:"+359", flag:"🇧🇬"},
  {name:"Burkina Faso", code:"+226", flag:"🇧🇫"},
  {name:"Burundi", code:"+257", flag:"🇧🇮"},

  {name:"Cambodia", code:"+855", flag:"🇰🇭"},
  {name:"Cameroon", code:"+237", flag:"🇨🇲"},
  {name:"Canada", code:"+1", flag:"🇨🇦"},
  {name:"Chile", code:"+56", flag:"🇨🇱"},
  {name:"China", code:"+86", flag:"🇨🇳"},
  {name:"Colombia", code:"+57", flag:"🇨🇴"},
  {name:"Congo", code:"+242", flag:"🇨🇬"},
  {name:"Costa Rica", code:"+506", flag:"🇨🇷"},
  {name:"Croatia", code:"+385", flag:"🇭🇷"},
  {name:"Cuba", code:"+53", flag:"🇨🇺"},

  {name:"Czech Republic", code:"+420", flag:"🇨🇿"},
  {name:"Denmark", code:"+45", flag:"🇩🇰"},
  {name:"Djibouti", code:"+253", flag:"🇩🇯"},
  {name:"Dominica", code:"+1-767", flag:"🇩🇲"},
  {name:"Dominican Republic", code:"+1-809", flag:"🇩🇴"},

  {name:"Ecuador", code:"+593", flag:"🇪🇨"},
  {name:"Egypt", code:"+20", flag:"🇪🇬"},
  {name:"El Salvador", code:"+503", flag:"🇸🇻"},
  {name:"Estonia", code:"+372", flag:"🇪🇪"},
  {name:"Ethiopia", code:"+251", flag:"🇪🇹"},

  {name:"Finland", code:"+358", flag:"🇫🇮"},
  {name:"France", code:"+33", flag:"🇫🇷"},

  {name:"Germany", code:"+49", flag:"🇩🇪"},
  {name:"Ghana", code:"+233", flag:"🇬🇭"},
  {name:"Greece", code:"+30", flag:"🇬🇷"},
  {name:"Greenland", code:"+299", flag:"🇬🇱"},
  {name:"Guatemala", code:"+502", flag:"🇬🇹"},

  {name:"Haiti", code:"+509", flag:"🇭🇹"},
  {name:"Honduras", code:"+504", flag:"🇭🇳"},
  {name:"Hungary", code:"+36", flag:"🇭🇺"},

  {name:"Iceland", code:"+354", flag:"🇮🇸"},
  {name:"India", code:"+91", flag:"🇮🇳"},
  {name:"Indonesia", code:"+62", flag:"🇮🇩"},
  {name:"Iran", code:"+98", flag:"🇮🇷"},
  {name:"Iraq", code:"+964", flag:"🇮🇶"},
  {name:"Ireland", code:"+353", flag:"🇮🇪"},
  {name:"Israel", code:"+972", flag:"🇮🇱"},
  {name:"Italy", code:"+39", flag:"🇮🇹"},

  {name:"Jamaica", code:"+1-876", flag:"🇯🇲"},
  {name:"Japan", code:"+81", flag:"🇯🇵"},
  {name:"Jordan", code:"+962", flag:"🇯🇴"},

  {name:"Kazakhstan", code:"+7", flag:"🇰🇿"},
  {name:"Kenya", code:"+254", flag:"🇰🇪"},
  {name:"Kuwait", code:"+965", flag:"🇰🇼"},
  {name:"Kyrgyzstan", code:"+996", flag:"🇰🇬"},

  {name:"Latvia", code:"+371", flag:"🇱🇻"},
  {name:"Lebanon", code:"+961", flag:"🇱🇧"},
  {name:"Lesotho", code:"+266", flag:"🇱🇸"},
  {name:"Liberia", code:"+231", flag:"🇱🇷"},
  {name:"Libya", code:"+218", flag:"🇱🇾"},
  {name:"Lithuania", code:"+370", flag:"🇱🇹"},
  {name:"Luxembourg", code:"+352", flag:"🇱🇺"},

  {name:"Madagascar", code:"+261", flag:"🇲🇬"},
  {name:"Malawi", code:"+265", flag:"🇲🇼"},
  {name:"Malaysia", code:"+60", flag:"🇲🇾"},
  {name:"Maldives", code:"+960", flag:"🇲🇻"},
  {name:"Mali", code:"+223", flag:"🇲🇱"},
  {name:"Malta", code:"+356", flag:"🇲🇹"},
  {name:"Mexico", code:"+52", flag:"🇲🇽"},
  {name:"Monaco", code:"+377", flag:"🇲🇨"},
  {name:"Mongolia", code:"+976", flag:"🇲🇳"},
  {name:"Morocco", code:"+212", flag:"🇲🇦"},
  {name:"Mozambique", code:"+258", flag:"🇲🇿"},

  {name:"Namibia", code:"+264", flag:"🇳🇦"},
  {name:"Nepal", code:"+977", flag:"🇳🇵"},
  {name:"Netherlands", code:"+31", flag:"🇳🇱"},
  {name:"New Zealand", code:"+64", flag:"🇳🇿"},
  {name:"Nigeria", code:"+234", flag:"🇳🇬"},
  {name:"Norway", code:"+47", flag:"🇳🇴"},

  {name:"Pakistan", code:"+92", flag:"🇵🇰"},
  {name:"Panama", code:"+507", flag:"🇵🇦"},
  {name:"Paraguay", code:"+595", flag:"🇵🇾"},
  {name:"Peru", code:"+51", flag:"🇵🇪"},
  {name:"Philippines", code:"+63", flag:"🇵🇭"},
  {name:"Poland", code:"+48", flag:"🇵🇱"},
  {name:"Portugal", code:"+351", flag:"🇵🇹"},

  {name:"Qatar", code:"+974", flag:"🇶🇦"},

  {name:"Romania", code:"+40", flag:"🇷🇴"},
  {name:"Russia", code:"+7", flag:"🇷🇺"},
  {name:"Rwanda", code:"+250", flag:"🇷🇼"},

  {name:"Saudi Arabia", code:"+966", flag:"🇸🇦"},
  {name:"Senegal", code:"+221", flag:"🇸🇳"},
  {name:"Serbia", code:"+381", flag:"🇷🇸"},
  {name:"Singapore", code:"+65", flag:"🇸🇬"},
  {name:"South Africa", code:"+27", flag:"🇿🇦"},
  {name:"South Korea", code:"+82", flag:"🇰🇷"},
  {name:"Spain", code:"+34", flag:"🇪🇸"},
  {name:"Sri Lanka", code:"+94", flag:"🇱🇰"},
  {name:"Sudan", code:"+249", flag:"🇸🇩"},
  {name:"Sweden", code:"+46", flag:"🇸🇪"},
  {name:"Switzerland", code:"+41", flag:"🇨🇭"},

  {name:"Tanzania", code:"+255", flag:"🇹🇿"},
  {name:"Thailand", code:"+66", flag:"🇹🇭"},
  {name:"Turkey", code:"+90", flag:"🇹🇷"},
  {name:"Uganda", code:"+256", flag:"🇺🇬"},
  {name:"Ukraine", code:"+380", flag:"🇺🇦"},
  {name:"United Arab Emirates", code:"+971", flag:"🇦🇪"},
  {name:"United Kingdom", code:"+44", flag:"🇬🇧"},
  {name:"United States", code:"+1", flag:"🇺🇸"},
  {name:"Uruguay", code:"+598", flag:"🇺🇾"},
  {name:"Uzbekistan", code:"+998", flag:"🇺🇿"},

  {name:"Venezuela", code:"+58", flag:"🇻🇪"},
  {name:"Vietnam", code:"+84", flag:"🇻🇳"},

  {name:"Yemen", code:"+967", flag:"🇾🇪"},

  {name:"Zambia", code:"+260", flag:"🇿🇲"},
  {name:"Zimbabwe", code:"+263", flag:"🇿🇼"}
];

// populate dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach((c, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.innerText = `${c.flag} ${c.name} (${c.code})`;
  countrySelect.appendChild(option);
});

countrySelect.addEventListener("change", () => {
  const selected = countries[countrySelect.value];
  document.getElementById("countryCode").value = selected.code;
});

// load profile
window.onload = function() {
  const profile = JSON.parse(localStorage.getItem("venocyberProfile"));

  if(profile){
    document.getElementById("profilePic").src = profile.pic || "https://i.imgur.com/7Q5aH7u.png";
    document.getElementById("usernameText").innerText = profile.username || "Venocyber";
    document.getElementById("emailText").innerText = profile.email || "venocyber@example.com";
    document.getElementById("phoneText").innerText = profile.phoneFull || "+255 7XX XXX XXX";
    document.getElementById("countryText").innerText = profile.country || "Tanzania";

    document.getElementById("usernameInput").value = profile.username || "";
    document.getElementById("emailInput").value = profile.email || "";
    document.getElementById("phoneInput").value = profile.phone || "";

    const index = countries.findIndex(c => c.name === profile.country);
    if(index !== -1){
      countrySelect.value = index;
      document.getElementById("countryCode").value = countries[index].code;
    }
  }
};

function saveProfile(){
  const selectedCountry = countries[countrySelect.value];

  const profile = {
    username: document.getElementById("usernameInput").value,
    email: document.getElementById("emailInput").value,
    phone: document.getElementById("phoneInput").value,
    country: selectedCountry.name,
    countryCode: selectedCountry.code,
    phoneFull: selectedCountry.code + " " + document.getElementById("phoneInput").value,
    pic: document.getElementById("profilePic").src
  };

  localStorage.setItem("venocyberProfile", JSON.stringify(profile));
  alert("Profile saved!");
  window.location.reload();
}

// navigation
function goHome(){ window.location.href = "home.html"; }
function goGames(){ window.location.href = "games.html"; }
function goChats(){ window.location.href = "chat.html"; }
function goTournaments(){ window.location.href = "tournaments.html"; }
const imageUpload = document.getElementById("imageUpload");
const profilePic = document.getElementById("profilePic");

// Load saved image
window.addEventListener("load", function () {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profilePic.src = savedImage;
    }
});

// Upload new image
imageUpload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profilePic.src = e.target.result;
            localStorage.setItem("profileImage", e.target.result);
        };

        reader.readAsDataURL(file);
    }
});
