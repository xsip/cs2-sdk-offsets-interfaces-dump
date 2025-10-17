#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"
#include "GameTime_t.hpp"

class CCSGameModeRules_Deathmatch {
    char _vtable_pad_244[0x8];
    CNetworkVarChainer __m_pChainEntity;
    GameTime_t m_flDMBonusStartTime;
    float32 m_flDMBonusTimeLength;
    CUtlString m_sDMBonusWeapon;
};
