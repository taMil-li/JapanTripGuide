import '../../styles/vietnam-guide-styles/PageRemaining.css'
import vittaemoneyLogo from '../../assets/vittaemoneylogo2.avif'

const Page4 = ({expenses}) => {
    const attractions = expenses?.attractions ?? {};
    const main = attractions?.main ?? {};
    const additionals = attractions?.additionals ?? {};

    return (
        <div className="vtgp-page-3 vtgp-page-4 vtgp-page">
            <div className="vtgp-left-part d-flex flex-column">
                <img src={vittaemoneyLogo} alt="logo" className='vtgp-logo vtgp-part-1' />
                <div className="vtgp-part-2">
                    <h1 className="vtgp-head">ATTRACTIONS</h1>
                    <hr className='vtgp-line' />
                    <p className="vtgp-para">
                        Attraction costs in Vietnam are highly variable,
                        from verylow entryfees(e.g.,₹80 for cultural
                        sites) to substantial investments for main
                        excursions like an overnight Halong Baycruise
                        (starting from ₹8,300).Travelers must define
                        their "experiential appetite" upfront, astotal
                        expenditure can escalate significantly with
                        comprehensive luxury packages(approaching
                        ₹49,000 for a 7-day tour)
                    </p>
                </div>
                <div className="vtgp-part-3 d-flex flex-column">
                    <div className="vtgp-part-3-a">
                        <h4 className='vtgp-sub-head'>MAIN ATTRACTIONS:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{main?.from ??'0'}-₹{main?.to ?? '0'}+</h5>
                        <p className="vtgp-para">
                            (HaLong Bay Overnight Cruise(starts ₹8,300),
                            LuxuryMulti-DayTours,Flight-inclusive
                            packages.)
                        </p>
                    </div>
                    <div className="vtgp-part-3-b">
                        <h4 className='vtgp-sub-head'>ADDITIONAL ATTRACTIONS:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{additionals?.from ?? '0'}-₹{additionals?.to ?? '0'}</h5>
                        <p className="vtgp-para">Imperial City Hue(₹500-₹650), Temple of Literature(₹80), localmuseums(₹250-₹350).</p>
                    </div>
                </div>
                <div className="vtgp-part-4 fieldset">
                    <div className="fieldset-head"><h4 className='vtgp-fieldset-head'>SMART FINANCE STRATEGY</h4></div>
                    <p className="vtgp-para">
                        Challenge: Fallingvictim to fraudulent or
                        highly overpriced tours sold by
                        unauthorized third-partybooking agents
                        or fake tourist websites
                        <br/><br />
                        Solution: For high-value tickets (e.g.,
                        HalongBaycruises),procure them directly
                        from the officialtouroperator'sverified
                        website or reputable hotel concierge; for
                        general entrance fee(museums/temples).
                        <br /><br />
                        Only pay the price clearly posted at the
                        main government-controlled ticket
                        counter, ignoring external vendors.
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Page4