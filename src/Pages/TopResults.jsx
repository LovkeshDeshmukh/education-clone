import React from "react";
import TopResultsCards from "../SubFolder/TopResultsCards";
import logo1 from "../Images/abhinav.jpg";
import logo2 from "../Images/alfiya.jpg";
import logo3 from "../Images/kshitij.jpg";
import logo4 from "../Images/noshin.jpg";
import logo5 from "../Images/maneet.jpg";
import logo6 from "../Images/sapan.jpg";
import logo7 from "../Images/avni.jpg";
import logo8 from "../Images/shourya.jpg";
import logo9 from "../Images/paridhi.jpg";
import logo10 from "../Images/aishwarya.jpg";
import logo11 from "../Images/pallavi.jpg";
import logo12 from "../Images/akash.jpg";

export default function TopResults() {
  
  return (
    <>
      <div className="maintopresult">
        <TopResultsCards 
          photo={logo1}
          name="Abhinav Mishra"
          percentage="CAT- 99 %le"
          college="IIM Rohtak"
        />
        <TopResultsCards 
          photo={logo2}
          name="Alfiya Khan"
          percentage="CAT- 99 %le
"
          college="XIMB"
        />
        <TopResultsCards 
          photo={logo3}
          name="Kshitij Mishra
"
          percentage="CAT- 93 %le
"
          college="GIM"
        />
        <TopResultsCards 
          photo={logo4}
          name="Noshin Mev
"
          percentage="CAT- 90 %le
"
          college="-"
        />
        <TopResultsCards 
          photo={logo5}
          name="Maneet Gurudatta
"
          percentage="CMAT- 96 %le
"
          college="GIM
"
        />
        <TopResultsCards 
          photo={logo6}
          name="Sapan Maheshwari
"
          percentage="CMAT- 90 %le"
          college="GIM"
        />
        <TopResultsCards 
          photo={logo7}
          name="Avni Trivedi
"
          percentage="CMAT- 90 %le
"
          college="GIM"
        />
        <TopResultsCards 
          photo={logo8}
          name="Shourya Kesharwani
"
          percentage="CMAT- 90 %le
"
          college="-"
        />
        <TopResultsCards 
          photo={logo9}
          name="Paridhi Mahendra
"
          percentage="SNAP- 94 %le
"
          college="SIIB"
        />
        <TopResultsCards 
          photo={logo10}
          name="Aishwarya Wadnerker
"
          percentage="SNAP- 90%le
"
          college="SIMC"
        />
        <TopResultsCards 
          photo={logo11}
          name="Pallavi Jain
"
          percentage="CMAT- 90 %le
"
          college="IMS"
        />
        <TopResultsCards 
          photo={logo12}
          name="Akash Chouksey"
          percentage="NMAT- 234
"
          college="NMIMS"
        />
      </div>
    </>
  );
}
