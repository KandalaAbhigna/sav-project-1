import britlogo from "../Assets/britlogo.png";
import lumaxlogo from "../Assets/lumaxlogo.png";
import dmart from "../Assets/dmartlogo.png";
import vector from "../Assets/vector.png";
import incstock from "../Assets/incstock.png";
function Card(){
    const profileList = [
        {
          logopath: britlogo,
          title: "Britannia Industries",
          name: "Britannia",
          shareprice: "65.87",
          price: "₹4267",
        },
        {
          logopath: lumaxlogo,
          title: "Lumax Industries India Ltd",
          name: "Britannia",
          shareprice: "65.87",
          price: "₹4267",
        },
        {
          logopath: dmart,
          title: "D-Mart",
          name: "Britannia",
          shareprice: "65.87",
          price: "₹4267",
        },
      ];
        
        profileList.map((item, index)=>{
            return(
              <div className="Card">
              <div className="Card__header">
                <div id="Card__header-logo">
                  <img src={item.logopath} alt="britlogo" id="britlogo" />
                </div>
                <div id="Card__header-text">
                  <p>
                    {item.title} <br />
                    {item.name}
                  </p>
                </div>
                <div id="Card__header-bookmark">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div className="Card__footer">
                <div id="Card__footer-stockchange">
                  <img src={incstock} alt="incstock" />
                  <span id="Card__footer-stockchange-text">
                    <span style={{ color: "rgba(0, 184, 107, 1)" }}>
                      +68.70 (1.64&)
                    </span>
                    1D
                  </span>
                </div>
                <div id="Card__footer-price">{item.price}</div>
              </div>
            </div>
            )
           });
}
export default Card;