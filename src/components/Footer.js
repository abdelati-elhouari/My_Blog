import React from 'react';
import { Link } from 'react-router-dom';
import './style/Footer.css'

const Footer = () => {
    return (
        <footer class="footer">
		   <div class="">
				<ul class="">					
                    <li className=''><Link to={"/"}> Home </Link> </li>
                    <li className=''><Link to={"/About"}> About </Link></li>	
				</ul>
			</div>			
	</footer>
    );
};

export default Footer;