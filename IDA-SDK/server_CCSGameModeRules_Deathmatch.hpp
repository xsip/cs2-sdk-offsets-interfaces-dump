#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSGameModeRules_Deathmatch {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    entity2_GameTime_t m_flDMBonusStartTime;
    float32 m_flDMBonusTimeLength;
    CUtlString m_sDMBonusWeapon;
    char end_pad_3348[0x48];
};
