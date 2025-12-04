import '../../styles/vietnam-guide-styles/Page2.css'
import vittaemoneyLogo from '../../assets/vittaemoneylogo2.avif'

const Page2 = () => {
    return (
        <div className="vtgp-page-2 vtgp-page d-flex">
            <div className="vtgp-left-part">.</div>
            <div className="vtgp-right-part d-flex flex-column">
                <div className="vtgp-2-top-part">
                    <h1 className='vtgp-2-head'>TABLE OF <br /><span style={{marginLeft:'3rem'}}>CONTENT</span></h1>
                    <ol type='1' className='vtgp-table-of-content'>
                        <li className="vtgp-li-sub-head">INTRODUCTION</li>
                        <ul type="none">
                            <li className="vtgp-li-item">1.1 Introduction to this guide</li>
                            <li className="vtgp-li-item">1.2 How We Research</li>
                        </ul>
                        <li className="vtgp-li-sub-head">EXPENSE BREAKDOWN</li>
                        <ul type="none">
                            <li className="vtgp-li-item">2.1 Accomodations</li>
                            <li className="vtgp-li-item">2.2 Dining</li>
                            <li className="vtgp-li-item">2.3 Local Transport</li>
                            <li className="vtgp-li-item">2.4 Attractions</li>
                            <li className="vtgp-li-item">2.5 Miscellaneous</li>
                            <li className="vtgp-li-item">2.6 Flights</li>
                            <li className="vtgp-li-item">2.7 Visa + SIM + Insurance</li>
                        </ul>
                        <li className="vtgp-li-sub-head">STRATEGIC SUMMARY</li>
                        <ul type='none'>
                            <li className="vtgp-li-item">3.1 Recap</li>
                        </ul>

                    </ol>
                    
                </div>
                <div className="vtgp-2-bottom-part">
                    <img src={vittaemoneyLogo} loading='lazy' alt="logo" className='vtgp-logo' />
                </div>
            </div>
        </div>
    )
}

export default Page2