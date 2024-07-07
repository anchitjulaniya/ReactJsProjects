import React from 'react'

function About() {
  return (
    <div className=' w-[90%] mx-auto lg:mx-0 lg:w-3/4'>
        <h1 className='text-white text-6xl mb-5'>About <span className='text-[rgb(133,146,153)]'>me:</span></h1>
        <div className='border-white border-[1px] rounded-lg px-5 py-10 backdrop-blur-md text-[rgb(236,239,241)]'>
            <p>So, you made it this far into my website. Hopefully you find it interesting!</p>
            <br />
            <p>👨‍💻 <span className='text-[rgb(0,216,182)]'>Let me introduce myself:</span>I'm Tanish Manku, an originally self-taught and later professionally-trained Software Developer based in Vancouver, Canada.</p>
            <br />
            <p>🎓 I&apos;m currently pursuing a Masters of Science in Computer Science at UNSW. I'm passionate about creating and designing beautiful and responsive websites.</p>
            <br />
            <p>This allows me to build some nice and fluid user-interfaces. Bézier curves and splines seem to be all the rage in animations these days. Pairing it with my UI design skills, I can create some delicious eye-candy interactive custom effects. The blob and logos you see in the background is one example, they react when you move the mouse around too! 🤯</p>
            <br />
            <p>Apart from coding, I also love cooking 🍔 and working out 💪 - the perfect health and fitness combo - as well as playing sports like Badminton 🏸 and Soccer ⚽️. I'm no stranger to video games 🎮 either and spend a bunch of time playing online with my friends. Ask me about Quantum Break, my favourite game, and I'll ramble on for HOURS! I've hiked 🥾 on the Himalayas 🏔️, I've walked up a thousand stairs to a temple 🛕, I've gone paragliding 🪂, I've ridden horses 🏇, elephants 🐘, camels 🐫 - and yet somehow I never quite learned to swim 🏊‍♂️, but I'd absolutely love to! I remember taking swimming lessons as a kid for a couple weeks alongside some martial arts 🥋 lessons - but surprisingly never sustained either 😂</p>
            <br /><br />
            <p className='text-[rgb(0,216,182)]'>Languages:</p>
            <p className='text-[rgb(230,203,163)]'>Java, Kotlin, Swift, JavaScript, TypeScript, Dart, C, C++, C#, HTML, SQL, CSS, XML</p>
            <br /><br />
            <p className='text-[rgb(0,216,182)]'>Have used:</p>
            <p className='text-[rgb(230,203,163)]'>Android SDK, iOS SDK, Flutter SDK, Spotify Web API, Discord bot API, Twitter bot API, ReactJS, TailwindCSS, Git, Unity</p>
        </div>
    </div>
  )
}

export default About