#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "client_CSMatchStats_t.hpp"

class client_CCSPlayerController_ActionTrackingServices {
    char vTable854[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_855[0x10];
    char m_perRoundStats[0x68];
    client_CSMatchStats_t m_matchStats;
    int32_t m_iNumRoundKills;
    int32_t m_iNumRoundKillsHeadshots;
    float32 m_flTotalRoundDamageDealt;
    char end_pad_853[0x4];
};
