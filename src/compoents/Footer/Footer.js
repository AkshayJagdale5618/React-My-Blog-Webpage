// Import Something from 'somewhere'
import './Footer.css'

export default function Footer(){
    return(
        <>
            <div className='foot'>
                    <div className='links'>
                        <h2>Links</h2>
                        <ul>
                            <li><a href="javascript:void()">Google</a> - Lorem ipsum dolor sits amet</li>
                            <li><a href="javascript:void()">CNC Web World</a> - Lorem ipsum dolor</li>
                            <li><a href="javascript:void()">YouTube</a> - Lorem ipsum dolor sit </li>
                        </ul>
                    </div>
                    <div className='follow'>
                        <h2>Follow our updates</h2>
                        <ul>
                            <li><a href="javascript:void()"> Subscibed to CNC Web Wolrd</a></li>
                            <li><a href="javascript:void()"> What is CNC ?</a></li>
                            <li><a href="javascript:void()"> Email Updates</a></li>
                        </ul>
                    </div>
                
                    <div className='copyright'>
                        <h2>Copyright</h2>
                        <p>Copyright By @Akshay Jagdale</p>
                        <p>All Rights Reservied</p>
                    </div>
                
            </div>   
        </>

        
    );
}