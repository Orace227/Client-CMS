import React, { useState } from "react";
import TourImage from "../../Assests/img3.jpg";
import "./Package.css"; // Import your CSS file for styling

function PackageDetails(props) {
  const [hoverDiv, setHoverDiv] = useState(1);

  const handleButtonClick = (index) => {
    setHoverDiv(index);
  };

  return (
    <div className="package-details-container">
      <header>
        <div className="header-image-container">
          <img src={TourImage} className="header-image" alt="Tour" />
        </div>
        <nav className="nav-container">
          <div className="nav-items">
            <div
              className={`nav-item ${
                hoverDiv === 0 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(0)}
            >
              Tour Details
            </div>
            <div
              className={`nav-item ${
                hoverDiv === 1 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(1)}
            >
              Inclusions & Exclusions
            </div>
            <div
              className={`nav-item ${
                hoverDiv === 2 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(2)}
            >
              Terms & Conditions
            </div>
            <div
              className={`nav-item ${
                hoverDiv === 3 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(3)}
            >
              Enquiry
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className={`section-container ${hoverDiv === 0 ? "active" : ""} `}>
          <div className="content">
            <h3>Day 1: Arrive Tokyo</h3>
            <p>
              AM/PM Arrival Transfer by shared Limousine bus to hotel.
              <br />
              Check in to Hotel at 3 PM.
              <br />
              Overnight at hotel (Tokyo Hotel).
            </p>

            <h3>Day 2: Tokyo Afternoon (B)</h3>
            <p>
              Pick-up Service.
              <br />
              Gather at designated locations (hotels in Tokyo) and board the bus
              bound for Hamamatsu Cho Bus Terminal.
              <br />
              <br />
              13:40 - Hamamatsucho Bus Terminal.
              <br />
              Walk to the World Trade Center Building from Hamamatsucho Bus
              Terminal and visit the observation deck.
              <br />
              Seaside Top (observation deck) (20 min).
              <br />
              Enjoy a panoramic view of Tokyo's bay area from a height of 152
              meters.
              <br />
              Imperial Palace Plaza (10 min).
              <br />
              Admire the view at this National Garden that was formerly a
              private garden of the Royal Family. Enjoy the view of Nijubashi
              Bridge, which is said to be the face of the Imperial Palace, as
              well as the view of the Imperial Palace itself.
              <br />
              Ginza (drive-by).
              <br />
              From the window get a look at Ginza, where rows of luxury brand
              shops, and recently fast fashion retailers, line the streets.
              <br />
              Senso-ji Temple & Nakamise Shopping Street (45 min).
              <br />
              Senso-ji, Tokyo's oldest temple, offers plenty to see including
              the bright red Kaminarimon Gate, a statue of the god of thunder,
              and a five-story pagoda. The bustling street known as "Nakamise"
              stretches for about 250m from Kaminarimon Gate to Senso-ji Temple
              and is filled with a plethora of shops.
              <br />
              Asakusa Boat Cruise Sumida River Cruise (40 min).
              <br />
              Cruise around modern-day Tokyo and experience the atmosphere of
              Edo.
              <br />
              Sumida River Cruise may be unavailable without prior notice due to
              river conditions. Changes in the itinerary will be provided by the
              guide. As the schedule of Sumida River Cruise will be altered
              during cherry blossom season (expected period: mid-March to early
              April), arrival time may be delayed.
              <br />
              Overnight at hotel (Tokyo Hotel).
            </p>

            {/* More days can be added here */}
          </div>
        </div>
      </section>

      <section>
        <div className={`section-container ${hoverDiv === 1 ? "active" : ""}`}>
          <div className="content">
            {/* Content for Inclusions & Exclusions */}
            <h3>Inclusions</h3>
            <p>
              • 04 nights Accommodation <br />• English speaking guide during
              sightseeing on sic basis tour only
              <br />• Meals: breakfast only basis
              <br />• Transportation: a/c coach
              <br />• Entrance tkt: all-inclusive as per itinerary
            </p>

            <h3>Exclusions</h3>
            <p>
              • Return airfare (International & Domestic) <br />
              • Visa Charges <br />
              • Travel Insurance <br />
              • Gratuities/Tipping. <br />
              • Any meals other than mentioned in itinerary <br />• Camera
              charges, water bottle or any expense of personal nature <br />•
              Entry fees to monuments and places other than package inclusion.{" "}
              <br />
              • Anything not mentioned in the package inclusions. <br />• Porter
              age at hotels and airports, tips, laundry, liquors, wine. <br />
              • All items of personal nature. <br />• Any cost arising due to
              natural calamities like landslides, roadblocks, earthquakes and
              any situation beyond company control. <br />
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={`section-container ${hoverDiv === 2 ? "active" : ""}`}>
          <div className="content">
            <h3>Terms & Conditions</h3>
            <p>
              • For Package Quote, Hotels Room Category Will Be In Base Category
              Only Unless Specified.
              <br />
              • Cancellation Policy Will Be Applicable As Per Hotel &
              Transporter’s Terms & Conditions Only. General Cancellation Policy
              Will Be As Follows:
              <br />
              <span className="font-semibold">
                45 days prior to arrival: 10% of the tour / service cost.
                <br />
                15 days prior to arrival: 25% of the tour / service cost.
                <br />
                07 days prior to arrival: 50% of the tour / service cost.
                <br />
                48 hours prior to arrival or no-show: no refund.
                <br />
              </span>
              • Written Cancellation Will Be Accepted On All Working Days,
              Except Sundays. Any Cancellation Sent On Sundays Will Be
              Considered On The Next Working Day (Monday).
              <br />
              • Child Above 12 Years Will Be Considered As An Adult.
              <br />
              • Any Cost Arising Due To Unforeseen Contingencies Such As Any
              Pandemic Situation, Flight Cancellations, Landslides, Road
              Blockages, Political Disturbances (Strikes), Etc. Such Expenses
              Will Have To Be Paid Directly.
              <br />
              • Payment Terms: 50% Payment For Confirmation & Balance 50%
              Payment Before 20 Days Prior To The Departure Date. If Service
              Falls Within 20 Days, Then 100% Advance Payment Is Required At The
              Time Of Confirmation.
              <br />
              • Hotel Room Confirmation Is Subject To Availability.
              <br />
              • If The Quoted Hotels Are Not Available, Similar Hotel Options
              Will Be Offered.
              <br />
              • Hotel Check-In & Check-Out Policy Will Be Applicable. Rooms Will
              Not Be Allotted Before Check-In Timings Of The Hotel.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PackageDetails;
