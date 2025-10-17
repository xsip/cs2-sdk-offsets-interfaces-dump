#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class client_CCSGameModeRules_Deathmatch {
    char vTable807[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    entity2_GameTime_t m_flDMBonusStartTime;
    float32 m_flDMBonusTimeLength;
    CUtlString m_sDMBonusWeapon;
};
