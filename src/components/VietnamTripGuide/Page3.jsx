import '../../styles/vietnam-guide-styles/PageRemaining.css'
import vittaemoneyLogo from '../../assets/vittaemoneylogo2.avif'

const Page3 = ({expenses}) => {

    const hotelPrice = expenses?.hotelPrice ?? {};
    const _3Star = hotelPrice?._3Star ?? {};
    const _4Star = hotelPrice?._4Star ?? {};
    const _5Star = hotelPrice?._5Star ?? {};


    return (
        <div className="vtgp-page-3 vtgp-page">
            <div className="vtgp-left-part d-flex flex-column">
                <img src={vittaemoneyLogo} alt="logo" className='vtgp-logo vtgp-part-1' />
                <div className="vtgp-part-2">
                    <h1 className="vtgp-head">ACCOMODATION</h1>
                    <hr className='vtgp-line' />
                    <p className="vtgp-para">
                        Vietnam's hospitality sector provides an exceptionally high cost-to-quality ratio, allowing travelers to invest strategically in secure, centrally located properties, from boutique hotels to luxury resorts. While the baseline for comfort and security is a 3-star property, significant seasonal price sensitivity means five-star rates are substantially lower during off-peak months, creating considerable financial leverage for the prepared traveler.
                    </p>
                </div>
                <div className="vtgp-part-3 d-flex flex-column">
                    <div className="vtgp-part-3-a">
                        <h4 className='vtgp-sub-head'>3-Star Hotels & Suits/Lodges:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-dayRange: ₹{_3Star?.from ?? "0"}-₹{_3Star?.to ?? '0'}</h5>
                        <p className="vtgp-para">(Hanoi Bonsella Hotel, Imperial Hotel & Spa)</p>
                    </div>
                    <div className="vtgp-part-3-b">
                        <h4 className='vtgp-sub-head'>4-Star Hotels & Suits/Lodges:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-dayRange: ₹{_4Star?.from ?? "0"}-₹{_4Star?.to ?? "0"}</h5>
                        <p className="vtgp-para">(LePremier Hotel, TrangTrang Luxury Hotel)</p>
                    </div>
                    <div className="vtgp-part-3-c">
                        <h4 className='vtgp-sub-head'>5-Star Hotels & Suits/Lodges:</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-dayRange: ₹{_5Star?.from ?? "0"}-₹{_5Star?.to ?? "0"}+</h5>
                        <p className="vtgp-para">Windsor Plaza Hotel, Hibana by Kōki(CapellaHanoi)</p>
                    </div>
                </div>
                <div className="vtgp-part-4 fieldset">
                    <div className="fieldset-head"><h4 className='vtgp-fieldset-head'>SMART FINANCE STRATEGY</h4></div>
                    <p className="vtgp-para">
                        Challenge: High price volatility and
                        non-transparent seasonal surcharges,
                        particularly around major Vietnamese
                        holidays such as Tết,can exponentially
                        increase lodging costs.
                        <br/><br />
                        Solution:Carefullyexamine and confirm
                        the cancellation and refund policies
                        associated with the lowest available rates,
                        as deeply discounted luxury bookings
                        often carry a high financialrisk due to
                        non-refundable terms.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page3