import '../../styles/vietnam-guide-styles/PageRemaining.css'
import vittaemoneyLogo from '../../assets/vittaemoneylogo2.avif'

const Page6 = ({expenses}) => {

    const transport = expenses?.transport ?? {};
    const publicTransport = transport?.public ?? {};
    const privateTransport = transport?.private ?? {};


    return (
        <div className="vtgp-page-3 vtgp-page-6 vtgp-page">
            <div className="vtgp-left-part d-flex flex-column">
                <img src={vittaemoneyLogo} alt="logo" className='vtgp-logo vtgp-part-1' />
                <div className="vtgp-part-2">
                    <h1 className="vtgp-head">LOCAL TRANSPORT</h1>
                    <hr className='vtgp-line' />
                    <p className="vtgp-para">
                        The cost of daily local transport in Vietnamese
                        cities is aminor budget component, with the
                        primary focus being safety and transparency
                        over cost minimization.While public buses are
                        cheap (₹25–₹35/ride), private ride-hailing
                        services like Grab are the preferred option due
                        to their superior security and fixed, transparent
                        pricing, which minimizes the risk of taxi scams
                        and justifies the slightly higher expenditure for
                        reliable movement.

                    </p>
                </div>
                <div className="vtgp-part-3 d-flex flex-column">
                    <div className="vtgp-part-3-a">
                        <h4 className='vtgp-sub-head'>PUBLIC TRANSPORT:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{publicTransport?.from ?? '0'}-₹{publicTransport?.to ?? '0'}</h5>
                        <p className="vtgp-para">(Extensive bus networks in major cities, utilized by budget travelers.)</p>
                    </div>
                    <div className="vtgp-part-3-b">
                        <h4 className='vtgp-sub-head'>PRIVATE TRANSPORT:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{privateTransport?.from ?? '0'}-₹{privateTransport?.to ?? '0'}+</h5>
                        <p className="vtgp-para">(Grab (car/bike taxi), metered taxis (Vinasun/MaiLinh), andpre-bookedcars.)</p>
                    </div>
                </div>
                <div className="vtgp-part-4 fieldset">
                    <div className="fieldset-head"><h4 className='vtgp-fieldset-head'>SMART FINANCE STRATEGY</h4></div>
                    <p className="vtgp-para">
                        Challenge: Non-reputable taxi drivers
                        manipulating metersorimposing fixed,
                        inflated faresto significantly overcharge
                        unsuspecting tourists.
                        <br/><br />
                        Solution: For secure and predictable
                        transport, exclusively use established
                        ride-hailing apps (Grab) or reputable
                        branded taxi companies (Vinasun/Mai
                        Linh) with standardized pricing and
                        tracking;
                        <br /><br />
                        If using at raditional metered taxi, ensure
                        the meter is reset/functioning or
                        pre-agree on a fixed, non-inflated fare.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page6