//source for example media: iMDb
import movieOne from './movieOne.jpg'
import aveStars from './aveStars'

const movieData = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's Stone",
        rating: "starPlaceholder",
        synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        imageUrl: movieOne.jpg,
        altDescribe: "Movie Poster for Harry Potter Movie 1: Harry Potter and the Sorcerer's Stone"
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        rating: "starPlaceholder",
        synopsis: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+and+the+Chamber+of+Secrets&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAONgFuLUz9U3MDY0N0tTgjHNLbSkspOt9NMyc3LBhFVRak5iSWqKQnFqSfEvRrGA1PyCnFSFxJzifKBQYlFyhkJaftEiVnWPxKKiSoWA_JKS1CKFxLwUhZKMVAXnjMTcJCA_P00hODW5CGjEDlbGW2ySDEol_3prkw15KhesSruyZrnAHt0Uxye_ShMAhAn3OZYAAAA&biw=1920&bih=937&sxsrf=ALeKk012rNXQLonQ5Y1qhiuhZWOOWl1cxA:1619817801822&tbm=isch&source=iu&ictx=1&fir=zsST7w_8gHTToM%252Ca3uEjZVB0napwM%252C%252Fm%252F031778&vet=1&usg=AI4_-kQO0a3Avbs_NzrNoaQ3csOGuI74DQ&ved=2ahUKEwiImLbF86bwAhXSLH0KHaDOBM4Q_B16BAgeEAI#imgrc=zsST7w_8gHTToM",
        altDescribe: "Movie Poster for Harry Potter Movie 2: Harry Potter and the Chamber of Secrets" 
    },
    {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        rating: "starPlaceholder",
        synopsis: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+and+the+Prisoner+of+Azkaban&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAONgFuLUz9U3MDY0N0tTgjHNi7SkspOt9NMyc3LBhFVRak5iSWqKQnFqSfEvRrGA1PyCnFSFxJzifKBQYlFyhkJaftEiVg2PxKKiSoWA_JKS1CKFxLwUhZKMVIWAoszi_DygQH6agmNVdmJSYt4OVsYJbIy32CQZlEr-9dYmG_JULliVdmXNcoE9uimOT36VJgAAkzbBZZoAAAA&biw=1920&bih=937&sxsrf=ALeKk00cWw16fT1jQs6PiFPpJWbtYBd3sg:1619817837354&tbm=isch&source=iu&ictx=1&fir=7PuVm1KwoDuK6M%252CY0Ua5ZvFPVHeNM%252C%252Fm%252F03177r&vet=1&usg=AI4_-kQVnUMqqTtEAzfJv2DR2OzQnXabyw&ved=2ahUKEwjB0a7W86bwAhXMCjQIHbZUDdcQ_B16BAgfEAI#imgrc=7PuVm1KwoDuK6M",
        altDescribe: "Movie Poster for Harry Potter Movie 3: Harry Potter and the Prisoner of Azkaban" 
    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        rating: "starPlaceholder",
        synopsis: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+and+the+Goblet+of+Fire&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAK3RPU_CQBgHcA8D0QMNlrh0MA0u5mLSN2jR1fiWSDTK4GYovdJKy-n1gtRPYRzcXFxcHNz8DPIBHB3c_AaOChbuiKvb_57n7mnvfnPZ8rwaqZqp2zXLKPlNShPlgjCGqRKRXoDjARhvsLwBgMNsXDDfrA7AgtpWdd2p9uxO1Rw3-4Zjsyo_VbN4tmuT7Lf6Qp2Os9-Pe-mgdi9Ouk7asMwNp502XFOnlzRdWBWj75nprkpnIxl_zgg7ljYA-WHWtcuryrUz-WPbPTP0c-0DPIJ88fPrvSTfg9un1zdwB2DxgJAYh8kxDpsMuw0ircHcdpcFLJFW4KL8-wKWbUWVtRm5AIW1dArzJ5g1SJ24gZdI-9IunK_jyME0PvSkTQi3SBjiFgtIV1qHy_KS2poUVC8Io_hnZAn-LRceZl8ysLA34jka8fzbbDn3C10WboK4ORLI0bQ4EsAR90acG3FtXqWIWyOBGnFpJEAjwRlxZsSVkYiMpo21mYfsqvhuSrPrKszHyi5xQswU4ik7AcXP2cxNDnwDUsFmDg8DAAA&biw=1920&bih=937&sxsrf=ALeKk002yFJBwXQExnvLJs0osCjpkNyfWg:1619817208678&tbm=isch&source=iu&ictx=1&fir=Fzbtz4OEWTwhQM%252CJLm0_fjcX6g2MM%252C%252Fm%252F031786&vet=1&usg=AI4_-kTZ7JKwmiyReLIHAyFza19ZLGl98A&ved=2ahUKEwj0ssuq8abwAhUzGDQIHe0cDs8Q_B16BAgWEAI#imgrc=Fzbtz4OEWTwhQM",
        altDescribe: "Movie Poster for Harry Potter Movie 4: Harry Potter and the Goblet of Fire" 
    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        rating: "starPlaceholder",
        synopsis: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+and+the+Order+of+the+Phoenix&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAK3RO07DMBgAYAxqBW5BkIolA4qYioWUV5sAK0KABGoFDGyoaZwmNInBsUrCKRADGwsLCwMbZ6AHYGRg4waMtCWtjVjZ_of9-_HNFlbn1EjVTN1vp0bFb1GaKReEMUyViPQCnPRBvsC2vD6Aw9i4YL5Z74N5taPqulPv2d26OW6mhmOzOt-1YfHY3pjEg-OEOh3Hfpr08kGdXpLFTt6wzE2nkzdcU6eXNE-smpF6Zr6q1t3MxscZYdfS-qA0jHXt8qp27UxubLtnhn6ufYBHUFr8_HqvyPfg9un1DdwBuHhASILD7AiHLYbdEyJVYXEnZgHLpBW4IP_8gGVbUa06JZehkEunsHSM2Qk5JG7gZdK-tAvnDnHkYJo0PGkLwm0ShrjNAhJL63BZXlLbk4LqBWGUDEZW4N9y-WHmZRqW90Y8zRHPv82Wiz_Qq8JLEDdHAjn6LY4EcMS9EedGXJtXKeLWSKBGXBoJ0EhwRpwZcWUkIqPfxtrUQ2FN_DelFbsK87HSoO4gI94oafoEx0H6XJi-KYJvgOdFSxUDAAA&biw=1920&bih=937&sxsrf=ALeKk03oOd0v8PB4qc7GrTwGX89jIIGqVQ:1619817293223&tbm=isch&source=iu&ictx=1&fir=4kzYTTqYxFXFzM%252CLwLlXFzsFS2CnM%252C%252Fm%252F031hcx&vet=1&usg=AI4_-kQTj_uvyzV03yJqxQYN1ZOQtfouww&ved=2ahUKEwj_1_PS8abwAhWYJzQIHUZhAZUQ_B16BAgXEAI#imgrc=4kzYTTqYxFXFzM",
        altDescribe: "Movie Poster for Harry Potter Movie 5: Harry Potter and the Order of the Phoenix" 
    },
    {
        id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        rating: "starPlaceholder",
        synopsis: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+and+the+Half-Blood+Prince&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAK3RPU7DMBQHcAxqRd2CIBVLBhQxIGSB8tUmwAhCgASiAgY21DROE5rExbFKwykQAxsLCwsDG2egB2BkYOMGjNA2rY1Y2f5-z3l2_JvOLRXUSNVMv5t0jLJfpzRV2oQxTJWIdAKc9MBwg25bXg_AfjbazDerPTCjNlVdd6odu1U1R82u4disyr9at3i218fZb3SFOh3l_jWyQc1OksZO1rDMDaeZNVxTp5c0W1gVo-uZ2a5KayMdHWeELUvrgWI_69rlVeXaGd_Yds8N_UL7AI-gOPf59V6W78Ht0-sbuANw7oCQBIfpMQ7rDLunRFqB-Z2YBSyVFuGsPHwBy7aiysqEXILCWjqDxRPMTskhcQMvlfalXVg4xJGDaXLkSZsQbpMwxA0WkFhahQvyvNoYF1QvCKPkZ2QZ_i2XHqZeJmFpb8BTG_D822w5P4ReEv4EcXMkkKPf4kgAR9wbcW7EtXmVIm6NBGrEpZEAjQRnxJkRV0YiMvptrE085JbFd1PqsaswHyt79dBb2woJcZUaDeIGfs5N3uTBN3-sp-USAwAA&biw=1920&bih=937&sxsrf=ALeKk03cpigYIZ8mg2PfQqzFPV2Egr7m_g:1619817395607&tbm=isch&source=iu&ictx=1&fir=K5EgASMjTr1nDM%252C-cVH5AtY8v1GhM%252C%252Fm%252F03hxsv&vet=1&usg=AI4_-kRt0pT0mzcDIlapSABS1Ze8cHDs8Q&ved=2ahUKEwjbptyD8qbwAhUEJTQIHfUFByMQ_B16BAgXEAI#imgrc=K5EgASMjTr1nDM",
        altDescribe: "Movie Poster for Harry Potter Movie 6: Harry Potter and the Half-Blood Prince" 
    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows:Part 1",
        rating: "starPlaceholder",
        synopsis: "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+And+The+Deathly+Hallows&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAK3RP0_CQBQAcE8DkQONlrh0MI1xIBeT_oMW3IwaNdFolMHNUHqllSsH7QWpn8I4uLm4uDi4-RnkAzg6uPkNHFUs3BlXt3fvvXv35zebWYFqqGpGl_lmxSj6jShKlC5lDEdKSPsBjocg991h6rblDYHQPQRzakvVdafSt9sVc1wcGI7NKnxX1eKxXZ3EfnMg5KNx7A_ifjqo1Y-TjpMWLLPmtNKCa-pRL0oXVtkYeGbaVW7XkvFxBmlb2hDkv2Nd612UL53JjW33zNDPtTdwD_IL7x-vRfkWXD88v4AbABf2KY0xSY4xaTDs1qlUgtntDgtYIi3DefnnByzbCsulKbkAhbV0CvMnmNXpAXUDL5H2pB2YO8Chg6P40JPWIdykhOAmC2hHWoNL8qLanCRULyBh_DWyCP-mC3czT9OwsDviORrx_NtsOfsDvSK8BHFzJJCj3-JIAEfcG3FuxLV5NkLcGgnUiEsjARoJzogzI66MRGT021ibususiv-mbHRcpe5jZQs3mE8SZbdBCL2IHzPTV1nwCcBaBvQRAwAA&biw=1920&bih=937&sxsrf=ALeKk00b2pX4feARo68YNlXnqHXTTpwBVQ:1619817621990&tbm=isch&source=iu&ictx=1&fir=IxDjYXMA6-NZkM%252C1ypyRzwQLrO2zM%252C%252Fm%252F02pth35&vet=1&usg=AI4_-kRtxnbtfOoyfxoiieBeqV2mANmRVw&ved=2ahUKEwifgNbv8qbwAhVcIDQIHU7RCmMQ_B16BAgVEAI#imgrc=IxDjYXMA6-NZkM",
        altDescribe: "Movie Poster for Harry Potter Movie 7: Harry Potter and the Deathly Hallows:Part 1" 
    },
    {
        id: 8,
        title: "Harry Potter and the Deathly Hallows:Part 2",
        rating: "starPlaceholder",
        synopsis: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        imageUrl: "https://www.google.com/search?q=Harry+Potter+and+the+Deathly+Hallows:+Part+2&sa=X&rlz=1C1CHBF_enUS908US908&stick=H4sIAAAAAAAAAK3RvU7DMBAAYAxqBW5BkIolA4qYkIWUvzaBroAACQQCBjaUNE4T6tTgWKXhKRADG0sXFgY2noE-ACMDG2_ACLRpbcTKdr47n3--6cIy1BPdaHbSrO1blchjLNMuKOeYaQntxDjtg5mfDtt0nbAPBt3WBY_sWh_M6k3dNP1ax23V7FGxa_kur4lda46I3bVxHDW6Up6N4qibdvJBwzvlBcde95t5IbBNdsnyhVO1uqGdd1Vb69noOIu0HKMPSj-xaVxeVa_98Y3d4Mwyz4138ABK8x-fbxX1Htw-vryCOwDn9yhNMcmOMPE4Dk6osgKLW20e80xZgnPq8Acc10mqKxNqGUpr5RSWjjE_ofs0iMNM2VW24cw-TnzM0oNQqUO4QQnBDR7TtrIKF9UFvTFO6GFMkvR7ZAX-TZd7U8-TsLwz4Dkc8PzbbLU4hF6WXoKEOZLI0W9xJIEj4Y0ENxLaIsuQsEYSNRLSSIJGkjMSzEgoIxkZ_TY2JnqFVfnfNK8daDzC2ib2eEQybccjhF6lde3QY1yzngqTN0XwBYj-HLsZAwAA&biw=1920&bih=937&sxsrf=ALeKk00y97rInq0ydcl5awYrTWsfmq3EXw:1619817541160&tbm=isch&source=iu&ictx=1&fir=wDD7D7FnK6-g9M%252CI8qbcJa8J1YIUM%252C%252Fm%252F0gvsynb&vet=1&usg=AI4_-kRmLXtG0H0s6YISL-V8IlcG6t418A&ved=2ahUKEwiH2ZDJ8qbwAhWHHjQIHdcwBigQ_B16BAgUEAI#imgrc=wDD7D7FnK6-g9M",
        altDescribe: "Movie Poster for Harry Potter Movie 8: Harry Potter and the Deathly Hallows:Part 2" 
    },
];

export default movieData




