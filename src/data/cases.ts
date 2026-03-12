import { Case, Item, Rarity, Wear } from '../types';

export const RARITY_COLORS: Record<Rarity, string> = {
  'Mil-Spec': '#4b69ff',
  'Restricted': '#8847ff',
  'Classified': '#d32ce6',
  'Covert': '#eb4b4b',
  'Rare Special Item': '#ffd700',
};

export const WEAR_RANGES: Record<Wear, [number, number]> = {
  'Factory New': [0.00, 0.07],
  'Minimal Wear': [0.07, 0.15],
  'Field-Tested': [0.15, 0.38],
  'Well-Worn': [0.38, 0.45],
  'Battle-Scarred': [0.45, 1.00],
};

const crate4001Items: Item[] = [
  {
    "id": "skin-2ca8cb95f31e",
    "weapon": "MP7",
    "name": "Skulls",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf9Ttk_Pm7ZKh-H_yaCW-Ej7l35OBoTCrmzUQht2mDwon7cHuWPFUlDcFxQ7EDtxbpx4W1Y-LltAfAy9USYNky6pY",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-b4a128e52d9e",
    "weapon": "AUG",
    "name": "Wings",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf9Ttk6fevfKxoMuOsD3KX_uJ_t-l9AX7qzE5_sGmEw9uoJCrBOgMoDsN2ReMI4EPrm4fvY-m04ASPgt8Uz3_gznQePzx-iqc",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-679e953fac9d",
    "weapon": "SG 553",
    "name": "Ultraviolet",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1I4M2-fbZ9LPWsAm6Xyfo44bQ-Tn7gwRt-t2uAw96tIn7FOAF1CsckQLUJ4xXskdO2NLzrtAyIi5UFk3tU_MwgmA",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-75c8474d12a2",
    "weapon": "Glock-18",
    "name": "Dragon Tattoo",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a4s2qeqVqL_6sCWufwuVJvOhuRz39xUl-6miDzI37dHyXOlIkA8MmROVfshO9w9G1Ye-ztgPX34tEyi74jjQJsHi_DRfxVg",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-3061aea08996",
    "weapon": "USP-S",
    "name": "Dark Water",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSIf2sFGKS0-9JtOB7RBa_nBovp3OHy9v8J3vFbgIhC5UmQ7UIsxm7wNDnNr_rswOMiNlGmCWoiH9Juis9_a9cBl2xnYuj",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-795d725893f2",
    "weapon": "M4A1-S",
    "name": "Dark Water",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GeMX2Vw_x3j-VoXSKMmRQguynLzI6td3-TPQAlD5slR-EJ5hDux9XmMe7i71CI2t8UzSuthi9OvSlo6vFCD_TltxSe0A",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-5fd3ee42a6c4",
    "weapon": "AK-47",
    "name": "Case Hardened",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNK0P2nZKFpH_yaCW-Ej7sk5bE8Sn-2lEpz4zndzoyvdHuUPwFzWZYiE7EK4Bi4k9TlY-y24FbAy9USGSiZd5Q",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-be4448a9c6e2",
    "weapon": "Desert Eagle",
    "name": "Hypnotic",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7vORfqF_NPmUAVicyOl-pK9qSyyywxgjtmnVytyocnLGPA4iWcYmRLYIu0S-xtbuMLjg51DXjoJC02yg2VjGnh4J",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-69390026d135",
    "weapon": "AWP",
    "name": "Lightning Strike",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k4_upYLBjKf6UMWaH0dF6ueZhW2frwU1_sW2EmNyvc32RZwMpCpcjQ-EJ4xbtmt3gYezk4wzb3tpAy3mrkGoXubsGIfVN",
    "collection": "CS:GO Weapon Case"
  },
  {
    "id": "skin-vanilla-crate-4001",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "CS:GO Weapon Case"
  }
];

const crate4002Items: Item[] = [
  {
    "id": "skin-dff11cd5eb08",
    "weapon": "M4A4",
    "name": "Faded Zebra",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFL0OirarZsI_GeMWWH_uJ_t-l9AXu3zBkhsDyHz4z9dXmVagJzW8MiQbFetBfrkNHhZbjr51CMiN8TyS_gznQeEoYBjXk",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-ee167748ce8e",
    "weapon": "MAG-7",
    "name": "Memento",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wipC0PutZ7dsKPWXHGie_uJ_t-l9ASjlzRl34WnUzN6tJy-eOg50C5N1TLYLthaxm4HlZbiz4AXXjNpDmCXgznQeeQk0p-w",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-ca8015dddec8",
    "weapon": "FAMAS",
    "name": "Doomkitty",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1T9s2qZ6tgK_mHGn6vzedxuPUnTHrmxk1x6jmBmdb4Jy6QZw8jW8RwR-9esUHsltXnNu3n5VPXiY5AzTK-0H2q4sGvpw",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-58ebdc0919d4",
    "weapon": "Galil AR",
    "name": "Orange DDPAT",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6BpMPGHMWiCwOBxtd5lRi67gVN-4WzRwomqeHKQOwEoAsdzRrENskK7wIXiM-m341feg44TzXr33C0Y8G81tE9ebY28",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-f5dbec4db0bf",
    "weapon": "Sawed-Off",
    "name": "Orange DDPAT",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2mcZtpJOCSGlif0-94t-RWQyC0nQlp4GyAzoqsdSmWaFJyD5UhEeFcsBm-ktK0M7nj7wKI394Xn3-vhisfujErvbhk58vgGA",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-8ba50607cea6",
    "weapon": "P250",
    "name": "Splash",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjFL0OG-ZKV-KM-DXDLA_uJ_t-l9AXDrxh4i62vTzNyrc3zEP1MpWJN2EOMN5kTpl9K2Zb62slTdi4NMzC7gznQe9E-5MVM",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-c9d3fc33bc01",
    "weapon": "AK-47",
    "name": "Red Laminate",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wipC0POlPPNhIf2sAm6Xyfo4tucxS3rjwRx_42zRwo6pdSnCPwAmX5ohFOIJsUTqwdThNOi0s1TajZUFk3t5vdi_Cw",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-e668bc5f90c6",
    "weapon": "AWP",
    "name": "BOOM",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk7f6vZZt-Kf2DAmKvzedxuPUnTX7mkxhy62iDzYqhdiqXbw4oWZEkE-IDsRa9lIXlMejktFOMi49MmDK-0H2AgUnw_w",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-b8631ce3380d",
    "weapon": "P90",
    "name": "Death by Kitty",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk7PO6e694LPyAMXfJkdF6ueZhW2fgkUh042jUnN2geSqTaFN2CcQmQuRfsBXtxtfkN7mztASIg91Bniv8kGoXucYQxgOQ",
    "collection": "eSports 2013 Case"
  },
  {
    "id": "skin-vanilla-crate-4002",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "eSports 2013 Case"
  }
];

const crate4003Items: Item[] = [
  {
    "id": "skin-2d74b85300d2",
    "weapon": "SG 553",
    "name": "Wave Spray",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1I_829eLZsOc-ED3GV0tF0ouB_QBa_nBovp3PcwoqtdC3BOwQkCZB3QOIIsxm_kNyyZuzg7w3f2YNEnn6qjS0Y6Clq_a9cBmkkHSs4",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-d3c029086736",
    "weapon": "Dual Berettas",
    "name": "Black Limba",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s29baV-L_6sC2uZ1etlj-N7Tj-8qhEutDWR1NyuJC6SPQQoC8N1TLYMthC_kNTmMOKw4gLe2osWmC6vhylB6C5i4OscEf1yNRLqhkE",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-353d0fe2cbd6",
    "weapon": "Nova",
    "name": "Tempest",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwipC0OGrabdkJPWsDHWR1-FJvOhuRz39xUUk4jiHyt_9cXzGZwV2CJJyQbYN4Ua9wdPiZr6x4FTcjIhMzXmsjjQJsHjYOlWGdQ",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-9dc89a8890a8",
    "weapon": "Galil AR",
    "name": "Shattered",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6d_Nf2DAmKvw_x3pu5WQyC0nQlpsm7dn96tcniROgMoX8RzFuIJtRPqxtXhMujjsgLYjIlEzS-ojiIa5jErvbio8HB-SQ",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-8d4ed32149ee",
    "weapon": "UMP-45",
    "name": "Bone Pile",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1I_829Y7FhLM-XB2aX0-97j-N7Tj-8qhEutDWR1I6rcX3GblRyD5V1TecIsxPukdbuYeqz4Q3ZjopMyiyrjHgfuCdqt-kcEf1yvOcVYJ0",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-936ee5da3f8c",
    "weapon": "G3SG1",
    "name": "Demeter",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1T9s2sZLFoMP-fF2Cfz9F0ouB_QBa_nBovp3OEnoz4cHnFZgMnD5R5TeQP40Swx4XgNLm34g3ei49FxC2qiXgbuy9t_a9cBh-mV6Cr",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-acea8e851fd7",
    "weapon": "USP-S",
    "name": "Overgrowth",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSKOmsHW6VxutJsvNoWSaMmRQguynLytyqdy2eaVUgAsB0QeIIsxfuldy2MO3gtFSI2ooRzSiq3HxA7SlvtfFCD_RGjmYWyQ",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-1d49604dde9e",
    "weapon": "M4A4",
    "name": "Zirka",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFL0OG6abZSIuKSGGivzedxuPUnSXnqkBwj62vTn9b8cyjBOlNxD8Z2Te8L5Ea8xtbkNe6z7lTajotCmDK-0H35HfkCFQ",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-2af390dd512c",
    "weapon": "MAC-10",
    "name": "Graven",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a_s2rfKdlJfSsA2aTkL5JsvNoWSaMmRQguynLztytdHieOA92W8N5Re4D4ELtk9O2Nbnq5FfWjIkRn333hn9O731j4_FCD_RXlm8jng",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-e31ccc486589",
    "weapon": "M4A1-S",
    "name": "Bright Water",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_iKMWiTxO94j-N7Tj-8qhEutDWR1N2scy2Sa1UkC8NyRbMPuhexx4fgYrziswHf395Az3-qiStK5i864-kcEf1ycufvRr8",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-da401ae2ca2e",
    "weapon": "P90",
    "name": "Emerald Dragon",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk6-Cvb6tjH-DKXliS0-9gv95lRi67gVMm4m3Vzdmqci-SO1clX8Z1QeYO5xi5mtTuPu7l4FDc2o4TmH32jC1P8G81tLxM49od",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-b4a45f1fac9d",
    "weapon": "P2000",
    "name": "Ocean Foam",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0POjV6t-M_mVF1iSzftzj_E7H3njqh81siuKpYPwJiPTcA91W5N0EOMNskGwkt3gP-vh41GNiNpDn3r83ShL6itj4bsKA6Im-_XJz1aWVAZrXOc",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-278adf18c50e",
    "weapon": "AWP",
    "name": "Graphite",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7OC7ZbRhJc-RHGaGztF6ueZhW2e2k0l2sW_WzN7_cS6SbgV1CsF3TOEI4EOwloGzNLzg5g3fiIpHxC78kGoXuTqeOjwH",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-2599a8720f89",
    "weapon": "AK-47",
    "name": "Fire Serpent",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0PSneqF-JeKDC2mE_u995LZWTTuygxIYvzSCkpu3cnvFPQB2DpUkROFY4Rntw93lP7i241DbiI1BxSuviHlKunk_6-sHU71lpPMTRLyP4Q",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-706c54974c2f",
    "weapon": "Desert Eagle",
    "name": "Golden Koi",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7v-Re6dsLPWAMWWCwPh5j-1gSCGn20om6jyGw9qgJHmQaAcgC8MmR7IMthm5m4W2M7zj7wOIj4pGn32o23hXrnE8VHBG1O4",
    "collection": "Operation Bravo Case"
  },
  {
    "id": "skin-vanilla-crate-4003",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Bravo Case"
  }
];

const crate4004Items: Item[] = [
  {
    "id": "skin-e33e3bfd50ec",
    "weapon": "Tec-9",
    "name": "Blue Titanium",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNV0OanfKVjKeWeXTeG_uJ_t-l9AXnikBh-6mvTztz4eHvCOgIiCpFzQOAJ5xPulNK2Nr7q7gHcg9lEm3ngznQe7B1sAb0",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-c0f5c14db9e0",
    "weapon": "M4A1-S",
    "name": "Blood Tiger",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_iKMXWVxfp_t-R7cCW6khUz_WXWmdmpeXOWbA4jDJolQeMNthnrlIbiMO7m71TfjIpFxH-vjClO6CZ1o7FVlF3bnRA",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-c93cab7179a8",
    "weapon": "FAMAS",
    "name": "Hexane",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1T9s2sZLFoKPWLMWuZxuZi_udoFn-2wBh04GXXnIr6dS2RbwUnDZNxQ-8D50OwkdK1ZOzi41OPiI9bjXKpn0lbjaM",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-723e1f966ac7",
    "weapon": "P250",
    "name": "Hive",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwipC0OCrbKxoOM-fB2CY1aAu6LltFny1xRt2tjuAzoyoI33BOgQpX5ByTOVY5xXql4HvNbviswbelcsbmoYK4S35",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-34e83f4550da",
    "weapon": "SCAR-20",
    "name": "Crimson Web",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk5-uRf6FvM8-XD3WbxPxJvOhuRz39lEwhsGqBz9moJHmXawQhDsQhEOUNsBSwkdXiM-3k5AbZjo1MmSiojDQJsHiHhrZ4wA",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-133e4c36778f",
    "weapon": "Five-SeveN",
    "name": "Case Hardened",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRabVSL_mfC2OvzedxuPUnH3C1kRsi4jiAw4qtdXjCO1V2WcZxF-EO5xLsxtHmMeKw5g3fit4TnDK-0H1W4XC76Q",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-78690c7d603a",
    "weapon": "MP9",
    "name": "Hypnotic",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_CNk-fe8fK1qL8-fB2CY1aAutbY-TXm2wkRz5zjdzNytIi3GbVQhW8ElRu8L5hK7mtfvNbu04lGMlcsbmn-Uk_5D",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-50f6780f1a24",
    "weapon": "Nova",
    "name": "Graphite",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiNW0PG8fal9LPWsAm6Xyfo4teA5TSjnx05ztjnRz4v6dX2UZg8hW5B1EbMLtxW-k9XhMLjjslHbiZUFk3velnlINA",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-5eadf3687ff5",
    "weapon": "Dual Berettas",
    "name": "Hemoglobin",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1a4s2he7dkJumsHGKU_uJ_t-l9ASjjxEgm4mWHzYuhdi-RPVByD5pxF-ULshS6xofjMrzgs1eIiIxHnnrgznQe0T5dj0k",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-236347a195bd",
    "weapon": "P90",
    "name": "Cold Blooded",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_C9k_P6nfKxoMs-DVzevzedxuPUnSivqkBt_5m7Rw9v8cXmTZ1UjX5Z5EOEIuhK8koHuNe7r51fYjt4XyDK-0H2E4aJrDg",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-0a4f3191b0d1",
    "weapon": "USP-S",
    "name": "Serum",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSIf2sC2uVwvpkueJWXSy3qhEutDWR1I34J3uXOwFyCsF4TeAJt0bpw9OxNrzh7gyI3t1DmHiq3y5M6HxqsrwcEf1yfEp4lzc",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-c1a20624eb22",
    "weapon": "SSG 08",
    "name": "Blood in the Water",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29YKV_K8-fB2CY1aAmsbFtFnDilkUl5j7UzoqsInmVaFd0XMMlELYDshbuxNPvP-yxtlCMlcsbmlWiixNl",
    "collection": "CS:GO Weapon Case 2"
  },
  {
    "id": "skin-vanilla-crate-4004",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "CS:GO Weapon Case 2"
  }
];

const crate4005Items: Item[] = [
  {
    "id": "skin-0754464c778a",
    "weapon": "Galil AR",
    "name": "Blue Titanium",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0POgV7BkNPGdB3Kdkr5gj-1gSCGn208jsDvRmNmqdn6fbw4iCJp5Q7Nb4xW8xNSzMenk7wbX341AzyitjitXrnE8X82UsFg",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-aded62e080e7",
    "weapon": "Five-SeveN",
    "name": "Nightshade",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRYL1SJvycGWKC0tF6ueZhW2frl08m5mrXyd-seSmVOgUkX5MhReRcsRHsm9LjZe_htACI3oJEzHj6kGoXucu6NwSL",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-e961fd7b877c",
    "weapon": "PP-Bizon",
    "name": "Water Sigil",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9s25abBoMs-QHGKD1dF6ueZhW2frwRwh4j7VwoqpdHyWPQcgCpd2TbFYsxC-l4a0Pu2ztA2NgtkUzST-kGoXuZ4FYcbA",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-01e00aac253c",
    "weapon": "Nova",
    "name": "Ghost Camo",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwjFL0PGvZatSN_-cCliSzftzj-1gSCGn2x9ytmXRzt36dH_EPw9yD5R1ROYCtBO_x4LhMO2wslfZiotMxX6viitXrnE8JeKdjD0",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-2eb53e528c9d",
    "weapon": "G3SG1",
    "name": "Azure Zebra",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1I_820baZ_IfOSA1iSzftzj-1gSCGn20tz6jjXnN-pJSiUOAIlD5FyR-FYuhbtwdSyMb_l4VPajI1FyCSo2iJXrnE87owZcUA",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-95bf58d18d49",
    "weapon": "P250",
    "name": "Steel Disruption",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNW0PaqeKV5JPWdHWKv0ud6puR7cCW6khUz_WmGzIqrc3mVOlN2CJF5Re4CskWwxoW0PuKzsVaL3o9Mn3762H5I53l1o7FVezFvgCM",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-1970fa831101",
    "weapon": "AK-47",
    "name": "Blue Laminate",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wipC0POlPPNhIf2sDGuFxNF6ueZhW2fhzE5_5G7dnt_7JXufa1J0DZAkE-cKtBaxl9WzPuyz5lDY3YpAzCn9kGoXuZPu7T4u",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-9dda48565918",
    "weapon": "P90",
    "name": "Blind Spot",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk4v2qe7RiNOOsAm6Xyfo4seVsTn3ikU0jt2nQnIqqJ3KeOA4jDJV0EOMPt0S7xNLjM76w7gLd2ZUFk3vvaUMV8A",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-3cc5305a5141",
    "weapon": "FAMAS",
    "name": "Afterimage",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2seqtmJf6sHmaEydFwsexoXBa_nBovp3PQn46ucH_COwcoCMchTe4CshG7loG2NrmztFTajoIXyiitiCpLvSk6_a9cBkMHi1qM",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-b712400e97a9",
    "weapon": "AWP",
    "name": "Electric Hive",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk5_u4bZthKfebGinElLtytLVtG362x05wsWyByt2scHrGOgd1WZJ1ROBc4xi_ld3gNO7g-UWA3Kwc2RVq",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-6747a1a6fb43",
    "weapon": "Desert Eagle",
    "name": "Cobalt Disruption",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7v-RbKB9IeSXC2mDxNFmteBqQCq4qhEutDWR1I36c3OVbFQjDcRwR7EO4EW-x4HvMumzswfWjd8XnCn2iShM53s5t-0cEf1ycu8KccY",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-ea15a4e5483d",
    "weapon": "M4A4",
    "name": "X-Ray",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0Oq8ab1SLaSsAm6Xyfo46LAxTHrgxU8lt2WHmNf7cS-Ub1JxDpQkQecO40OwxN2yZbvg41DciJUFk3vXysuZ3Q",
    "collection": "eSports 2013 Winter Case"
  },
  {
    "id": "skin-vanilla-crate-4005",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "eSports 2013 Winter Case"
  }
];

const crate4009Items: Item[] = [
  {
    "id": "skin-4a48af339615",
    "weapon": "Galil AR",
    "name": "Sandstorm",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V7dsLvSAGmiCzNF6ueZhW2exkx4m6mrcmd6heS-XZgB1ApZ3FLUI5xm6ktezMuzh7gTeiYpFnCr-kGoXuTw2UKiI",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-592da919e2a7",
    "weapon": "Five-SeveN",
    "name": "Kami",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRYL1SK_GeB1icyOl-pK9oGnHnk012sT_XzNv4eXuUawUlDpEkQOIN40XskIHmP-mx4wOLio1B02yg2SJzf1Vk",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-3f7f4a9702ef",
    "weapon": "M249",
    "name": "Magma",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiNK0P2se61pKfGdMWuZxuZi_rNrTC-wl0gh5WXXmIqpIyiSbVIoXJckEO9eukTrx4XkMbjh51bYjIJbjXKp9iAER2c",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-8ba5e5f3632f",
    "weapon": "PP-Bizon",
    "name": "Cobalt Halftone",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1a4s26fbZ8L_mAC1iYwOJwpO5nSha_nBovp3PTnN79IH-fZw5xW5V4RrJYtRHpmtzkM-K04laIidlDz376jHhB5ixj_a9cBqXoycG_",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-2930dffc8ea9",
    "weapon": "FAMAS",
    "name": "Pulse",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-DG2uDxNF6ueZhW2flxBlxtm_WntqhJyiSbw90CpJyR-8DtRm6kdHkYuLj4QzY2INCzX-skGoXudLVHKnn",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-6c5c32b4624e",
    "weapon": "Dual Berettas",
    "name": "Marina",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1T9s2jabZkLvGsHXKe0-dltd5lRi67gVN34DuDyoytIH3EPwYnDMYjROde4RC9lIDnZO_i51TejdoRxSWrhn9B8G81tGB0zZHS",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-65b73b6b9f0a",
    "weapon": "MP9",
    "name": "Rose Iron",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_C9k-_qheqp0H-KcHWKvzP4vj-1gSCGn20h0423Wn9qoJH6QOwNxXpRxQOQLtEHumtTvP-i05wyMjN5Hz3qtiy1XrnE8Sl7QOgI",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-88e63f9b34df",
    "weapon": "Nova",
    "name": "Rising Skull",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0OGlfahhH_6cGGavzedxuPUnSSy3wEV-4miHyt__eHKSOA4pA5JxE7UJ5kO9l4HmZuixtgHZgoMTyDK-0H1FVu2S0A",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-f7d21206f3a7",
    "weapon": "M4A1-S",
    "name": "Guardian",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL87o95sQyy0lBMzjDGMnYftb3-QPFUlWZJ1F7VbsBi7xoa0Y7vl5ACP2ohEzX-t2iJA7Xtv4ugKWaQ7uvqAAzqYQbE",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-1a7c17796193",
    "weapon": "P250",
    "name": "Mehndi",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSMvWVB2mVxdF6ueZhW2eykERysj-GnNv7eHuTbAYjCpN4Q-ILsxGxw4DjM-rn5QTciIIRn36rkGoXuU7_dDjp",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-5c4c6649f0ba",
    "weapon": "AWP",
    "name": "Redline",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6diIuKSMWuZxuZi_rUxHS3lzUwm5DjWy976dSiRagd1WJB1RLQP4RK-mtazM-3itQeL2INbjXKpw2eVIZ0",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-31a3a09d007d",
    "weapon": "M4A4",
    "name": "Asiimov",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6V6V-Kf2cGFidxOp_pewnTii3w0x_tmTRnt2qdHyWaFAjA5UlQOYI5BO5k9bhZunm41OI34NDnjK-0H3pAWw_Rw",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-eeeab72c939a",
    "weapon": "Sawed-Off",
    "name": "The Kraken",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F5s_VmXzy-hSIrujqNjsH_eXmWaVRyXpF3EOZe5Bm8w93gMbzn4waPg98Tzir8jHwbuC5p4uZUT-N7rZ8ILI16",
    "collection": "Winter Offensive Weapon Case"
  },
  {
    "id": "skin-vanilla-crate-4009",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Winter Offensive Weapon Case"
  }
];

const crate4010Items: Item[] = [
  {
    "id": "skin-5a5917ab52b0",
    "weapon": "CZ75-Auto",
    "name": "Crimson Web",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1T9s25baZ-H_yaCW-Ej-0u4-VsH3G2x0x-sGXQyY76JXPGOAQkCMAlR-YNsBDqxtHhZerjsgTAy9USIjIDnE8",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-ea39a500354e",
    "weapon": "P2000",
    "name": "Red FragCam",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0Pq3V7RiLOmsDWadztF6ueZhW2flkRsm52nQyNquJ3nBaw4lXMFzQLNf50bpl9GxMePm7wyM3YoWmC_2kGoXucluK1Fs",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-c5fb77a6d76c",
    "weapon": "Dual Berettas",
    "name": "Panther",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1I4M2-aap5KPWBMWuZxuZi_uA4Si-3kRx-sDzUn4r_cnPGa1AiApJwReRc4RXrwIHjMLu25AGP2otbjXKpeGQaAco",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-739d10d062d3",
    "weapon": "USP-S",
    "name": "Stainless",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSIeGsG3SA_v1isehnQyyghiIrujqNjsGqcHuVa1VxCcciR7MP50a5ktLuP-rr5ATXioJNyij93y0a7nlstboAT-N7rU1N1uE6",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-46fa4ce20e23",
    "weapon": "Glock-18",
    "name": "Blue Fissure",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1T9s2teqV8NfWfG3WV_uJ_t-l9ASzixkp15W2Bntn4cnPGaFMkC8R1EeIL5hKxl9a0ZOLntQbd2IhBnijgznQeP57NAAc",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-9ed635da7e55",
    "weapon": "CZ75-Auto",
    "name": "Tread Plate",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2qYaVgL_6XMXecwPpzj-1gSCGn20l_62-Bzd39cH2QaAYoD8ckE-9csxmxx9biML_q4w3Wi4gTmSyvjShXrnE8FqKNMu4",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-ce20dbe572e3",
    "weapon": "Tec-9",
    "name": "Titanium Bit",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0PSifbBoJM-HC2TJ_uJ_t-l9ASi3w0gm62qHzdz6Jy2WbAZxW8dyTOEIukawldfhY7zqtgKN2d9MyHngznQe9VU90c8",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-6730ed01353f",
    "weapon": "Desert Eagle",
    "name": "Heirloom",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbapqMvGFC2Ovxet3t-1scCW6khUz_W3czNegeXueO1N2WZIkE-RY4EGxlNSxZLnn5gfai4oTniSoiStA6y91o7FVItTkIhw",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-5a5e6018f632",
    "weapon": "Five-SeveN",
    "name": "Copper Galaxy",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRaalSI_-DHmKC_uh6teJiXBa_nBovp3OAnN_6cXvEOwFzDcFzQ7Vc4BPuwNy0M7jk5gWL39pCnC35jShN6S1p_a9cBt8cUyQh",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-a7feff53ac53",
    "weapon": "CZ75-Auto",
    "name": "The Fuschia Is Now",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2ofbduKPmSMWuZxuZi_uM-Sn_hlhgi4D_RnImrJC3COFIoApB3FLUP4RS9mtSzYu_r7wHZjopbjXKpFZZFzGk",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-1e5240e9d466",
    "weapon": "P250",
    "name": "Undertow",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNW0OL8PfRSIvWSCmKU_v53ue99cCW6khUz_W3dzIuueSqWblJ0WMNwFuYK4xawk9S0Y-7n4Afag4JDzSz73XtK5nt1o7FVPKoITvg",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-5ca4267d0063",
    "weapon": "CZ75-Auto",
    "name": "Victoria",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a_s2rfKdlJfSsDX3HlNF6ueZhW2fkk04i5WrXmY2sc3qfPFAlWZd3EOdY4Bi6loCxPu7h51fZjNlGzST5kGoXuTXAF0gA",
    "collection": "CS:GO Weapon Case 3"
  },
  {
    "id": "skin-vanilla-crate-4010",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "CS:GO Weapon Case 3"
  }
];

