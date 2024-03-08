import style from './About.module.scss'

const AboutText = () => {
    return (
        <div className={`${style['about__text']}`}>
            <h1 className={`${style['about__text--title']}`}>
                About OPHOSS
            </h1>
            <div className={`${style['about__text--descr']}`}>
                <p>
                ჩვენი გუნდი შექმნილია იმ ხალხის მიერ რომლებიც მუშაობენ
                2014 წლიდან. 
                </p>
                <p>
                სხვასდასხვა კომპანიებში მათ დააგროვეს ის ხედვა და გამცოდიელბა რაც ამ საქმეში საჭიროა.
                </p>
                <p>
                    შვენს მიერ არის შექმნილი კრიპტო პლატფორმის აპლიკაცია, e-commerce საიტები, b2b და p2p სისტემები, ონლაინ ბილეთების პლატფორმა, დავალებების მენეჯმენტ სისტემა, ონლაინ კრიპტო კაზინო და სხვა uix ვებ გვერდები.
                </p>
            </div>
        </div>
    )
}

export default AboutText