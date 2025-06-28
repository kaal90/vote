import Grid from '@mui/material/Grid';
import './style/Home.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import HelpIcon from '@mui/icons-material/Help';
import InputAdornment from '@mui/material/InputAdornment';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import Autocomplete from '@mui/material/Autocomplete';

const Home = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const [openVG, setOpenVG] = React.useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);
    const [vGIdx, setVGIdx] = React.useState(0);
    const [nic, setNIC] = React.useState("");
    const [voteGroups, setVoteGroup] = React.useState([
        {
            name_en: "National Peoples Power",
            name_si: "ජාතික ජන බලයේගය",
            name_ta: "தேசிய மக்கள் சக்தி",
            img: "/vg-images/npp.png",
            color: "purple",
            candidates: [{
                name_en: "Anura Kumara Disanayaka",
                name_si: "අනුර කුමාර දිසානායක",
                name_ta: "அனுர குமார திசாநாயக்க",
                img: "/candidates/1.jpg",
            }]
        },
        {
            name_en: "United National Party",
            name_si: "එක්සත් ජාතික පක්ෂය",
            name_ta: "தேசிய மக்கள் சக்தி",
            img: "/vg-images/unp.png",
            color: "green",
            candidates: [{
                name_en: "Ranil Wikramasinghe",
                name_si: "රනිල් වික්‍රමසිංහ",
                name_ta: "ரணில் விக்கிரமசிங்க",
                img: "/candidates/2.jpg",
            }]
        },
        {
            name_en: "Samagi Jana Balawegaya",
            name_si: "සමගි ජන බලවේගය",
            name_ta: "தேசிய மக்கள் சக்தி",
            img: "/vg-images/sjb.png",
            color: "yellow",
            candidates: [{
                name_en: "Sajith Premadasa",
                name_si: "සජිත් ප්‍රේමදාස",
                name_ta: "சஜித் பிரேமதாச",
                img: "/candidates/3.jpg",
            }]
        }
    ]);
    const [voterName, setVoterName] = React.useState(["Please Enter a valid NIC to Continue"])
    const [voter, setVoter] = React.useState(
        [
            {
                nic: "941890806V",
                name: "Mahawithanalage Don Nadun Vimarshana"
            },
            {
                nic: "2",
                name: "Vimarshana"
            },
            {
                nic: "3",
                name: "Mahawithana"
            },
            {
                nic: "3",
                name: "John"
            }
        ]
    );

    const [userData, setUserData] = React.useState({})

    const [infoText, setInfoText] = React.useState(
        {
            sinhala: [
                "ඔබේ තීරණය කළ පක්ෂය මත ක්ලික් කරන්න",
                "ඔබට ඔබේ පක්ෂය සොයාගත නොහැකි නම්, පහළට අනුචලනය කරන්න",
                "ටච්ස්ක්‍රීන් එකක පහළට අනුචලනය කිරීමට, තිරය මත ඔබේ ඇඟිල්ල මෘදු ලෙස ඉහළට ඇදගෙන ඉහළට අනුචලනය කිරීමට එය පහළට ඇද දමන්න",
                "ඔබේ පක්ෂය තෝරා ගැනීමෙන් පසු, ඔබ ඡන්දය දීමට කැමති අපේක්ෂකයා හෝ අපේක්ෂකයින් මත ක්ලික් කරන්න",
                "තනි අපේක්ෂක මැතිවරණයක අපේක්ෂකයෙකු හෝ බහු අපේක්ෂක මැතිවරණයක 'ඡන්දය' බොත්තම ක්ලික් කිරීමෙන් පසු ඔබට තහවුරු කිරීමක් පෙනෙනු ඇත",
                "තහවුරු බොත්තම ස්පර්ශ කරන්න හෝ ක්ලික් කරන්න, එවිට ඔබේ ඡන්දය සාර්ථකව ලියාපදිංචි වනු ඇත"
            ],
            english: [
                "Click on your decided party",
                "If you can't find your party, scroll down",
                "To scroll down on a touchscreen, gently drag your finger up on the screen and drag it down to scroll up",
                "After selecting your party, click on the candidate or candidates you like to vote",
                "You will see a confirmation after clicking on a candidate in a single candidate election or the 'vote' button in multiple candidate election",
                "Touch or click on the confirm button and your vote will be registered successfully"
            ],
            tamil: [
                "உங்கள் முடிவு செய்யப்பட்ட கட்சியைக் கிளிக் செய்யவும்",
                "உங்கள் கட்சியைக் கண்டுபிடிக்க முடியவில்லை என்றால், கீழே உருட்டவும்",
                "தொடுதிரையைப் பயன்படுத்தி கீழே உருட்ட, திரையில் உங்கள் விரலை மெதுவாக மேலே இழுத்து, மேலே உருட்ட கீழே இழுக்கவும்",
                "உங்கள் கட்சியைத் தேர்ந்தெடுத்த பிறகு, நீங்கள் வாக்களிக்க விரும்பும் வேட்பாளர் அல்லது வேட்பாளர்களைக் கிளிக் செய்யவும்",
                "ஒரு வேட்பாளர் தேர்தலில் ஒரு வேட்பாளரை அல்லது பல வேட்பாளர் தேர்தலில் 'வாக்கு' பொத்தானைக் கிளிக் செய்த பிறகு உறுதிப்படுத்தலைக் காண்பீர்கள்",
                "உறுதிப்படுத்து பொத்தானைத் தொடவும் அல்லது கிளிக் செய்யவும், உங்கள் வாக்கு வெற்றிகரமாகப் பதிவு செய்யப்படும்"
            ]
        }
    );

    const [info, setInfo] = React.useState(infoText.sinhala);

    const handleMatchName = (e) => {
        let voterName = [];

        for (let index = 0; index < voter.length; index++) {
            const element = voter[index];

            if (element.nic === e.target.value) {
                voterName.push(element.name)
            }
        }

        if (voterName.length > 0) {
            setVoterName(voterName)
        } else {
            setVoterName(["Please Enter a valid NIC to Continue"])
        }

        setNIC(e.target.value);
    }

    const handleSaveUserData = () => {
        if (nic != "" && (voterName[0] != "" && voterName[0] != "Please Enter a valid NIC to Continue")) {
            let userData = {
                name: voterName,
                nic: nic
            }
            setUserData(userData)
            setOpen(false)
        }
    }

    const handleOpenVG = (idx) => {
        setVGIdx(idx);
        setOpenVG(true);
    }

    const handleCloseVG = () => {
        setOpenVG(false);
    }

    const handleOpenInfo = () => {
        setOpenInfo(true);
    }

    const handleCloseInfo = () => {
        setOpenInfo(false);
    }

    const handleTranslate = (lang) => {
        setInfo(infoText[lang])
    }

    return (
        <>
            <Grid container spacing={1} sx={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px" }}>
                <Grid size={1}></Grid>
                <Grid size={10}>
                    <h1>Presidential Election</h1>
                </Grid>
                <Grid size={1} >
                    <IconButton
                        edge="start"
                        color="info"
                        onClick={handleOpenInfo}
                        aria-label="info"
                        className="help-icon"
                    >
                        <HelpIcon fontSize="large" />
                    </IconButton>
                </Grid>
                {voteGroups.map((vg, idx) => {
                    return (
                        <Grid key={idx} size={2} className="vg-item" container sx={{ border: `7px solid ${vg.color}` }} onClick={() => handleOpenVG(idx)}>
                            <Grid size={12} sx={{ padding: "10px" }}>
                                <img src={vg.img} alt="vote group item" className="vg-item-img" />
                            </Grid>
                            <Grid container size={12} spacing={1}>
                                <Grid size={12}>
                                    {vg.name_en}
                                </Grid>
                                <Grid size={12}>
                                    {vg.name_si}
                                </Grid>
                                <Grid size={12}>
                                    {vg.name_ta}
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>

            {/* main dialog */}
            <Dialog
                open={open}
            >
                <DialogContent>
                    <Grid size={6} className="home-form" container spacing={1}>
                        <img className="img-header" src="/header.jpg" alt="header" />
                        {/* <form onSubmit={handleSubmit()}> */}
                        <Grid size={12} className="text-field-grid">
                            <TextField
                                className="text-field"
                                id="nic"
                                label="NIC Number"
                                variant="outlined"
                                onChange={handleMatchName}
                            />
                        </Grid>
                        {voterName.length === 1 ?
                            <Grid size={12} className="text-field-grid custom-text-field-grid">
                                {voterName[0]}
                            </Grid>
                            :
                            <Grid size={12} className="text-field-grid">
                                <Autocomplete
                                    disablePortal
                                    options={voterName}
                                    className="text-field"
                                    renderInput={(params) => <TextField {...params} label="Name" />}
                                />
                            </Grid>
                        }
                        <Grid size={12} className="text-field-grid">
                            <Button className="button-cont" id="continue" variant="contained" size="large" onClick={handleSaveUserData}>Continue</Button>
                        </Grid>
                        {/* </form> */}
                    </Grid>
                </DialogContent>
            </Dialog>

            <Dialog
                open={openVG}
                onClose={handleCloseVG}
            >
                <DialogContent>
                    <IconButton
                        edge="start"
                        color="error"
                        onClick={handleCloseVG}
                        aria-label="close"
                        className="vg-dialog-close-icon"
                    >
                        <CancelIcon fontSize="large" />
                    </IconButton>
                    <Grid className="home-form" container spacing={1}>
                        <Grid size={12} container spacing={1} className="candidate-vg-header">
                            <Grid size={12}>
                                {voteGroups[vGIdx].name_en}
                            </Grid>
                            <Grid size={12}>
                                {voteGroups[vGIdx].name_si}
                            </Grid>
                            <Grid size={12}>
                                {voteGroups[vGIdx].name_ta}
                            </Grid>
                        </Grid>
                        {voteGroups[vGIdx].candidates.map((candidate, idx) => {
                            return (
                                <Grid size={12} key={idx} container spacing={1} className="candidate-grid">
                                    <Grid size={3} sx={{ padding: "5px" }}>
                                        <img src={candidate.img} alt="candidate portrait" className="candidate-img" />
                                    </Grid>
                                    <Grid size={9} container spacing={1}>
                                        <Grid size={12}>{candidate.name_en}</Grid>
                                        <Grid size={12}>{candidate.name_si}</Grid>
                                        <Grid size={12}>{candidate.name_ta}</Grid>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </DialogContent>
            </Dialog >

            <Dialog
                open={openInfo}
                onClose={handleCloseInfo}
            >
                <DialogContent>
                    <IconButton
                        edge="start"
                        color="error"
                        onClick={handleCloseInfo}
                        aria-label="close"
                        className="vg-dialog-close-icon"
                    >
                        <CancelIcon fontSize="large" />
                    </IconButton>
                    <Grid container spacing={1}>
                        <Grid size={12} sx={{ textAlign: "center", lineHeight: "10px" }}>
                            <h2>How to Vote on VOTE</h2>
                            <h2>ඡන්දය දෙන ආකාරය</h2>
                            <h2>எப்படி வாக்களிப்பது</h2>
                        </Grid>
                        <Grid size={12} sx={{ borderTop: "1px solid black", marginTop: "-10px" }}></Grid>
                        <Grid size={12} container spacing={1}>
                            <Grid size={3} className="info-header-left info-header" onClick={() => handleTranslate("english")}>See in English</Grid>
                            <Grid size={4} className="info-header-center info-header" onClick={() => handleTranslate("sinhala")}>සිංහලෙන් බලන්න</Grid>
                            <Grid size={5} className="info-header-right info-header" onClick={() => handleTranslate("tamil")}>தமிழில் பார்க்கவும்</Grid>
                        </Grid>
                        <Grid size={12} container>
                            {info.map((inf, idx) => {
                                return (
                                    <Grid size={12} key={idx} className="info-text">{inf}</Grid>
                                )
                            })
                            }
                        </Grid>
                    </Grid>

                </DialogContent>
            </Dialog >
        </>
    )
}

export default Home;