const crate4011Items: Item[] = [
  {
    "id": "skin-ad06f39c3d8b",
    "weapon": "UMP-45",
    "name": "Corporal",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSI_-BHmiCwOJJvOhuRz39wUUi4W6Bzdipd3KWOwInXJFyTbEKuhbtloHlMbzm5AbW2YkWzSv5jjQJsHiIsauxOw",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-bf1fcaf8bccb",
    "weapon": "Negev",
    "name": "Terrain",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1I_82gbaNoNs-HG3WB_vpzovNoRieMmRQguynLz4qgJyqWOg8iDZFyFOcD40axlYflNL7htgDb2thNmH6oinkc5yZt4fFCD_QbgNa1nA",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-4b1f4693e6df",
    "weapon": "Tec-9",
    "name": "Sandstorm",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SM_GdCnSEzvx7j-1gSCGn2xsi52XSyIqueCifOAMnD8YkQ-YMtUPpwIK2N-jq4QSK2ohCm36q239XrnE8IX2h_4o",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-31a620b2b0c6",
    "weapon": "MAG-7",
    "name": "Heaven Guard",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSKPWSGGKe_uJ_t-l9AXm1zEol52_cz9z9d3rDb1J0DZdwFOMLtxa4m4W2Zejn5ALc2NhFzyTgznQeMWQmjgI",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-4ef0fd14ae8f",
    "weapon": "MAC-10",
    "name": "Heat",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-BC2OYzvpJvOhuRz39xR5w4GzUyo6pdnuUawMpWJokTLUL50K6l9XiNO7i4lGKiYsRxCv6jTQJsHim4lDW8g",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-205233b2ccee",
    "weapon": "SG 553",
    "name": "Pulse",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-DG2uDxNF6ueZhW2eykUh24jjczYqscH7GblIpCJBxF-AD4BHtxIKzM-nq5ACK3t1GyySskGoXuRyAaawM",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-8737ccb056e6",
    "weapon": "FAMAS",
    "name": "Sergeant",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a4c2oaalsM8-ACXOvzedxuPUnF3HmkBx_tjnSmNmrJHiROFN1W8NxFrFZsxbrk4e0Yuvr5wWLi4JAyjK-0H3maOk52Q",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-9180ab4b5f86",
    "weapon": "USP-S",
    "name": "Guardian",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_ut6teZoQT2MmRQguynLyd76I32fbFUkD5EmRu4Ct0O4m9fmY-zlsQSMiN9CnHj2jitL531o4fFCD_TZrkjVNw",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-91a429af4a60",
    "weapon": "AK-47",
    "name": "Redline",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-RHGavzedxuPUnFniykEtzsWWBzoyuIiifaAchDZUjTOZe4RC_w4buM-6z7wzbgokUyzK-0H08hRGDMA",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-91abb2db43b7",
    "weapon": "P90",
    "name": "Trigon",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V7B_KfecAFicyOl-pK9vGi3nlEt24GnSwoypc3rFbQ52XsN0EOFcshfuwYa1NbzktVTZ3ohN02yg2RSFidN_",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-064fed483cd7",
    "weapon": "Nova",
    "name": "Antique",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSIf6HB3aFxNF6ueZhW2fmwRwl6jyHw96vIn2UbVVzXMdyRuYLt0O7ltPjZbu0tQTejo9Hyn2skGoXucYtjcOH",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-bb633c21fc25",
    "weapon": "AWP",
    "name": "Asiimov",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFidxOp_pewnF3nhxEt0sGnSzN76dH3GOg9xC8FyEORftRe-x9PuYurq71bW3d8UnjK-0H0YSTpMGQ",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-370dfd3911e0",
    "weapon": "AUG",
    "name": "Chameleon",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV6dlIf2WAmKfz-9_ouRWQyC0nQlpt23VztercCjGbg90C8RyQOcMs0G5x93uZLm37wbe2owTz3j9iShI6TErvbi7ZmzWCw",
    "collection": "Operation Phoenix Weapon Case"
  },
  {
    "id": "skin-vanilla-crate-4011",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Phoenix Weapon Case"
  }
];

const crate4017Items: Item[] = [
  {
    "id": "skin-bc677a3996cc",
    "weapon": "Tec-9",
    "name": "Isaac",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SIeOaB2qf19F6ueZhW2frlEpz6zyAy477dXrEagFxDcclRO4C5EK8wIa1Nem3s1TdiotNzCn5kGoXuYgN6W8t",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-6d203a8fcdb1",
    "weapon": "SSG 08",
    "name": "Slashed",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-aA2qf0_p3vN5kSi26gBBp62XXyon_eHKXagYoC5ZwFLQNska7lIfiY-rgtVCN2IxExX_9h34buDErvbiGjEi-fQ",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-b0c960e25016",
    "weapon": "Galil AR",
    "name": "Kami",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6NsLPmfMWyRzOdJvOhuRz39wkl142uEwtqsJ3OealV1DZYmFuNZ4xTtx4HnZuPl4gaLjdpNnHqt3TQJsHjaThnzjg",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-6649e8ef90bf",
    "weapon": "CZ75-Auto",
    "name": "Twist",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2pcbZsNPWsAm6Xyfo45bY7TXzjxk5w42XXn93_cnLFOFN1C5t0ROANsBLtx9ziNu6x4FHejpUFk3uH-TvaLw",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-b0409a64842e",
    "weapon": "P90",
    "name": "Module",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_Cxk_f23aahvLPWWClicyOl-pK8_Sn_rwE1x5z6AyY6qeXmRb1cgWMNwR7Ff4Bm_m9y0Przq4A3b348Q02yg2QQMyM9M",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-47c5420fd212",
    "weapon": "P2000",
    "name": "Pulse",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMXeFzf1zj-1gSCGn201wsTnRm9egcS7DaABxDZckQe5Ys0S6xtKxZO-wsQDbi9lMxSv-jS5XrnE8fJdFk9o",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-421b4d58b3c3",
    "weapon": "AUG",
    "name": "Torque",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV7R_L_eBC3SDyPhJvOhuRz39lxhxsm_WzN37Iy7CbAcmC8B2QuYPtRCwx9HvNr-xtQPaj95EmS__3TQJsHjrLu4xbg",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-7cfcd56e9168",
    "weapon": "PP-Bizon",
    "name": "Antique",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-SAHOZ0Ptzj-1gSCGn20sj4DnTyN2pdyjFOg4oXJV5Qu5c5xS9w4bjNL7q7gHd2INGxCn_iyxXrnE83Efvvd0",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-817e4764952b",
    "weapon": "XM1014",
    "name": "Heaven Guard",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMW-VwPhzvt5uWiihkSIrujqNjsH7cHLFPwd1WZsiFrJYuhC4lNTuNu3n5ASN3YxEniStjSMa6H45675UT-N7rZnbv6eE",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-148586fd3375",
    "weapon": "MAC-10",
    "name": "Tatter",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2lZ7Z4MOSsAm6Xyfo4tbY7H3q1xRt152TWyt6tc3ifaVcmDppxReVethawlYHmNO6ztQbciJUFk3uxmhdQIQ",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-196d87753c91",
    "weapon": "M4A1-S",
    "name": "Atomic Alloy",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GeMWrEwL87o95oQyW8jCIooTyLnYrGLSLANkI-D5d2FrENtRG7wNDvZe-3slfci9pFmHj8jSof6yZjtugEB6QtrKTXhxaBb-PhITXxPA",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-bc6a17b8b04c",
    "weapon": "SCAR-20",
    "name": "Cyrex",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRe6dsMs-QF3WV2dF6ueZhW2fgzUR_52nUzYugICnCPVImApYkRO8NtkLtw4a1Nbzn7lSN2oITnCr5kGoXuXXxbesR",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-6fcc0ba62469",
    "weapon": "USP-S",
    "name": "Caiman",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsBWaZzO94j-1gSCGn20t-4WyBn4mocC6XbVN0CMB2RLYMsUG5x9DgN-20tQSNiI1GzS2q3XtXrnE8NAiGp64",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-b14c9f234bc5",
    "weapon": "AK-47",
    "name": "Vulcan",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSMuWRDGKC_uJ_t-l9AXCxxEh14zjTztivci2ePQZ2W8NzTecD4BKwloLiYeqxtAOIj9gUyyngznQeF7I6QE8",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-e3516262b49a",
    "weapon": "M4A4",
    "name": "Desert-Strike",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0OanfKVjM-ScHGqvzedxuPUnHnjnxEsi4WTTntqucnuUaA92CZR2E-IDtRa-mobnYeLksQbXg4hDyTK-0H1Bbz5yqg",
    "collection": "Huntsman Weapon Case"
  },
  {
    "id": "skin-vanilla-crate-4017",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Huntsman Weapon Case"
  }
];

const crate4018Items: Item[] = [
  {
    "id": "skin-cab4b847a978",
    "weapon": "MP7",
    "name": "Urban Hazard",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5JadiLf2SAGOV09F6ueZhW2fgx0gl4WTczdj7I3LFaQYjDcQiE-Beuhe6xIXnP-_l41eKi9pEyH79kGoXuW6iY_I1",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-a3cdd0b6440e",
    "weapon": "Negev",
    "name": "Desert-Strike",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-HB3ORz_1iv_NkcCW6khUz_WnUz42tI3-WOw5zDpAmQOQD4ELskoDlMeni4gTWjoNNmSj_33kcvC51o7FVXp6G1h4",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-70f8ab3bec6b",
    "weapon": "P2000",
    "name": "Ivory",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMW6Gzvxvj-1gSCGn20gism3dz96pc3KVOgYoCpR4TOFZsxbsxNzlYejl7lPWiIJBmX6t235XrnE8r5B4jsA",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-ded653e7bd24",
    "weapon": "SSG 08",
    "name": "Abyss",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1a_s2ibbJkIeSbD2mvzedxuPUnH3_jzE1y4TvQyIr9JyieZlckCsRxF-8K50bsxN3gZOzktAzc2IJEzDK-0H1XlSI8xg",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-4446c57d24ed",
    "weapon": "UMP-45",
    "name": "Labyrinth",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1T9s2iYapoM8-cHGaexutJvOhuRz39wRtx4WXczNupdS2XawApD5okQLEK5hm4kYHvYrjm5FDbj4MWnnn4ijQJsHh9pjg_2g",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-5e748c63e9a7",
    "weapon": "PP-Bizon",
    "name": "Osiris",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLr2cHW6CyP1JvOhuRz39xUxx6jiBz42rIHjBbAcnWZcjROcJsxjtmoXmNe_k5QHajtlNyC2r3zQJsHh050JUDA",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-c80f871a746d",
    "weapon": "CZ75-Auto",
    "name": "Tigris",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tP_FsbeSaCWKC_uJ_t-l9ASvil0R15WjUmYmqc33CaQ91W5QlRbVetETtwNC1P-u34g2L2dpEmS_gznQebcVQ6rs",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-b029cb49c14f",
    "weapon": "Nova",
    "name": "Koi",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSK_-aMWuZxuZi_rBqGCu3xEoksm_SzomhcHiQP1QjD8BxQuAN50TtlIK1Yri05lDeiY5bjXKpu6W3YF0",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-bf19fabb24ef",
    "weapon": "P250",
    "name": "Supernova",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0PCnfLBoMuOEC2KE_uJ_t-l9AXzlwk5zsGnWz46uICjCPAZ2CZF0QO8LtBjtkNaxZrji7wbY2tkUySXgznQe4Iqu8Lg",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-ec1689ee3e4c",
    "weapon": "Desert Eagle",
    "name": "Conspiracy",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ_yWMWaF0-tjo95lRi67gVMk4WTSm9moI3-QPVBxDJByQOJe40O6k4fnM-zgsQXci4gUyH3_3CMa8G81tJHuULJI",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-897d2a01202c",
    "weapon": "Five-SeveN",
    "name": "Fowl Play",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRabVSdaesCGKR1eZzovJWQyC0nQlptm_Vw9ercnOUaA8lA5skFuIPsxPqmtXkNu205lfYiN8XnCyvj3hNvDErvbiIo1idJQ",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-c879dd5925b2",
    "weapon": "Glock-18",
    "name": "Water Elemental",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK72fB3aFxP11te99cCW6khUz_TjVyompc3-QOFR2DJQkFOMJtBbqk9LlY-7n5QLZjtkTxCWqhixPv311o7FVIf8eASQ",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-c01d561550ed",
    "weapon": "P90",
    "name": "Asiimov",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-JaV-KfmeAXGvzedxuPUnTSjikRgksjuBzoz4dXLFb1QoC8QlTLQD4EPqk4LvN-Pns1aMioNBzTK-0H3gQVv65g",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-0ae3586c85da",
    "weapon": "M4A1-S",
    "name": "Cyrex",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-JwXSyrqhEutDWR1N77cimSbQQgC8F5QLYCsELpltTnZuvk7wbcjdhDzy_43yMb6ilvt7kcEf1yDWu2yf8",
    "collection": "Operation Breakout Weapon Case"
  },
  {
    "id": "skin-vanilla-crate-4018",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Breakout Weapon Case"
  }
];

const crate4019Items: Item[] = [
  {
    "id": "skin-5630a9574cdf",
    "weapon": "SSG 08",
    "name": "Dark Water",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1a4s20baZ_Ic-XD3Wb_uJ_t-l9AXriwk1y6mqDyov9eXyTaAFzD5R4RrFYsRC4k9fhML7itQGPio9EyX_gznQeRZeU19w",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-730314e8501f",
    "weapon": "MAC-10",
    "name": "Ultraviolet",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1I4M2-fbZ9LPWsAm6Xyfo457RoS3vlzRx2sWWAzNz4dXvGbQ9zCsZ1FOMI40G4ktDvY-LgtQ3YipUFk3sgu3LoQg",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-60bd7f6cf084",
    "weapon": "USP-S",
    "name": "Blood Tiger",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSKOmsHGKU1edxtfNWQyC0nQlptWWEzd-qd3mVbgR2WZYiFuUMtUG7x4HhYeLhs1fZiN1DnC6viH4Y7TErvbgp6HjWjQ",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-8022c136c58f",
    "weapon": "CZ75-Auto",
    "name": "Hexane",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1T9s2sZLFoKPWLMWuZxuZi_rBqS3vrkRxz5W7dnN2oIyiTZgYhXpN5EOIPsUbsloC1M-_qs1HdiYlbjXKpP5VEBps",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-3e77fbc7c6c1",
    "weapon": "Negev",
    "name": "Bratatat",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2seqV5IeSSGliexOlzpt5lRi67gVN2sDzUwtevIy_EZwZ1DZclEOANu0brmtDuPriw5lTejdlHxSv3iilA8G81tKRsmgNk",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-bfe288b0397e",
    "weapon": "XM1014",
    "name": "Red Python",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk5-uRe6psK_WABW6e_vxztN5lRi67gVN05G3dyt77dXjBZ1MpWJQmReRbthbpxNDvZb6x4AOP2oMRz3_42ntJ8G81tDf1ocTs",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-15b7d57d04c1",
    "weapon": "PP-Bizon",
    "name": "Blue Streak",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9s29eKhsNOSWHFicyOl-pK8-Hyzjx0t1sWjdy4v_dXyVaFcpC5ElTO4OsxSxkILjYu3k5wKM2dlG02yg2QMXfH6m",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-7ee5e2765bfa",
    "weapon": "P90",
    "name": "Virus",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk9f2jaq1oH_yaCW-Ej7l0tLY8Fn3jk0h342jRwtz9In6TOg4kDZImQ-4Nshi4w9LmNOnh4wHAy9USHtJ8vvM",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-0596698b2488",
    "weapon": "MP7",
    "name": "Ocean Foam",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_C9k4OG9YaJ0H_KfG2KvzedxuPUnGX6xlEl2tWmEzdyrd32RbQ5yXpB5RuIK4xaxxIGzY7zl5gza2YITnzK-0H3lsKvKCA",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-dc7e8554bda0",
    "weapon": "Glock-18",
    "name": "Steel Disruption",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a4s2qbLRsNPSWAHSV_v1_vPdsXRa_nBovp3PWmYuhdnyebAdyWJUjE7ResBC6xoXhZe_j7w3Zid1Aziio3SlI5iw__a9cBqG4HP4O",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-23f9c7c6a6d9",
    "weapon": "Desert Eagle",
    "name": "Crimson Web",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk5-uRf6FvM8-XD3WbxPxJvOhuRz39wEUh5W3Rytyscy7FPAYgWJJzRe4MtUW8loKyZOm3sQzb34lEzyX32zQJsHig-EWd2A",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-571dcb1f6c86",
    "weapon": "AUG",
    "name": "Bengal Tiger",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf9Ttk-_upbbZSLPmUBnPeme1z5LU7F3_gxk9xtj6Em4yveCrDOgIiW5cjRrIL5hnuk9TkM-rr5hue1dxoTofnTA",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-f2779230030e",
    "weapon": "Nova",
    "name": "Bloomstick",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0OG-eq1jJ8-dAXGR_uJ_t-l9AXDrxU4msD_UzN2qIy6Va1chXJJxFu8OtBO5l9fjZLnh4wXd3olBmCzgznQeBg5SBVo",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-d0203eae8335",
    "weapon": "AWP",
    "name": "Corticera",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk6fO4bahsH_GEHlicyOl-pK8xTSzqwU1-5jjWno6hJHyeOg91A5R2TOEOtRS-kIG2ZeO25lDYg90U02yg2USK57Qn",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-daaabfa27042",
    "weapon": "P2000",
    "name": "Corticera",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V6JsNvWfD1iAk74m4N5lRi67gVNzt2TTyo6gdH6XPwEiCcZ2RucC5BG9kdTvZe-24QSIidhHyimoiC0b8G81tLsWWhFO",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-db764e1bb74b",
    "weapon": "M4A4",
    "name": "Bullet Rain",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0PC7ZKhoNM-BD26e_uMisbBWQyC0nQlp4GmGydioIH3DPFMjDMd2QrQO5hDtkNK2Ne_htAXd3d0Uyiiriysb5zErvbh6fsb98Q",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-0827f8a09022",
    "weapon": "AK-47",
    "name": "Jaguar",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0OKvZrBlJeKsD2zEltF6ueZhW2fhzUwi4WuBzNv6dCiWPVUgApV0TLIM40SwxNLuN-Pl71fdjogXmy79kGoXuYeqaPqj",
    "collection": "eSports 2014 Summer Case"
  },
  {
    "id": "skin-vanilla-crate-4019",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "eSports 2014 Summer Case"
  }
];

const crate4029Items: Item[] = [
  {
    "id": "skin-4c6267579ef5",
    "weapon": "G3SG1",
    "name": "Murky",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1a4s2pO7dqcc-eG3Wb2NF6ueZhW2e2wE5y6juDy46uJ3qePVR1C5BzR7UO4xa9ldXlYuK07wSP2dlMzin6kGoXucw3wj8l",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-1e54f68f29a6",
    "weapon": "MAG-7",
    "name": "Firestarter",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wjFL0P-vb_NSJvmBC2WZ1fpzvt5lRi67gVNyt27dz46scn2TaQ52XpV1E-8I4RLuwIHnMO2w4gfa2NlHmy2ri3xP8G81tFM5kI47",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-70901934962c",
    "weapon": "MP9",
    "name": "Dart",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6dlJeaBAWmvzedxuPUnH3_lkRgmtmrVmNn6dC_COFUlWJZwF-df4xW8ktK2N-234QfX2IlMzjK-0H1cH54WRg",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-d2a66cdb3bf4",
    "weapon": "Five-SeveN",
    "name": "Urban Hazard",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j_R7TSi9qhUmqTyXnrD1KCzPKhhzXpBwFu9YtxK6k4buYenrtgDWj4NGyX3-2yhBun1qt-YBBKsg_aXWkUifZnLiQ4dl",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-737482aebb32",
    "weapon": "UMP-45",
    "name": "Delusion",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1I_827ZbQ5dc-XQ3GZ0ud5vvJWQyC0nQlp5z7RwtyrIC6WbAYgCJp3Q-YD4RXsxN3jN-7n41He390QzXn5iCMf5jErvbiLTzB_rQ",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-d20050bb0d48",
    "weapon": "Glock-18",
    "name": "Grinder",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a_s2pZKtuK8-QAW6cxOpJvOhuRz39w00lsG-BnNj7cniROgd1WZRzReIDsBewk9G0YeOw5gWPi40Xnnr4hzQJsHiNyVoujA",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-a9716a5f7bc2",
    "weapon": "M4A1-S",
    "name": "Basilisk",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GCMWrEwL9lj-NoXCC_nA4sjDGMnYftbyqVPwUiX5V5ReUDuxC5m9zmNOPktAHYiIgXzSz43C4a7Sg_6uZQVKU7uvqA7bOYRbA",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-d5a821e17b8c",
    "weapon": "M4A4",
    "name": "Griffin",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJ-KaCGGZz9F6ueZhW2e2zERysm3Umdesd3rGald1DpRyQLVbtUa5mtPvYuzrtATeg95EmS2vkGoXuZ5UWeP5",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-9fa47155a8a8",
    "weapon": "Sawed-Off",
    "name": "Highwayman",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2veZt-IeeWCmiWx9F0vOBqRC68mRkYvzSCkpu3dXuVaQchCMRwQeJYsxaxl9W0N-nrtVeMid4XyHn53XtN5n5st-xRU71lpPM2tqJ-2A",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-1ea3c927a8e1",
    "weapon": "P250",
    "name": "Cartel",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNK0OL8PfRSI_GBGmKc_uJ_t-l9AX2wlh906m7Uy4v_cXqWaA4gCpUmQLMNsBO_ltfiYuPltAHbgthGmyzgznQeqxXZ9kg",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-c43e6b146e94",
    "weapon": "SCAR-20",
    "name": "Cardiac",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRe6dsMqLDMW6e1etkpuRnWyC8myIrujqNjsH9cniTaFApD5R0F7EJsUG_k9bjM-3n4gLY3opBzCio3yxK5io55OdXT-N7rWZZlsYh",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-24cc378ff450",
    "weapon": "XM1014",
    "name": "Tranquility",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWSR0-disfJWQyC0nQlp5zjWnNigIC-falMlWMN2F-cP5Ba-xoXlMri0swTZg41EyX34jS1LuDErvbgNI5zBZg",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-ee1ab67b6434",
    "weapon": "AK-47",
    "name": "Wasteland Rebel",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0Oa8YaZ4NPWsD2zEltF6ueZhW2fgkEh35m3cmIusIn6TbwMpWJJxReMKtBHsw4HhM7nh4gTc3YJCxXr2kGoXudZyw1tq",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-be569f85ce42",
    "weapon": "P2000",
    "name": "Fire Elemental",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMWGZ0-tJte1sQiy9gRwrjDGMnYftb3-RZldxWJVyF-QLsUG5mofnML_qtg3cjd4TyCr4jXsf63lr4-5TVvA7uvqA-y0nTh8",
    "collection": "Operation Vanguard Weapon Case"
  },
  {
    "id": "skin-vanilla-crate-4029",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Vanguard Weapon Case"
  }
];

const crate4061Items: Item[] = [
  {
    "id": "skin-db73213412f6",
    "weapon": "Glock-18",
    "name": "Catacombs",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-XC2aEyfp5vO1WQyC0nQlptWWDzIz8dy6QalMgXsMiQbEJtRjskdW2M7nn71Dcj49Fm3qsiClB7jErvbhnnfwjgw",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-4c2aae5b0b8d",
    "weapon": "M249",
    "name": "System Lock",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SM_WYGmiC_uJ_t-l9AXzhzEt25Wjcn4n4dHKebgMlCMB2RO5b40S-x9TnN-KztFDf3ohDzirgznQedTUXMuU",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-f982be094874",
    "weapon": "MP9",
    "name": "Deadly Poison",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6BoIfSfF1iAzudlv-9WQyC0nQlpsm3Vy9f4eXvEPwcoCcNyQOBY5EWxwN3gNru0tFGK2d5Mny__iS8c5zErvbjRwweEJA",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-d38eab775911",
    "weapon": "SCAR-20",
    "name": "Grotto",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7uORe6dsMqLDMWuVwOVJvOhuRz39zRtx62uGm9z8JHnFaFR0AsAjRuQI40Sww9HvNunqtQTego5MmSX4izQJsHiOao_ijg",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-024f8ae1278e",
    "weapon": "XM1014",
    "name": "Quicksilver",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMXSZxuJ3j-1gSCGn20oksGTXy4yrIC3GbwYpCJF1RuQMtkG-koCyNO22tVSIiY1GxXn6iyhXrnE8nW2Det4",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-25ead8f88d62",
    "weapon": "Dual Berettas",
    "name": "Urban Shock",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2rZK15JeOsG3WSwOBlpO57Qha_nBovp3PQzI6pc3iRZ1cjC5dzQe4CsxPtwdHjMevq41CLjIpMm3_5jypN7Cxp_a9cBoxgoAoS",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-75138a0c07b3",
    "weapon": "Desert Eagle",
    "name": "Naga",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKFsJ_yWMWmRxu9JvOhuRz39zEx06jjWm4n8Ii6WPFQhA5YjE7MJskPrwdTuZb7htlHbg9oTzCn2hjQJsHhQd9ynBw",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-4938e7b7b6cd",
    "weapon": "MAC-10",
    "name": "Malachite",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-eD2uRwuZ_pORWQyC0nQlpt27Uw4yrJy_FOlQpCJp2Te5Y5hPqw9HuYePksVaKjt0TmS_2hihJuDErvbgNFzWT1Q",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-43a9e7d8242e",
    "weapon": "Sawed-Off",
    "name": "Serenity",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9FytfdocCW6khUz_W2Dwtv6cXLFZgUnD5VzQrMPtxjrx9K0Ye637wzYj4gXzimqiH9KuC91o7FV9mPR2UI",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-2a8ebacc14e8",
    "weapon": "AK-47",
    "name": "Cartel",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNK0POlPPNSI_GBGmKc_uJ_t-l9ASuywktwtW3dwt79eX6fZlUiCJJ1RbUPtkW8w4LiZe_i4ATYjN8WmH7gznQeZkk4ehM",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-d6f2e7995a15",
    "weapon": "M4A4",
    "name": "龍王 (Dragon King)",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSIf6QC3SE0-96j-1gSCGn20x062mAwtb8cX3CaAMoApV3EeFZ50Wwk9fuM-vqtAHW3opHn3iqiSxXrnE8PytIGFg",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-add7770f46d1",
    "weapon": "P250",
    "name": "Muertos",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSLfGdCmacwNF6ueZhW2e1lh51sm3UmN37cHuUbQQhXJtwQO4C4BXsxtHjM-624A3a2IoWySiskGoXuSIJMqiP",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-67b936c9cb52",
    "weapon": "AWP",
    "name": "Man-o'-war",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7uW-V6NhL-KKMWuZxuZi_uM5HXG3xhh_t2iBnI2ucn3EZwEjDpJ0Q-dY5EPrxNTiYevj7gXa2IhbjXKpQIFOiXU",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-94878071c8d9",
    "weapon": "Galil AR",
    "name": "Chatterbox",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWaS0-9lue5ncCS2kRQyvnPXnIn7eSrEZ1AnD5NxTeII4ESwxN3jN7zl5QHXjdhAnyuo2y9Nv3xs_a9cBuAhdjfO",
    "collection": "Chroma Case"
  },
  {
    "id": "skin-vanilla-crate-4061",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Chroma Case"
  }
];

const crate4089Items: Item[] = [
  {
    "id": "skin-ea4e27f0cd16",
    "weapon": "AK-47",
    "name": "Elite Build",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSLfGAGmKC2NF6ueZhW2e2wh9y5GjTztirdSqfP1dyCpclR7FZ5xe9wNbhZei25FGPjokXxC2vkGoXuQLr5jvs",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-0789e14af0b1",
    "weapon": "MP7",
    "name": "Armor Core",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_DNk4uL5V7FhNOKSA2iUxPx4j-1gSCGn2xhw6zjSzYysICiUOgV0Cpd1TORe5BW9w922Nrux5gKLitpGz3irhnlXrnE866qixJk",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-7698ea25d00a",
    "weapon": "Desert Eagle",
    "name": "Bronze Deco",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7v-RarZiLuqWMXSAwPx9vORWQyC0nQlp4zzdydqtJXuTOgZzW5F4QbNZ4UK7l9e1N-Pq5AeNj9hHmH783S9J6zErvbgcMfnnyA",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-4b8851edb204",
    "weapon": "P250",
    "name": "Valence",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNK0OL8PfRSI_-dGmiF09F6ueZhW2fiwUx14zmDnNagcC-WagUkApslQuBYsUW_ktexPry3swPfiogTyyiqkGoXuQius2mt",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-fd5699e808a0",
    "weapon": "Negev",
    "name": "Man-o'-war",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1a4s2gbaNoNs-UAmiC2NF6ueZhW2fikBh352vQyt-sI3mRbQ8lDJpxTLVfuxC5k4W0MLvm5VfeithHnij5kGoXuSdORNFb",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-628ddc6f56d0",
    "weapon": "Sawed-Off",
    "name": "Origami",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F5ouhuTiS6qhEutDWR1IutIyqSalBzWZQjQbUD4UaxltCzNuLgslTejYwTxSn2jCIc5n1jtbscEf1yxjZ09aw",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-c97e27944006",
    "weapon": "AWP",
    "name": "Worm God",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DNk7uW-V7B6Kf6WMWuZxuZi_uRoGH3iw0wh4j7cnt6ucSqSZwUkCMB5TLIPsES_kNbuYeOwtgXai4NbjXKpZ4kj0o0",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-fadb57cf0d51",
    "weapon": "MAG-7",
    "name": "Heat",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSMvWXBmiE_uJ_t-l9AX7nzBsk623dm46odHmUbFd1Dcd2RbINtBXtkNDjMbzj5AGKjt4UyijgznQe8JftFTE",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-e2e874d00715",
    "weapon": "CZ75-Auto",
    "name": "Pole Position",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H-CBC2SZ0ud5vt5lRi67gVNy4mTdzdmgc33COg90DcB2FuMPtxLpldSxZeLn4w2K34NCzXj9hnsY8G81tCL36RK-",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-162f16955942",
    "weapon": "UMP-45",
    "name": "Grand Prix",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a4s27ZbRSMvGQC3WvzOtyufRkASjjxU1x42nVyo2rdnKQbA9xX5ohRrYMtBntmtW1N7zj5lDZgthFzC3gznQezoUeLLY",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-b2a5203033ee",
    "weapon": "Five-SeveN",
    "name": "Monkey Business",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-NoQSi9lCIrujqNjsGheXmXPQcoWMFzEO5ZtUOwkILjY7yzsg3ci91DySiohn4buCht4eYET-N7rZVO80Su",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-5224ccf55371",
    "weapon": "Galil AR",
    "name": "Eco",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWKTztF6ueZhW2exwExw4WrcyImrcHmTbQAlWcQkQudYt0O5lNfgP-nh5AOL3otAziz7kGoXua-HTb4P",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-4fa9c490db80",
    "weapon": "FAMAS",
    "name": "Djinn",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a_s2oaalsM8-ZB2me_uJ_t-l9AXzhwxt-5TiAzdmgd3yeaQ50DZRxEe5b4BXrm4HkPr7kslfcg9pCznjgznQepOOy8CM",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-7b1351c2adba",
    "weapon": "M4A1-S",
    "name": "Hyper Beast",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9JuPh5SjuMlxgmoCm6lob-KT-JbwF1WZEjR-YJskK9k9XiYePltAeNjYlAxSn5j34dvCZstb4LB6Ut-7qX0V8Xkv5_2A",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-bb6ba9602776",
    "weapon": "MAC-10",
    "name": "Neon Rider",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-dC2ie0-dytfNWQyC0nQlp5DzTntmgdC7COABxX5NxQrUOtUS5w4LgMu6zsVCK2IJCmyisjitM6DErvbicsEA0SQ",
    "collection": "Chroma 2 Case"
  },
  {
    "id": "skin-vanilla-crate-4089",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Chroma 2 Case"
  }
];

