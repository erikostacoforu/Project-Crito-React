import React from 'react'

import img_article1 from '../assets/images/article1.png'
import img_article2 from '../assets/images/article2.png'
import img_article3 from '../assets/images/article3.png'


const ArticleNews = () => {
  return (
    <section className="article-news">
    <div className="container">
        <p className="små-rubriker article-news-p">Article & News</p>
        <div className="article-news-header">
            <h2>Get Every Single Articles & Newsp</h2>
            <a className="transparent-knapp" href="#">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>  
        </div>
        <div className="article-news-box-flex">
            <div>
                <img src={img_article1} alt="woman sitting in dining room" />
                <p>Buisness</p>
                <h3>How To Use Digitalization<br /> In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div>
                <img src={img_article2} alt="information about Chat GPT" />
                <p>Buisness</p>
                <h3>How To Implement Chat GPT<br /> In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div>
                <img src={img_article3} alt="picture of 2 books and a phone ontop" />
                <p>Buisness</p>
                <h3>The Guide To Support<br /> Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
        </div>
        <div className="dots-center2">
            <i className="fa-solid fa-circle dot-black"></i>
            <i className="fa-solid fa-circle"></i>                       
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
        </div>
    </div>
</section>
  )
}

export default ArticleNews