#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"
#include "CSMatchStats_t.hpp"

class CCSPlayerController_ActionTrackingServices {
    char _vtable_pad_291[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_292[0x10];
    char m_perRoundStats[0x68];
    CSMatchStats_t m_matchStats;
    int32_t m_iNumRoundKills;
    int32_t m_iNumRoundKillsHeadshots;
    float32 m_flTotalRoundDamageDealt;
    char end_pad_290[0x4];
};