const crate4091Items: Item[] = [
  {
    "id": "skin-8ba4193b0479",
    "weapon": "Galil AR",
    "name": "Rocket Pop",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfD3Wv0e9kpOhqQyygqhEutDWR1Nf8eXzDP1InCMR3QucIshjrktexMOqz4QPcjo1Gz3qq2H9L5ylu4ugcEf1yh3Lp9zc",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-e09d999344e2",
    "weapon": "Glock-18",
    "name": "Bunsen Burner",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a_s2pZKtuK6HLMWGcwONzo95rQzy2qhEutDWR1Nb7IC-TOw4hCZF5FOJe40W5lILlZLvktAHXiIJMyST_3XlIv3k94escEf1yWue1sjU",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-22079bd55cef",
    "weapon": "Nova",
    "name": "Ranger",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSMvGdCWKC_uJ_t-l9ASvqxUhy6mWAy4v7dnuRZlJ0CpR2Q7Nbtxe7kNO1MOu37lSP2N1HzyXgznQe-r9EaTk",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-41bdac7bd0a9",
    "weapon": "P90",
    "name": "Elite Build",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6lsM-SWHH6vzedxuPUnHyi1xE9xsGiDmdqpdnmRPwcgDZslRuAM40Trx93nNevj7gOPjdlGzzK-0H27CoeJJQ",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-a5809e8daa76",
    "weapon": "UMP-45",
    "name": "Riot",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-GHnWfwPxJvOhuRz39lx8h4DnXw9f6cCiWbVNyXsYhF-RbsxK5m9LhMevmtVDeg4JAyyr3jDQJsHgJoZgLvA",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-982f2e59bfda",
    "weapon": "USP-S",
    "name": "Torque",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_v5kv-Z7SjqgnAsYvzSCkpu3cH2eZgcgD5cmTOQK5BftlobvY-zk4gCN2I4UyX-s3XhI7S4_supXA71lpPNCDDeLhA",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-4d0cb66e0e31",
    "weapon": "FAMAS",
    "name": "Neural Net",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a4s2oaalsM8-XAXOD_uJ_t-l9AX_lzB8ltmXcnoqvInjEPQEoC5AjELRY4Rm_lIDmM7zlsQ2L3YsQxHngznQe8yNao04",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-b587b6dd9b9b",
    "weapon": "M4A4",
    "name": "Evil Daimyo",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJeaaAliUwOd7qe5WQyC0nQlp4GqGz42ucCqXaQMhDpd4R-AIsxK6ktXgZePltVPXitoRn3-tjCgd6zErvbijVJZd2Q",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-e1e7a9cee96e",
    "weapon": "MP9",
    "name": "Ruby Poison Dart",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_C9k4uL3V6pkNOKcCWKe_uJ_t-l9AXzhkEsm527Xy9r_JynEP1IiWJZ3FOYP4xTqmtznNO-34VCKiYJExSjgznQeVzj6siQ",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-4af8cd1ab41d",
    "weapon": "Negev",
    "name": "Loudmouth",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-SAGmZyed6sfVmXRa_nBovp3PXzousdnrBbgEiX5QjTbICsEa7ktTnNOPrsQLW3YoQyS33jygbuHts_a9cBgJfeVOc",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-5b9aeeb9ad89",
    "weapon": "P2000",
    "name": "Handgun",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWWfzuNJvOhuRz39xE53sWncnN2vcnKeaQAlA5cjRuUL4RTqxN3nP-ix4QCLjIIQyHn2iTQJsHgxqMM--w",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-e33988dc3569",
    "weapon": "CZ75-Auto",
    "name": "Yellow Jacket",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4Ic-QBmaD1edstfNWQyC0nQlptjjRn9z8cHjBbgB2WccmFOAPukbux9zlP77nsQXf3YxFzSX9iy9AvDErvbgg0Q8tFg",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-5b44cad3a5da",
    "weapon": "MP7",
    "name": "Nemesis",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6poLeOaHVicyOl-pK87Hyu1kR5_5j_WntigcXmXOlBzCZUjQeMLtBG6x9HuNrvl4gCP2I1B02yg2TXalB0S",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-f0772ea6839f",
    "weapon": "SG 553",
    "name": "Cyrex",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-QF3WV2dF6ueZhW2frlhl14W7Xzt6geXqQP1N0CMRyQuFY5kHsx9HmZejq7wPei91AzCT_kGoXueC0Dzdv",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-0ffd6029f447",
    "weapon": "AK-47",
    "name": "Aquamarine Revenge",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-GHGaXxNF3vPVWQyC0nQlp4WvVzturJ3qVb1B1DMd3Q7EO5xW_l9O2ZOLg5gyP2N9BxST_jXwY7TErvbj-FmM1dA",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-f787cc672771",
    "weapon": "AWP",
    "name": "Hyper Beast",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6x0MPWBMWWVwP1ij-1gSCGn20pxtm_WzNuoeHKeaFAnCZUiTe5bt0HqxofmZOrm5Q2IjoMQzS_5iShXrnE8NzWs__c",
    "collection": "Falchion Case"
  },
  {
    "id": "skin-vanilla-crate-4091",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Falchion Case"
  }
];

const crate4138Items: Item[] = [
  {
    "id": "skin-3b525708df85",
    "weapon": "Dual Berettas",
    "name": "Dualing Dragons",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2qfaVhIvWBHGKE1e9JtPNoSCa9hiIrujqNjsGqcn-VZ1JyXMR3RuMK5xDswNXkYbjitgePj91Bynn32y5N7ydtsLoET-N7rXzpOmeh",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-4a4571ce6fe7",
    "weapon": "FAMAS",
    "name": "Survivor Z",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-fC2mEwNF6ueZhW2exlE8hsTzcw4n4JC7BOAQpCscmRrRe5xW7w9TgNu7itAHWiYpAziqokGoXuXR1eqm1",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-c9c83de22ecf",
    "weapon": "Glock-18",
    "name": "Wraiths",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK6HLMXCCwPp-qfJWQyC0nQlp4T_Xnoz8dCmfZlUgXsd5RbMC40WxkdXnP7nl4wHXi9oUyH_9jilIuzErvbjBKaM58A",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-3bf986f6377c",
    "weapon": "MAC-10",
    "name": "Rangeen",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-SAmKbyfd3j-V8QBa_nBovp3PWztqtJXqWPVdzX8d3EbUDtkS_w9bmYui04gbYiolGnH_833xM6C5o_a9cBlensHEx",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-0bc881325706",
    "weapon": "MAG-7",
    "name": "Cobalt Core",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSLemBDWKexNF6ueZhW2fkwBshsT-DntuscSiVbABzD5Z2QuRftRXuwYblY-_i5AePj49Emyn7kGoXuSUXTp8T",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-2fc3d0e05945",
    "weapon": "SCAR-20",
    "name": "Green Marine",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMXeVwO1zveBiSjvjxiIrujqNjsH6IymVbQEmCZoiQ-MC5kbrwN3kPuy24lDa2YsQmy2t2iof7Hs56uxQT-N7rTkENKOY",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-dd5e6f7c90cb",
    "weapon": "XM1014",
    "name": "Scumbria",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMXST1ON0ouhocCW6khUz_WWEnNyvcymfalB0DZd4FOEDtBnrl9LiN-3i7gPWj9hBxCusiClP6iZ1o7FVjZ8JfoU",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-3d7cafe33cee",
    "weapon": "Galil AR",
    "name": "Stone Cold",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMWmZxuZip-hnSBa_nBovp3PSnI2heXqXOwQjDpcmQ-UN5BjrmtexP-rgswDajotBxCz5iyhMui5u_a9cBuYTcBV8",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-fe2ecdf6f921",
    "weapon": "M249",
    "name": "Nebula Crusader",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiVI0P_8PP1SLvWRG2uR_u1kpfJoSyyhqhEutDWR1Ir_JSiXOgciDJN4RucCsRW8w4KyZu_q5FeLjN4RnCmt33lP7nxv5-wcEf1yLX15hXE",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-3994ae535237",
    "weapon": "MP7",
    "name": "Special Delivery",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6dhIeOAB2GZxOpJvOhuRz39xRhytjuBm9n4d3yXbQF1XJAhQLID4BTskobhZb-35wXZ2toTySz2jTQJsHhDRFQUDw",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-aa792cc15a05",
    "weapon": "P250",
    "name": "Wingshot",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwipC0OL8PfRSI-KSDWyDyeFij-1gSCGn205wtT7Xn4yuc3qQbQUkXJQmEeQCtkK7wdDgZO7n71Df2IkQxH7-hyhXrnE8AH9Qqg8",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-1e9f98a04b79",
    "weapon": "AK-47",
    "name": "Frontside Misty",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSN_mdGmKC_v1mv_N9cCW6khUz_WvRm9r8JS-SaFMmWcN5ReMD4BDsltDkN-Prs1DfjN9Cn3r_jC4YvHl1o7FVgJsyBlQ",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-042695b22889",
    "weapon": "G3SG1",
    "name": "Flux",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-VAnKI_v5jovFlSha_nBovp3ODz9uoc3vGOgMmApp3QrFe5xftm9bjNOm24Afb3YlBn3mqjS8dvy1p_a9cBmtTF-_C",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-8d0a500e57c0",
    "weapon": "SSG 08",
    "name": "Big Iron",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-HC2SYz-d1se1gWzCMmRQguynLyYqqJSqQbAIiDMclTbYDtUKwlIfvP7jr4Fbcj4xGzir6jilJ6ils4PFCD_SOjD5UKQ",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-02db706d8db0",
    "weapon": "M4A1-S",
    "name": "Golden Coil",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9lj_JnTiK2lxQztgKClYP9HifOOV5kFJclQ-Jb5xW-m9CxPuLq4QTfjd0XzyX6jCpL6X5o5OgDVfYn_a2Ci1rfcepqgV49FrE",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-cf4c11689014",
    "weapon": "USP-S",
    "name": "Kill Confirmed",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uV_vO1WTCa9kxQ1vjiBpYPwJiPTcFB2Xpp5TO5cskG9lYCxZu_jsVCL3o4Xnij23ClO5ik9tegFA_It8qHJz1aWe-uc160",
    "collection": "Shadow Case"
  },
  {
    "id": "skin-vanilla-crate-4138",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Shadow Case"
  }
];

const crate4186Items: Item[] = [
  {
    "id": "skin-839dad0ad981",
    "weapon": "R8 Revolver",
    "name": "Crimson Web",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2mcZt6JfKAMWuZxuZi_rdrHny2wkR_sDuHw4muJXuWOwZyAsdzTeNcu0S4ktfkP77htAOPiYlbjXKp8jg9HbM",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-ea3ddb4cfeb4",
    "weapon": "AUG",
    "name": "Ricochet",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_C9k7uepV654LfKfC1icyOl-pK9tHi-wxUp0sTyGw4z8dXqfb1IlWcd1QedctUbpwNHgPrnjtFeLj4tD02yg2euRXb9L",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-d19d99db7c52",
    "weapon": "Desert Eagle",
    "name": "Corinthian",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKFsJ_yWMWSf0-d4pOlgTieMmRQguynLzNz4Iy2ebgUmDZB4QeEDskO5ktWzMrjm7wPd2IlGmCr_3XxBuClr4PFCD_To4zX47g",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-a2c3eeca40db",
    "weapon": "P2000",
    "name": "Imperial",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0POjV7Q_cKDDMW6d0etkueBlcDu2kSIrujqNjsGrJH6XPQ9xAsZ5FLIDtBG5mtfhY7nl4gGNiosTzH792ntOvC1stbsDT-N7ra_mVv2F",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-e62659639aba",
    "weapon": "Sawed-Off",
    "name": "Yorick",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2pe5t-IeeWCmiWx9F4teJ7QCSymx4ioQKJk4jxNWWTaQEnXsR1QOUItBC9mtTgMenntVCKjY4RyS79jy8b6iw5susEBfYs5OSJ2HUgdoR1",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-c367da09c5bb",
    "weapon": "SCAR-20",
    "name": "Outbreak",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk5-uRe6dsMqLDMW2Fz-l6tfNWQyC0nQlp5znXy9-vcXiWaA5yCMZ0ROUL5hXuwNfmY-_lsgSP2d0UzH-v3CtB7jErvbiWj5__Rg",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-13af73ca7ca5",
    "weapon": "PP-Bizon",
    "name": "Fuel Rod",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-dAX-Zzvtlj-1gSCGn2xkhsW7Rzt3_c3OePQElW8R3F7IJt0Lrl9e0ZO_r4wHZiINEyij323lXrnE8VjeQjNs",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-ef297140e6ea",
    "weapon": "Five-SeveN",
    "name": "Retrobution",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j_NsWzu8lwgzujKLpYPwJiPTcAByWJB4TOULsxS5wNfmPuzjtQHciYpHmCuqhypJvSlr4LsGBaEmr_bJz1aWW-JyGhc",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-69c57b0e17a5",
    "weapon": "Negev",
    "name": "Power Loader",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-aA3eRwvpJvOhuRz39lE914j-HyYmscHLBZ1J1X5NyEbYI5Be8k4DmYuzh4AGIgo0QzSqs3TQJsHgPf9N5RQ",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-460926660df2",
    "weapon": "SG 553",
    "name": "Tiger Moth",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-HB2CV09F7v_VhcCW6khUz_TnWn9n7cyqRPQ52DpN3QLEPshjrw9zlY-jjs1bWioMQxSj8hyxJu3l1o7FVwqXqqnE",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-4a49656a91ca",
    "weapon": "Tec-9",
    "name": "Avalanche",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SIeaSAmaewuZzj-1gSCGn20Qi4m_cwtv8dy7Fbg8kXptyRuMJtEG4kdDuN-jq71ffj90QxCT22HxXrnE83F92lc4",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-3932487f357b",
    "weapon": "XM1014",
    "name": "Teclu Burner",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMW-f1dFkv-VWQyC0nQlptj_Tn9v4J3zEbVIjCZEkELRcska_x4DmNumz4QHWjYtNxSSqjSNAuzErvbjrIzaCAA",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-28b915dc6c9c",
    "weapon": "AK-47",
    "name": "Point Disarray",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSMP-aAHOvxedlsfN7TjCMmRQguynLnIz_dXnEbFcoDsNzQLMN40S7mte0Zuzl5gbY34JEnnr52ChA7ytisPFCD_Rw7udDlA",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-b0c24d905a01",
    "weapon": "G3SG1",
    "name": "The Executioner",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-WFmKT1Pp_v-9sXRa_nBovp3PXmdyseC3DOFN1DJZ1TeIOtEKxmoG2PuKwsgOPgoxGzyr7jnhPvXlq_a9cBnGZIRC4",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-d866f26d9587",
    "weapon": "P90",
    "name": "Shapewood",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V7dlIeCWGWifxdF6ueZhW2fglEtz6zjWyo2uJXKeaAF1ApZ2F7YN5BC_w9TjYbzg5VCNg9pEnHiskGoXuQsJgcHb",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-4c83a4940ef3",
    "weapon": "M4A4",
    "name": "Royal Paladin",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSMv-KD2uv0v9jufNscCW6khUz_W-Az9b8d3LFZ1AnDMAjR-4CsBO9xofhNL_q4wLWjogUzyn43SxM73x1o7FVNN3FvCs",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-3d5660b8b090",
    "weapon": "R8 Revolver",
    "name": "Fade",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2vaZtrIfSWMXWV1-F6puR7cCW6khUz_W2EnIuheSiVZgIgX8F3Ee9YthLuw9LjMePqswCL34kQzHj6iypPu351o7FV6jjqgC8",
    "collection": "Revolver Case"
  },
  {
    "id": "skin-vanilla-crate-4186",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Revolver Case"
  }
];

const crate4187Items: Item[] = [
  {
    "id": "skin-f1e676fd36be",
    "weapon": "PP-Bizon",
    "name": "Photic Zone",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-QB3OZ2-t4j-1gSCGn20hw5GXWntf_eH-Wa1MgX5N2EeBc50G_w9HuZL_h4gGLjd8XxX37iHtXrnE8eXv1H4U",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-df294c189613",
    "weapon": "Dual Berettas",
    "name": "Cartel",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1a_s2qfaVhIvWBC3OEwP1Js-B7Wyy_qhEutDWR1I38I3yROgAmDZIjFuEJ50S6lNLvMuKx5lPbj9gRySz92HhKuiZp5ekcEf1yPnX3Fyc",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-c6ff1f1300c7",
    "weapon": "MAC-10",
    "name": "Lapis Gator",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-WAmKT1fx_s-h9Vha_nBovp3ODztegd3LEawcnX5ByFLQPtxSxldyxPrjg5QCPj94Ty3j8j3tLu30__a9cBu41m2up",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-f09be63883f9",
    "weapon": "SSG 08",
    "name": "Necropos",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-dC2SCzv55o95lRi67gVN26m_VnomsdiqTZwB0W5R5E7UCuxe6lICyMO3i7lDWjt4XyHj_iypB8G81tA-y21Aw",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-f62914cda55c",
    "weapon": "Tec-9",
    "name": "Jambiya",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SKvGeDG6JwNF6ueZhW2ewwhhw5WnXy4v_dnqXOwMnAsQmF-IMtxDql9LmP-mw51feiIhDnn78kGoXuTq6iJ_X",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-c5f4d564ca7e",
    "weapon": "USP-S",
    "name": "Lead Conduit",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSJ-OsG3SA_vh5vPVoSCyMmRQguynLmNyrdimTZw4mW8cmE-ZYsxewkYaxZb6z5FbfjY8RyS__iXsc6S09sfFCD_RkYnnFtg",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-24b781ebda0e",
    "weapon": "FAMAS",
    "name": "Valence",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a_s2oaalsM8-QAWmEzvtkj-1gSCGn2x4ksWzczo39c3_Ga1R1CpByR-YO4RXqm9fgP76w4lbYi91CzSyq2H5XrnE8rQqckvg",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-47d923c1512d",
    "weapon": "Five-SeveN",
    "name": "Triumvirate",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-B8SCS2mwkitwKJk4jxNWWXPAZzD5pwTeBetUPtw4C1N7jh5A3bj48RxSyqiiwc7Sg6tr0ABaAk5OSJ2O3yTJMF",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-71b2f3cff45c",
    "weapon": "Glock-18",
    "name": "Royal Legion",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK6HLMWaHwPxyj-1gSCGn20gksm_Uyo7_JSmeOARyXsEhFLQMsUW_wIXuP-rj71CIiotAzCqoinhXrnE8DvG09t0",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-31658eeb1561",
    "weapon": "MAG-7",
    "name": "Praetorian",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSMOKSC3Of0-d3vt5lRi67gVMl5j_VzIr_eSnBbw4iXsR2FLZfsRi6x9LvNOqw4FePid4UmCX2iC1J8G81tOf1qE-m",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-8defd7296615",
    "weapon": "MP7",
    "name": "Impire",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf7jJk4uL5V61gMPmBC1icyOl-pK8xGiq2kUV24j6Gn9b4eXmWPwIoApJxRbRbtRW5wdfjYbi0sVfW2tkQ02yg2fafAb5i",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-f2cdadd8b557",
    "weapon": "AWP",
    "name": "Elite Build",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6lsM-SWHH6vzedxuPUnSnHmk0Qh4G6HmN-scXmSaQRxXJpwRuZYsxTqxtTnM7nl4gTW2dlFyjK-0H0d8XeEBg",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-3fd39ac4ec6f",
    "weapon": "Desert Eagle",
    "name": "Kumicho Dragon",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKF-JeKHC2aXzetJu_RkRiq7mhk1sjqKlLD1KCzPKhh0CcBwQLVe5BHrloKyZOnr5w3XiYhDnC39iCpK7X1psrlUWaFw8qXekUifZlV_fDVZ",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-d0090217a5a4",
    "weapon": "Nova",
    "name": "Hyper Beast",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSKOmDC3WSxO9lpN5lRi67gVMhsGrTmd2seH6XbA4pDZR1EbMCtES8m4fiNenl4FDcid1Az32ri3tM8G81tMCTwFwB",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-8f7564b8b3eb",
    "weapon": "AK-47",
    "name": "Fuel Injector",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSM-WDC3WTye9kt-RtcCW6khUz_WuGy9_8dHuRbg5xW5IjQ-BYshK9mta0NLmw4lDa2o0Wni_3iy4f6np1o7FVB0pWHHg",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-62c54d49e07a",
    "weapon": "M4A4",
    "name": "The Battlestar",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSMPmcAGKV09F6ueZhW2fjxB9_4GqEyN6vdi_BPwQgWZIkRLYD4Ba_kILgYeOz4lbagthBz3_9kGoXuZIYHoDp",
    "collection": "Operation Wildfire Case"
  },
  {
    "id": "skin-vanilla-crate-4187",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Wildfire Case"
  }
];

const crate4233Items: Item[] = [
  {
    "id": "skin-3de8a2cd3d43",
    "weapon": "Dual Berettas",
    "name": "Ventilators",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhIvWBC3OEwP1JpuRnWyC_lAkooS66lob-KT-JblNxDcMiQe8M5hDtxtfnNrvrswyLjdgWzCyvhytP7ilqt7pXBfdz-rqX0V-MxKZG7g",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-8e1bb1b66b99",
    "weapon": "G3SG1",
    "name": "Orange Crash",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1I_82pO7dqcc-eB2uZ1ed3v_NoQS62qhEutDWR1Iv_IC2eZgUkA5Z0RbEL5BLqw9flMby2swba34JBnHr22CMd5i1r67ocEf1y0mrzb0E",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-fc1505f10422",
    "weapon": "M249",
    "name": "Spectre",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SM-CWDXOCxNF6ueZhW2fqwklx4j_Wyd_6J3yeOlcoXMclQuQI4xbrw4fmNrziswLX2IhHziqrkGoXuVEVHa_j",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-6e2ddbfa3638",
    "weapon": "MP9",
    "name": "Bioleak",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_C9k4uL3V6ZkL_yWD2yvzedxuPUnHSi3xhgm4GSGm4mpcnyTbVQjWcZ5EeIL50LultzgNbvmtAPf3oJByDK-0H0NB5p7wQ",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-3903899a4282",
    "weapon": "P2000",
    "name": "Oceanic",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0Pq3V7Q_cKDDMWiTxO94ud5lRi67gVNysmuGzt_9JSiQaQJ0C8MkTLJbskHrk4fnZe3isgfZg4tMnySoiX8Y8G81tHDFigbI",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-a7997cc94140",
    "weapon": "Sawed-Off",
    "name": "Fubar",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2pe5t-IeeWCmiWx9FwpeNoXRa-kBkupjDLmN39d3jDb1VzApsjFu4DuxC5ltKyMbi2sVbZ2tpNyiuvjH8Y7HpqsPFCD_SxQd5sJw",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-b86e591b7a8e",
    "weapon": "SG 553",
    "name": "Atlas",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-SGmuR0tF6ueZhW2fgkxt_tTndn46rJX6QOAEoC5QhEe5f5hHqltfgMeO0tQHY2IsTyyyokGoXuYh0VG-5",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-e4311574b36e",
    "weapon": "CZ75-Auto",
    "name": "Red Astor",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4Ic-BC2OR0vp5ot5lRi67gVMh5D_cwor7cy7GZ1UpA8F0QrQP5BjuwdHiZr7r5FeNjIpAmyT8hnlI8G81tORsc2LX",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-b60d3982f423",
    "weapon": "Galil AR",
    "name": "Firefight",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfD3WvyOB1te9sXSinmg8YvzSCkpu3eH_EZ1IgDsR1ReYPshm6x9XnZe204VCMiIsXzS_33S0b7X5t4-dQUb1lpPOTHSUAOw",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-896626717e7c",
    "weapon": "SSG 08",
    "name": "Ghost Crusader",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1c_M29e6M9eM-SHGqRwuFktd5lRi67gVN_6jnQzYmhc3jFbgUoA5J3ReYIsRO8ktGyM-iz4AaMi4hDzyqsiSJJ8G81tKe_wmAg",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-0705abcdd5df",
    "weapon": "Tec-9",
    "name": "Re-Entry",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0Oara_1SMvWXDGuR0vpJvOhuRz39lkp-4j_QnoytcS-RPwEgDZt1FuAJshG6ktW1NLy34gCPj44WmH7-jzQJsHhOKqOsYw",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-8a7c514126f7",
    "weapon": "XM1014",
    "name": "Black Tie",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMXSAxO1iovRkcCW6khUz_Wncm4v6dnuVawImXsZzTONcsRK5xofkYeywtgWKioNDxCX9in8cvy91o7FVLrGdyvk",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-cdca99fe25ed",
    "weapon": "AUG",
    "name": "Fleet Flock",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV7d6IfyfAXCD_uJ_t-l9AXnmw0t252TVztercCmTZ1AmDMZ2RuBftRnsx4LhN-O0s1DYi9pEmCTgznQesuSvNik",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-b10fdec34656",
    "weapon": "P250",
    "name": "Asiimov",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSIeOaB2qf19F6ueZhW2fixx53tWqEm4ugeXuebQN0CZJyRrMJuxm4loCyPr_i51TfjtgXzi79kGoXuUXmUJzm",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-edb13cbc1a57",
    "weapon": "UMP-45",
    "name": "Primal Saber",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-DHG6dwOJlseNsXRa_nBovp3PRn478JHmePQ8hDcF2Q7YDtxXrk92zYbyw7gXYjIhEyCn_3Hsbui44_a9cBklqRdMs",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-8599a25e2c67",
    "weapon": "PP-Bizon",
    "name": "Judgement of Anubis",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-QG3WDxNF6ueZhW2fkzU0isDvTnomsdS7BbwF0A8ElROJfshC8wN3jYu-2tQ3c2osTxCitkGoXuVioOA3_",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-815a9f1c0092",
    "weapon": "M4A1-S",
    "name": "Chantico's Fire",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_JmWiWnlBYioQKJk4jxNWXFZ1IgC5MiQuZeuhK4wIXnMuPhslCM2oMTxH75hnxK6Htjse4BVqd25OSJ2DU2Q_CD",
    "collection": "Chroma 3 Case"
  },
  {
    "id": "skin-vanilla-crate-4233",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Chroma 3 Case"
  }
];

