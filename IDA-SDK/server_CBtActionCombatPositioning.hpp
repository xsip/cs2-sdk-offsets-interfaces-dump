#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"

class server_CBtActionCombatPositioning {
    char pad_2721[0x58];
    char vTable3160[0x10];
    CUtlString m_szSensorInputKey;
    char pad_3161[0x10];
    CUtlString m_szIsAttackingKey;
    server_CountdownTimer m_ActionTimer;
    bool m_bCrouching;
    char end_pad_3162[0xf];
};
