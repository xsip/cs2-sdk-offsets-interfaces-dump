#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"

class server_CBtActionCombatPositioning {
    char pad_2818[0x58];
    void **__vftable_0;
    void **__vftable_1;
    CUtlString m_szSensorInputKey;
    char pad_3287[0x10];
    CUtlString m_szIsAttackingKey;
    server_CountdownTimer m_ActionTimer;
    bool m_bCrouching;
    char end_pad_3288[0xf];
};