const crate4236Items: Item[] = [
  {
    "id": "skin-f4418cce494a",
    "weapon": "Five-SeveN",
    "name": "Violent Daimyo",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC1iDxPhzvt5tTiC-jBIYvzSCkpu3cXjCPAB2WZMmQ-EK4BTqlNSzNOLk71GI3tpGmX2oii5N6nk667kDWL1lpPNv4wCTtw",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-5c202c8939b2",
    "weapon": "MAC-10",
    "name": "Carnivore",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a_s2jaadScaCsD2uZxOBJs-BkQBa_nBovp3PSmdqpcy2fPwEoWMciQLYKtBa9lYDmN-zlsVDXiNpAnnmqiHwcv3w5_a9cBiTJtAYY",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-aa93f10a9c96",
    "weapon": "Nova",
    "name": "Exo",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiNK0PyhfqVSM_OaMWGZ_uJ_t-l9AS3lxE8k4zuGz42qciiVPQIkDcF0TLNeuhmwxtfhYbzm4wfci95FnC_gznQeGrfN1lI",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-6736df07aec5",
    "weapon": "P250",
    "name": "Iron Clad",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSLfWHD2uv0e94te16cCW6khUz_W2Hzd6heSjBbFd1CsFxF-8DsULulNLjZu6xtQDfitlCyiWt3HtNu3p1o7FVE3GEpAE",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-63aa6463689b",
    "weapon": "PP-Bizon",
    "name": "Harvester",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2-eJtvKeqcAFiYwPxgtfJ9SjuMmRQguynLyd76dSqfZlUoA5dwFOBb5BGxxNDlP-Lg5QKM2IoUyyqv2ixL7ihr6vFCD_SgdFoAow",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-f7201f00d647",
    "weapon": "SG 553",
    "name": "Aerial",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-SC3WZwOJJvOhuRz39wkQj4TzXw9igJXrEbAJ1C5VyQeVZ5hHslIXjMOyz41begt9Myiiq3zQJsHi7xfgn5g",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-82e19c21d6d0",
    "weapon": "Tec-9",
    "name": "Ice Cap",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0Oara5s0H-OWD1iDwOJij-1gSCGn2xtz5TjdyNquJX-XaVV0CMd3EOUP5Bjsw93uP77jsVHejohEyH6t339XrnE8zMglqPs",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-d88fbf7ef8e1",
    "weapon": "AUG",
    "name": "Aristocrat",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV6V_KeOHAWSCwPpJvOhuRz39w00j5WSDytyqI3_CPwAgXMd2E-Vc4US-koCxNOzq5AaMithNyij32DQJsHjdc8VZyg",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-78882aeeb9a7",
    "weapon": "AWP",
    "name": "Phobos",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V7RlL_KcHVicyOl-pK84GXHmwk115D6GzdqudHyUbwRxW5R3ROZbtEG8wYDiY7-x5VOKgotB02yg2bdJjfAf",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-31a18fdabe59",
    "weapon": "P90",
    "name": "Chopper",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6J4LPysGm-CzvpivORWQyC0nQlptWTXzt-tIyrFPQMjCpImQbED5xm5kIDhZePitlbdjotBnH783H9L7jErvbjpMmMyTQ",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-1b8d8987488f",
    "weapon": "R8 Revolver",
    "name": "Reboot",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2tfZt_eM-QF2WV0_1mv_N9cCW6khUz_WjRyouseHqUPwQoXMNyQbMM4ETulNSxNuq3s1DZi95CzH_-2Cgf7Hp1o7FVySZFkkA",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-33872c48a8e5",
    "weapon": "Sawed-Off",
    "name": "Limelight",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWClifx-hJvOhkSha_nBovp3ODz4utJHrBZ1MjD5YkFO8NtBjqwdXvP-nn4QLZjIJNnHio2Hwd5npq_a9cBh09Jdi8",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-ca4eb6f53d0e",
    "weapon": "M4A4",
    "name": "Desolate Space",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJPWAAWuR1etJo_FoTCyMmRQguynLnNepJXPEaQJyDZJ0QOdbsxi7ktS0Y-Li4ADegthGn32ojCJJ7CxosfFCD_SyjfEkHg",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-76967e1c919f",
    "weapon": "P2000",
    "name": "Imperial Dragon",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PW9V7Q_cKDDMW6d0etkueBlcC2hlBoovQKJk4jxNWXEbAQmDsQmRbNYsxGwxoC1YrvrsQXXg40QxCX533tJ7Xs-4eYKWKAl5OSJ2JuLIVNl",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-9a2cefa49e12",
    "weapon": "SCAR-20",
    "name": "Bloodsport",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMWWczuFyo_FmXT2MmRQguynLnoqrcHPCaFdzDMF5F-8P4Bbum9fkYuvrsVffjI5AyS75inlL5ixjsvFCD_R20nqesQ",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-73cc8d5fcd85",
    "weapon": "Glock-18",
    "name": "Wasteland Rebel",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-ED3SExOJ3vuVWXSyxkBEYvzSCkpu3Iy7GPFUnC5t3EO4I4Bm6w4DmNu3k4lCN3YNNniz23HsY6Xxv5rwCU71lpPMpvj9PCw",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-102a47219b11",
    "weapon": "M4A1-S",
    "name": "Mecha Industries",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JveRqRyiMnBMjpi6RiIb8MhTLN1F4TowiE7EMtRW7ltzlMbvi5wPej4pDmCT2i3tKuHo4sOoEWKFz8qPS3F7BL_Rjtn0I4s52",
    "collection": "Gamma Case"
  },
  {
    "id": "skin-vanilla-crate-4236",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Gamma Case"
  }
];

const crate4281Items: Item[] = [
  {
    "id": "skin-44edcae0251b",
    "weapon": "CZ75-Auto",
    "name": "Imprint",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4H-SBC2aU_uJ_t-l9AX_ql0kksWTVyYupJC7FOAUiAptxQudbs0KxkNK1MLzl4wOPjIsWyCngznQeZTDWXeo",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-034f9e819612",
    "weapon": "Five-SeveN",
    "name": "Scumbria",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRabVSJvmFC1iDxPhzvt56TDy-lw8usgKJk4jxNWXBP1JzAppxQ-UN5hm_mtLgZbjn5wPdi49Bnyqr3SJPvChq4-tWB6Ak5OSJ2BFWlPNZ",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-2455f7e4f242",
    "weapon": "G3SG1",
    "name": "Ventilator",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-FC2mEyOJ3pO57cCW6khUz_W_Rwo36cC6SagZzDZZyQbMN5kTtwNC0Mb60sg3cjo8UnHn4j3hPuid1o7FVSaKTKS0",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-3470c859db1d",
    "weapon": "Negev",
    "name": "Dazzle",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1T9s2gbaNoNs-XD32KzetJvOhuRz39xxxzsmWEz9v9I3zFaQQiA5pzE7YLt0WwwdHkZrjktQXeg4gXyXj62zQJsHixNFIgjA",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-b15a3a34433b",
    "weapon": "P90",
    "name": "Grim",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6N_Kf2eMWuZxuZi_rA9GHDrlh8h6m7dw4qpciiUOgQkAsF2ELYPsBjploe2P7ngsQaIjN5bjXKpNUOMolU",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-2826d766adf3",
    "weapon": "UMP-45",
    "name": "Briefing",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-eC3OCyPpzouBWQyC0nQlp627XyNigJHjBOwIiXMNyQuUKsRKwktK2Zu_j5FOKi9lCzHmtjCNKvDErvbgMSlL6rA",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-081963f17f9c",
    "weapon": "XM1014",
    "name": "Slipstream",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk5-uRcKk8cKHHMWGCwO1ise1WTSWmkCIrujqNjsGrdn-WZw51ApR5FO4K5xDuk9O0Zunm5lGIio4Rnn2rjyhA7Cw_se1WT-N7rYJQ1fMT",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-02e5c0a4a714",
    "weapon": "Desert Eagle",
    "name": "Directive",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKF-JeKHMWKRxuJzj-JmQTqnlB8rtgKJk4jxNWXGPQ9yA8Z0R7FbtBi7w9S2M7_msgCIid1CmH6viH5I7ilr4-oEUKst5OSJ2LTZlHwR",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-0e48389f836a",
    "weapon": "Glock-18",
    "name": "Weasel",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK6HLMXCVwP1zvN5lRi67gVN_4j7Qzdj8dimQblQkX8YkTeNe5Bmxkd2zNr_j5QbdjthCzX-qjylI8G81tDMJpR5Y",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-18a6943d8cc2",
    "weapon": "MAG-7",
    "name": "Petroglyph",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSNOKaDGac_uJ_t-l9AXm1kUQl4TzcytqpeSjFagMkW5AiQbZYsEG_mtTnN-jq4AWLidpNnC3gznQeOK4te4s",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-9c61185e3e75",
    "weapon": "SCAR-20",
    "name": "Powercore",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMXef1utks-57Sha_nBovp3OAzd2qIy_DPVMkXMEiE7UL5ES-l9yyP76wswWP3Y1Nyyn2i35L6S5s_a9cBj_cXeyl",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-1dad3beb1452",
    "weapon": "SG 553",
    "name": "Triarch",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4ds-HHG6R0-1-j-1gSCGn20Qk6m3UmY77IHOeOlNxCJQmQbYMuhC6mtaxP-K0sQLYi94RzC_8iH5XrnE8WPSRipg",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-ba00fd57f9ef",
    "weapon": "AUG",
    "name": "Syd Mead",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7d0JM-eC2aU_uJ_t-l9AX_rkU9-5j_Ry42qcnuQbw5zCcMhQrINtRO-xIHvY-Ow4gPY2Y4UmSngznQeqqNNbYw",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-f07fb63926b7",
    "weapon": "MP9",
    "name": "Airlock",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6psMvOaHVicyOl-pK8xGXq2xE536m7dnI2vdS6WagZ2CMFyFrNcsBjuw4G1Ne23tQGN3olH02yg2ZxyeudA",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-23a0601d3273",
    "weapon": "Tec-9",
    "name": "Fuel Injector",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SM-WDC3WTye9kt-RtcCW6khUz_Wvcy9qgdCnEPQ8hApBzRrQJ4RW7moDgMLzktFDZiI5HnyWr3ChN5yp1o7FVg4hNKG8",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-1a5e885d9d28",
    "weapon": "AK-47",
    "name": "Neon Revolution",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6SHGSY2NF6ueZhW2e3w0524mjQzomreXqVbAAhWJF3RuZfuxC5x920Yurh7gONjY0RxHr4kGoXuT5bpI-V",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-0305a5aaa4eb",
    "weapon": "FAMAS",
    "name": "Roll Cage",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-BD2uc2NF6ueZhW2exzUhz4WjWmNqpdy-UbwJxDJtxReEMtRGwloflP7m04wfXi94QyXj9kGoXuV3JhaXD",
    "collection": "Gamma 2 Case"
  },
  {
    "id": "skin-vanilla-crate-4281",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Gamma 2 Case"
  }
];

const crate4288Items: Item[] = [
  {
    "id": "skin-6f20b68a8c63",
    "weapon": "CZ75-Auto",
    "name": "Polymer",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2tcrI_H_2VMWuZxuZi_rcwSnHjwxgh527SzI6oIHKUZ1dxA8ckTbUCskG6ldTuY-nh5FTf34JbjXKpj6qz0B4",
    "collection": "Glove Case"
  },
  {
    "id": "skin-19a7e921eb77",
    "weapon": "Glock-18",
    "name": "Ironwork",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a_s2pZKtuK8-XD3WbjOh3vO1WQyC0nQlp5jmEmNaodH6VbwMnApshEOcPskOww4e0N-qz5lPZ2YlGyCSviika6zErvbhhWFzqpw",
    "collection": "Glove Case"
  },
  {
    "id": "skin-df49957ef56b",
    "weapon": "MP7",
    "name": "Cirrus",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk6fugaahSMP-cAmOVwOpg4t5lRi67gVMj5j6Dwtaocy6UOAIgApNyQrQOshS7lIXlMbvqslHfi41Eyi7823xK8G81tHGGql6L",
    "collection": "Glove Case"
  },
  {
    "id": "skin-2c0ae1658110",
    "weapon": "Galil AR",
    "name": "Black Sand",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWaCjO13ve5WQyC0nQlp5T7dzoqpeX3FZ1R2DZd4Qe4CtRS_k9y0Ye7qtQOP2oxAyX73iytK6TErvbi0QhR0PQ",
    "collection": "Glove Case"
  },
  {
    "id": "skin-40273e06d839",
    "weapon": "MP9",
    "name": "Sand Scale",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_CNk5_uqbelgMKmsAm6Xyfo4tuA9TnDrzB5w5GTczo74cnyTblAkWcclRuYIuhXplde2ZePl4FTc2ZUFk3tXKn8xpQ",
    "collection": "Glove Case"
  },
  {
    "id": "skin-cc6ec471ea94",
    "weapon": "MAG-7",
    "name": "Sonar",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiNW0P-vb_NSLfGfCGiCzNF6ueZhW2fgxEol4TnQyo2qd3qTPwQhD5d0F-YPuhHpwNHlZLvi5VTY3dhAy339kGoXufaFAiYQ",
    "collection": "Glove Case"
  },
  {
    "id": "skin-d044427dd6f6",
    "weapon": "P2000",
    "name": "Turf",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PW9V7Q_cKDDQ3SAzvxij-1gSCGn20h14mSByd6vJXmUagQoXpMkQecN40Xsm4DhM-3k4lTY340UxCn53HhXrnE88VIlnLo",
    "collection": "Glove Case"
  },
  {
    "id": "skin-54963e630d31",
    "weapon": "Dual Berettas",
    "name": "Royal Consorts",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_KWHGKE1e9lj-ZmQy22myIxtjOMmYrGLSLANkI-C5AjFOcM5EaxxtTmPrnl4Q2Ki91Eyyz32y1Luyk44u4LUqEjr_ff3BaBb-MmOWu8Lw",
    "collection": "Glove Case"
  },
  {
    "id": "skin-00b8673938d7",
    "weapon": "G3SG1",
    "name": "Stinger",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-FB3eV09Fvte1lQD6MmRQguynLyo6rdH-RPAZ0D8chQeIL50TukdK2P-_rtFPejN8WmH34jylJvHtq5fFCD_TvHmnxYA",
    "collection": "Glove Case"
  },
  {
    "id": "skin-3795f6827a11",
    "weapon": "M4A1-S",
    "name": "Flashback",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9Jtu1oXCGxlB4sjDGMnYftb3yVPQFyDMB3EbJZ5xC4kNPvMOO35AHW3d1AnC_3iHlNuytqtuYDVfI7uvqAZWXE-YM",
    "collection": "Glove Case"
  },
  {
    "id": "skin-b935cdf1da4b",
    "weapon": "Nova",
    "name": "Gila",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiNW0PyhfqVSM_GdClicyOl-pK8wHnrrwU8hsW2DyoqgeSieblIkDJZwQu8Cs0TultLgP76051SPid9N02yg2S7-0Sao",
    "collection": "Glove Case"
  },
  {
    "id": "skin-95653cc7fb0e",
    "weapon": "USP-S",
    "name": "Cyrex",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1vouRxcCW6khUz_TjdzdmsJyiTZg8kX8N4ELUP5EPsw9G1YeLn5VTXjY0WxS6rhiIYuCd1o7FV2N83Spg",
    "collection": "Glove Case"
  },
  {
    "id": "skin-ea2876c00b6b",
    "weapon": "FAMAS",
    "name": "Mecha Industries",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-eC2SYwNF6ueZhW2ewwx4hsm3dz46heSjCPVUjC8chEOYMtxOwkNHiYb63swXY3Y9Nn32skGoXuc3DGOrc",
    "collection": "Glove Case"
  },
  {
    "id": "skin-6772919e8e84",
    "weapon": "P90",
    "name": "Shallow Grave",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V7dlIfyfAXCvxvx3puRWQyC0nQlpsWzUyIqvcCiVPFQnW8YmEO4P5xi6xNS2Num35FbX34lCzX7_hytK5zErvbi02RizsA",
    "collection": "Glove Case"
  },
  {
    "id": "skin-9a257b12e3fd",
    "weapon": "Sawed-Off",
    "name": "Wasteland Princess",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt6MM-AD3CVxeFwtt5lRi67gVMksWuEmduuIH2fPwUkWJojQuMP5xi8lNzlY-234lDag4xFnin_jihN8G81tH9UxALW",
    "collection": "Glove Case"
  },
  {
    "id": "skin-318f343e125d",
    "weapon": "SSG 08",
    "name": "Dragonfire",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-XHGaXzuBwufNscDqwmg0ijDGMnYftbyrFPVAoWcQjELQOuxO4k4e1N-nnsQfW2I5Mz3ivi3wb7Stj5ukAUKY7uvqAqS55_Pw",
    "collection": "Glove Case"
  },
  {
    "id": "skin-01d7c60eddbb",
    "weapon": "M4A4",
    "name": "Buzz Kill",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSM_WQGmiC_uJ_t-l9AX22kBh0tm3Qn92qdS7GPARyW5t0QLQD4xi6w9XkZe3jsgDW3ogUnH3gznQeqfpfmso",
    "collection": "Glove Case"
  },
  {
    "id": "skin-vanilla-crate-4288",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Glove Case"
  }
];

const crate4351Items: Item[] = [
  {
    "id": "skin-f945b5be9ee1",
    "weapon": "PP-Bizon",
    "name": "Jungle Slipstream",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9s2sYb5iLs-HAXWe_ulkteRncCW6khUz_WjQn9msInvFOlIjCZJyFuMKsEG-l4blY-zh5lDWi4lFnCr53S1Juip1o7FVTY_WZWI",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-2501d2df72d4",
    "weapon": "SCAR-20",
    "name": "Blueprint",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRaqh4JeCBB2mE_v11sfNWQyC0nQlp4jvQn92oJX-VaVIgW5QkQuYM5kLswNTnNL-w4QaK2YNFmXqqjSxJuzErvbi8Z0332w",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-8f997b65f837",
    "weapon": "Desert Eagle",
    "name": "Oxide Blaze",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKF-JeKHMWKRxuJzj-JmXTu8kRgpjDGMnYftb32UPwJxDJokRuUIsRi_lNPhM7izsgXZi49GySiq2nxNuCdttbtUB_A7uvqAjSk2l_c",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-32ee365f968a",
    "weapon": "Five-SeveN",
    "name": "Capillary",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j_dsRieMmRQguynLmY79IinFbA90CZN2Q-Bc4UW6x9KyZLnjtQCMjo8WyXr7jy1O6Ck_sfFCD_SqR6qLvA",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-fa522c8e6ebb",
    "weapon": "MP7",
    "name": "Akoben",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf7jJk4uL5V7B_KfKSAliJxOJ6v_ZWQyC0nQlpsWmHyIquci7EPQQgCZMkE7FZsUXpx9y2Mu6wsgbWjINFyir9iXlNujErvbjY0_iNfw",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-bce064b53f43",
    "weapon": "P250",
    "name": "Ripple",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNW0OL8PfRSM-CGGmmZytF6ueZhW2fnlht-5juGyY2vIC2SalQjX8Z1RbVesUG4m9XlN-_ntQPa3YNBn332kGoXubXJFvZo",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-68e37aff8fd3",
    "weapon": "Sawed-Off",
    "name": "Zander",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2veZt-IeeWCmiWx9Fsse9tSjvhqhEutDWR1N79dXrBbFUgXpt4QrJb5hfuktTgYuLrtAXXiNpGySuvjS8b6i9j4escEf1ycSPZoqI",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-1f899f97bd99",
    "weapon": "Galil AR",
    "name": "Crimson Tsunami",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0OG-V6NsLPmfMXCR1-tJvOhuRz39x0Qm6mjQzo6qeHLGOg8nXJUiE-UKtxa5mtPgZu3rtFGMiIwXxH-viDQJsHh48m4KFg",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-61f4c5cf38a6",
    "weapon": "M249",
    "name": "Emerald Poison Dart",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wjFL0P_8PP1SJuKcCVif0-dxue9oQxa_nBovp3PRzNb8JX2VO1IpDsclRrEPtxXtxNSxYuuw4QHai9gWyCT2j3gYuHlt_a9cBlcR8wa2",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-d3caeffc5ec8",
    "weapon": "MAC-10",
    "name": "Last Dive",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a7s2jaac8cM-HBmKvze9lpN5tRj-2qhEutDWR1N76Iy_BblUnCZd5QLFesEXrmtWzMui05wPc3o4TnnqojS8au3094ekcEf1ydsF2boo",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-b0c874f3f971",
    "weapon": "UMP-45",
    "name": "Scaffold",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1c_M27ZbRSIfKKHXSvzedxuPUnGi2ywBwhsmuDnNn9cX_EbA4mCcF1QbJZ5BPtm9fjZejnslDciNgUzTK-0H2MLp31Hw",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-bc2d596ca9ca",
    "weapon": "XM1014",
    "name": "Seasons",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKlSLPWSCFiWwOpzj-1gSCGn200i6mvRn4mpdCiVblRxDJd3FuILuxi7ktHuNb-04wzW2dpGzin-2ihXrnE8PcTco88",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-d85f6159fe4a",
    "weapon": "AWP",
    "name": "Fever Dream",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7R-OfObAXeR1eZJvOhuRz39kE1w4jiAzNiod3qTOgcgXpAlQ-ML5hjqxtHjZOrrtlHWit9EyCj9iDQJsHhCZP-wUg",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-d1f0620f06f3",
    "weapon": "CZ75-Auto",
    "name": "Xiangliu",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcpt-LvGYC3Sv0ftkoO1scCW6khUz_WTcw9r7JH7BOgApApojQuBb5kO5lNO1ZO_h4VaM2o5Gm36s3HgbvH51o7FVgkdxNDg",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-7b3af96bd1e4",
    "weapon": "M4A1-S",
    "name": "Decimator",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JtORqRiSygRI1jDGMnYftb3iUb1dxW5ImFLNftxCxktflZLm2tgaP2otGyn_-hytOvy9q5elQV_A7uvqA6CRSoZY",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-ba052cf18c66",
    "weapon": "AK-47",
    "name": "Bloodsport",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSIvycAWOD0eFkpN5lRi67gVN15mmDw9egci_EPFAkDMQlTeZe4EXplNa0Yrvr5wbd345GyHioiC4b8G81tFuqg_k_",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-0770dabcd885",
    "weapon": "USP-S",
    "name": "Neo-Noir",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA0tF4v-h7cCW6khUz_WXdmd-vI3uRPwEkApR4QuBcu0Xrk4biYr_mtQXdidlCz3r63Ska7Hx1o7FVWuokIcU",
    "collection": "Spectrum Case"
  },
  {
    "id": "skin-vanilla-crate-4351",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Spectrum Case"
  }
];

const crate4352Items: Item[] = [
  {
    "id": "skin-d2ff95e10b1f",
    "weapon": "USP-S",
    "name": "Blueprint",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA0tF0vPRsXzu6mwkYvzSCkpu3IiqTZgAmCJIlRLEP5BXpxtPlMOOxswPZithFyyj3iyNPvCo96r1QBb1lpPPa5SpubA",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-72470f196aad",
    "weapon": "FAMAS",
    "name": "Macabre",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1I_82oaalsM8-eD2SRw_xzj-1gSCGn2xkm5myEzo2sdXPBagInW5pxTLICshnswdOxNrzj71fc2d5CzC76iSJXrnE8xi9ndzw",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-c254f71da49b",
    "weapon": "M4A1-S",
    "name": "Briefing",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-xsWzu6gRg1sgKJk4jxNWWTZgclDpNzQ7FZsESxxNPgZujksVDf2dkTmS343S1M731t5OcLAvZ05OSJ2NaAMPYY",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-3f4120c9e552",
    "weapon": "MAC-10",
    "name": "Aloha",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-SAmiYwNF6ueZhW2flxhsmtW3RnNiscnOWPA9xC5MiTeUKtRXqk9HgMOvh4wPd3tkQmXn6kGoXucQMChaB",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-f316468861b1",
    "weapon": "MAG-7",
    "name": "Hard Water",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiNW0P-vb_NSI_GGHXOZwtF6ueZhW2eykx534j_VydygIi6fPQJ0DJcmQrIMukK7k9HvZO224FbajI8WnC-tkGoXudK2z8cj",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-83039fec2ec8",
    "weapon": "Tec-9",
    "name": "Cut Out",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNK0Oara_1SI_iSAmyv0e9ipOR7QRa_nBovp3OGnNb4dHiTaFdzX5EjRLVY5EG6mtOzYu7q4FDb2IxBynmvi34bvCo__a9cBktm4Qsf",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-289b0ffc81ae",
    "weapon": "UMP-45",
    "name": "Metal Flowers",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a_s27ZbQ5dc-VAmadxOh6v_ZsXRa_nBovp3PTnN2vc3zGaFAgWMZ4F-MDsBW7kNXhP7i04gCI2oNDyij8iSpI7S84_a9cBuxmxCPI",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-b54386e7c78c",
    "weapon": "AK-47",
    "name": "Orbit Mk01",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlV6diLP-dFzfB_vxztN5lRi67gVMk4TmEn9n_c3PGPwZyDMckTO8JsEPuktG1ZOrjsgPX2IwUyiyv3S0f8G81tLnuvOvF",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-ebbde3e289ee",
    "weapon": "P2000",
    "name": "Woodsman",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMW-Fz_pzot5lRi67gVMi5GuBzo6sJXiSOAJxCMR2RuECthTskNG1Yrm3sgCM345CyCj32yJP8G81tLtUlzXH",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-a73d69feecaf",
    "weapon": "P250",
    "name": "Red Rock",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSIeiaAWqvzedxuPUnSizhkEh05zzQmIr8JX6UbAZ2DsMhTOEOthexl9e2NuLktAzaiIpGnjK-0H2BmRk7ww",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-73449301d7a3",
    "weapon": "P90",
    "name": "Death Grip",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk_6v-V6ZsMvWRAWmV0tF0vPRscCW6khUz_WqAy4z6cX2Tbg8hWJN2RLQMsRPplNDmYr63sVPciIkTyij3iX5M7yt1o7FVUmFnInA",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-d9516fc63729",
    "weapon": "SSG 08",
    "name": "Death's Head",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-XC2aEyf1-teBtcCW6khUz_WTXyNipeX-QOlQhXpJwFuYO4xLqxobuN7vn4QaNgthBnHn7iSJPv351o7FVSPuLyfc",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-81ad76182a96",
    "weapon": "Dual Berettas",
    "name": "Cobra Strike",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhIvWBC3OEwP1Js-5rXSiMmRQguynLydn9JXmUOwMgCsN1EbMPsRHtxoDuZrzm4VTait4Tzn_-jn4f7ipu4fFCD_Qo-zseRg",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-99def93a5fe2",
    "weapon": "Galil AR",
    "name": "Sugar Rush",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWSRz-pvs-loQDqMmRQguynLyNqpJX_CPwUpXpEmEOMLs0K-kdPiN-uz4wfW2IgWyySr2ixKvCht4fFCD_QYspg1jQ",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-12d0c696aacd",
    "weapon": "M4A4",
    "name": "Hellfire",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSKPWfAmGZ0-tJvOhuRz39zEp24GTXmImsInqWP1AkXpBwE7FetUTswdfkPu7h5QXXithBy32t2DQJsHhDPmtuAA",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-06e2ad662c73",
    "weapon": "Five-SeveN",
    "name": "Hyper Beast",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-lwXyyhlxgmoCm6lob-KT-JO1QgWZVyELEPu0W4l9KzYbzn5Fbf3YkTzn_8hihIvXxtsOoFUKYirLqX0V_f6-eqCw",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-cfaaa2fab447",
    "weapon": "AWP",
    "name": "Oni Taiji",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6xsLv6KD1icyOl-pK9vGCqwkx524G_WnNmsInyXOAVyXJJ0TbNb5EOxxIflYbzj4gDdiNlC02yg2XaKgrAq",
    "collection": "Operation Hydra Case"
  },
  {
    "id": "skin-vanilla-crate-4352",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Hydra Case"
  }
];

