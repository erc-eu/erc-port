
import myPhoto from '../assets/myphoto.png'
import './my-photo.css'

export function MyPhoto() {
    return (
        <div className='card'>
            <div className='caixa-foto'>
                <div className='opacity'>
                    <img src={myPhoto} alt="" />
                </div>
            </div>
        </div>
    )
}