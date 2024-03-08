import style from './Project.module.scss'
import Item from './Item'
import data from './data.module'

const Project = () => {
    return (
        <section className={`${style['project']}`}>
            <svg style={{top: '70px', stroke: "#e5e7eb", width: '100%', height: 'calc(100% - 70px)', position: 'absolute', zIndex: '-1', webkitMaskImage: 'radial-gradient(100% 100% at right top, #fff, rgb(255 255 255 / 21%))'}} aria-hidden="true">
                <defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M100 200V.5M.5 .5H200" fill="none"></path></pattern></defs>
                <svg fill='#f9fafb' x="50%" y="-1" className="overflow-visible fill-gray-50"><path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokewidthh="0"></path></svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
            </svg>
            <div className='container'>
                <div className='row'>
                    <div className='d-none d-lg-block col-12 col-lg-7'>
                        <div className='row'>
                            <div className='d-none d-lg-block col-lg-6'>
                                <div style={{width: '100%', height: 'calc( 200px )', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', }}>
                                    <video style={{height: '100%', position: 'absolute', top: '0', right: '0'}} autoPlay={true} playsInline muted loop preload="none"
                                        poster="thumbnail.png">
                                        <source src={'../../../assets/gz-home.mp4'} type="video/mp4" />
                                    </video>
                                </div>
                                <div style={{width: '100%', height: 'calc( 200px)', position: 'relative', borderRadius: '12px', overflow: 'hidden'}}>
                                    <video style={{width: 'calc(100% + 200px)', position: 'absolute', top: '0', right: '0'}} autoPlay={true} playsInline muted loop preload="none"
                                        poster="thumbnail.png">
                                        <source src={'../../../assets/gz-card.mp4'} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className='d-none d-lg-block col-lg-6'>
                                <Item item={data.onlinetkt}/>
                            </div>
                            <div className='d-none d-lg-block col-lg-12'>
                                <Item item={data.tasks}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <Item item={data.tender}/>
                        <Item item={data.mobileapp}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project