const crate4403Items: Item[] = [
  {
    "id": "skin-9be5df6c224c",
    "weapon": "Sawed-Off",
    "name": "Morris",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2veZt-IeeWCiqfx-hJtu1mWCyhqhEutDWR1NypJSnDPQF2C8N2EOEL4xjqkd20Ze7q4APW3dkWxSit2i4a7Ctp4LkcEf1yx89MV8Y",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-9ecc088bd04a",
    "weapon": "AUG",
    "name": "Triqua",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV6t_If6UC1iE0-d3vuZlSha_nBovp3OGyd-hdXzDZwApApYjF7UJtUK5l9LnYe_g4wDWjd5NmHqojnxJuCw-_a9cBrjnwKiq",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-b2c0d4a8e5c4",
    "weapon": "G3SG1",
    "name": "Hunter",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-QC3OdxNFkteV8Vxa_nBovp3Pdw9arJCrCP1N1DZFyR7EDskO4wd3mYr_ltVHa2oNNziWshn5Nunlp_a9cBi4_3bmx",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-bd5f006d65a3",
    "weapon": "Glock-18",
    "name": "Off World",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-aAGOZxuFJvOhuRz39xRly4WSDm4z9dHvCOg8iC5pxQrZethbsk4C1MbnnsQTag4pFyy_9hzQJsHjSW_TM0g",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-9b16f88ae206",
    "weapon": "MAC-10",
    "name": "Oceanic",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-cDWKRz-dJvOhuRz39lh4h52qGm9z7cCjBZ1IpCJp5QbRZtxXql9LnPrnr5wLXiY5EzX_2jjQJsHjZHPDEEg",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-45168379dce2",
    "weapon": "Tec-9",
    "name": "Cracked Opal",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SI-KSDWyVxdF5oOBlcCW6khUz_WvSwo2geHiUbFAkD8EkTOFetxi4w9ThZLnm5lfdj4JDznmqjixA6Sd1o7FVGUODCFM",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-5c7aa5998b21",
    "weapon": "SCAR-20",
    "name": "Jungle Slipstream",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk5-uRe6dsMqLDMW2Fz-l6td56QyCjhgk1tjyIpYPwJiPTcFIgX5tyFOEJtxm_wdDkZOrq5gHcjIIRzyX_hiJP7io55O9WUKUgr_fJz1aWgsoiFrs",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-679351fdbe47",
    "weapon": "MP9",
    "name": "Goo",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6NiL8-fB2CY1aAv5LYwSn23xE4l5GrXn9aqIH-SZlMiD8MjEbYK4UW_x9TmM-Lh4FHYlcsbmqGCM0DC",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-a3acd40fcd30",
    "weapon": "SG 553",
    "name": "Phantom",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-DBmae1eF7j-1gSCGn204k5WXSz4ysJSnDPQ5xDsZ0Ru4PtUKxw9XhMO-0tAON3YpMyS-v23lXrnE80YpLcJc",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-0ba56fdaa179",
    "weapon": "CZ75-Auto",
    "name": "Tacticat",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4H-SSDXOZwu9ij-1gSCGn2x4k5zvVm9z8IH7FZwFyCJckR7NfshSwwNGyMLzn41fejINHn3r6jy5XrnE8D8_CCNo",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-fe7065d1a17d",
    "weapon": "UMP-45",
    "name": "Exposure",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-LQ3WR2NF7seJhRie2qhEutDWR1Nutci2WbwBzWZFyF-Fetka_ltbgM7nh5AKKiYoRmXr73H4b7ilvsekcEf1y88bI5DM",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-56ee85216316",
    "weapon": "XM1014",
    "name": "Ziggy",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMX2Zxulvj-BnTjuwnQQYvzSCkpu3In6XPA4lAsZ5E-JbukWwwd3nY-zn4gLe2thNmCiv2ixK6SZs5ucHVb1lpPO5jVz-xA",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-a0695188a122",
    "weapon": "PP-Bizon",
    "name": "High Roller",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-SAmuvyOBJvOhuRz39kEx1smnczomgJX2XbA4hC8BzRe9etxntldblMuyx5wfc2ooWni7_3DQJsHhZ08njvA",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-c9be0566433c",
    "weapon": "M4A1-S",
    "name": "Leaded Glass",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9Jo-loWz22hyIrujqNjsH8dn6ePwB2DpEmFuAMt0HulYa1Nu2z4QWPjt9NnCX63H9M5ys96r1QT-N7rZDTLd1E",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-4cb968c36e88",
    "weapon": "R8 Revolver",
    "name": "Llama Cannon",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-fAmadwO13vu9mQRa_nBovp3OEz9n7JH-UPwEoA5t2TLFYtBmxlNzhYuOztgHZjo9Mzyqq3C9O63o5_a9cBr5nn1G8",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-1b3ca668024e",
    "weapon": "AK-47",
    "name": "The Empress",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSJf2DHGKD0tF6ueZhW2exxEt152rWzI7_Ii-Ubw90DMB0Ee4C5xOwx9GxZbjk71PXgogWn36tkGoXudZeYvlo",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-491a70af3255",
    "weapon": "P250",
    "name": "See Ya Later",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSI-mRC3WT0-F1j-1gSCGn2x9ytmzWnN6pInjGOwMlDZp0EORe5BHsx93lP7zr5wzbiI5AyXr_jS9XrnE8gQrIgng",
    "collection": "Spectrum 2 Case"
  },
  {
    "id": "skin-vanilla-crate-4403",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Spectrum 2 Case"
  }
];

const crate4471Items: Item[] = [
  {
    "id": "skin-906fd7b3b38a",
    "weapon": "PP-Bizon",
    "name": "Night Riot",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-BB2iE_uJ_t-l9AXqxzUQisWTWz9egc3KWbAJ0XJt5Q7YN5xnuxNDiN7iz4waLgtkWzS7gznQeDJdgNeg",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-42a677e4f00a",
    "weapon": "Five-SeveN",
    "name": "Flame Test",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRb7dSJvmFC3SV1-t4j-lmWxahmhkYpTSKlortHifOOV5kFJt1FOVYsBC_lobmNe3q4AOK3dhDnimrhyoa7i9ssO4CU6F0rvWBiwvfcepqcNk1MwM",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-cbffebebb7f3",
    "weapon": "MP9",
    "name": "Black Sand",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6ZhIfOYMXSRz-pJvOhuRz39xxsj5GWDn9z6d3rCOFV1CJpwTO4IsEG8x4WzPr6xtlTZ2YlEzX-vhzQJsHjCKAg7iw",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-87386812a8f9",
    "weapon": "P2000",
    "name": "Urban Hazard",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMXKCw-94j-loVSihkSIrujqNjsGsJXnFPw4gCcZ1TOIPt0LukoG2ZuqxtAXaj4sTzy6q3SpN7C9u6-YCT-N7rcTI-daA",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-a70d55eb979d",
    "weapon": "R8 Revolver",
    "name": "Grip",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_JeacAnGV09FiouRoSxa_nBovp3PTwt-hJH-WbFMnWJdwRuUPtEG7k93iN7uw4wLf2I9FxCr733hBvXxj_a9cBlQvB05B",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-cb5484f7948e",
    "weapon": "SG 553",
    "name": "Aloha",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1I_829b_E-c8-SAmiYwNF6ueZhW2fjxE5x5W_SnNz8eXmQaVN2WJUmF7RZuhS8wYbiZeO04VPa3YlCmHr7kGoXuWs6bs2V",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-ae8080ca847c",
    "weapon": "XM1014",
    "name": "Oxide Blaze",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWiIyOpzj-NlTjO2qhEutDWR1N-tJ3zDOFAoDZMhRrNbsUa_x9fuMrvrsgDW3YJGxHn22ixO6C9j5uscEf1ygXv9Ksw",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-52971a3886a2",
    "weapon": "Glock-18",
    "name": "Moonrise",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a7s2pZKtuK8_CVliF0-x3vt5kQCa9qhsipTiXpYPwJiPTcANzXJNyFOEMthXsktHhMLzl4FaK3toWn3iqhi9BvHw9su5UU6Zw-_bJz1aWcX-Jd_0",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-58651a482529",
    "weapon": "Negev",
    "name": "Lionfish",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1I_82gbaNoNs-fB2iex-dluN5lRi67gVNx62XXzI74InPGbQMpDpMiRLMOsRG4lNXvPuritFeN3YpMzSSo2yhN8G81tOHyHega",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-85bee1ae1898",
    "weapon": "Nova",
    "name": "Wild Six",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiVI0PyhfqVSIf6QBmiCyPpzj-1gSCGn20t-4jnUzI7_IHifblIpDJJzF7UP5kPpxtHgMu62tAPZjY4Ryn72hnlXrnE8sT3rGLc",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-f0063cb51e43",
    "weapon": "MAG-7",
    "name": "SWAG-7",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiNK0P-vb_NSM-eSCTCvzedxuPUnHirhkxhxtzvRzI38dnLEOlQnW5N1F-FZtRG6kYLvPu205ADaj40RnDK-0H0F4y2tgg",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-a4ca18460f2c",
    "weapon": "UMP-45",
    "name": "Arctic Wolf",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-EBm6ExNFwse9ucCW6khUz_WiGzY6pJyjCZwN1A5p5Q-MCuxa7ldW0Ne3ntQHW2YpFmSv63S1B73t1o7FVFkKgM50",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-808553c51871",
    "weapon": "AUG",
    "name": "Stymphalian",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7d5Of2DBmacyO94j-NgXS2gqhEutDWR1Iz6cnqXOA8mD5shTOEPuhm-moHlZLnj4gLWjdhEzimr2n8bvC5q4e8cEf1yYjdCpmM",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-c41637779316",
    "weapon": "AWP",
    "name": "Mortis",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6BoIeSbMWuZxuZi_rNtHiuwwRwismWEnNn8JymSZgUiDpd3Ru9ZsxG-xNy2NLzn41DWg41bjXKp5oOAt0A",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-3901933d5e47",
    "weapon": "USP-S",
    "name": "Cortex",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1jpN5lRi67gVNz4G7Qm938cS_Da1AhXpB1EeVb4xm4mtDjN7vj4A3b2NpGyCr52i4Y8G81tMzdoYZ7",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-e8144faeae9f",
    "weapon": "M4A4",
    "name": "Neo-Noir",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSLvWcMWmfyPxJvOhuRz39wE1142vSztmvInvBOgV0W5R1FLYNuxW4wIbgNrmx4g2Kj4tMmCX93zQJsHgJr0dqFw",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-d11a70424dd7",
    "weapon": "MP7",
    "name": "Bloodsport",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk4uL5V6ZhL_-XHXef0_pJvOhuRz39lxsk4W3Ry96pIHrFOgElDZN2Q-9etUSwk4LnYu3h5wLejYwWxSr43zQJsHiIGMoJQA",
    "collection": "Clutch Case"
  },
  {
    "id": "skin-vanilla-crate-4471",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Clutch Case"
  }
];

const crate4482Items: Item[] = [
  {
    "id": "skin-95fae4f18169",
    "weapon": "AUG",
    "name": "Amber Slipstream",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf9Ttk7uepV7BiMv6sAXWRz-lzj-1gSCGn2x8msm2Dn9-oeSnGbAAiXppxE-cMs0Prm9a0Mrnqtg2L3dgQzS2vh3lXrnE8QYlxFJI",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-f52c5b815155",
    "weapon": "Dual Berettas",
    "name": "Shred",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1I_82rZK15JeOsGW6e1etkj_NoRi22hyIrujqNjsGrJ3rGbQAgDsEhE-YJ5he7w9TgZOnrtgWI2oNNxCv6hixP7SZitrpRT-N7rUuDq4Qp",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-232f3ddb22d4",
    "weapon": "Glock-18",
    "name": "Warhawk",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK8-HBnKexetkj-V8XD2MmRQguynLwo34eXjBbgQnCMB1Q-QN5EXrkdfkNu7m5Ffd2YoTzyr52H5B7nk-5PFCD_Q2xs5K0Q",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-9b785997e60c",
    "weapon": "MP9",
    "name": "Capillary",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V7JoKf6sAm6Xyfo457c6SXDrw0VxsmmAzor6IimePwApApYkQLFY5ES9lYCzZO7j7lTZiZUFk3t71H43DQ",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-51560c383375",
    "weapon": "P90",
    "name": "Traction",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V7B_JfGXMWuZxuZi_udvTHDjzUVxsm-Aw9auIniRPQJ2XJVyEONetxDuk4HiNeu24VSP391bjXKpopWoUos",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-82eac137c2ae",
    "weapon": "R8 Revolver",
    "name": "Survivalist",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2tfZt_eM-AG3WGyPh3vOh6Wxa_nBovp3OBzditcSmSOFUnDsEiE-4MuhPqw4bmY-jisQff2dhGnCyq2n4a631v_a9cBkWPt9yi",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-3c454adf5bdd",
    "weapon": "Tec-9",
    "name": "Snek-9",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SM_6SBWKvzedxuPUnHH23wEpz6j7Rydqqdy6SPwcoDpV0RrEN4Ra_x921ZOPitVDdiIpDmDK-0H1esiynQw",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-25f54c22ac43",
    "weapon": "CZ75-Auto",
    "name": "Eco",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H_WQAVicyOl-pK87HivqxR5xt2_Qnt6qI3-fPFciWJBzRuFZ5Ba_moG0Mrm04lfajYwQ02yg2Q7xomN1",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-d08b1f9525cb",
    "weapon": "G3SG1",
    "name": "High Seas",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-RG2STwOBztfNWQyC0nQlp4j7Syt-rdHPEOAIjCpV5TLQK40K5wdLjY-_r7wfeio1AySiriCIf6DErvbj1Mwus0A",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-069a62a128f1",
    "weapon": "Nova",
    "name": "Toy Soldier",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSNP-KMXSfzep_tfNWQyC0nQlp42zVytutcCmTZgchW5omTbNc5ka8l9XvM77jtACL34lBm3__iShI6TErvbjr52W2-A",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-860a0652d07a",
    "weapon": "AWP",
    "name": "PAW",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7uW-V7RsN-CSGVicyOl-pK84Tn-3xkgltWWGnI39c3LDaA4lD5V0QO8It0LqktfuMOrq7gDajYJG02yg2bUm5WIV",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-30b1165ab5bc",
    "weapon": "MP7",
    "name": "Powercore",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk__25bbZuL-KWMWqAltF6ueZhW2fjkE114W7Vzduqdn2XOAYhXpMlEeQI4BW9kofiZOzq4VHXg9hGzi78kGoXuRPPGxs7",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-2746c427a1c5",
    "weapon": "M4A1-S",
    "name": "Nightmare",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-9gSCGnmBw1tgKJk4jxNWXCbAUpXpp0FrYPthC7k4fnZOm04laMjYxHn3r52HxJ6i065e0FVKV05OSJ2IHiKyzQ",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-9d723cee972d",
    "weapon": "Sawed-Off",
    "name": "Devourer",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9FytfdmWju2hyIrujqNjsH8JSnBPQdxDcEiF-FZshS7kdG1NOyz4wKKiYNDmXn3jHkd5n055ulTT-N7rdPAUyyq",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-5af9f375159d",
    "weapon": "FAMAS",
    "name": "Eye of Athena",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-cGWuvzvx3vuZscCW6khUz_WzUnNb6eXjCbFV2WcAlTO5ct0G-xIfgZe63tADb34wTzX2qjXlO6Xx1o7FV19iwjVc",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-74e670c4b279",
    "weapon": "AK-47",
    "name": "Neon Rider",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6poL_6sHG6UxPxJvOhuRz39xkQhsTnVzoygdy7Ea1UoCZQkRe9bs0brl9TvN-m0tVHYjY5CyS35jjQJsHhk4o5zcA",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-87ee5eacc505",
    "weapon": "Desert Eagle",
    "name": "Code Red",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWaXxvxzo_JmXRa_nBovp3PRmNj4c3mTb1RxC5cjF-EItRnrlNzkYrnk5gaI3Y0UmyX52H9K7ixs_a9cBsGEcOCn",
    "collection": "Horizon Case"
  },
  {
    "id": "skin-vanilla-crate-4482",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Horizon Case"
  }
];

const crate4548Items: Item[] = [
  {
    "id": "skin-53d8377fc006",
    "weapon": "MP9",
    "name": "Modest Threat",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f-jFk4uL3V6diLP-dFzfB_uJ_t-l9AXGylx4ktmqAydmrInvBOAByWcN1EOUOtxe8mtS2P-vl4FaLioJMz3ngznQehlZuXhE",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-0b23f3cc7633",
    "weapon": "Glock-18",
    "name": "Oxide Blaze",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK6HLMWSf0_x5tORncCW6khUz_T_Xn9f6dnvDb1UkDsdwF7IItES6kYK1M-7k7wSI3YwQm3_63XlAvH51o7FVwJirs7M",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-3a61ea6e759f",
    "weapon": "Nova",
    "name": "Wood Fired",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiVI0PyhfqVSKOWdGmKC_uxkpfVscCW6khUz_WiByIr8IyiXbQYlD5d1E-BftxW_lNbgMb7n7gyM3tkXnimr3C1O6n11o7FVLv86c40",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-a5017daf162c",
    "weapon": "M4A4",
    "name": "Magnesium",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSI_icHneV09FxuO56Wxa_nBovp3OAzo2vdHPFPFUmCJRxRbNZ4xewx9W1Nb7j4gzXg99Ayy73iC1Aun1q_a9cBiEfMG3G",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-d85d77873f80",
    "weapon": "Sawed-Off",
    "name": "Black Sand",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F0vOBqRBaglBMjjDGMnYftb3qSOAF2XpV0ELMJsUS_ldGzMO_isVHagt9Az32ojiob6Hk9sbtXB6o7uvqARF8zTjE",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-dd5985c30bd8",
    "weapon": "SG 553",
    "name": "Danger Close",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-cGGKC_uZzsfVsSxa_nBovp3PSn4z_eH7Fb1V2DpckQeUJsRe8wNflMui0tVTX34MUyH2sjX8b7Xxu_a9cBmrf7Gwc",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-876587e47bdc",
    "weapon": "Tec-9",
    "name": "Fubar",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJuWRD3WvzedxuPUnGiq1xBh_4D6Bytmrcn_CaFUlX8NyR-5ZtBG7kdzgZe-z5gTb3o9NyDK-0H2rKvLQog",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-aa544d78f97f",
    "weapon": "G3SG1",
    "name": "Scavenger",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-AD3GRxutJvOhuRz39xkl2tziGmNf9JX-WPQcpAsEiQOUNsBixx4bmN7nj5FHb3Y9Cyiz-hzQJsHglCU9Y5w",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-21f65eaf09eb",
    "weapon": "Galil AR",
    "name": "Signal",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6NsLPmfMXSZxuB3vN57Si2MmRQguynLnIqvIy-TO1UlXJMjEeAN4UGwk9DkZLnltgPYjYkTnCn6iy8buips5PFCD_QZl2QaUg",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-5bd6cfc7249e",
    "weapon": "MAC-10",
    "name": "Pipe Down",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-WFmiv0edmtfJWQyC0nQlpt2rRwtqhdHjFa1N1A5ZxEO4MukW4lNayNrnhsVDc3YxGzir9iXkc7DErvbgEiQoeZQ",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-f0ba15d1b486",
    "weapon": "P250",
    "name": "Nevermore",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNa0OL8PfRSJ-KSGGKUyOlxtfN6cCW6khUz_TjdmdeqdymfbVQlXpp0QuVYtBSwk9zmN-634gXd2tpCyH_2hipKunl1o7FVDpyoDiY",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-9e44f13c59da",
    "weapon": "USP-S",
    "name": "Flashback",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uh6sfJhTSiwniIrujqNjsH6dnKfbAdxAsF3ELQCu0Hsmty1N76z71GIit4RySX_2CJI6yk9tucLT-N7rUYlhjC0",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-84a10128334c",
    "weapon": "UMP-45",
    "name": "Momentum",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSIeKBAXCD_uJ_t-l9ASzrx0txsWiBydv4JCmSaFdzDJt0TOYN5hbtwYWzNerl5QeIj4IXyX3gznQeadzF8t4",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-a79b5b4ad623",
    "weapon": "Desert Eagle",
    "name": "Mecha Industries",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWqVwuZ3j-1gSCGn20h042vSyY2tdyjCZwIlXJBxQeNe4EWxxoHkMOq0sQGIid5Fnyr42HtXrnE8p4gbgvE",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-aa2d649aeaf6",
    "weapon": "MP5-SD",
    "name": "Phosphor",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSJvWAGm6GwOJJtPNgXxa_nBovp3PRzd-vdCqQOgYgCMYkRrECskLuwdfkZeqz5QKMjYwUnHj33SlI630__a9cBl0Wy4S-",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-09205674e246",
    "weapon": "AK-47",
    "name": "Asiimov",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F6ueZhW2e2wEt-t2jcytf6dymSO1JxA5oiRecLsRa5kIfkYr-241aLgotHz3-rkGoXuUp8oX57",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-7b1ef066823d",
    "weapon": "AWP",
    "name": "Neo-Noir",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6poL_6cB3WvzedxuPUnHirrxR4l423SyI39I3KXPwdxWZclQeNZ5EXskYfnNeyw71OMi9lNzDK-0H3r66pOTw",
    "collection": "Danger Zone Case"
  },
  {
    "id": "skin-vanilla-crate-4548",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Danger Zone Case"
  }
];

const crate4598Items: Item[] = [
  {
    "id": "skin-c5816102c9ab",
    "weapon": "FAMAS",
    "name": "Crypsis",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1I_82oaalsM8-UBmiD1dF_vvJsTD2gqhEutDWR1IyudXKSOFIkC8QhTbEK5kK8x9C2NOK3slbYg48Rnyr_hixI6i85sr0cEf1yzP52oWI",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-9a7c16468868",
    "weapon": "AK-47",
    "name": "Uncharted",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeqHC2SvzedxuPUnFnCwwBl_5D_Syon8dnyUaQUlD5oiQ7ECuxW7l920ZL-w4AfX2IlByTK-0H0PRM7cOA",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-1541026f04e1",
    "weapon": "MAC-10",
    "name": "Whitefish",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-VB3SY_ux3ufVWQyC0nQlp52jdwt-vdnyeP1QoDZQlTeQNtRO-w4e1ZeKzswCM2INHynn3hixPujErvbg9KuBZSA",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-ea691ab700a8",
    "weapon": "Galil AR",
    "name": "Akoben",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0OG-V6NsLPmfMWabzuxzvt5lRi67gVMlt2_dzd6qcH2TOgN0CpIlE7Ve5hbukdW0MrixslPW2IgQzyv8jypI8G81tJzCUipD",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-5c41a3861543",
    "weapon": "MP7",
    "name": "Mischief",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V7ZsI_uWGmKV09F6ueZhW2fnlE5x52Tdz4mscn6XOAFzXppyQ7RZtkTpwNzuMejn5wyPjYoTy336kGoXuS747mDn",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-a29bf383aa7d",
    "weapon": "P250",
    "name": "Verdigris",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNK0OL8PfRSNvWBCm6X0-dlj-1gSCGn20R35DnRn42udXiVOg91CpZ4ReACthC4wYexZuuw5VeIjdkUzyqq3CNXrnE8Cr6wnKw",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-b37ee36feb54",
    "weapon": "P90",
    "name": "Off World",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6trJuecHGuU_uJ_t-l9AS_jwBwisG3SzN-rcX-SbA4lCsR4R-EDuhi6wIG1NuzjtFba2N8WxS3gznQePPXjzOg",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-d6cf8565026b",
    "weapon": "AWP",
    "name": "Atheris",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JkMPWBMWuZxuZi_rZsS3zgzU8isW3dnIr6eHKfPVAhDpojEe9YsUW4xta1Nuzm5FDci4NbjXKpmWVQppo",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-c310cd1bc7ff",
    "weapon": "Tec-9",
    "name": "Bamboozle",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SIvGeDGif_uJ_t-l9ASi2xxhzsT6Emdr6JCqTPQJyXpR4RLMI5hm_wNHjZe3r5Qzci41Dy3jgznQeOWU5G3g",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-2a0e222beb58",
    "weapon": "Desert Eagle",
    "name": "Light Rail",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWKIztF6ueZhW2fhlhlw6m-GnNyvIiiXOwQoDMR2QbZe5hi5k9KxN-vhtFbciN1FnyqskGoXuU4JtHUo",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-640691d10403",
    "weapon": "MP5-SD",
    "name": "Gauss",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePF-JM-SHXOCzuN3pOhqcCW6khUz_WzTzYmhJXuSaANzW8EkQ7JZ4BjsxtSzYezr5lbfidlEzC-vjnxK7ih1o7FVYPX5q0o",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-b720620ba156",
    "weapon": "UMP-45",
    "name": "Moonrise",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a7s27ZbQ5dc-eAWie0-dltd56WiegkAkYvzSCkpu3IHzGbQFxCMByE7MJsxC6w9ayN-3ntgPf3YtGmX6tiyxM6X1pt-cCUr1lpPMz7bPahA",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-1a044032aec8",
    "weapon": "R8 Revolver",
    "name": "Skull Crusher",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2tfZt_JeacAnGV09F5oPF7Sjqgmg8YvjiBk5r0b3uSaQUiCsZ2E-EI5EKwldW2NOzqslffgopHxHj-jHxLvH4_tbwHWaQ7uvqApie1xz8",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-4280698b46ee",
    "weapon": "AUG",
    "name": "Momentum",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV6liLfWdGnKd_uJ_t-l9ASi2zUp042SBno6sICrFbFMnCZR5EedftkPqk9ayMr_j71fXjo8XmXrgznQeFjVtTWM",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-ee5f48068381",
    "weapon": "XM1014",
    "name": "Incinegator",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMW6ewud4tfNoWyahqhEutDWR1NuuJXqWO1d0CsdyE-9ctxPpkYDmYr6zsgKLgt5NnC33in9B7idi4u8cEf1ypt9Mlvk",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-f971772d4996",
    "weapon": "Five-SeveN",
    "name": "Angry Mob",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC1iDxPhzvt5oQS6hjCIrujqNjsH_cy2RagUjA8BwR-de5hjskNflNrnqsgaLiYgRyyythitM7Hw-sekKT-N7rXEld5dH",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-8c5b9b7ce9f2",
    "weapon": "M4A4",
    "name": "The Emperor",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSJf2DC3Wf09F6ueZhW2exwBh_6m3dnt36InjDPQ4oXJt1TbJeshW_mtfjN-vrsgaKiokWy333kGoXuRj4z9Nd",
    "collection": "Prisma Case"
  },
  {
    "id": "skin-vanilla-crate-4598",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Prisma Case"
  }
];

const crate4620Items: Item[] = [
  {
    "id": "skin-12f67f052f95",
    "weapon": "MP5-SD",
    "name": "Acid Wash",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSJeSQBlicyOl-pK9rTnjqlkkitmTVn437IiiePQRyX8F4FuBc5xS_lYHgZevj7wzagosX02yg2cdA74dF",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-d9b6c949df6f",
    "weapon": "Nova",
    "name": "Plume",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSJvWSGm-V0_1hue9ucCW6khUz_Tndmd6tdHKQbAMnCZAmQrVYtRW9moayNerq5FTdioJMmST7j35L7Sp1o7FVL01CQxQ",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-c7f19d69db98",
    "weapon": "G3SG1",
    "name": "Black Sand",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-RAmaTyv13vuVWQyC0nQlp4miGytahcSiTZ1J0DZZ1ELYDskO7mtfjMujn5gbajYlGyS38jywY6jErvbjKP5Wfiw",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-2c0c9abe25f9",
    "weapon": "R8 Revolver",
    "name": "Memento",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-eC2qVz_p5j-1gSCGn20wk4D7Vz9_9JHyeawMnXpByReMDshfuxIDnPunj5gCN2ohFyST_2C1XrnE8s2YJKK4",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-6f46742a68e4",
    "weapon": "Dual Berettas",
    "name": "Balance",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_WfB3OV0tFkv_JscCW6khUz_W2Dyon_dimePA8lWJclQrMJthm-kYW2NbzrtQ3eioJCnyWo33wa7Hl1o7FV2r7YJY0",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-6bff4afdb6f2",
    "weapon": "SCAR-20",
    "name": "Torn",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk_OKRe6dsMqLDMXSE0-d9tfNWSzyggSIrujqNjsH6eHiSOwZ0XsdxFrEIthfpx9W0Yuux4QDe34pFni-s3SpK7Hs6570KT-N7re2tWema",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-af475732c9cd",
    "weapon": "M249",
    "name": "Warbird",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiVI0P_8PP1SN_GBDG6CxdFgtfVsXSi9qhEutDWR1NqpdymUbgcgDcRwEeUO5xa7kIGzMOjgsQzejNoRni6ohyJL6ytv4-4cEf1yirMa72w",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-de365c1a71ad",
    "weapon": "PP-Bizon",
    "name": "Embargo",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-BAWaU_vl3ovNgQDuMmRQguynLnt37I3ifb1VyW8F4Te8D4UTrl4GxZru25FTZjI9GnCr5iC4YvSto4PFCD_TYHp-YNQ",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-fbda3c593717",
    "weapon": "AK-47",
    "name": "Rat Rod",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSLvmRDGuV09F6ueZhW2fklBx362TTnN36dHiRa1AmW5QlQuVftxO9k4HhZuvksVDc398Rzy32kGoXuR34FNLu",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-11c6b11248f9",
    "weapon": "AUG",
    "name": "Arctic Wolf",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV7NlKeSWCGaextF6ueZhW2frxxtxsGrTw46sI33BOAUiXMElFO4L50O9xNLvNOyz4lDd3olMzX6skGoXude_sLiC",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-a16b386af5bb",
    "weapon": "MP7",
    "name": "Neon Ply",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V7ZoMPyaDWavzedxuPUnGS2wzBglsm6AnNyqJHLBOAdyCZV0ELIN5xC6kNThY-jqslbbid4WyjK-0H0WWbSZ_g",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-3c3bc3fa44dc",
    "weapon": "P2000",
    "name": "Obsidian",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMWiS0udyueBncCW6khUz_W7QzNf4eHKUPA9xDMAkFrMJ40brldGxM-rk4lfago1MzXmrjCwYvC91o7FVDbVY3kE",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-0abab7de168d",
    "weapon": "Tec-9",
    "name": "Decimator",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJPWQB2qR1eFkj-1gSCGn20h16j-Ew9j6Jy6QbQB1XJJzQLVYshXqm92xY-7g4wze3dpAySz2iXlXrnE8_HmWmcE",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-5b6e17f145f5",
    "weapon": "SG 553",
    "name": "Colony IV",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-BC2aT1eFkj-1gSCGn20Qit2yAn9n8IHKealB2DZIjTO8JsBW7ktDlYu_m5ADWit4Rznn63XtXrnE82sW2soE",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-eba70ef89c7b",
    "weapon": "SSG 08",
    "name": "Bloodshot",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-HB2Sbzetkj-1gSCGn201wsjnUm9qrI3OXaAQnDsZwTbIDtxnpl9W0P7i35FfW3toTzC6q2ixXrnE8w4eIHZQ",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-f8cd1aa7fa55",
    "weapon": "AWP",
    "name": "Containment Breach",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JkMuWAMWuZxuZi_rQ6SXq1xURysj_Vw4uhJHOVPQ8oCZt4QrRbtRi6ldPlPu_g4FHaiYNbjXKpcPI_17A",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-46bae9d6c6b0",
    "weapon": "MAC-10",
    "name": "Stalker",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-AGmacyutkj-1gSCGn20V0t27Tw974Jy-WOg9yW8N3QOQDsxG4x9O0ZOPqtgHZ399HzST8ji9XrnE8CxAHwFY",
    "collection": "Shattered Web Case"
  },
  {
    "id": "skin-vanilla-crate-4620",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Shattered Web Case"
  }
];

