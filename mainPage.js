let lightTheme = true; //0 is Light mode and 1 is dark mode

/*
*Changes the theme to light or dark when the icon is clicked
*/
function changeTheme()
{
    if(lightTheme)
    {
        document.getElementById('viewMode').src = './clothesimgs/Moondark.png';
        lightTheme = false;
    }
    else
    {
        document.getElementById('viewMode').src = './clothesimgs/SunDimlight.png';
        lightTheme = true;
    }
}