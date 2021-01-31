export default {
    "welcome": {
        "dialogue": [
            ["Come closer.", "Take hold of me, and wield true power!"]
        ],
    },
    "sword1": {
        "dialogue": [
            ["My true strength lies dormant.", "Seek the shards of dawn to reclaim my edge."]
        ]
    },
    "...": {
        "dialogue": [
            ["..."]
        ]
    },
    "test": {
        "dialogue": [
            ["Take caution, seeker.", "This land knows peace, but feral beasts still roam these woods."],
            ["Reclaim my power from them."],
            ["They know not the true nature of these trinkets,", "but they guard them with their life."]
        ],
    },
    "finalshard": {
        "dialogue": [
            ["You have reclaimed my full strength!", "I thank you, seeker."],
            ["You must now return me to the pedestal from which you found me..."],
        ],
    },
    "sword2": {
        "dialogue": [
            ["... I shall rest here."],
            ["My strength is of no use during these times of peace.", "It is my fate to lie dormant, lost to time..."],
            ["But one day, a courageous warrior will take up my", "blade and wield my true power against the foes of darkness."],
            ["They will have your stewardship to thank at such time."],
            // {"type": "pause"},
            ["Thank you, brave wanderer."]
        ],
        "goto": "CreditsScreen" // THIS SHOULD BE ANOTHER SCRIPT NODE
    },
}