const crate4669Items: Item[] = [
  {
    "id": "skin-2643362b3ca1",
    "weapon": "Dual Berettas",
    "name": "Elite 1.6",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_WfB3OV0tF1vOB6XCCwqhEutDWR1Ir4JS2UbQRxW5J5QLICsxi8ld3mY7jq4AeKj99FzCSsiy1M5y9q6r0cEf1yqEZuIxI",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-e796c9afdfc3",
    "weapon": "Tec-9",
    "name": "Flash Out",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SJvySHW-vzedxuPUnFn21zRt_6znQmY6gdyiXbQckWMBzRLIPtBnrl9LvYeqx5FPd2ItMmzK-0H2aE-DSCQ",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-d136bb4f23cb",
    "weapon": "MAC-10",
    "name": "Classic Crate",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-XG3SE_u1ksfVscCW6khUz_WvVntmrI3KXOgcpXpQmRbYK5xe6ktLiYuLksVONi4tMyC_72CpN7nx1o7FVpG3zbwE",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-25cbd4e0e058",
    "weapon": "MAG-7",
    "name": "Popdog",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSMP-DCmiX_uJ_t-l9AXixkBgm5G7VnN-rcn_Bb1UmWcBxFuACtRC5kNC1Zunr5wbdi4hEyn7gznQeG1-SDIY",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-df8e665e3faa",
    "weapon": "SCAR-20",
    "name": "Assault",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRe6dsMs-SHXSR1OJij-1gSCGn2xxw5GzWnNutdnKXagRxCMZ5TbYKtBbrl9WxPu7g5A2Ljt1HmXj5iSNXrnE819YWtjs",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-5f1459fc89ae",
    "weapon": "FAMAS",
    "name": "Decommissioned",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-dG2yV_vpzvvJgQCeMmRQguynLnouqJC-VbwciD5J3QORYshftkIXlPuzrtlCP2NlCySmvin9B7Xo_5_FCD_RaCEWnyQ",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-dbf88f552c6d",
    "weapon": "Glock-18",
    "name": "Sacrifice",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-bC3Wf_uJ_t-l9AXHixRlytW7Ty4queH_DZlMlX5UjF-dZsUPqk9LhY-Lk5waMjdlCmSzgznQeEFBQhB0",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-0ca39d6a9fe2",
    "weapon": "M249",
    "name": "Aztec",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiNK0P_8PP1SIeqHC2SvzedxuPUnTirnwEslsT6Gzd2sJHLCOlUpWJohE-MMsxW6l9GxPuy24AyL398QnjK-0H18Ww4Zdw",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-4ef86547d990",
    "weapon": "MP5-SD",
    "name": "Agent",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSJvKaMWuZxuZi_uU6Gn7glhxytWSAy4uqI3yTbA90WcQkRu4K5BG6x921Nb_q4w3f3YlbjXKpj8G4GlA",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-31de22ad9746",
    "weapon": "Five-SeveN",
    "name": "Buddy",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-Z6SHCMmRQguynLw4r9IHiRbFdzA8FzELYL4xntw9e1Mu7q5laMjN5AzXiqinxI6iw_t_FCD_TZbg2oLg",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-5bcef416d83b",
    "weapon": "P250",
    "name": "Inferno",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSKf6VC3WeztF6ueZhW2e3wUgi6z7WmI6gc3LDPQAgXsB2E7Veshbpl4DiNL_htQDZ2NlHy3qvkGoXuXYeEedL",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-520d7a1ce647",
    "weapon": "UMP-45",
    "name": "Plastique",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSIv-eDFicyOl-pK8_Hn_hxh91sWrVyN-rI36XZwIoWJZ3FrMJ50XtxoLhZL625lCM2YxH02yg2Yusl7aN",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-97024f744394",
    "weapon": "MP9",
    "name": "Hydra",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6x0JOKSMWuZxuZi_rQ9H363xU5_4GrWnIr8IHqfbwBxA5R2QuZZshm6kdO2Mum35Q3ajoJbjXKp1xQlWoY",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-082000871d86",
    "weapon": "P90",
    "name": "Nostalgia",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6piM-SSAmCZwNF6ueZhW2fgxBh25mmAyY6reS2WaAElCpZ2RrMOuxO6k4LnNuy2tgLejoIWyXj3kGoXuTP4YgZa",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-29ac998e7985",
    "weapon": "AUG",
    "name": "Death by Puppy",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_C9k7uepV6BoIeSbMWWJ_up5t-ZwcCW6khUz_W7RnNegdyqRPAcpDZdwQOAO5xW4w4C0ZemwtgHYjoNHniX6iSsd7Cx1o7FVmQFtzuc",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-db4de1c248fa",
    "weapon": "AWP",
    "name": "Wildfire",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7NkLPSVB3WV_uJ_t-l9AX7rxhl-tmzSwomtdC6TPwQnW5UkR-YD5kK-ltCzP-Ox4FfXiNoQyyrgznQeu9L0PzQ",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-c70df63bf30b",
    "weapon": "FAMAS",
    "name": "Commemoration",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-fC2CRwvdJt-5lSxa_nBovp3PUztn4d3qSPQ8kDMR5ROVb4xCxw9a0NLni4lCIio4QzXn32yMb6Sds_a9cBr1TwPEt",
    "collection": "CS20 Case"
  },
  {
    "id": "skin-vanilla-crate-4669",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "CS20 Case"
  }
];

const crate4695Items: Item[] = [
  {
    "id": "skin-42cc631beb8c",
    "weapon": "AUG",
    "name": "Tom Cat",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7BlNf6XC3WD1eFkvd5lRi67gVMm5GrRzt2sJXqUag4kDZAmFuBYtUTslIXuPui2s1Hb2o4Wyir2hy1N8G81tF6C_jtH",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-29f83d73bb6a",
    "weapon": "AWP",
    "name": "Capillary",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JoKf6sAm6Xyfo44bE5HSrmlx5z4GTUzt__I3yebQAgA8R3FuFfsBTqx9W2Y7vq5lbfjZUFk3ugIlCuqg",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-9a5ab653ba62",
    "weapon": "CZ75-Auto",
    "name": "Distressed",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H_OWHGabzvpzj-1gSCGn208hsTyHw9z6eS2faQEoX5p1ELECtBi7xtG2Pr7j5APZjopDynj_iHtXrnE8XiCan1o",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-5293f56bb6b8",
    "weapon": "Desert Eagle",
    "name": "Blue Ply",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ_yWMXWV0eJ_s-BWQyC0nQlpsjzdwtqgIHqfZgAgDZBwROBbtRDsm4HiM7zislfYitpBniz6iy5K7DErvbjLUTqBnA",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-d536309c3714",
    "weapon": "MP5-SD",
    "name": "Desert Strike",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1Y-s2jePFSJPWAC3WE_v1iouhiSha_nBovp3PUzYyqdHKfOgJ1CpAhROQJukW4lYDuMr7jswfWjdpNyimsi35O53s-_a9cBg0oJUav",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-c31f180e6a50",
    "weapon": "Negev",
    "name": "Prototype",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-DHGiEzvpvoORWQyC0nQlp6juDydugcHvEawVxApB3F7JftxTsloDgZOqx51PY345AxXr33SNPuzErvbi5RDlayg",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-3c54e05cbb62",
    "weapon": "R8 Revolver",
    "name": "Bone Forged",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-fC3GZwPp-se9WQyC0nQlp5jmEydqpci2SaQdyDZEjEeFe4Re4wdznNu6ztgbWidkQzSz6jiJKuDErvbgK8jU85g",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-dd7837484577",
    "weapon": "P2000",
    "name": "Acid Etched",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWaTyOpJs-1mWSyhqhEutDWR1NmhJH6VZ1BzCZtzTeQKuxe_x4fuYenj4Q3bgtkXyHn-iC5MvC864OccEf1ypheGRTI",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-db4ae843fbd7",
    "weapon": "Sawed-Off",
    "name": "Apocalypto",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F3oO5qTiWqhQkojDGMnYftb3vFbVcmDsRwEOdbtkW4lIbiMOrh4FaIiYMQxXmoiXkd7n1o5b4AWKM7uvqARUQpSmk",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-803029f01b68",
    "weapon": "SCAR-20",
    "name": "Enforcer",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMWKex-Fks-R7cCW6khUz_TmEn4qudiqVPVB0X5t3QbEN4ELqxNHlY-O27gCLg9oXmyqsjCtN73x1o7FVEvhkFhM",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-d00c49e52bd9",
    "weapon": "SG 553",
    "name": "Darkwing",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-XD3Wb1ud4t95lRi67gVN24D7WmN2sdSqSalAmDpR2F-IDtxTpkYKyZrmzsQffgtgXzSmqjSNA8G81tFvCRYkS",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-e5f08d307bdd",
    "weapon": "SSG 08",
    "name": "Fever Dream",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-VC3GV09FyouRoQha_nBovp3PTmYmqJHmeb1N1CpJyFOZftkO8x9ezNOOztg2MjYwRyyWsjn4d7n1q_a9cBq7gpQcW",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-45686ca4a063",
    "weapon": "AK-47",
    "name": "Phantom Disruptor",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlJfA6H-CbD2mEzuNJtOh6XTyjgRI1jDGMnYftb3qTbQMpCZVxF-8Ku0Xtw4XkYu2xtQSL3d5FxSz-3H5Ovy895epRA6E7uvqAsbzZtpo",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-f5a050fa5280",
    "weapon": "MAC-10",
    "name": "Disco Tech",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-dD2SCxNF6ueZhW2frkR5z4m_SyY37cnKRblIpW5smQOcO4EW7lYa1ZOjgtFCLg4wXnn72kGoXuTa4h8QB",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-a71a424b6eb1",
    "weapon": "MAG-7",
    "name": "Justice",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSKuWAGm6TxNF6ueZhW2fikUt36znWyNz_dn2ROgMhD5EiR7EO5BKxl4DlMLyx7gyNi4hAniz5kGoXuQ9OXJLa",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-4dd5dccd2fdd",
    "weapon": "M4A1-S",
    "name": "Player Two",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-J6SCbhxUl_jDGMnYftby7BbVdyCsB0EeZY4RPukNfhZOO2sQ3W398Qy3_6jHxIunptsO9TUqs7uvqAAWrfZoM",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-3596d60709cc",
    "weapon": "Glock-18",
    "name": "Bullet Queen",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK6HLMXCR0-N3ueVsQRa_nBovp3PQydf4dXuSalUgCJZwRrILthi9kYDlMe_m4g2Ij90Um3moiXkc6SZj_a9cBgLxwlYC",
    "collection": "Prisma 2 Case"
  },
  {
    "id": "skin-vanilla-crate-4695",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Prisma 2 Case"
  }
];

const crate4698Items: Item[] = [
  {
    "id": "skin-2c80164190d1",
    "weapon": "Negev",
    "name": "Ultralight",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-GAnOCwOJ_t-l9cCW6khUz_WSAnNj_cX6VZlQlX8Z0TeVc4RG5w4ayM-2w5wzYidhGyXr-iC0f6Cl1o7FVuI8WfEM",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-d45805538999",
    "weapon": "P2000",
    "name": "Gnarled",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWuf0vpJp-57Qy2MmRQguynLyt38dXjDaA5zC5YlQ-Nc5BG5k93mP-jhsVeKiY8XmSr5iy5J7C1s6_FCD_TbNBDIDw",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-d4fffad08ab6",
    "weapon": "SG 553",
    "name": "Ol' Rusty",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-BG3SE2NF6ueZhW2e3xxt35GzSw9_8J3yePFIpCMEiRrJZukO7x4exZLiw4AGLiNgRy32rkGoXuZqsEgp2",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-4bcbe71aa61d",
    "weapon": "SSG 08",
    "name": "Mainframe 001",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-eD26ex_x3veRWQyC0nQlptzjSntqgJS6Wbg5xDZVwTbUN5EO5ldWxYem04waP2IsUyX_5in4c6zErvbh54g-58w",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-94b035806a51",
    "weapon": "P250",
    "name": "Cassette",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSI_GAHWKE1etJvOhuRz39lkwltT7Ww4ugc3PGOwd0DpQkQbUPshbpm93lMuy25QGIjIwUn3_72DQJsHjyHnRH0Q",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-7e9cf6e60b9f",
    "weapon": "P90",
    "name": "Freight",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6diLuSSB2mV09F6ueZhW2fhk09ytjmDm4n8JHOebQEgCMAmQrEMuhi4k4W0MurntVHfid5GnC38kGoXuRB1lB54",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-aba458e888aa",
    "weapon": "PP-Bizon",
    "name": "Runic",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2sYb5iLs-bC2uc0-9_tOR7cCW6khUz_WiGm42pJXyUPwFzXJJxRrZf4xS7x4fvN7ix4gHX3o9HzX32hipBuyp1o7FVwd1bSh8",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-0fd1ba0e61e0",
    "weapon": "MAG-7",
    "name": "Monster Call",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSLf-dHXOV09F1se1lcCW6khUz_WncmIz8JHmTa1JyApd5FLEMsES-kNDhM-3i5QKM2Y5AzSr9jngY6Cp1o7FV7cAHRyI",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-609ca5fc7896",
    "weapon": "Tec-9",
    "name": "Brother",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJ-WWHG6cze9JvOhuRz39xBsj4GmEyt-vIHjEbgJ2CsR2RONfu0K_lYXvZrjg4ADYg4wXzin42DQJsHgTPX1sbQ",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-c16825526581",
    "weapon": "MAC-10",
    "name": "Allure",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-aHWifz-B3j-1gSCGn209w626GnNuucC2SaFMiC8B3FuUJ5kW7wdPnZe7g7gyP2Y4Ry3_5hnlXrnE8RS4Y9Xw",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-736275bed39d",
    "weapon": "Galil AR",
    "name": "Connexion",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMXeYzut4uflWQyC0nQlpt22Dzd_4cS7Db1NzDZYkQuIKsBW4xt3jPurq7gPag4oXnCqrhipB7TErvbi_0k78nw",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-527de8ce168e",
    "weapon": "MP5-SD",
    "name": "Kitbash",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePF-JM-ED3SExOJ3vuVWQyy0lB4-jDGMnYftb32XZ1NyX5B5QuJcthi7k9K0Ye6zsQeP2IMRyiX4iSJLvC5q6-4HUaY7uvqAsG-atjE",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-1e9229953491",
    "weapon": "M4A4",
    "name": "Tooth Fairy",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSMeWWC2mWwOdkqd5lRi67gVN35WyDwtv8IC-RblVxCpchQLIOuhK8xNG2YbnktAXZjthFxCiohntP8G81tOVu8Qhw",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-6e390882e9a0",
    "weapon": "Glock-18",
    "name": "Vogue",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-WF2KTzuBiseJ9cCW6khUz_T-GyNavdCqRawN1CMFwTOcO5hO7loXiY-zmsQKPi44QzHj22ikcvy11o7FVfFOBmfY",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-daae504f859c",
    "weapon": "XM1014",
    "name": "Entombed",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWad1OJzpN5rQzy2qhEutDWR1N-hI3yWbVRyD8YiEOVZ50TqmoKyZb7rtVfWgosQzX7-3X9K5yc4tr4cEf1yVvkijss",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-32a30647e564",
    "weapon": "Desert Eagle",
    "name": "Printstream",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha_nBovp3OGmdeqInyVP1V0XsYlRbEI50a5wNyzZr605AyI3t5MmCSohylAuC89_a9cBoMY9UkV",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-dfd42a079f44",
    "weapon": "AK-47",
    "name": "Legion of Anubis",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6GDG6D_uJ_t-l9AX_nzBhw4TvWwo6udC2QbgZyWcN2RuMP4xHrlYDnYezm7geP3d5FyH3gznQeY_Oe4QY",
    "collection": "Fracture Case"
  },
  {
    "id": "skin-vanilla-crate-4698",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Fracture Case"
  }
];

const crate4717Items: Item[] = [
  {
    "id": "skin-6739b9d43b7d",
    "weapon": "CZ75-Auto",
    "name": "Vendetta",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4H-aWAGOV1fp3j-1gSCGn205ysWiEw9iqInueOAZyD5J1EOdf4Ea9l9bmMb_q4AaI2NhGySz6iStXrnE8_AWQoqE",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-2b3bc760fbf0",
    "weapon": "P90",
    "name": "Cocoa Rampage",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk_6v-V6BkLv-sHGad0e9xtd5lRi67gVMl52jUztr9cn7CbQEmWZV1R-ED5BHqx9G1PuOxsgWM2N4Xniqrh35L8G81tGacA9-f",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-6f675fd9f54c",
    "weapon": "G3SG1",
    "name": "Digital Mesh",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-XB3SC1P5ij-1gSCGn20wh4m-By9-qIC7COA8jWcNxRuUPshe6kNfnYe62tQ2K2NpHmXj2iC9XrnE82YBIy5I",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-ff88be94bdd8",
    "weapon": "Galil AR",
    "name": "Vandal",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMXGRz-p3vN5lRi67gVMj4mzVw92tdHKXPwcjD8AhR-YKtBe8mtHkNLvgtAGIjd0WxCyv2CNI8G81tKkB1-EH",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-ad97dc533b07",
    "weapon": "P250",
    "name": "Contaminant",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSKf6VC2SE_uJ_t-l9AXG3xUt-4jjcn4yqIHLGO1QkDsZ4TeNetUK4m9eyP-6xtVHcjd5DzSrgznQee4rYsVM",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-4c1d61428041",
    "weapon": "M249",
    "name": "Deep Relief",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SJPWWHliCxOJ_tedWQyC0nQlp5DzUzIyqcnyQOAckWJckQu8KuhnpkdPgNu-0tgTYio5Eny2shnsd7TErvbi9QVp9bQ",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-c93ccd1731fc",
    "weapon": "MP5-SD",
    "name": "Condition Zero",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSI_-dCm6EyOF4quR7QBa_nBovp3PQz93_InrCbAVxCcN5RbNZthm7w9e0Y-q35gbdi49GzX2vjCIf63xr_a9cBnKSfiDi",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-a89bff508437",
    "weapon": "AWP",
    "name": "Exoskeleton",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6F1L-OYC2uV1eF4j-1gSCGn20km5zyEmd2qc3uWZwcnA5MiELIJtxa_w9OyN-nh5wKKj4kTyn78hyNXrnE83OTew2I",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-f6e2834cc427",
    "weapon": "Dual Berettas",
    "name": "Dezastre",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_WfB3OV0tFytftoXD2hkCIrujqNjsH4c3qeOgR2XpJzFOcD4BK_m4HmN7mx5wGIjthDxHn23yhLv31u6u4HT-N7rWmjRO8T",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-be0f8a429ce6",
    "weapon": "Nova",
    "name": "Clear Polymer",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSMP-fF2qV09F6ueZhW2exxkR-tmWEmIyoJXyWZw4iDsclROVftxm7wIe1NbizswPe2YlHmCuvkGoXuVU3K7Ec",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-aeb0591ce152",
    "weapon": "SSG 08",
    "name": "Parallax",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-QBnWfzO9iueJWQyC0nQlp5G6AnNuhJXmeOAd2CsMjQOUMuxC-moHgNOzh5VPXjogRmyn_iSNI5zErvbhpsYYNZg",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-b154f1229365",
    "weapon": "UMP-45",
    "name": "Gold Bismuth",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1c_M27ZbRSJ_-fCliSyP17pfVhcCW6khUz_Wrczt__dn3GbVR0D8dxEOAMsxW9lofkMum04w3eg4kXzy6q339BvHx1o7FVa_qMENU",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-2e2b5cf9fae7",
    "weapon": "Five-SeveN",
    "name": "Fairy Tale",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC1iDxPhzvt5tRiihjCIrujqNjsGtdi-UbVUgXJAlRrFfuxi-lNbuPr7ltA3cjtkRzyit2H8c7H1t4O9TT-N7rZbBTJfn",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-a3b9b4db1604",
    "weapon": "M4A4",
    "name": "Cyber Security",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSI-mRC3WA1OB9j-1gSCGn2x9-527Tyt-pcnyUagQlW5JxEOIOuhjrw9XlMrixtQTd2NhNmH_5jCNXrnE8Cu1wa6c",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-8190f382bffd",
    "weapon": "USP-S",
    "name": "Monster Mashup",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uVkv-pmXBa_nBovp3PQn46ueX3FbAB0WZMjTe9csEKwk9XvNbnl41Tcj48WzHqv3HhP5ydj_a9cBuLIfNg1",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-8e45a15cf7f5",
    "weapon": "M4A1-S",
    "name": "Printstream",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_F7Rienhgk1tjyIpYPwJiPTcAAoCpsiEO5ZsUbpm9C2Zuni4VHW3o5EzSX62HxP7Sg96-hWVqYi_6TJz1aW0nxrkGs",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-7127818b09a6",
    "weapon": "Glock-18",
    "name": "Neo-Noir",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-dAW6C_uJ_t-l9AXznwh9zsjjSn9j9dH-eb1V0CsF3QrNZ4xW8ltPlM-7h4QbYit5NzyzgznQecekkTuo",
    "collection": "Operation Broken Fang Case"
  },
  {
    "id": "skin-vanilla-crate-4717",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Broken Fang Case"
  }
];

const crate4747Items: Item[] = [
  {
    "id": "skin-fff2ecbae8e7",
    "weapon": "SG 553",
    "name": "Heavy Metal",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-XC2aEyeNzpOBlcCW6khUz_W6Gw9aqcH3EOAUlCcR5Qu4J50O5ltbhMrnltgbdg4tDmSus3ClOuCp1o7FV59kcj5o",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-955f32e49387",
    "weapon": "Glock-18",
    "name": "Clear Polymer",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK8-DAWuJzOtkj-1gSCGn200h4TnQwtqoci_CPQYlDsAiRuZc5hK7kd2zZbm37lGK2o5HnH2v2ixXrnE85Jt4rDY",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-c6f056b9dbbc",
    "weapon": "M249",
    "name": "O.S.I.P.R.",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiVI0P_8PP1SI_-eDG6exNF6ueZhW2fhwB53smmAzIr_cy2fa1N0D5J0E-Je4BG_lt22N-63sQLYid0UxCytkGoXuS8jTKqZ",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-feea98c5ab41",
    "weapon": "CZ75-Auto",
    "name": "Circaetus",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H-ebB3Wc1ud4tN5lRi67gVN242-AzNuoIyieOg8lDJdyEeVe40TqxoDvZLixtVPZ2IhFmC333yNJ8G81tFbyihAW",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-cfdaf2a78083",
    "weapon": "UMP-45",
    "name": "Oscillator",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a4s27ZbQ5dc-WAmKT1fx5p-B_Sha_nBovp3PTztuvd3jDOlMhX5IjR7YPtRTtx4XjNum2tQOLjItHmyj5j34b6Spt_a9cBq1OnGjK",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-503060091440",
    "weapon": "R8 Revolver",
    "name": "Junk Yard",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-BG3SEyud4t95lRi67gVMj4WTdzY2qcXjFbwUmDpcmTOEO5xC-x9XgYb7h71eM2dlMmCX_3CpK8G81tNsMj6E-",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-0c7be2632ca1",
    "weapon": "Nova",
    "name": "Windblown",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwjFL0PyhfqVSN_mdCliUyP1mtfN6TiWMmRQguynLnN_4JXyWbwN1CZN2QbEMthm6k9bjMemw7lTc2N4QySr7h38f7Hxp5fFCD_RpV_ibxw",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-24c6ed776121",
    "weapon": "P250",
    "name": "Cyber Shell",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSI-mRC3WDyet6vN5lRi67gVMl6mzUm9n8IHzCaQUmA5Z3RLJb4xC9m4bhMbzn7lOL2Y5Am3j73HxI8G81tOdaiAQT",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-bce9af58ff21",
    "weapon": "Negev",
    "name": "dev_texture",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-XC3GExPZipfNscCW6khUz_W_QzdmhJy7EOFAkWMdzF-dbtEK9moGyZbi37gTZi4xMxH36iipK73p1o7FVNCisfvA",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-d5acd24fcb47",
    "weapon": "MAC-10",
    "name": "Button Masher",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-DAXWEwOx6td5lRi67gVN04GjXnIr7JyiSbQJ2W8Z4QuEItBS_kdyxZurnsVfcjYgTzH6r2ClN8G81tG_8yXMP",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-337794166cad",
    "weapon": "Desert Eagle",
    "name": "Trigger Discipline",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-HHG6Xxutkj-VgXCq6hREuvTi6lob-KT-Ja1UlWMAkTOMCt0G9kIHlP77l5FbW344XxX_4iSJJv31r4bxRUKUn_rqX0V-d-rquYA",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-48e1c7c5df5e",
    "weapon": "AK-47",
    "name": "Slate",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSMOKcCGKD0ud5vuBlcCW6khUz_W3Sytb4cCqTOFUpWJtzTOUD5hPsw9a0Yrnrs1SK3ooXzy6shilM5311o7FVYrIufmI",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-6d14d557c648",
    "weapon": "MP9",
    "name": "Food Chain",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6JiL_SsDW-RyOBJvOhuRz39xB5-sGrTnt2tdymVOFApD8dxQLUCuxWxldLkNezjtVDd2t8Uyy_7izQJsHisCKzN8w",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-dad23c017c83",
    "weapon": "XM1014",
    "name": "XOXO",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMXeFz-VJvOhuRz39xE8j5GXQztepd3OUOwJ2C5JwELYKsULslobuY-7htlDditkUnyn73zQJsHgY6bTDGg",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-69f2e17b78f2",
    "weapon": "Galil AR",
    "name": "Chromatic Aberration",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWSY0-F7sd55Rie4qhEutDWR1NivcH2VOAchC8B4ReZesxa5l4LlPu6z7wTa2IhHmCj4jyNJ7Sls4LscEf1yskqHCW4",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-7dc4b0b65850",
    "weapon": "USP-S",
    "name": "The Traitor",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSJ-OsG3SA0tF-se9uSi2-lBMYvzSCkpu3eX7EP1MpApdwR-8NsxbukoXuNLnj4QOMiN8XzHn_iC8a7Spi4upRWb1lpPOCQNKXgA",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-c62d08aa8da1",
    "weapon": "M4A4",
    "name": "In Living Color",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSLP-FC1icyOl-pK84GH2wxhty4DjcyNuhdHyXbAVxW8QjTbEMthC8kNa0MLmzs1Hbj95E02yg2bbWGcKW",
    "collection": "Snakebite Case"
  },
  {
    "id": "skin-vanilla-crate-4747",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Snakebite Case"
  }
];

