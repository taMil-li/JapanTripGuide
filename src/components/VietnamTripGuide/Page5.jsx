import '../../styles/vietnam-guide-styles/PageRemaining.css'
import vittaemoneyLogo from '../../assets/vittaemoneylogo2.avif'
// import { escape } from 'querystring';

const Page5 = ({expenses}) => {

    const restaurant = expenses?.restaurant ?? {};
    const _3Star = restaurant?._3Star ?? {};
    const _4Star = restaurant?._4Star ?? {};
    const _5Star = restaurant?._5Star ?? {};

    return (
        <div className="vtgp-page-3 vtgp-page-5 vtgp-page">
            <div className="vtgp-left-part d-flex flex-column">
                <img src={vittaemoneyLogo} alt="logo" className='vtgp-logo vtgp-part-1' />
                <div className="vtgp-part-2">
                    <h1 className="vtgp-head">DINING</h1>
                    <hr className='vtgp-line' />
                    <p className="vtgp-para">
                        Vietnam's food culture is globally celebrated,
                        offering everything from highlycost-efficient
                        street food (under ₹180/meal)to exclusive
                        fine-dining experiences (upwards of
                        ₹9,200/person). The most flexible budget
                        category,strategic dining involves treating
                        expenditures like capital allocation: budget for
                        a few major fine-dining events while using the
                        highly affordable street food market for daily
                        sustenance
                    </p>
                </div>
                <div className="vtgp-part-3 d-flex flex-column">
                    <div className="vtgp-part-3-a">
                        <h4 className='vtgp-sub-head'>3-Star (Budget/StreetFood)</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{_3Star?.from ?? "0"}-₹{_3Star?.to ?? "0"}</h5>
                        <p className="vtgp-para">(BanhMiHuynhHoa(HCMC), PhoStands)</p>
                    </div>
                    <div className="vtgp-part-3-b">
                        <h4 className='vtgp-sub-head'>4-Star (Mid-RangeRestaurants)</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{_4Star?.from ?? "0"}-₹{_4Star?.to ?? "0"}</h5>
                        <p className="vtgp-para">(CucGachQuan(HCMC),Chapter(Hanoi))</p>
                    </div>
                    <div className="vtgp-part-3-c">
                        <h4 className='vtgp-sub-head'>5-Star (Luxury/FineDining)</h4>
                        <h5 className='vtgp-sub-content'>Estimated 7-day Range: ₹{_5Star?.from ?? "0"}-₹{_5Star?.to ?? "0"}</h5>
                        <p className="vtgp-para">Hibana by Kōki (Michelin Star), GiaRestaurant (MichelinStar)</p>
                    </div>
                </div>
                <div className="vtgp-part-4 fieldset">
                    <div className="fieldset-head"><h4 className='vtgp-fieldset-head'>SMART FINANCE STRATEGY</h4></div>
                    <p className="vtgp-para">
                        Challenge:Touristsaresusceptibletoprice
                        gouging, where vendors near tourist
                        centers charge in flated rates for common
                        dishes, sometimes doubling the local
                        price.
                        <br/><br />
                        Solution:Forauthenticlocalrates,movea
                        few blocks away from the highly
                        congested tourist area soft he Old Quarter;
                        manyvendorsslightlyoutsidethesezones
                        operate using fairer, established local
                        pricingsystems.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page5