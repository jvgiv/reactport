import React from 'react'
import cert from '../images/cert.jpg'

export default function About() {
    return (
        <div className="display">
            <img src={cert} alt="Flaming Lips" />
            <h2 className="title">About</h2>
            <p className="paragraph">After graduating from college, I looked into a career in radio broadcasting.  After an internship at the local radio station, I was hired as a part time employee.  After a while, I realized that radio just wasn't for me.  It was then that I got into the mortgage industry.  I was a mortgage processor for one year before obtaining my NMLS License.  My mortgage career continued for three years.  During this I decided to try some web development on the side.  My first projects were awesome and I was fascinated with how one could manipulate the layout of a website.  This slowly progressed further and further until I ended up at the Lambda School to pursue my goal of becoming a full time web developer.</p>
        </div>
    )
}