const crate4790Items: Item[] = [
  {
    "id": "skin-90b7437c4266",
    "weapon": "AUG",
    "name": "Plague",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7RhIfeGC1icyOl-pK8_GH7hzUx04WSByNj4JXuRaQJzXJclEO8MthHpl9DhYejjtAeL2YMU02yg2aipyCXk",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-5b3439856685",
    "weapon": "Dual Berettas",
    "name": "Tread",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_KWHGKE1e9lj_V7Sii3qhEutDWR1NmhcnPEPA92CJBxQeUNsha-ltC0ZOnltQHfjI1Gn3r7jy9N7npvsb4cEf1yGJF-WOQ",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-4b59a9ff63bf",
    "weapon": "G3SG1",
    "name": "Keeping Tabs",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-HD2SEyO13vOxoXxa_nBovp3OHzouqcHqRZwBxDcd2EOUDskXtl4DmYevi4FGLg4tDz3n4iylB6Xw9_a9cBgS1m-61",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-b40b6df277a2",
    "weapon": "MP7",
    "name": "Guerrilla",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V69lIfuaMWuZxuZi_uU7Hy22xE5x5TnWyYqvIi2SaVN0C8d1QeVf4RC-kdC0MOPl4Qbf2dhbjXKpOJ4z2JA",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-18341f97a949",
    "weapon": "PP-Bizon",
    "name": "Lumen",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2sYb5iLs-VAmaDyetkj-1gSCGn209-4mzRn9irIimXOFRzCpAhQORYu0bqw9HhNuix4Aba2opCznr72ipXrnE8UpZyTdo",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-9c09911caf5c",
    "weapon": "USP-S",
    "name": "Black Lotus",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_ux6seJicCW8gQg0jDGMnYftbynFZg8nXpt2Ru8D5hSwl9PhN7_m7wzdjotFxXr62y4Y6C894OxQVKA7uvqAvobUkb8",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-88cb1dcb9c18",
    "weapon": "XM1014",
    "name": "Watchdog",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk6OGRcKk8cKHHMXCR1e1-tO5ucCW6khUz_W2Dz9ehdHuWZwN2CJd0EOYDt0LpxNG2Zr6w4w3ei48UyC2riCJN6Sl1o7FVTxWp7to",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-fbe7862c26f8",
    "weapon": "MAG-7",
    "name": "BI83 Spectrum",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSIvmAA3KEydF6ueZhW2fml0Vw4mWGnN2udHmSOgAoCJMjQOJY4xK8k9XvPu-x5Qba2N5HzH73kGoXuQbKMJGE",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-3a2e0cdd5472",
    "weapon": "FAMAS",
    "name": "ZX Spectron",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-AHmKT1fx5vt5lRi67gVNxsDvTyNyueHOeaVVzCcN1EbVZtRK5k4LkNOnj4wbe2tlMxH_-jyNN8G81tGqq3pxL",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-df168db99441",
    "weapon": "Five-SeveN",
    "name": "Boost Protocol",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRb7dSJvmFC1iDxPhzvt5sSTygnBIpjDGMnYftby7FalV1D5QhE-EDthW8xtCyPu63tFPciYhBynn_jykfuCttte4CA6E7uvqAn_5lxU8",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-0d8df804e0af",
    "weapon": "MP9",
    "name": "Mount Fuji",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_CNk4uL3V6J4KvmsHm6eytF6ueZhW2fgkUoh5m7dnt78eC7FPFQgXJByE-AL5Bixld20MO2x51DX2o1NxCyokGoXudOiZ_SY",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-d303b15d1f4f",
    "weapon": "M4A4",
    "name": "Spider Lily",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6V6JhL-eWHHSvzedxuPUnHXiwlk4lsTvUz477ICiRPw52WJNxROICtxK-wYDhZejm5gCP2I9MzjK-0H1trtkVHA",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-87390b8680ce",
    "weapon": "MAC-10",
    "name": "Toybox",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-HAX6SzvZJvOhuRz39zRkismnVy9uveXqfZgYpW8R0TLRbshHtx9HvN77g5Qzbi4wTyniojTQJsHhO4vjwuQ",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-cf4887fb0502",
    "weapon": "Glock-18",
    "name": "Snack Attack",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-AAGaTyu9ipOBqRBa_nBovp3PQyomrcHKSaQYkCcRwQe8LukHswYHhN-Kz7lOM3YoUni6tjn5K7C5u_a9cBhxPlKk2",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-32bcc9d7f929",
    "weapon": "SSG 08",
    "name": "Turbo Peek",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6NSL-aWHHORyutJvOhuRz39k01z62jTmIv6dC6WPQdzWJYiQLYL40K4koG1Ze-35wze3dpMnyz63TQJsHim_V6lkw",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-96efe50cceb6",
    "weapon": "AK-47",
    "name": "Leet Museo",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSIfKAGnWRwvpJvOhuRz39xEly6jmHmdiqeS6UawMmCsBzFrRb4BLtx9DgPr635A3Xj45GySj5jzQJsHjwtGRbjQ",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-55623b84dd72",
    "weapon": "Desert Eagle",
    "name": "Ocean Drive",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ_yWMWyZ1e1-j-1gSCGn2x5-sG7Wzdyvc3OSbgcnXpR5FO9bukTtm9WzMePhswaN2N5CmCj_jyhXrnE8ibjhEyc",
    "collection": "Operation Riptide Case"
  },
  {
    "id": "skin-vanilla-crate-4790",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Operation Riptide Case"
  }
];

const crate4818Items: Item[] = [
  {
    "id": "skin-ee6dee51b1f5",
    "weapon": "Five-SeveN",
    "name": "Scrawl",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-BlXyGyqhIqtjqEpYPwJiPTcAInA5J0FO9csBSww4bhZruzswLcjIsXmCusjCsbuno_57tXUqB386HJz1aW2pI_m5Q",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-7b9cc6bc31ef",
    "weapon": "MAC-10",
    "name": "Ensnared",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-DB3-ZxNF6ueZhW2fikB935ziGztj7JHyQbgIkWZsmFrJY4xTpwdOzP-Oz7laNj4lFyy2tkGoXudbL5uIf",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-c8ccc993ef98",
    "weapon": "MAG-7",
    "name": "Foresight",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSMOKWCm6T1eFkj-1gSCGn2xgmsWvRm96seXOfbFMjXJR1R-NY4xjukNLlYurn4QeN3t5CmCT7jHxXrnE8UENGXls",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-0571189c0ca3",
    "weapon": "MP5-SD",
    "name": "Necro Jr.",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSK_mXMWmVwvx5vu5kRiq8myIrujqNjsH8JXqXPVAhDZVyR7YO4ETrxtLvZbmxtAXfiIpCzHr5h3tB635j4-gCT-N7reJfmdfh",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-75edb16f0014",
    "weapon": "P2000",
    "name": "Lifted Spirits",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_K8-VAn6Zz-lJtPNsTiSMmRQguynLydatcHrEOgIhXJZxReINtRO7ltexZuiwtQPd34lFxXqqjisYun444fFCD_R1ajI6RQ",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-2c6b935bb4eb",
    "weapon": "SCAR-20",
    "name": "Poultrygeist",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk_OKRe6dsMs-QBm6Tyut4tuhuRz2MmRQguynLno2pdnnGOw9xWcFwEbMCtkHsmoXuNe23tVGNiINCyyv6iylJuyZi5_FCD_Tlwp1EIg",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-3da25779ee2d",
    "weapon": "Sawed-Off",
    "name": "Spirit Board",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F5pehjTha_nBovp3OEyN-ocCmWPwYkCpoiE-QMt0bsxNbnNLm25waK345DyST23CpP5ytp_a9cBm4mGqdG",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-10f8a820b8dc",
    "weapon": "PP-Bizon",
    "name": "Space Cat",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-AHmaTxO13pN5lRi67gVN04jvcmYv6IHnGbw51XsYmQO5ftBG9xoexNrix4gPYjIJEzX_2iX9I8G81tOIzQC5J",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-a5efcaeb15ee",
    "weapon": "G3SG1",
    "name": "Dream Glade",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-UAmaUxNF6ueZhW2e3wkl162TVmdqvd3mUPw9yDJZ4FOYJ4UKxkNfiNrvn4QCMjdlHmHj6kGoXub9gXKkW",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-ec2dd0814c74",
    "weapon": "M4A1-S",
    "name": "Night Terror",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9lj-hnXCa-mxQmjDGMnYftby3FPFVxA5ZwRecOtUXuxtPiNL_jsQLc2NkTzS38jC5L7ydj5u8EUKo7uvqAgGSM4LM",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-5f6eb8a4271e",
    "weapon": "XM1014",
    "name": "Zombie Offensive",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7v-RcKlSOv-eDG6V_uFwtuRnXCClkCIrujqNjsGqdnzEOFUjW5omROQNt0LuwNKyYeKwslfYiN0Qmyr83Hsd6iZj5esAT-N7rRccpDyZ",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-f3392bb443bc",
    "weapon": "USP-S",
    "name": "Ticket to Hell",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_vp5j-lsQyWMmRQguynLzt_8JXiVOwF2AsF4R-ECshftltKxZe6x41CKjotExST8jn8f7ilr5PFCD_TZVvgG5g",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-53e4dc76b3e5",
    "weapon": "Dual Berettas",
    "name": "Melondrama",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2rZK15JeOsDGKHwPxzj-1gSCGn20t_5TiBmdf9Jy-QaQIiW5F1E-BesxG9lIaxNuLj41He340Ryi79ii5XrnE8Xl7Qhlk",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-c1ded03e3025",
    "weapon": "FAMAS",
    "name": "Rapid Eye Movement",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-BD3eZxdFzqeR6cCW6khUz_WjRmN79JXmePABxDsB1QeZetxnqx9XhN-nk4A3f399CzX2qiCsa7yd1o7FVINiMH98",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-335f1a313262",
    "weapon": "MP7",
    "name": "Abyssal Apparition",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6JoIeKsAm6Xyfo45uc9GnnnzBh-5zzTw9n9I3mQPAEgD5YlFuIOthC6wNK1MeKwsgHeiZUFk3vcOiyhPQ",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-405f5570d1f6",
    "weapon": "AK-47",
    "name": "Nightwish",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSLvmUBnOHyP1-j-1gSCGn20glt2nXnt78cnKUbwN2XJp2R-ZbuxHqlNXlMLiw5AHc3toWnCur23hXrnE8p0T2bx4",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-feae180c4968",
    "weapon": "MP9",
    "name": "Starlight Protector",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f-jFk4uL3V7d5IeKfB2CY1dF6ueZhW2flkUtztz_SzYypJSqRalUhDJNwQO4PsBXtx9HkN-K37w3bgohGmHn3kGoXuZ3lRdvF",
    "collection": "Dreams & Nightmares Case"
  },
  {
    "id": "skin-vanilla-crate-4818",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Dreams & Nightmares Case"
  }
];

const crate4846Items: Item[] = [
  {
    "id": "skin-14669f15615e",
    "weapon": "FAMAS",
    "name": "Meow 36",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-QAXWA_uNzv_ZWQyC0nQlp6jvVztaudCnEbAUgDsckFOAJsBLtlN2yP7zqslGMiooXyCX43H8Y5zErvbiVlZtU7g",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-8300d759e7a9",
    "weapon": "Galil AR",
    "name": "Destroyer",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWOV0vpkv_hsXRa_nBovp3PWwougcHvBP1IpWJohEOdc5hLrwNTiZbjh7gbaithNnnqsjX4f7y8-_a9cBt1aCBEk",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-35998e06d00e",
    "weapon": "M4A4",
    "name": "Poly Mag",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJfyaGmKv1e91pOhqTiWMmRQguynLzY2pIi2QawR0CpdwTOdeuhXrw9XjZeq04QLYjIlFxSz9hn9MvCw44vFCD_Q07cip4Q",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-cf8d25d8a85c",
    "weapon": "MAC-10",
    "name": "Monkeyflage",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-eAWmbxPdwvOBuSha_nBovp3OBzdisJHPDaQ5xXpF2Ru4M5BTtlYHnYr7h5lbZg4gQzC_22ikfvSZt_a9cBiKJuAuZ",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-128166c2642e",
    "weapon": "Negev",
    "name": "Drop Me",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-QAmKR09Flu_hWQyC0nQlpsDnVy4mpcSiQOlB2CJRxR-AK4BDrw4azN-225lfc2t0Tznr6iX4f6zErvbg1B8-kIw",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-de854ad43079",
    "weapon": "UMP-45",
    "name": "Roadblock",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1c_M27ZbRSMv-SCmWczu19j-1gSCGn2xgi5GnWmdmodXyUbwUhA5RyF-FcthS8w4ayMrjgtAzX2t9Byir83HtXrnE8YWMltLM",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-2a4119de0db9",
    "weapon": "Glock-18",
    "name": "Winterized",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK8-WAm6ExNF1sexmcCW6khUz_W6Azdn6eCrBalcjXJpzE7EO5xa_l4DuNu6ws1Hb2IgUn32si39B5y11o7FVC5qcAFg",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-ab0f49fac59d",
    "weapon": "R8 Revolver",
    "name": "Crazy 8",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_JeacAnGV09FmpfN5QyyMkBEupzi6lob-KT-JZlJ0X5MhEOFcthO9wIHuZrng5A3XgotFmSv82ClAuHo46-wHU6p38rqX0V9gOeDH5A",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-302f05527562",
    "weapon": "M249",
    "name": "Downtown",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SJP-EAHGf1etJvOhuRz39wUh-5GuGz4mrJHuSbg4jWJp1FLINsRCxwdDuZezm7leK3d5GmSr_jTQJsHj3YwoNRA",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-9acc418fe0ad",
    "weapon": "SG 553",
    "name": "Dragon Tech",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-QF2WV09FyouBuQCeMmRQguynLw9ygIHnGbgYlDpciEeBYsEPux9ThMuOz4ACLjY1FmX-viitMvCZp5_FCD_QeAJd5TA",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-e2b145a9faa7",
    "weapon": "P90",
    "name": "Vent Rush",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V7BsLvefC2OvzedxuPUnTXywwElz52XXzIz4dn2RalcoC8FzQrJfsRe-moG0YeK2sQPZ3YpEmzK-0H18Z6zceQ",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-459ac0342b48",
    "weapon": "Dual Berettas",
    "name": "Flora Carnivora",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2qfaVhH_WfB3OV0tFzpuhlcC-_mg8mjDGMnYftbynGOA4lDZd4FOZYuxi6kdPvZuLrsgTW2IIQxXn7iSNJ6ic96-YCB_I7uvqA4cV5qzc",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-f10cd3871578",
    "weapon": "AK-47",
    "name": "Ice Coaled",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-UGm-Zz-llj-1gSCGn2x4l5z_RyNj6JXnEbgFzXMYjEOUIsBe5m9exP-zg4leMj4pGxXn7jCJXrnE84asPq_0",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-5f1071439b89",
    "weapon": "P250",
    "name": "Visions",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSNvmAB2ie0tF6ueZhW2fmzERx5jyHm4v_dXvGaQR2WJF2QrIMsxW_w9PvN-zhtgXXiokWn3_6kGoXuc_iGAKZ",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-6f81f65a9d91",
    "weapon": "Sawed-Off",
    "name": "Kiss♥Love",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F9ufJ6QyalkCIrujqNjsGoI3-QZwZzD5F5TbUDsBi_xtW1NuqwsVaPjoxFmST93ClI6S1osuYDT-N7rb6xkGzX",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-be37abed2b4d",
    "weapon": "USP-S",
    "name": "Printstream",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_v5kue99XD2hkBwqjDGMnYftb3yUPFR0XsNyRrNc5kO5ltziMenr5lONj4kXyi2riywc7y9o5LtQAqQ7uvqAkScWnv4",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-3a4cc2c7a86f",
    "weapon": "AWP",
    "name": "Chromatic Aberration",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6dlMv-eD1iAyOB9j-1gSCGn2x50tT_Tm9f4cXORPA4oWJckFOMLtha_x9e1Nu-35QfbjYtHyiythitXrnE8ylr09zg",
    "collection": "Recoil Case"
  },
  {
    "id": "skin-vanilla-crate-4846",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Recoil Case"
  }
];

const crate4880Items: Item[] = [
  {
    "id": "skin-e6a7543c4187",
    "weapon": "MAG-7",
    "name": "Insomnia",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSKf6AAWqeyO9JvOhuRz39wh4k4TzUnN_9cC6WO1J2DJdyROcI4BC9x9XmN-vj71eN34xAzC33hzQJsHiziLtbUA",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-2f564d56b7ff",
    "weapon": "MP9",
    "name": "Featherweight",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V7d4MPWBAm6XyfpJvOhuRz39wB9x6jncwtyvd3jBPw8gCJFwR7YItRW8kNK0P--27wLe391NzCyq3zQJsHiOu4WQDA",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-05d5c801f287",
    "weapon": "SCAR-20",
    "name": "Fragments",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMs-VHGaXzOt4pPJWTSWylhYYvzSCkpu3dnmXbAZyX5pzQLQO4Ri_lIbgMOzktg2P3t8Uni32iHwc7i856r1UAL1lpPP6-FL_6g",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-db200bb3a1ef",
    "weapon": "P250",
    "name": "Re.built",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSMvWRG26c1dF6ueZhW2flkRh_sjjXmNb8cCnDPVUnW5ByQ-JZ5hG_xN3gZuPltAHegogWzH7-kGoXuSIylluX",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-d87f89df4191",
    "weapon": "MP5-SD",
    "name": "Liquidation",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1Y-s2jePF-JM-CG26TytF6ufB8Ri2ygRQovQKJk4jxNWXBOgUmDsN5FrIM5xi4lIHgNe7q51Pdi4pGni-t2ntA5ids5LxRVPUj5OSJ2Kcl14st",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-79472cd37595",
    "weapon": "SG 553",
    "name": "Cyberforce",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-QF2WV0-h5ouJscCW6khUz_Wjdntr6Iy6WbgEjA5MlRedctxG5kNKyNbi3sgTfi9oUnyj9234b5n51o7FVairOMAY",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-e5141cf036fa",
    "weapon": "Tec-9",
    "name": "Rebel",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SJuKWC2OfzNF6ueZhW2fgkU0k5GmBzIn6eHjBagBxDZMhReYN5hC5ldbgNb7jtFbfgt5Ey3_3kGoXuRiiuNrn",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-e4cd5a266934",
    "weapon": "M4A1-S",
    "name": "Emphorosaur-S",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-dsSi26mxoYtS-AlJXgHifOOV5kFJt4F-8KukXtldyyMLjjtVOIjIsWzXj8iylJ5ig6tbsKV_ItqaaB3gHfcepq28_00F4",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-99526dbb85e6",
    "weapon": "Glock-18",
    "name": "Umbral Rabbit",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-eAWie_vx3suNgWxa_nBovp3PXyo76Ii_FPAQmDMYiTLYDthm_kdbmZry2slCLjoMQzC7_3y1J7nts_a9cBi_qumx0",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-7815c7fae965",
    "weapon": "MAC-10",
    "name": "Sakkaku",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-AD2ybwOVjj-xsSyCmmFMk5mnRzdeqdSnCPVN2DpV3QeELtELrlIbiPrzqsVOMjdlBnySvjH5O8G81tOTP5a5f",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-f1184959b60b",
    "weapon": "R8 Revolver",
    "name": "Banana Cannon",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-RD2mRz-9JvOhuRz39kU4msjzdmd6peXKTOFd2DcchEOEP40btlt3lN7iz5FbeiNpFzi_83zQJsHgWY2btRg",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-2e0afbc14204",
    "weapon": "P90",
    "name": "Neoqueen",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6poL-GGC2Ke_uJ_t-l9ASyyxhl04zuDn4muInOXPAF2W5shQOAMs0G7xNfkZOuwswbej4JDnyvgznQe6S6_YqA",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-d42f9ca97ef6",
    "weapon": "AWP",
    "name": "Duality",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6hkLfKcMXSewOVzj-1gSCGn20p_62-HnN7_cH-XblQjDZYhR-FZsETqmoXjYry2s1DX3d5AyyT62ipXrnE8bpg5yZk",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-f04de3b20f62",
    "weapon": "UMP-45",
    "name": "Wild Child",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSI_yGGmSY_uV_s-pWQyC0nQlpt2iHmNyqd3KVOlB0D5YlTeZb5xjsx9PjZOjl4VCNgt1EnC77iSMf7jErvbhWyVIDbA",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-c36fdc469906",
    "weapon": "P2000",
    "name": "Wicked Sick",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMWOVwuJ_vuRWQyC0nQlp4jnTyNqodHyXOlQkDZtzF-UN4BjukYeyZuLn5Qbaj4NEzy3_3ywd5zErvbh-3lU8Iw",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-1aba3ea9ecc5",
    "weapon": "M4A4",
    "name": "Temukau",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSNPWeG2yR1NF6ueZhW2ewlBtx5W6AmYv9JS6XaAV1CJEmTeUL4UTpxNzjZO3jtgaIjN9ExCuskGoXuRnyRhBA",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-1f95db2031e4",
    "weapon": "AK-47",
    "name": "Head Shot",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6xoIfSsHW-f1dF-v-1mcCW6khUz_TzRnNigd3-SOg4lAsF1QOQN4xS4wdHnMu-0swaMjIxExSSoiyof6ih1o7FVGHIdVhw",
    "collection": "Revolution Case"
  },
  {
    "id": "skin-vanilla-crate-4880",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Revolution Case"
  }
];

const crate4904Items: Item[] = [
  {
    "id": "skin-8d6879f0a2bc",
    "weapon": "Dual Berettas",
    "name": "Hideout",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1f-vOiV6ZoMvWHGmaD_uJzpOloQxa0hxQpjDGMnYftb3-WbQ92WcZ4EeFZs0TtxIfvZr_m7wXW2I0TySv93ywd5yxu5-0FAPE7uvqA-FxXgtE",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-543d85d8ca60",
    "weapon": "MAC-10",
    "name": "Light Box",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1W7vH_OJtkLPyGHW6fz9F6ueZhW2e2lBsk4WvXw974diiSblV1DMBxRrEJu0PrwNy1Mruw4gKK3d0TynmskGoXuUBgCcQQ",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-baa1adba3189",
    "weapon": "Nova",
    "name": "Dark Sigil",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwixU-fORbLZsK_uSHFicyOl-pK8xG3q1lk0l4m2HmI6odXiRbwF1CJchQbEI4RK8kNPiMb-24A3W3YoX02yg2YjfpjSA",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-c176fd51f6b9",
    "weapon": "SSG 08",
    "name": "Dezastre",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJtpJeqSHXOCxNF6ueZhW2exwEp2tmmEw9epdCjCalQhX5ImQOZbtRixxNTgN-u24AHb2okTmX2vkGoXuacR7BX3",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-80f2ee4e940f",
    "weapon": "Tec-9",
    "name": "Slag",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wjZe7KuRYrFjK-mSHGOvxOBxue9sSju6mxoYvzSCkpu3eHPFZwMkWZBzR-cDsEbpm9DvY-yx51fajd8WyXn4hntBvX465OkBVL1lpPMDDuBGag",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-806137e84f73",
    "weapon": "UMP-45",
    "name": "Motorized",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtsM-OWA2WcxOpJte9uRie2qhEutDWR1N2gcy7DalAhCMd3QucO5EPukN2yN-iw5QyN2IkRzSr6iXtO6StrsL0cEf1y62CUsqE",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-8c2ae17ac090",
    "weapon": "XM1014",
    "name": "Irezumi",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk9___OPU5H_mBC32FzOdJvOhuRz39k0h14juBztapc3-fPVIjWZomFucMtxe9m9zmNOjltQ2N2dgTnCr_3zQJsHjkNdtnHQ",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-2c04c0201892",
    "weapon": "Glock-18",
    "name": "Block-18",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tvMvmQBVidzuByouhoQRa_nBovp3PXzov9cyjDbwckXMMkF7IIthOwwNDmY-rq4AzfjItMyH_9iC0YuC04_a9cBk5_kH3q",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-0e160542d6d4",
    "weapon": "M4A4",
    "name": "Etch Lord",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRe6psK_WRB3OV_uJ_t-l9AXjnw0Qh5GqGn9b_dH3Cbg4nCcAhRLIM4BW7mtXmM7jjtAXai40WmHngznQeK6EUrpc",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-204c9ef36369",
    "weapon": "Five-SeveN",
    "name": "Hybrid",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRbq17JeOWGGKe_uZvsvNgSxa_nBovp3OBmd6oJXyeaQ9yCsZxEOICsUO7kdK0Y-qxtFCN2YsQnCv7i39N7ixp_a9cBsh2vVQD",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-48f9126df040",
    "weapon": "MP7",
    "name": "Just Smile",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf8DIM0Pi7e7BSM_2aAmKvzedxuPUnHXrkzU4i4z-Dno6sci3BaQApDpN4R-cCthnqx4W2MunhtgCI3d0QmzK-0H0MYFOvtA",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-d0653c0aaf2f",
    "weapon": "Sawed-Off",
    "name": "Analog Input",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c29abNoJP-VCFiXwONzot5lRi67gVN3tWTdyNipdCiQPwdxCJV2RuBY4xa_wILgMLu37leK3otMzHmo3H5J8G81tFoL-ETi",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-63c1d72b8501",
    "weapon": "M4A1-S",
    "name": "Black Lotus",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_3HDzaD_ux6seJicCW8gQg0jDGMnYftb3-eOgEpDcFyQuMMtRG8kIbhMuK051ba2IMQyH6r3yof5ilv4bwLWfU7uvqA7qRNHGA",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-9eb2feb216c5",
    "weapon": "Zeus x27",
    "name": "Olympus",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLln4Xl7x1B6ue9V7BlNf6XC3WvxuFyj-1gSCGn2xl2sm7XnI6hdC-XPAcmXsF2RLIP4xbslty2NLvqswePjYlEySn33S9XrnE8cYTqlUY",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-803657465fa6",
    "weapon": "USP-S",
    "name": "Jawbreaker",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODHViUzulxqd5lRi67gVMl62nUyd2scnOVPAcgA5J2TOFY5xLrlN22YbzgsQaI2IlHyiWojnwa8G81tErOD-_J",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-b986a2456e28",
    "weapon": "AWP",
    "name": "Chrome Cannon",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OarZbRoMvWXMWuZxuZi_uM6SXngxR5-smTXw4ugIi6RbVcpXsN1ELUDtxPrktOyNL7h4g2P2tpbjXKpKIbjbD4",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-82dc98e09ba6",
    "weapon": "AK-47",
    "name": "Inheritance",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQ0OKheqdoLPGaAFicyOl-pK8xGH_nwUt1sGrSz9ivcHKQOAcjXMYkRu5Yuxe4lYCyZOq25VSM2oMT02yg2UxBSEgA",
    "collection": "Kilowatt Case"
  },
  {
    "id": "skin-vanilla-crate-4904",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Kilowatt Case"
  }
];

