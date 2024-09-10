import '../styles/Header.css'
import search from "../assets/search.png";
import heart from "../assets/heart.png";
import profile from "../assets/profile.png";
export default function Header(){
    return(
        <header className="header">
                <div className="logo"></div>
                <ul>
                    <li><a href="#">전시 추천</a></li>
                    <li><a href="#">팔로우</a></li>
                    <li><a href="#">내 근처</a></li>
                    <li><a href="#">일정별</a></li>
                </ul>
                <div className="search"></div>
                <div className="header-icons">
                    <a href="#"><img className="search-icon" src={search} alt="search" /></a>
                    <a href="#"><img className="heart-icon" src={heart} alt="heart" /></a>
                    <a href="#"><img className="profile-icon" src={profile} alt="profile" /></a>
                </div>
            </header>
    )
}