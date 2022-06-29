import logo from "./logo.svg";
import "./App.css";

/* Task List
1) Start with a div with fixed content, showing specific data that I need to see
2) Enable editing of the fields
3) Allow additional fields to be added

Data structures will need to be stored on a server. Therefore it should have a specific JS object format, so we can send and receive content
JS will allow us to leave off empty fields of these objects
*/

let sample = [
    [
        { n: "Field", v: "R1" },
        { n: "Waves", v: "22" }, // All numeric values will be stored & received as text. Manipulation will require conversion to number format first
        { n: "Has Crit", v: false },
        { n: "Has ManaGain", v: true },
        { n: "Has Bleeding", v: false },
        { n: "Has Poison", v: false },
        { n: "Has AntiArmor", v: true },
        { n: "Has Slow", v: false },
        { n: "Game Mode", v: "Journey" }, // This will be a Set, a form of multi-choice selection
        { n: "Player Level", v: "84" },
        { n: "Score", v: "13487" },
        { n: "Skill-ManaStream", v: "20" },
        { n: "Skill-Orb", v: "0" }, // Zero values can be elected to be hidden from view (unless being edited)
        { n: "Skill-Fusion", v: "10" },
        { n: "Skill-Resonance", v: "15" },
        { n: "Skill-ArmorTearing", v: "0" },
        { n: "Skill-Traps", v: "0" },
        { n: "Trait-AdaptiveCarapace", v: "0" },
        { n: "Trait-OverCrowd", v: "12" },
        { n: "Trait-CorruptedBanishment", v: "0" },
        { n: "Trait-Haste", v: "12" },
        { n: "Rage", v: "" },
        { n: "Start", v: "" },
        { n: "Notes", v: "Later levels were definitely not easier. Started w/ all towers empty; should begin w/ antiarmor traps" },
    ],
    [
        { n: "Field", v: "R1" },
        { n: "Waves", v: "22" },
        { n: "Has Crit", v: false },
        { n: "Has ManaGain", v: true },
        { n: "Has Bleeding", v: false },
        { n: "Has Poison", v: false },
        { n: "Has AntiArmor", v: true },
        { n: "Has Slow", v: false },
        { n: "Game Mode", v: "Endurance" },
        { n: "Player Level", v: "85" },
        { n: "Score", v: "20951" },
        { n: "Skill-ManaStream", v: "20" },
        { n: "Skill-Orb", v: "0" },
        { n: "Skill-Fusion", v: "10" },
        { n: "Skill-Resonance", v: "15" },
        { n: "Skill-ArmorTearing", v: "0" },
        { n: "Skill-Traps", v: "0" },
        { n: "Trait-AdaptiveCarapace", v: "0" },
        { n: "Trait-OverCrowd", v: "12" },
        { n: "Trait-CorruptedBanishment", v: "0" },
        { n: "Trait-Haste", v: "12" },
        { n: "Rage", v: "" },
        { n: "Start", v: "" },
        { n: "Notes", v: "Later levels were definitely not easier. Started w/ all towers empty; should begin w/ AntiArmor traps" },
    ],
];

// Now, we need a structure to process each of the fields in our object
let processor = [
    {
        fieldname: "Field",
        ordering: 1,
        GroupFromThisField: true,
        IncludeInGroup: true,
        datatype: "text",
        displayType: "combined text", // This determines how the content will be displayed
        sharedText: "Field %",
        fontStyle: "bold",
        fontSize: 16,
    },
    {
        fieldname: "Waves",
        ordering: 2,
        GroupFromThisField: false,
        IncludeInGroup: true,
        datatype: "number",
        displayType: "combined text",
        sharedText: "% waves",
        fontStyle: "bold",
        fontSize: 16,
    },
    {
        fieldname: "Has Crit",
        ordering: 3,
        GroupFromThisField: false,
        IncludeInGroup: true,
        datatype: "bool",
        displayType: "image pair",
        imageEnabled: "http://localhost/widesheet/images/FieldHasCrit.png",
        imageDisabled: "", // Having a null string signifies that no content will be displayed
    },
];

// Generally, once users have all the fields set up to display how they want, they can just run with their layout

// The traditional approach to this problem would be to use a HTML table. Given the nature of our layout, we need to do something different
// I think the best approach is to pre-calculate where columns will line up at... and place them there.

function App() {
    return (
        <div style={{ border: "3px solid MediumVioletRed", padding: 5, marginLeft: 2, marginRight: 2 }}>
            <div>
                <div style={{ display: "inline-block", fontWeight: "bold", marginRight: 10 }}>Field R2. 22 waves</div>
                <div style={{ display: "inline-block", marginRight: 10 }}>
                    <img src="http://localhost/widesheet/images/FieldHasManaGain.png" alt="FieldHasManaGain" />
                    <img src="http://localhost/widesheet/images/FieldHasArmorTearing.png" alt="FieldHasArmorTearing" />
                </div>
            </div>
            <div>
                <div style={{ display: "inline-block", paddingRight: 15, verticalAlign: "top" }}>
                    <span style={{ paddingRight: 15 }}>Journey</span>
                    <span style={{ paddingRight: 15 }}>Level 125</span>
                    <span style={{ paddingRight: 15 }}>Result = 13487</span>
                </div>
                <div style={{ display: "inline-block", paddingRight: 15, fontWeight: "bold" }}>
                    <div>
                        <img src="http://localhost/widesheet/images/SkillManaStream.png" alt="Skill-Mana Stream" /> 20
                    </div>
                    <div>
                        <img src="http://localhost/widesheet/images/SkillFusion.png" alt="Skill-Fusion" /> 10
                    </div>
                    <div>
                        <img src="http://localhost/widesheet/images/SkillResonance.png" alt="Skill-Resonance" /> 15
                    </div>
                </div>
                <div style={{ display: "inline-block", verticalAlign: "top", paddingRight: 15, fontWeight: "bold" }}>
                    <div>
                        <img src="http://localhost/widesheet/images/TraitOverCrowd.png" alt="Trait-OverCrowd" /> 12
                    </div>
                    <div>
                        <img src="http://localhost/widesheet/images/TraitHaste.png" alt="Trait-Haste" /> 12
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