const crate7003Items: Item[] = [
  {
    "id": "skin-5b2502fc6ca2",
    "weapon": "USP-S",
    "name": "27",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODMWGZxOJyj_JnTiK2qhEutDWR1Nf8dSieZlciX5skF-INsRe_l9HuMurn5QDZ2tgTnyT82ysduHo_tekcEf1yefDz68I",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-48039a85c871",
    "weapon": "Desert Eagle",
    "name": "Calligraffiti",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6_evb6hoH_OSAmuZxvx3tudWQyC0nQlp52rQmNv_IC7DaFR0ApB4QbMKs0W8k9zuPr6xtAGMjoITmymohyMa6jErvbhrxmEjWA",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-63ed7bb762a0",
    "weapon": "MP5-SD",
    "name": "Statics",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1W_6eRe7BsNPmQHViSzftzj-1gSCGn20l252_Tz478Jy3EbAYnX8FzFuAI5kO5wNK1P-uz4lSP2doRyS_6iipXrnE8LnlBQOA",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-f0c2d895b50d",
    "weapon": "AUG",
    "name": "Luxe Trim",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_Ddc0OK7bqJoMs-fB2CY1aAntOUwSivrwksmtTyBnI2udijFZ1cmDZt0QeUCsRG7xoWzNu3r5gPelcsbmlZvKhNj",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-c7c133807ad6",
    "weapon": "M249",
    "name": "Hypnosis",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wi8Ju6uRYL19Lv-AB3SvzedxuPUnTny1wkgm5znWyon4dC2TPFRxX8AmROcLthW8kdTgMrm051fcjIsQzTK-0H3IfNSRpg",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-3604c7754aa6",
    "weapon": "R8 Revolver",
    "name": "Tango",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c28MJt_L-OWHViRz-pJt_RnXBa_nBovp3PSm4urdy7Da1UjWJolF-RbshfqldXuMuqxsgGKi45HmXj4iS5IuCxi_a9cBo6oJFLo",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-03f6e200c8b6",
    "weapon": "SCAR-20",
    "name": "Trail Blazer",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk_PGvevY9H_aGHH6v1eFmv95lRi67gVN_5D6Bzo38cXOVOA52DZolReBbt0K5k9DvM-Pr4VHXjI9Enn6sjHkb8G81tIsMy8R0",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-6bdcfb1366c6",
    "weapon": "M4A4",
    "name": "Turbine",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRbrF-Kf-dMWuZxuZi_rRtGiriwUgh5m6Bn9z4IHLEOA4gDpZxQOULsUW9k4eyMOLitQzd3opbjXKpOa4i6Kc",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-8300a7de7ac6",
    "weapon": "Dual Berettas",
    "name": "Hydro Strike",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1f-vOiV6FhKeSWMW-Jxfx5j_J9XSC4kCIrujqNjsGgeHrGa1B2W5t1Q7NetkOwk4C2Ybzq4FDWjI0TzS6viilLv3tp6rwLT-N7rWtjCU_P",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-1328a63c72b5",
    "weapon": "MAC-10",
    "name": "Saibā Oni",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1W7vH_OJtiOvGYB1icyOl-pK89HXuxkRt2627Syt2udn6TZlJyW5R0QuMKsRm6lNflNO3g7lfbi49H02yg2Yk7YeQ4",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-39f40ce9d13d",
    "weapon": "P90",
    "name": "Randy Rush",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf7XsL0OCvZqB0H-KGHW-vzedxuPUnGCy3lhsj6zmAyYn6eXyQbwMhApAmFu8C5xTpktHjMejl71aPjtkQnjK-0H3AcMEIag",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-05b22d280618",
    "weapon": "SSG 08",
    "name": "Rapid Transit",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJt5MvGdHW6E_vl-ufVscCW6khUz_WTSw479d3vDalIkCJNzFuIN4RHqw9K2P7nktQHf340Wyn-vh3wY7Sd1o7FV_lj0Yvg",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-ad56dc47a4c4",
    "weapon": "AK-47",
    "name": "The Outsiders",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WRfJtvNeOsAm6Xyfo4tbg7G3-wxxwl5mzRyYqodSrBagMjCZJxELMPthi8lNLgYuzltgHc3ZUFk3sO-7HKrg",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-71be2ee4feeb",
    "weapon": "P250",
    "name": "Epicenter",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjIJuqKRYal9IfOHMWuZxuZi_rg5TnvmzB916m_dm92pdH6eOwJ2DpVyQ7JftUXtwIK2MLiz7wTXjYtbjXKpkd0OdLY",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-52c02605493f",
    "weapon": "UMP-45",
    "name": "Neo-Noir",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtjJf-sAGiZ09F6ueZhW2flw0R0sGrcy4z9cn6XagVxCpR4F7Rb5BPplIbjY7vj4AOLjt0TzSj9kGoXuYU0ZhpI",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-5bd16f2599cf",
    "weapon": "Glock-18",
    "name": "Gold Toof",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tuKP-eHmKC_uJ_t-l9ASvik00m5TmEzd-geSiQPARxX5IiTLIMtBW4l9zmNuPr4VbbjItHxC_gznQeqLQCTjk",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-aa9558c8a01f",
    "weapon": "M4A1-S",
    "name": "Vaporwave",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_3HDzaD_vh3oO57WCilkCIrujqNjsH_In7DZgYnWcAiR-MJshO6koDlN7vhsQyLi41HySX6iXlAvCZrsb0HT-N7rW-9qIHE",
    "collection": "Gallery Case"
  },
  {
    "id": "skin-vanilla-crate-7003",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Gallery Case"
  }
];

const crate7007Items: Item[] = [
  {
    "id": "skin-5626422553f8",
    "weapon": "M4A4",
    "name": "Choppa",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRb7ZoJf6sDWadztF6ueZhW2fjl05-6mzVmdmgcHOTZgIhXpJ1RO5c4Bjql9DjMunhsgOL34gUnnr-kGoXuTonsfJ3",
    "collection": "Fever Case"
  },
  {
    "id": "skin-78ea15f33e22",
    "weapon": "MAG-7",
    "name": "Resupply",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wi9a6KWRaalgL8-RAX-vzedxuPUnTHjgkxwj52SHyImqcX2fO1AhDMNxEe4I4RWwkIXgMO60sQPeiYgQmTK-0H2GsAjMqQ",
    "collection": "Fever Case"
  },
  {
    "id": "skin-a8cc985f8710",
    "weapon": "SSG 08",
    "name": "Memorial",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJtvMuWHD2uZ0vpJvOhuRz39x0UlsWmEnt37IHyfaFAkWZR5RuALtRKxlYKxMLnn4leL3t5FmSv9ijQJsHj6GwByAQ",
    "collection": "Fever Case"
  },
  {
    "id": "skin-8bda61ff439a",
    "weapon": "P2000",
    "name": "Sure Grip",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0OL8Y5trMvGQGmac_uJ_t-l9AS2wwxx06mTUw9b7JH2RZlQoDZYkRLQD5hW4lNPiYePktgzWj45CmSzgznQeV1pFuQ0",
    "collection": "Fever Case"
  },
  {
    "id": "skin-0fbe55711fa6",
    "weapon": "USP-S",
    "name": "PC-GRN",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODHViS0_titedmXSq2qho1tjiLpYPwJiPTcFcoCpV2F-Nc4xXpwNPhZeLg5AffiIxNynj2jylP53xp6ugHU6Ig__XJz1aWMWkGKhU",
    "collection": "Fever Case"
  },
  {
    "id": "skin-038541568496",
    "weapon": "MP9",
    "name": "Nexus",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f8DIC0PyrcLF-H_yaCW-Ej7ohs7Q5FnDqx0t152XdzI36cCnDaAZyDJNzRuVYsBa4kYHgZbyx4ALAy9USEWUfUe0",
    "collection": "Fever Case"
  },
  {
    "id": "skin-e0eec3353ea4",
    "weapon": "XM1014",
    "name": "Mockingbird",
    "rarity": "Mil-Spec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk9___OPU5H_2cDWyZz-l0ufNtcCW6khUz_T-AnNagJH3FbwQnCsEmTeEMs0aww9biMby3tleKjtkQmSX-2yMfv311o7FVNa3OfdQ",
    "collection": "Fever Case"
  },
  {
    "id": "skin-4515a7cdcc74",
    "weapon": "Desert Eagle",
    "name": "Serpent Strike",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6_evb6hoH-OdD2yV_v53pPVsXSeMmRQguynLzdmsIHOVPVciXMN3QuVeuxexmtHuP77m7gDd34kRxXj_3ChKvS9p5fFCD_SJMmxOXA",
    "collection": "Fever Case"
  },
  {
    "id": "skin-27a11235665e",
    "weapon": "Zeus x27",
    "name": "Tosai",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLln4Xl7x1B6ue9V7BiM_GaMWuZxuZi_uM6GXC3xUh05D7WmY36IHuUZ1AjXpVwR-FZu0OxltHlN-_gsQ3Z34NbjXKpEIQyv90",
    "collection": "Fever Case"
  },
  {
    "id": "skin-aef077455139",
    "weapon": "Nova",
    "name": "Rising Sun",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwixU-fOReq1-Kf6UMXSFz9F6ueZhW2eyzB9z4WjTzt77JXKVaQcnC5sjTLEMthDpwdzkMr_lsVbW34lGmyj5kGoXuV-iSbwM",
    "collection": "Fever Case"
  },
  {
    "id": "skin-f2567cfebfb7",
    "weapon": "Galil AR",
    "name": "Control",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PWvZK1hH_OcAHOCzuJJo_V7RiK2qhEutDWR1Nmvcn6RPFVxW5txTbRZuxDuxNKzZu2x7wCMiNpExCSshyof7Xlt5-scEf1y6paUA5M",
    "collection": "Fever Case"
  },
  {
    "id": "skin-ff75c4a68dbd",
    "weapon": "P90",
    "name": "Wave Breaker",
    "rarity": "Restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf7XsL0PChZ7d5H_KfG2KvzedxuPUnTHrlzU9xt2qHzd-rJ3yQb1cmXJNzF-Vc5BS6wdLjMe60tAyP3dhNzTK-0H3NvEQllg",
    "collection": "Fever Case"
  },
  {
    "id": "skin-4c2e3face5fd",
    "weapon": "AK-47",
    "name": "Searing Rage",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WRbbx9LP-AB3GV_uJ_t-l9AXu2lk1xsD-EnI3_JHmeaAV1CZB1RbEJtxfuxNHuMuq251PY3o4UxXjgznQeg4Qz-rg",
    "collection": "Fever Case"
  },
  {
    "id": "skin-a7838b4ba71f",
    "weapon": "Glock-18",
    "name": "Shinobu",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5t-KPmdAWWF_uJ_t-l9AX6ylh5w4mTcwtahdS2VOgRzWJsjEOQL5EWxwNblZeK2tVPXitlDmyvgznQeC7fvQL8",
    "collection": "Fever Case"
  },
  {
    "id": "skin-5a6a2858b51d",
    "weapon": "UMP-45",
    "name": "K.O. Factory",
    "rarity": "Classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtiLPSsDWaC1eF5vt5lRi67gVN2tWXTzI6tc3rGPQ4kWJUiQrJf4RPskIW2ZO3r4VaKi9hFyX-qhy0a8G81tA_18T9p",
    "collection": "Fever Case"
  },
  {
    "id": "skin-f098f9b83e8b",
    "weapon": "FAMAS",
    "name": "Bad Trip",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1d7v-ve5tvIfSHHG6A_uJ_t-l9AX6xzExytWndzdj6eCrGb1MkWZB2TOBc4xK8mtHkZezrsQOPjoITyi_gznQezHhrR0c",
    "collection": "Fever Case"
  },
  {
    "id": "skin-5a39103af835",
    "weapon": "AWP",
    "name": "Printstream",
    "rarity": "Covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OK8Yap5M-SBC2ad_uJ_t-l9AX_qlk4k5GyAzo6ocC-QZgZxX8AjEbZY5xnrxtPjM7vnsgGIj9oTmXngznQeg3pfcPs",
    "collection": "Fever Case"
  },
  {
    "id": "skin-vanilla-crate-7007",
    "weapon": "★ Rare Special Item",
    "name": "Vanilla",
    "rarity": "Rare Special Item",
    "image": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
    "collection": "Fever Case"
  }
];

const KNIVES = [
  {
    "name": "★ Karambit",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XuWbwcuyMESA4Fdl-4nnpU7iQA3-kKnr8ytd6s2labZsLfKaGinEx-0u5LhqGHrjlElz52jRmN2sd3yfb1NzWZVwRbNeu0S5k9WxMuvh-UWA3ObnwJvj"
  },
  {
    "name": "★ Butterfly Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Z-ua6bbZrLOmsHXevzOtluN59TieMmBgjuiiI1Negd3-TaFUhWZciELEJtxS8kdznPr7m5ACMg40XniqsiC5I63posrocEf1ybD3MrwU"
  },
  {
    "name": "★ M9 Bayonet",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Wts2sab1iLvWHMWSF_uMvj-NoVhaggRIptiqEiYfGLC7DN0N9FMMhELFYtRLpx9W0MLjh4Q2L2d9AyHiv3HhKvCc44L0CAKJxrPfXjADfcepqy0ujMBs"
  },
  {
    "name": "★ Talon Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1M5vahf6lsK_WBMXSA_vp3oORWWjuxlBMYuziEjJa3cX_DbwJyD5AlF7JetBjpwIfuZbi051Pfg4JMzSr9239Jvyw65OtRB71lpPPjCxLdOg"
  },
  {
    "name": "★ Skeleton Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1I5PeibbBiLs-SH1iD1etzvN5iQSC1kCIvtjyTg8GgdnLEbwF0XJF4FuEP40HtwdLkNLy0s1GKg4pEzi-tjXgc7n1tsewET-N7rV-NMoFg"
  },
  {
    "name": "★ Bayonet",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Wts2sab1iLvWHMWSF_uMvj-NoVhaggRIptiqEiYfGLC7DN0N9FMMhELFYtRLpx9W0MLjh4Q2L2d9AyHiv3HhKvCc44L0CAKJxrPfXjADfcepqy0ujMBs"
  },
  {
    "name": "★ Flip Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1d4_u-V6VgH_ScHnecxPxJoOloXCzgqhEutDWR1N79dy2RbgUhCZZ4Q-ALukS4m9PlNbi25wLfjo5GnyT7jSNJ7Cc4suYcEf1yV0vEDxY"
  },
  {
    "name": "★ Gut Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1c-uaRaalSJP-DHmuV09FmuOB6Sn2MmRQguynLzo74JX_EbgIlW5YjEeAKsRntkdbhNe_jtFTXgo0RxS-rj38cuHo95fFCD_S45FzBKg"
  },
  {
    "name": "★ Huntsman Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1P7vG6YadsLM-bF1ifwut3vt5iQSC1kCJ-4wKIn4vwNCaJPVV2CJN2TbVbsRjpxoGzZezk5A2Ni4pAyi_6iHtN6nlj4edTBKF0-rqX0V-O5oiPkg"
  },
  {
    "name": "★ Bowie Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1I-uC4YbJsLM-RAXCZxNFxo95rQD66kCIlvzyGkbD1ICbOMFdkX_0sHLBS9g7qx9HhMuyxtA3b3o0Tyij92H4fuy5q675XAPBxrvHVh1nBOeFo5ZYAOr_5Gl4TXifL"
  },
  {
    "name": "★ Falchion Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1d7v6tYK1iLs-UHViWwOJ1uOhmQRaxmRwkuAKJm4LwLyrTO2l4X8M2DPlYsEK5w9PiM-vh51fdjdhMy3qqhyhPvXo-57sGBaAj8_eCiV6TZ-c-_9Bdc8r7VC2E"
  },
  {
    "name": "★ Shadow Daggers",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1L-uGmV6VgH_ScHnecxPxJoOloXCziqhEutDWR1Nmgd3yUZwMgCZQmRuVfthW8x9WxNOi05g2Ij48UnC323SxPu3s5t-ocEf1yJR6gz8E"
  },
  {
    "name": "★ Ursus Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1O_eG7e5tsMc-RAnKVxdF7teVgWiT9zUl1tWjTzt_9eSnFPQIlWZR4TO4MtkHskYazMurn5AKMjohDyC332DQJsHhNMA8umg"
  },
  {
    "name": "★ Navaja Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1c9uK9cZtnIfOYBWmZx-tJse9WWyC0kA8YvC-ElIj8HifOOV5kFMMlRLJf4BK4k9LlZuy35QTYg95NzXmri3tB6yk4sO5XBaoh_PDRhgHfcepqTt5nFFY"
  },
  {
    "name": "★ Stiletto Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1I-_uibbB5L8-AHliEwP5zj_R7TSi9qhUisiuc1N34dSiVOFd0XpN0RuACshnpl4LuYuvn5AaIjYkUmyz-3H9KvCxi5uccEf1yzYUK7Q4"
  },
  {
    "name": "★ Nomad Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1U-uaqZ6t_H_iKMXCVw_1JveRtRjy-20pw5TvXydirInOUawdyWcRwEbRethCxwdDuZurk5wWKiIlFyyj5hixXrnE8nU2__vY"
  },
  {
    "name": "★ Survival Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XuWbwcuyMESA4Fdl-4nnpU7iQA3-kKnr8ytd6s2taapkM77CDzbIlrsms-NsHHGxzUwj5G6En4yuIy_BbQAjC5VxQLRc5hm8x4HvKaq8sEukLuHu"
  },
  {
    "name": "★ Paracord Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y4OCqV6x0H_SXHmaE_uNztOh8Qmfilkl142jWmNv6JHmXbw9yDpFyF-AC5hC6k4ayMenq5gLXj4sUzyz7kGoXuVAGtbGy"
  },
  {
    "name": "★ Classic Knife",
    "url": "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y_OGRaalSOvWRHGavzedxuPUnGiy1xxkk6z_Tn4mucH2UOAUmCZZ1RLQJuhbrx9O0M-ji71OK34oTzDK-0H1Px6MwvA"
  }
];

const RAW_CASES: Case[] = [
  {
    id: "crate-4001",
    name: "CS:GO Weapon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bji61XxRCKg0MSz_nUDvPb-OPFvdKTFDzbAkbp16bY5Gn6wkx9ysj7Xntf9IC6WZgA-Sswnnj45WXo",
    price: 1.5,
    items: crate4001Items,
  },
  {
    id: "crate-4002",
    name: "eSports 2013 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bjx-UnoUwniocSwrHEV7KaobPdud6HEWjXGmbYl6LIwHn2ywhgh5GzXzdmsc3yRalAkD5R3FvlK7Ed7JoXDRQ",
    price: 1.5,
    items: crate4002Items,
  },
  {
    id: "crate-4003",
    name: "Operation Bravo Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj7-lz1QAn4kZjf9CsVuvf7OfQ5IabBVzbHlb915bcwHCjikEp_sTnTn4z6eH6RblQlC8RwFPlK7EdXSP0Ibg",
    price: 50,
    items: crate4003Items,
  },
  {
    id: "crate-4004",
    name: "CS:GO Weapon Case 2",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bji61XxRCKj0M-xr3IIvqP5PqI_c6LDCjWUkrdw5LUwTivgkE9wsGnUnNr8InzBP1c-SswnzDatg2g",
    price: 1.5,
    items: crate4004Items,
  },
  {
    id: "crate-4005",
    name: "eSports 2013 Winter Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bjx-UnoUwniocSwrHFkvqbgafw-JKHKWTGSw7wmtOMxTX2yw0ki5DyGm4ugcirGPQ4nC5B3EbNetw74zIMdBc4CJw",
    price: 1.5,
    items: crate4005Items,
  },
  {
    id: "crate-4009",
    name: "Winter Offensive Weapon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frGxZvqX4avxuIabDXDPJxb534uQ-TH-3wk8isGqByIuoIHKRbQRyXpJ2W6dU5a9fuS_R",
    price: 1.5,
    items: crate4009Items,
  },
  {
    id: "crate-4010",
    name: "CS:GO Weapon Case 3",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bji61XxRCKi0JS0pCZYvaCvOPI0eaHKWjGVmbovs7ZrHH_nl0oj5mXSzNqqdS7BaAc-SswnOWLoN2Y",
    price: 1.5,
    items: crate4010Items,
  },
  {
    id: "crate-4011",
    name: "Operation Phoenix Weapon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr2wPtqP5PKVvJPSQDWSSl7sn6eMxHC3hwhl3sDuDztivJHrEagJzWZd3W6dU5fXcT7oM",
    price: 1.5,
    items: crate4011Items,
  },
  {
    id: "crate-4017",
    name: "Huntsman Weapon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frmxY6qr9OqU0cvbKCGTDk7dys7k-S36yzU114GrRmNaoeSmXaVV0WJp0W6dU5Q_KKWwm",
    price: 1.5,
    items: crate4017Items,
  },
  {
    id: "crate-4018",
    name: "Operation Breakout Weapon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fqWxdv_b8O_w5eKXBWWXHw-smtrBvTHDmwEsl4jvWn4z_I3qWZwV1X5ZwW6dU5RcRF1o0",
    price: 1.5,
    items: crate4018Items,
  },
  {
    id: "crate-4019",
    name: "eSports 2014 Summer Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bjx-UnoUwniocSwrHZk_OejZaF_bvXGWT6Vkughs-A5H321kUQl5myEm9__dHKQaw8gWZtzQ7VYu0a-lYf5d7S1qrUfUsY",
    price: 1.5,
    items: crate4019Items,
  },
  {
    id: "crate-4029",
    name: "Operation Vanguard Weapon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fqGwPtvP9MKA_JKOSCGGWmL8useQ6TXywwB8k4T-EyImgeCmXbA4oAsRzW6dU5QwRm5UL",
    price: 1.5,
    items: crate4029Items,
  },
  {
    id: "crate-4061",
    name: "Chroma Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fq2wP7qr6bqI5cvHDCzfBlbcv57JqF3zrxRkj4W6Dwo34dy6QPQAoC5ZyW6dU5cxvklfG",
    price: 1.5,
    items: crate4061Items,
  },
  {
    id: "crate-4089",
    name: "Chroma 2 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fqmwOuKD2PqI6caDBWDeUkO8uteM9SnDglklw6miEn9j6IHKfblNxA5pxW6dU5UH4LtBe",
    price: 1.5,
    items: crate4089Items,
  },
  {
    id: "crate-4091",
    name: "Falchion Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fpWwI7Pb-P6Y5dvPEDGSSlrsh57U8HHHiwx5yt2-Dwo7_JSnCOw8oCJF0W6dU5dgrLNA1",
    price: 1.5,
    items: crate4091Items,
  },
  {
    id: "crate-4138",
    name: "Shadow Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fpGxet6H-O_Q6dfXCDzfJl7ci6bZoG3zjx0xz4ziEztj8IiiRa1QkWZdwW6dU5RegDbP-",
    price: 1.5,
    items: crate4138Items,
  },
  {
    id: "crate-4186",
    name: "Revolver Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHIV7qWvOqE9IqSVWGKVlu8v6eM7Girmxkwl4TnWmIv8J36WagEiCpImQvlK7EclOzxxiQ",
    price: 1.5,
    items: crate4186Items,
  },
  {
    id: "crate-4187",
    name: "Operation Wildfire Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHMVu6r9MaA6ePPAWjbGwrwm47dtTnu2kUl14mzUnomudnqQaQ4iApF5TPlK7Ee3MsZV-w",
    price: 1.5,
    items: crate4187Items,
  },
  {
    id: "crate-4233",
    name: "Chroma 3 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHAVuKf7PaJucPLHW2TExb9z4OdvHirixEomtW7cyduvci2VZ1AiCsR2Q_lK7EdW_VBhrw",
    price: 1.5,
    items: crate4233Items,
  },
  {
    id: "crate-4236",
    name: "Gamma Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHEVtvP5bPZrd6XECmOSxe0v4bRoTnnjwBkitWrRm4yoeX3GagMnCZZ2FPlK7EcEv22BnQ",
    price: 1.5,
    items: crate4236Items,
  },
  {
    id: "crate-4281",
    name: "Gamma 2 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bjz61TqQCKj0JfipHMN7aX2bfM9eaPDXT7Glbx1s7Y8HHHnw0sltWXSmYmqcH-UaAU-Sswn_16VNj0",
    price: 1.5,
    items: crate4281Items,
  },
  {
    id: "crate-4288",
    name: "Glove Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHcVuPaoafU1JqiVWWSVkux15OQ8Giiylk0k5mvTnIqpd3PCaQIhWMYkE_lK7EcNeCKW-w",
    price: 1.5,
    items: crate4288Items,
  },
  {
    id: "crate-4351",
    name: "Spectrum Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHQV7qCra_JscqPGCzLCl78ktuAxHSzmzUh_sjvWzdqoI33CaQF2DscjR_lK7EeF3oM7TA",
    price: 1.5,
    items: crate4351Items,
  },
  {
    id: "crate-4352",
    name: "Operation Hydra Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHUVt_b6PfY1JfOSXDXJxbgjtLFqHnDqx0Qmtm_Vzdf4ICmUZlJ2C5F2TPlK7EdjN0FcPg",
    price: 1.5,
    items: crate4352Items,
  },
  {
    id: "crate-4403",
    name: "Spectrum 2 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHoVu6D7PaA0JaDACjKUwOom47VrTSzrw0Vx4W_Sydz9JC7FZgckCZYjRPlK7EcPuDAQzw",
    price: 1.5,
    items: crate4403Items,
  },
  {
    id: "crate-4471",
    name: "Clutch Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHsVtqr8a_dsdKTAWDWVxLgjsrAwHSvgwEQk4m-ByYuqIC2eO1VyD5QiR_lK7EcxQQPYQA",
    price: 1.5,
    items: crate4471Items,
  },
  {
    id: "crate-4482",
    name: "Horizon Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3IV6vSrbfw8eaiWCjWVkewgseM9TXyxl0wi6mSHn9-tIHqUbg5yDpEmEPlK7EcXFmSLsw",
    price: 1.5,
    items: crate4482Items,
  },
  {
    id: "crate-4548",
    name: "Danger Zone Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3MVv_H4a6FucPPBWjDIkbdz4rg4Syyyxxsi5mzRntuvJCqVbwAgDZBwRPlK7EcZJ5GkQA",
    price: 1.5,
    items: crate4548Items,
  },
  {
    id: "crate-4598",
    name: "Prisma Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3AV6aD8O6BpdKKQVmPEwr1zs-c8Tnngl09w52zTmY2sc3jBag8jXpohE_lK7Ede7E2Kfw",
    price: 1.5,
    items: crate4598Items,
  },
  {
    id: "crate-4620",
    name: "Shattered Web Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3EVvKD6MKU_cKPKXWHFxLkls7FsSnDqwUl_sWTczoqheHifbwMmD5F1RvlK7Ec_KL6Q_A",
    price: 1.5,
    items: crate4620Items,
  },
  {
    id: "crate-4669",
    name: "CS20 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3YVvfD9aqVveKaQDDKSl7134bg_HH3hlBty6z7Vn9v6eXmeZgBxWJd0EflK7Efs4hZiKQ",
    price: 1.5,
    items: crate4669Items,
  },
  {
    id: "crate-4695",
    name: "Prisma 2 Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3cV6vT9avBvefWWDDGTxbZ14rhsTX7qkE90sDiHwt2pdC-TblJ2DsB1QPlK7Ee9riHKAA",
    price: 1.5,
    items: crate4695Items,
  },
  {
    id: "crate-4698",
    name: "Fracture Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3QV7aD7OP01IfbGDzPCmbsm4LU5GnvkzUsi4WvUmIqtci_CPQNyApsjE_lK7EfrhW545A",
    price: 1.5,
    items: crate4698Items,
  },
  {
    id: "crate-4717",
    name: "Operation Broken Fang Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3UVu6P-MPQ0dKbCVzLGx7wgtbM6S3jhw0V25m-EnNj7JS7GaQ4nD8QiRflK7EfH0YGFHg",
    price: 1.5,
    items: crate4717Items,
  },
  {
    id: "crate-4747",
    name: "Snakebite Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3oVvvT4bfI4dvTLCGTCmLl16ec7TX_mk08k42iHwtqscy-WPVUmCZJ4R_lK7Ed8Q6OYtw",
    price: 1.5,
    items: crate4747Items,
  },
  {
    id: "crate-4790",
    name: "Operation Riptide Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3sVtvD2O_Q9dqfEXTWSlepz4bA5THnikx915z6BytmuIHiXaAdyDpEhTflK7EdW-TaRMg",
    price: 1.5,
    items: crate4790Items,
  },
  {
    id: "crate-4818",
    name: "Dreams & Nightmares Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnIV7Kb5OaU-JqfHDzXFle0u4LY8Gy_kkRgisGzcm4v4J3vDOAQmDMdyRvlK7EcmeCU3yw",
    price: 1.5,
    items: crate4818Items,
  },
  {
    id: "crate-4846",
    name: "Recoil Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnMVu6b-avA-JqSSCjSWwuhz47U9TCzlxh9yt2WGnNqgIi-fbgUkWMNxFPlK7EdIJF6a2Q",
    price: 1.5,
    items: crate4846Items,
  },
  {
    id: "crate-4880",
    name: "Revolution Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnAVvfb6aqduc_TFVjTCxbx05OU4S3jilE9w4DzRnImtIy2Sa1JzDJEhRPlK7EcO4U8gfA",
    price: 1.5,
    items: crate4880Items,
  },
  {
    id: "crate-4904",
    name: "Kilowatt Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnEVvqf_a6VoIfGSXz7Hlbwg57QwSS_mxhl15jiGyN37c3_GZw91W8BwRflK7EfKsa2sfw",
    price: 1.5,
    items: crate4904Items,
  },
  {
    id: "crate-7003",
    name: "Gallery Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnYVuPD5baE6IfTFCmSRme0j5eU5SXrjkRwmt2rWnoqhdnjEPQQiDpRxTflK7EePRV2-Kg",
    price: 1.5,
    items: crate7003Items,
  },
  {
    id: "crate-7007",
    name: "Fever Case",
    image: "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frncVtqv7MPE8JaHHCj_Dl-wk4-NtFirikURy4jiGwo2udHqVaAEjDZp3EflK7EeSMnMs4w",
    price: 1.5,
    items: crate7007Items,
  },
];

export const CASES: Case[] = RAW_CASES.map(c => ({
  ...c,
  items: [
    ...c.items.filter(i => i.rarity !== 'Rare Special Item'),
    ...KNIVES.map((k, i) => ({
      id: `knife-${c.id}-${i}`,
      weapon: k.name,
      name: "Vanilla",
      rarity: "Rare Special Item" as Rarity,
      image: k.url,
      collection: c.name
    }))
  ]
}));
