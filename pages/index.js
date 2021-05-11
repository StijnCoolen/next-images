
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <p>Fill (cover)</p>
      <div style={{height: 400, width: 400, position: 'relative'}} >
        <Image src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" objectFit='cover' layout='fill' />
      </div>
      <p>Fill (contain)</p>
      <div style={{height: 400, width: 400, position: 'relative'}} >
        <Image src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" objectFit='contain' layout='fill' />
      </div>
      <p>Responsive</p>
      <Image src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" width={1200} height={801} layout='responsive' />
      <p>Intrinsic</p>
      <Image src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" width={1200} height={801} layout='intrinsic' />
      <p>Fixed</p>
      <Image src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" width={1200} height={801} layout='fixed' />
    </div>
  )
}
